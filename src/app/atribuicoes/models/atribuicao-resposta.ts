import { NexusResposta } from "../../compartilhado/models/nexus-resposta";
import { NexusReferenciaObjeto } from "../../compartilhado/models/nexus-referencia-objeto";

export class AtribuicaoResposta extends NexusResposta {
    public usuario: NexusReferenciaObjeto = new NexusReferenciaObjeto();

    public tipo: NexusReferenciaObjeto = new NexusReferenciaObjeto();
    
    public dataVencimento: Date = new Date();

    public concluida: boolean = false;

    public cicloVida: NexusReferenciaObjeto = new NexusReferenciaObjeto();
}