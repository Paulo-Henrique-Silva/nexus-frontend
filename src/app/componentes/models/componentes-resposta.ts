import { NexusResposta } from "../../compartilhado/models/nexus-resposta"
import { NexusReferenciaObjeto } from "../../compartilhado/models/nexus-referencia-objeto"

export class ComponenteResposta extends NexusResposta {
    numeroSerie: string = '';

    localizacao: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    status: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    marca: string = '';

    modelo: string = '';

    projeto: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    tipo: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    dataAquisicao: Date = new Date();
}