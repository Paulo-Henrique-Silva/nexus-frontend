import { NexusReferenciaObjeto } from "../../../compartilhado/models/dtos/nexus-referencia-objeto";

export class UsuarioPerfilResposta {
    constructor(
        public usuario: NexusReferenciaObjeto,
        public projeto: NexusReferenciaObjeto,
        public perfil: NexusReferenciaObjeto,
        public ativado: boolean,
        public dataUltimaAtualizacao: Date,
        public atualizadoPor: NexusReferenciaObjeto,
        public usuarioCriador: NexusReferenciaObjeto,
        public dataCriacao: Date
    ){}
}