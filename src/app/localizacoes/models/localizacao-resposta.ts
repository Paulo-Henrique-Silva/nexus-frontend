import { NexusResposta } from "../../compartilhado/models/nexus-resposta"
import { NexusReferenciaObjeto } from "../../compartilhado/models/nexus-referencia-objeto"

export class LocalizacaoResposta extends NexusResposta {
    projeto: NexusReferenciaObjeto = new NexusReferenciaObjeto()
}