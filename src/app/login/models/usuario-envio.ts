import { NexusEnvio } from "../../compartilhado/models/dtos/nexus-envio"

export class UsuarioEnvio extends NexusEnvio {
    public nomeAcesso: string = '';

    public senha: string | null = null;
}