import { NexusResposta } from "../../compartilhado/models/nexus-resposta";
import { ReferenciaObjeto } from "../../compartilhado/models/referencia-objeto";

export class NotificacaoResposta extends NexusResposta {
    public usuario: ReferenciaObjeto = new ReferenciaObjeto()
    
    public vista: boolean = false
}