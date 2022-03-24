export interface Usuario{
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    celular: string;
    whatsapp: string;
    whatsappLink: string;
    usuario: string;
    senha: string;

    dhInclusao: Date;
    dhUltimaAlteracao: Date;
    dhExclusao: Date;
}