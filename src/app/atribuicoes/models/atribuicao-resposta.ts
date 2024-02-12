import { NexusResposta } from "../../compartilhado/models/nexus-resposta";
import { ReferenciaObjeto } from "../../compartilhado/models/referencia-objeto";

export class AtribuicaoResposta extends NexusResposta {
    public usuario: ReferenciaObjeto = new ReferenciaObjeto();

    public tipo: ReferenciaObjeto = new ReferenciaObjeto();
    
    public dataVencimento: Date = new Date();

    public concluida: boolean = false;

    public cicloVida: ReferenciaObjeto = new ReferenciaObjeto();
}