import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { NexusEnvio } from "../../models/nexus-envio";
import { NexusResposta } from "../../models/nexus-resposta";
import { Observable, take } from "rxjs";
import { AuthService } from "../../../login/auth/auth.service";
import { UsuarioSessaoService } from "../usuario-sessao/usuario-sessao.service";

//T - Envio
//O - Resposta
export class NexusService<T extends NexusEnvio, O extends NexusResposta> {
    protected url: string = ''
    protected header: HttpHeaders = new HttpHeaders();

    constructor(
        protected http: HttpClient, 
        protected usuarioSessaoService: UsuarioSessaoService,
        url: string) { 

        this.url = url;
    }

    obterPorUID(uid: string): Observable<O> {
        this.header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.usuarioSessaoService.token}`,
        });

        return this.http.get<O>(this.url + '/' + uid, { headers: this.header }).pipe(take(1))
    }

    obterTudo(pagina: number): Observable<O[]> {
        this.header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.usuarioSessaoService.token}`,
        });

        const params = new HttpParams()
            .set('parametro2', pagina.toString());

        return this.http.get<O[]>(this.url, { params: params }).pipe(take(1))
    }

    adicionar(envio: T): Observable<O> {
        this.header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.usuarioSessaoService.token}`,
        });

        return this.http.post<O>(this.url, envio).pipe(take(1))
    }

    editar(uid: string, envio: T): Observable<O> {
        this.header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.usuarioSessaoService.token}`,
        });

        return this.http.put<O>(this.url + '/' + uid, envio).pipe(take(1))
    }

    deletar(uid: string): void {
        this.header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.usuarioSessaoService.token}`,
        });
        
        this.http.delete<O>(this.url + '/' + uid).pipe(take(1))
    }
}