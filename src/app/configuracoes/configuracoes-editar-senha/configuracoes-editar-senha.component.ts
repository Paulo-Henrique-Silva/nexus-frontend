import { Component } from '@angular/core';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/usuario-sessao/sessao.service';
import { AuthService } from '../../login/auth/auth.service';
import { UsuariosService } from '../../login/usuarios.service';
import { UsuarioEnvio } from '../../login/models/usuario-envio';

@Component({
  selector: 'app-configuracoes-editar-senha',
  templateUrl: './configuracoes-editar-senha.component.html',
  styleUrl: './configuracoes-editar-senha.component.scss'
})
export class ConfiguracoesEditarSenhaComponent extends NexusFormulario {
  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    private usuarioService: UsuariosService
    ) {
      super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
        snackBar, sessaoService);
        
        this.formulario = this.formBuilder.group({
          senhaAtual: ['', [Validators.required]],
          senhaNova: ['', [Validators.required]],
          confirmacaoSenhaNova: ['', [Validators.required]]
        },
        {
          validator: this.camposIguaisValidator('senhaNova', 'confirmacaoSenhaNova')
        });
      }

  override onSubmit(): void {
    const senhaAtual = this.formulario.get('senhaAtual')?.value;
    const senhaNova = this.formulario.get('senhaNova')?.value;

    const usuarioEnvio = new UsuarioEnvio();
    usuarioEnvio.senha = senhaAtual;
    
    this.usuarioService.confirmarSenha(usuarioEnvio)
      .subscribe({ next: (senhaCorreta) => {
        if (senhaCorreta) {
          usuarioEnvio.senha = senhaNova;

          this.usuarioService.editar(this.usuarioSessaoService.uidUsuario, usuarioEnvio)
            .subscribe({ 
              next: () => {
                this.mostrarSnackBarOk('Senha alterada com sucesso!');
                this.router.navigate(['/configuracoes/usuario-detalhes']);
              },
              error: () => {
                this.mostrarSnackBarOk('Não foi possível atualizar a senha.');
              }});
        }
        else {
          this.mostrarSnackBarOk('Senha atual incorreta!');
        }
      },
      error: () => {
        this.mostrarSnackBarOk('Não foi possível atualizar a senha.');
      }});

    this.formulario.reset();
  }

  //Retorna se os campos possuem valores iguais ou não.
  camposIguaisValidator(campo1: string, campo2: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const valorCampo1 = formGroup.get(campo1)?.value;
      const valorCampo2 = formGroup.get(campo2)?.value;
  
      if (valorCampo1 != valorCampo2) {
        formGroup.get(campo2)?.setErrors({ campoIgual: true });
        return { campoIgual: true };
      } else {
        formGroup.get(campo2)?.setErrors(null);
        return null;
      }
    };
  }
}
