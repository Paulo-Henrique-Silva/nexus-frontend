import { NexusResposta } from "../../compartilhado/models/nexus-resposta"
import { ReferenciaObjeto } from "../../compartilhado/models/referencia-objeto"

export class SoftwareResposta extends NexusResposta {
    componente: ReferenciaObjeto = new ReferenciaObjeto();

    projeto: ReferenciaObjeto = new ReferenciaObjeto();

    chaveLicenca: string = '';

    dataVencimento: Date = new Date();
}