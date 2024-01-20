import { ReferenciaObjeto } from "../compartilhado/referencia-objeto";

export class Notificacao {
    constructor(
        public UID: string,
        public nome: string,
        public descricao: string,
        public usuario: ReferenciaObjeto,
        public vista: boolean,
        public dataUltimaAtualizacao: Date,
        public atualizadoPor: ReferenciaObjeto,
        public usuarioCriador: ReferenciaObjeto,
        public dataCriacao: Date
    ){}
}