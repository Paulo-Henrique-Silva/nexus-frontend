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

}