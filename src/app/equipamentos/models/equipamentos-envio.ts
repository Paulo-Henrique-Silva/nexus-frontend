import { NexusEnvio } from "../../compartilhado/models/dtos/nexus-envio"

export class EquipamentoEnvio extends NexusEnvio {
    numeroSerie: string = '';

    componenteUID: string = '';

    marca: string = '';

    modelo: string = '';

    projetoUID: string = '';

    tipo: number = -1;

    dataAquisicao: Date = new Date();

    linkNotaFiscal: string = '';
}