import { NexusResposta } from "../../compartilhado/models/dtos/nexus-resposta";

export class UsuarioResposta extends NexusResposta {
    public nomeAcesso: string = ''

    public token: string = '';
}