import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
//Retorna as mensagens de validação de form em toda a aplicação.
export class MensagensValidacaoService {

  constructor() { }

  obterMensagem(control: AbstractControl): string {
    if (control.hasError('required')) {
      return 'O campo é obrigatório.';
    }

    if (control.hasError('campoIgual')) {
      return 'Os campos devem ter valores iguais.';
    }

    if (control.hasError('maxlength')) {
      return 'O campo ultrapassa o limite de caracteres.';
    }

    return ''
  }
}
