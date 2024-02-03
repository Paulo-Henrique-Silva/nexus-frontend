import { NexusResposta } from "../../compartilhado/models/nexus-resposta"
import { ReferenciaObjeto } from "../../compartilhado/models/referencia-objeto"

export class ComponenteResposta extends NexusResposta {
    projeto: ReferenciaObjeto = new ReferenciaObjeto()
}