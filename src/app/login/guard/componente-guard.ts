import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";
import { SessaoService } from "../../compartilhado/services/sessao/sessao.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ComponenteResposta } from "../../componentes/models/componentes-resposta";
import { ComponentesService } from "../../componentes/componentes.service";

export const conferirComponenteAdicionar: CanActivateFn = (
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

export const conferirComponenteEditar: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean> | boolean => {
    const uid = route.params['uid'];
    const sessaoService = inject(SessaoService);
    const service = inject(ComponentesService);
    const snackBar = inject(MatSnackBar);

    return service.obterPorUID(uid)
    .pipe(map((Componente: ComponenteResposta) => {

        //Se o projeto selecionado não for o mesmo, ou o usuário for leitor
        //não deixa entrar na rota.
        if (Componente.projeto.uid === sessaoService.projetoSelecionado.uid &&
            !sessaoService.perfilSelecionado.nome.includes('Leitor')) {
            return true;
        }

        snackBar.open('Você não tem autorização para acessar esse contéudo.', 'Ok')
            ._dismissAfter(3000);

        return false;
    }));
};
