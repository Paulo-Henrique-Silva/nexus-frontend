import { NexusResposta } from "../../compartilhado/models/nexus-resposta";
import { NexusReferenciaObjeto } from "../../compartilhado/models/nexus-referencia-objeto";

export class NotificacaoResposta extends NexusResposta {
    public usuario: NexusReferenciaObjeto = new NexusReferenciaObjeto()
    
    public vista: boolean = false
}