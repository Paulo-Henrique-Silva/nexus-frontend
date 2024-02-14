import { NexusEnvio } from "../../compartilhado/models/dtos/nexus-envio";

export class AtribuicaoEnvio extends NexusEnvio {
    public usuarioUID: string = ''

    public tipo: number = 0
    
    public dataVencimento: Date = new Date();

    public concluida: boolean = false;

    public objetoUID: string = '';

    public projetoUID: string = '';
}