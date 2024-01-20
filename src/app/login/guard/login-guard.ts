import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { inject } from "@angular/core";
import { Observable } from "rxjs";

export const canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean> | boolean => {

    const authService = inject(AuthService)
    const router = inject(Router)

/*     //Logica para decidir se pode ser ativada
    if (authService.usuarioEstaAutenticado) {
        return true
    }
 */
    router.navigate(['login'])
    return false
};
