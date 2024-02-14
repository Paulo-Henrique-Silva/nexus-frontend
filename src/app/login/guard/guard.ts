import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { CanDeactivateFormulario } from "./can-deactivate-formulario";

export const conferirAutenticacao: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean> | boolean => {
    const authService = inject(AuthService);
    const router = inject(Router);

    //Se o login for bem sucedido, deixa entrar na rota.
    //senão, volta para o login.
    if (authService.loginSucedido) {
        return true;
    }
 
    router.navigate(['login'])
    return false;
};

//verifica se pode sair da rota.
export const sairFormulario: CanDeactivateFn<CanDeactivateFormulario> = (
    component: CanDeactivateFormulario, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState: RouterStateSnapshot
): Observable<boolean> | boolean => {

    return component.sairFormulario();
}
