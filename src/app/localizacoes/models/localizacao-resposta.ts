import { NexusResposta } from "../../compartilhado/models/dtos/nexus-resposta"
import { NexusReferenciaObjeto } from "../../compartilhado/models/dtos/nexus-referencia-objeto"

export class LocalizacaoResposta extends NexusResposta {
    projeto: NexusReferenciaObjeto = new NexusReferenciaObjeto()
}