import { NexusResposta } from "../../compartilhado/models/nexus-resposta"
import { ReferenciaObjeto } from "../../compartilhado/models/referencia-objeto"

export class ManutencaoResposta extends NexusResposta {
    componente: ReferenciaObjeto = new ReferenciaObjeto();

    projeto: ReferenciaObjeto = new ReferenciaObjeto();

    dataInicio: Date = new Date();

    dataTermino: Date = new Date();

    responsavel: ReferenciaObjeto = new ReferenciaObjeto();

    solucao: string = '';
}