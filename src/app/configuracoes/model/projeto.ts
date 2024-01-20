import { ReferenciaObjeto } from "../../compartilhado/referencia-objeto";

export class Projeto {
    constructor(
        public UID: string,
        public nome: string,
        public descricao: string,
        public dataUltimaAtualizacao: Date,
        public atualizadoPor: ReferenciaObjeto,
        public usuarioCriador: ReferenciaObjeto,
        public dataCriacao: Date
    ){}
}