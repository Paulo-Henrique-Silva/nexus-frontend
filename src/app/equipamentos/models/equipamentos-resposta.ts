import { NexusResposta } from "../../compartilhado/models/dtos/nexus-resposta"
import { NexusReferenciaObjeto } from "../../compartilhado/models/dtos/nexus-referencia-objeto"

export class EquipamentoResposta extends NexusResposta {
    numeroSerie: string = '';

    localizacao: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    componente: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    marca: string = '';

    modelo: string = '';

    projeto: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    tipo: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    dataAquisicao: Date = new Date();
}