import { NexusResposta } from "../../compartilhado/nexus-resposta";
import { Token } from "./token";

export class UsuarioResposta extends NexusResposta {
    public nomeAcesso: string = ''

    public token: Token = new Token()
}