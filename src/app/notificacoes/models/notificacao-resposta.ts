import { NexusResposta } from "../../compartilhado/models/dtos/nexus-resposta";
import { NexusReferenciaObjeto } from "../../compartilhado/models/dtos/nexus-referencia-objeto";

export class NotificacaoResposta extends NexusResposta {
    public usuario: NexusReferenciaObjeto = new NexusReferenciaObjeto()
    
    public vista: boolean = false
}