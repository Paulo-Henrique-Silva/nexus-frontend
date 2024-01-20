import { NexusResposta } from "../../compartilhado/nexus-resposta";
import { ReferenciaObjeto } from "../../compartilhado/referencia-objeto";

export class AtribuicaoResposta extends NexusResposta {
    public usuario: ReferenciaObjeto = new ReferenciaObjeto();

    public tipoAtribuicao: number = 0
    
    public dataVencimento: Date = new Date();

    public concluida: boolean = false

    public cicloVida: ReferenciaObjeto = new ReferenciaObjeto()
}