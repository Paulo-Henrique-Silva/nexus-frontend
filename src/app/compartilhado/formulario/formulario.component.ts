import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MensagensValidacaoService } from '../services/mensagens-validacao/mensagens-validacao.service';

@Component({
  selector: 'nexus-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  @Input()
  formulario: FormGroup

  @Input()
  camposMostrarComo: string[];

  constructor(
    private formBuilder: FormBuilder,
    private mensagemValidacaoService: MensagensValidacaoService
  ) {
    this.formulario = this.formBuilder.group({ })

    this.camposMostrarComo = []
  }

  obterMensagemErro(nomeCampo: string): string {
    const campo = this.formulario.get(nomeCampo)

    //se o campo não existe, retorna nada.
    if (!campo) {
      throw new Error('Campo não existe.')
    }

    return this.mensagemValidacaoService.obterMensagem(campo)
  }

  obterCampos() : string[] {
    return Object.keys(this.formulario.controls);
  }
  
  campoInvalido(nomeCampo: string): boolean {
    const campo = this.formulario.get(nomeCampo)

    if (!campo) {
      throw new Error('Campo não existe.')
    }

    return campo.invalid
  }
}
