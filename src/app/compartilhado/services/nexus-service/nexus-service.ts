import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { NexusEnvio } from "../../models/dtos/nexus-envio";
import { NexusResposta } from "../../models/dtos/nexus-resposta";
import { Observable, take } from "rxjs";
import { SessaoService } from "../sessao/sessao.service";
import { NexusListaResposta } from "../../models/dtos/nexus-lista-resposta";

//T - Envio
//O - Resposta
export class NexusService<T extends NexusEnvio, O extends NexusResposta> {
    protected url: string = ''

    constructor(
        protected http: HttpClient, 
        protected sessaoService: SessaoService,
        url: string) { 

        this.url = url;
    }

    obterPorUID(uid: string): Observable<O> {
        return this.http.get<O>(this.url + '/' + uid, { headers: this.header }).pipe(take(1));
    }

    obterTudo(pagina: number, nome: string | null = null): Observable<NexusListaResposta<O>> {
        let params;

        if (nome) {
            params = new HttpParams()
                .set('pagina', pagina.toString())
                .set('nome', nome.toString());
        }
        else {
            params = new HttpParams()
                .set('pagina', pagina.toString());
        }

        return this.http.get<NexusListaResposta<O>>(this.url, 
            { params: params, headers: this.header }).pipe(take(1));
    }

    adicionar(envio: T): Observable<O> {
        return this.http.post<O>(this.url, envio, { headers: this.header })
            .pipe(take(1));
    }

    editar(uid: string, envio: T): Observable<O> {
        return this.http.put<O>(this.url + '/' + uid, envio,  { headers: this.header })
            .pipe(take(1));
    }

    deletar(uid: string): Observable<void> {
        return this.http.delete<void>(this.url + '/' + uid, { headers: this.header })
            .pipe(take(1));
    }

    get header(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.sessaoService.token}`,
        });
    }
}