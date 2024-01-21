import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

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

    return ''
  }
}
