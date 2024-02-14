import { inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { SessaoService } from "../../compartilhado/services/sessao/sessao.service";

export const conferirAtribuicao: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean> | boolean => {
    const sessaoService = inject(SessaoService);
    const snackBar = inject(MatSnackBar);

    if (!sessaoService.perfilSelecionado.nome.includes('Leitor')) {
        return true;
    }

    snackBar.open('Você não tem autorização para acessar esse contéudo.', 'Ok')
            ._dismissAfter(3000);
    return false;
};