import { ReferenciaObjeto } from "../../compartilhado/referencia-objeto";

export class Usuario {
    constructor(
        public UID: string,
        public nome: string,
        public descricao: string,
        public nomeAcesso: string,
        public senha: string,
        public token: string,
        public dataUltimaAtualizacao: Date,
        public atualizadoPor: ReferenciaObjeto,
        public usuarioCriador: ReferenciaObjeto,
        public dataCriacao: Date
    ){}
}