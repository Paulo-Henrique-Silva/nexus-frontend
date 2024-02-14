import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";
import { SessaoService } from "../../compartilhado/services/sessao/sessao.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SoftwaresService } from "../../softwares/softwares.service";
import { SoftwareResposta } from "../../softwares/models/softwares-resposta";

export const conferirSoftwareAdicionar: CanActivateFn = (
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

export const conferirSoftwareEditar: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean> | boolean => {
    const uid = route.params['uid'];
    const sessaoService = inject(SessaoService);
    const service = inject(SoftwaresService);
    const snackBar = inject(MatSnackBar);

    return service.obterPorUID(uid)
    .pipe(map((Software: SoftwareResposta) => {

        //Se o projeto selecionado não for o mesmo, ou o usuário for leitor
        //não deixa entrar na rota.
        if (Software.projeto.uid === sessaoService.projetoSelecionado.uid &&
            !sessaoService.perfilSelecionado.nome.includes('Leitor')) {
            return true;
        }

        snackBar.open('Você não tem autorização para acessar esse contéudo.', 'Ok')
            ._dismissAfter(3000);

        return false;
    }));
};
