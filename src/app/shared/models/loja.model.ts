import { Usuario } from './usuario.model';
export interface Loja{
    id: number;
    cnpj: string;
    nome: string;
    nomeFantasia: string;
    descricao: string;
    telefone: string;
    celular: string;
    whatsapp: string;
    whatsappLink: string;
    instagramLink: string;
    email: string;
    dhInclusao: any;
    dhUltimaAlteracao:any ;
    dhExclusao: any;
    
    usuarioProprietario: Usuario;
}