import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { NexusEnvio } from "../../models/nexus-envio";
import { NexusResposta } from "../../models/nexus-resposta";
import { Observable, take } from "rxjs";
import { AuthService } from "../../../login/auth/auth.service";
import { SessaoService } from "../sessao/sessao.service";

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

    obterTudo(pagina: number): Observable<O[]> {
        const params = new HttpParams()
            .set('pagina', pagina.toString());

        return this.http.get<O[]>(this.url, { params: params, headers: this.header })
            .pipe(take(1));
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