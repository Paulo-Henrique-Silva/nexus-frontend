import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MensagensValidacaoService } from '../services/mensagens-validacao/mensagens-validacao.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import 'moment/locale/pt-br';
import { ReferenciaObjeto } from '../models/referencia-objeto';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMM YYYY',
  },
};

@Component({
  selector: 'nexus-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ]
})
export class FormularioComponent {
  @Input()
  formulario: FormGroup

  @Input()
  camposMostrarComo: string[];

  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];
  
  constructor(
    private formBuilder: FormBuilder,
    private mensagemValidacaoService: MensagensValidacaoService
    ) {
      this.formulario = this.formBuilder.group({ })
      this.camposMostrarComo = []
      this.filteredOptions = this.options.slice();
    }
    
  obterMensagemErro(nomeCampo: string): string {
      const campo = this.formulario.get(nomeCampo)
      
      //se o campo não existe, retorna nada.
      if (!campo) {
        throw new Error('Campo não existe.')
      }
      
      return this.mensagemValidacaoService.obterMensagem(campo)
  }
    
  filter(nomeCampo: string): void {
    const campoValor = this.formulario.get(nomeCampo)?.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(campoValor));
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
      
      //Como apenas os campos de number podem ser null, ele retorna number para manter o campo ativo.
      if (valor == null) {
        return 'number'
      }

      //se não for um obj, retorna o tipo primitivo em questão.
      if (!(valor instanceof Object)) {
        return typeof valor
      }

      if (valor instanceof Date || !isNaN(valor)) {
        return 'date'
      }

      if (valor instanceof ReferenciaObjeto) {
        return 'referencia-obj'
      }
    }

    return '';
  }
}
