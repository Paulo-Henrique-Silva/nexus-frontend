import { NexusEnvio } from "../../compartilhado/models/dtos/nexus-envio"

export class SoftwareEnvio extends NexusEnvio {
    componenteUID: string = '';

    projetoUID: string = '';

    chaveLicenca: string = '';

    dataVencimento: Date = new Date();
}