export class UsuarioPerfilEnvio {
    constructor(
        public usuarioUID: string,
        public projetoUID: string,
        public perfilUID: string,
        public ativado: boolean,
    ){}
}