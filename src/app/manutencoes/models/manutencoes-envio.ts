import { NexusEnvio } from "../../compartilhado/models/nexus-envio"

export class ManutencaoEnvio extends NexusEnvio {
    componenteUID: string = '';

    projetoUID: string = '';

    dataInicio: Date = new Date();

    dataTermino: Date | null = null;

    responsavelUID: string = '';

    solucao: string | null = null;
}