import { NexusResposta } from "../../compartilhado/models/dtos/nexus-resposta"
import { NexusReferenciaObjeto } from "../../compartilhado/models/dtos/nexus-referencia-objeto"

export class ManutencaoResposta extends NexusResposta {
    componente: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    projeto: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    dataInicio: Date = new Date();

    dataTermino: Date = new Date();

    responsavel: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    solucao: string = '';
}