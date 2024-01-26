import { NexusResposta } from "../../compartilhado/models/nexus-resposta";

export class UsuarioResposta extends NexusResposta {
    public nomeAcesso: string = ''

    public token: string = '';
}