import { FormGroup, Validators, FormBuilder, AbstractControl, FormControl } from "@angular/forms"
import { Router } from "@angular/router"
import { AuthService } from "../../login/auth/auth.service"
import { MensagensValidacaoService } from "../services/mensagens-validacao/mensagens-validacao.service"

export abstract class NexusFormulario {
    public formulario: FormGroup = this.formBuilder.group({ })

    public camposMostrarComo: string[] = [ ]
    
    constructor(
      protected authService : AuthService, 
      protected formBuilder: FormBuilder,
      protected router: Router,
      protected mensagemValidacaoService: MensagensValidacaoService
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
    const campo = this.formulario.get(nomeCampo)

    if (!campo) {
      throw new Error('Campo não existe.')
    }

    return campo.invalid
  }
}