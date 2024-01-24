import { NexusResposta } from "../../compartilhado/models/nexus-resposta"
import { ReferenciaObjeto } from "../../compartilhado/models/referencia-objeto"

export class LocalizacaoResposta extends NexusResposta {
    projeto: ReferenciaObjeto = new ReferenciaObjeto()
}