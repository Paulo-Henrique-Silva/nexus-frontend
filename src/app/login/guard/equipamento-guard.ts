import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";
import { SessaoService } from "../../compartilhado/services/sessao/sessao.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EquipamentosService } from "../../equipamentos/equipamentos.service";
import { EquipamentoResposta } from "../../equipamentos/models/equipamentos-resposta";

export const conferirEquipamentoAdicionar: CanActivateFn = (
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

export const conferirEquipamentoEditar: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean> | boolean => {
    const uid = route.params['uid'];
    const sessaoService = inject(SessaoService);
    const service = inject(EquipamentosService);
    const snackBar = inject(MatSnackBar);

    return service.obterPorUID(uid)
    .pipe(map((Equipamento: EquipamentoResposta) => {

        //Se o projeto selecionado não for o mesmo, ou o usuário for leitor
        //não deixa entrar na rota.
        if (Equipamento.projeto.uid === sessaoService.projetoSelecionado.uid &&
            !sessaoService.perfilSelecionado.nome.includes('Leitor')) {
            return true;
        }

        snackBar.open('Você não tem autorização para acessar esse contéudo.', 'Ok')
            ._dismissAfter(3000);

        return false;
    }));
};
