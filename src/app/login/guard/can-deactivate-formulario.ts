import { Observable } from "rxjs";

//Interface para implentar método de canDeactivate em todos os formulários.
export interface CanDeactivateFormulario {
    sairFormulario(): boolean | Observable<boolean>;
}