import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, take } from "rxjs";
import { SessaoService } from "../sessao/sessao.service";
import { NexusIniciarCicloVida } from "../../models/nexus-iniciar-ciclo-vida";

export class NexusCicloVidaService {
    protected url: string = ''

    constructor(
        protected http: HttpClient, 
        protected sessaoService: SessaoService,
        url: string) { 

        this.url = url;
    }

    iniciar(envio: NexusIniciarCicloVida): Observable<void> {
        return this.http.post<void>(this.url + '/Iniciar', envio, 
        { headers: this.header }).pipe(take(1));
    }

    get header(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.sessaoService.token}`,
        });
    }
}