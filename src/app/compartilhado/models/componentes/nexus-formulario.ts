import { FormGroup, Validators, FormBuilder, AbstractControl, FormControl } from "@angular/forms"
import { ActivatedRoute, Router, UrlTree } from "@angular/router"
import { AuthService } from "../../../login/auth/auth.service"
import { MensagensValidacaoService } from "../../services/mensagens-validacao/mensagens-validacao.service"
import { MatSnackBar } from "@angular/material/snack-bar"
import { SessaoService } from "../../services/sessao/sessao.service"
import { Observable, take } from "rxjs"
import { CanDeactivateFormulario } from "../../../login/guard/can-deactivate-formulario"
import { MatDialog } from "@angular/material/dialog"
import { DialogSairFormularioComponent } from "../../dialog-sair-formulario/dialog-sair-formulario.component"

export abstract class NexusFormulario implements CanDeactivateFormulario {
    public formulario: FormGroup = this.formBuilder.group({ });

    public carregando: boolean = false;
    
    constructor(
      protected authService : AuthService, 
      protected formBuilder: FormBuilder,
      protected router: Router,
      protected mensagemValidacaoService: MensagensValidacaoService,
      protected activatedRoute: ActivatedRoute,
      protected snackBar: MatSnackBar,
      protected sessaoService: SessaoService,
      protected dialog: MatDialog
    ) {}
  
    abstract onSubmit(): void

    
  obterMensagemErro(nomeCampo: string): string {
    const campo = this.formulario.get(nomeCampo)
    
    //se o campo não existe, retorna nada.
    if (!campo) {
      throw new Error('Campo não existe.')
    }
    
    return this.mensagemValidacaoService.obterMensagem(campo)
  }
  
  campoInvalido(nomeCampo: string): boolean {
    const campo = this.formulario.get(nomeCampo);

    if (!campo) {
      throw new Error('Campo não existe.');
    }

    return campo.invalid && campo.touched;
  }

  mostrarSnackBarOk(texto: string) {
    this.snackBar.open(texto, 'Ok')._dismissAfter(3000);
  }

  sairFormulario(): boolean | Observable<boolean> {
    if (this.formulario.dirty) {
      const dialogSair = this.dialog.open(DialogSairFormularioComponent);
  
      return dialogSair.afterClosed().pipe(take(1));
    }

    return true;
  };
}