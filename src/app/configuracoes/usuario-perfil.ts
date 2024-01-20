import { ReferenciaObjeto } from "../compartilhado/referencia-objeto";

export class UsuarioPerfil {
    constructor(
        public usuario: ReferenciaObjeto,
        public projeto: ReferenciaObjeto,
        public perfil: ReferenciaObjeto,
        public ativado: boolean,
        public dataUltimaAtualizacao: Date,
        public atualizadoPor: ReferenciaObjeto,
        public usuarioCriador: ReferenciaObjeto,
        public dataCriacao: Date
    ){}
}