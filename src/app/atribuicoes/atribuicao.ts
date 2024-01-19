import { ReferenciaObjeto } from "../compartilhado/referencia-objeto";

export class Atribuicao {
    constructor(
        public UID: string,
        public nome: string,
        public descricao: string,
        public usuario: ReferenciaObjeto,
        public tipoAtribuicao: number,
        public dataVencimento: Date,
        public concluida: boolean,
        public cicloVida: ReferenciaObjeto,
        public dataUltimaAtualizacao: Date,
        public atualizadoPor: ReferenciaObjeto,
        public usuarioCriador: ReferenciaObjeto,
        public dataCriacao: Date
    ) { }
}