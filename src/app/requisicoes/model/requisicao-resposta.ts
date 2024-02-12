import { NexusResposta } from "../../compartilhado/models/nexus-resposta"
import { NexusReferenciaObjeto } from "../../compartilhado/models/nexus-referencia-objeto"

export class RequisicaoResposta extends NexusResposta {
    projeto: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    coordenador: NexusReferenciaObjeto = new NexusReferenciaObjeto();
}