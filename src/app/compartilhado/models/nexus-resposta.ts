import { ReferenciaObjeto } from "./referencia-objeto";

export class NexusResposta {
    public UID: string = ''

    public nome: string = ''

    public descricao: string = ''

    public dataUltimaAtualizacao: Date = new Date();

    public atualizadoPor: ReferenciaObjeto = new ReferenciaObjeto()

    public usuarioCriador: ReferenciaObjeto = new ReferenciaObjeto()

    public dataCriacao: Date  = new Date();
}