import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";
import { SessaoService } from "../../compartilhado/services/sessao/sessao.service";
import { LocalizacoesService } from "../../localizacoes/localizacoes.service";
import { LocalizacaoResposta } from "../../localizacoes/models/localizacao-resposta";
import { MatSnackBar } from "@angular/material/snack-bar";

export const conferirLocalizacaoAdicionar: CanActivateFn = (
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

export const conferirLocalizacaoEditar: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean> | boolean => {
    const uid = route.params['uid'];
    const sessaoService = inject(SessaoService);
    const service = inject(LocalizacoesService);
    const snackBar = inject(MatSnackBar);

    return service.obterPorUID(uid)
    .pipe(map((localizacao: LocalizacaoResposta) => {

        //Se o projeto selecionado não for o mesmo, ou o usuário for leitor
        //não deixa entrar na rota.
        if (localizacao.projeto.uid === sessaoService.projetoSelecionado.uid &&
            !sessaoService.perfilSelecionado.nome.includes('Leitor')) {
            return true;
        }

        snackBar.open('Você não tem autorização para acessar esse contéudo.', 'Ok')
            ._dismissAfter(3000);

        return false;
    }));
};
