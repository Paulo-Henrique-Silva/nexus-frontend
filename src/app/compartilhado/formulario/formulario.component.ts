import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MensagensValidacaoService } from '../services/mensagens-validacao/mensagens-validacao.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'nexus-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
  providers: [
  ],
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

  obterTipo(controle: AbstractControl | null): string {
    if (controle instanceof FormControl) {
      const valor = controle.value;

      if (valor instanceof Date) {
        return 'date'
      }

      return typeof valor;
    }

    return '';
  }
}
