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

    dhInclusao: Date;
    dhUltimaAlteracao:Date ;
    dhExclusao: Date;
    
    usuarioPriprietario:any;
}