import { NexusEnvio } from "../../compartilhado/models/nexus-envio"

export class EquipamentoEnvio extends NexusEnvio {
    numeroSerie: string = '';

    localizacaoUID: string = '';

    componenteUID: string = '';

    marca: string = '';

    modelo: string = '';

    projetoUID: string = '';

    tipo: number = -1;

    dataAquisicao: Date = new Date();
}