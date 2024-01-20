import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { inject } from "@angular/core";
import { Observable } from "rxjs";

export const conferirAutenticacao: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean> | boolean => {
    const authService = inject(AuthService)
    const router = inject(Router)

    //Se o login for bem sucedido, deixa entrar na rota.
    //senão, volta para o login.
    if (authService.loginSucedido) {
        return true
    }
 
    router.navigate(['login'])
    return false
};
