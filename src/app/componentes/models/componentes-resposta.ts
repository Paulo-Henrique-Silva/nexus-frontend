import { NexusResposta } from "../../compartilhado/models/nexus-resposta"
import { ReferenciaObjeto } from "../../compartilhado/models/referencia-objeto"

export class ComponenteResposta extends NexusResposta {
    numeroSerie: string = '';

    localizacao: ReferenciaObjeto = new ReferenciaObjeto();

    status: ReferenciaObjeto = new ReferenciaObjeto();

    marca: string = '';

    modelo: string = '';

    projeto: ReferenciaObjeto = new ReferenciaObjeto();

    tipo: ReferenciaObjeto = new ReferenciaObjeto();

    dataAquisicao: Date = new Date();
}