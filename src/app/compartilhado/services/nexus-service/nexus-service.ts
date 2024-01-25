import { HttpClient, HttpParams } from "@angular/common/http";
import { NexusEnvio } from "../../models/nexus-envio";
import { NexusResposta } from "../../models/nexus-resposta";
import { Observable, take } from "rxjs";

//T - Envio
//O - Resposta
export class NexusService<T extends NexusEnvio, O extends NexusResposta> {
    url: string = ''
    
    constructor(protected http: HttpClient, url: string) { 
        this.url = url;
    }

    obterPorUID(uid: string): Observable<O> {
        return this.http.get<O>(this.url + '/' + uid).pipe(take(1))
    }

    obterTudo(pagina: number): Observable<O[]> {
        let params = new HttpParams()
            .set('parametro2', pagina.toString());

        return this.http.get<O[]>(this.url, { params: params }).pipe(take(1))
    }

    adicionar(envio: T): Observable<O> {
        return this.http.post<O>(this.url, envio).pipe(take(1))
    }

    editar(uid: string, envio: T): Observable<O> {
        return this.http.put<O>(this.url + '/' + uid, envio).pipe(take(1))
    }

    deletar(uid: string): void {
        this.http.delete<O>(this.url + '/' + uid).pipe(take(1))
    }
}