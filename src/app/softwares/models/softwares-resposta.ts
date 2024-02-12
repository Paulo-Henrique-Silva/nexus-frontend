import { NexusResposta } from "../../compartilhado/models/nexus-resposta"
import { NexusReferenciaObjeto } from "../../compartilhado/models/nexus-referencia-objeto"

export class SoftwareResposta extends NexusResposta {
    componente: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    projeto: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    chaveLicenca: string = '';

    dataVencimento: Date = new Date();
}