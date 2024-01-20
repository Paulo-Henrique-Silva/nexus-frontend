import { NexusEnvio } from "../../compartilhado/nexus-envio";

export class AtribuicaoEnvio extends NexusEnvio {
    public usuarioUID: string = ''

    public tipoAtribuicao: number = 0
    
    public dataVencimento: Date = new Date();

    public concluida: boolean = false

    public cicloVidaUID: string = ''
}