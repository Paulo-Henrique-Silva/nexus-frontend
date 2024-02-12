import { NexusEnvio } from "../../compartilhado/models/dtos/nexus-envio"

export class ComponenteEnvio extends NexusEnvio {
    numeroSerie: string = '';

    localizacaoUID: string = '';

    status: number = -1;

    marca: string = '';

    modelo: string = '';

    projetoUID: string = '';

    tipo: number = -1;

    dataAquisicao: Date = new Date();
}