import { NexusResposta } from "../../compartilhado/models/nexus-resposta";
import { JWTToken } from "../../configuracoes/model/token";

export class UsuarioResposta extends NexusResposta {
    public nomeAcesso: string = ''

    public token: JWTToken = new JWTToken()
}