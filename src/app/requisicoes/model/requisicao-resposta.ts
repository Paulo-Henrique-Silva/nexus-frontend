import { NexusResposta } from "../../compartilhado/models/nexus-resposta"
import { ReferenciaObjeto } from "../../compartilhado/models/referencia-objeto"

export class RequisicaoResposta extends NexusResposta {
    projeto: ReferenciaObjeto = new ReferenciaObjeto();

    coordenador: ReferenciaObjeto = new ReferenciaObjeto();
}