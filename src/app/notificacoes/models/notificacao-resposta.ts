import { NexusResposta } from "../../compartilhado/nexus-resposta";
import { ReferenciaObjeto } from "../../compartilhado/referencia-objeto";

export class NotificacaoResposta extends NexusResposta {
    public usuario: ReferenciaObjeto = new ReferenciaObjeto()
    
    public vista: boolean = false
}