import { NexusReferenciaObjeto } from "./nexus-referencia-objeto";

export class NexusResposta {
    public uid: string = ''

    public nome: string = ''

    public descricao: string = ''

    public dataUltimaAtualizacao: Date | null = new Date();

    public atualizadoPor: NexusReferenciaObjeto | null = new NexusReferenciaObjeto()

    public usuarioCriador: NexusReferenciaObjeto = new NexusReferenciaObjeto()

    public dataCriacao: Date  = new Date();
}