import { NexusResposta } from "../compartilhado/nexus-resposta";
import { Token } from "../configuracoes/model/token";

export class UsuarioResposta extends NexusResposta {
    public nomeAcesso: string = ''

    public token: Token = new Token()
}