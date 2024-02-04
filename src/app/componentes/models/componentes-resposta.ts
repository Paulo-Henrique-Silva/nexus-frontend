import { NexusResposta } from "../../compartilhado/models/nexus-resposta"
import { ReferenciaObjeto } from "../../compartilhado/models/referencia-objeto"

export class ComponenteResposta extends NexusResposta {
    numeroSerie: string = '';

    localizacao: ReferenciaObjeto = new ReferenciaObjeto();

    status: number = -1;

    marca: string = '';

    modelo: string = '';

    projeto: ReferenciaObjeto = new ReferenciaObjeto();

    tipo: number = -1;

    dataAquisicao: Date = new Date();
}