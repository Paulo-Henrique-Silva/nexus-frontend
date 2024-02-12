import { NexusEnvio } from "../../compartilhado/models/dtos/nexus-envio";

export class NotificacaoEnvio extends NexusEnvio {
    public usuarioUID: string = ''
    
    public vista: boolean = false
}