export type IUser = {
    nome: string;
    email: string;
    senha: string;
    nascimento: string; // Formato: 'YYYY-MM-DD'
    nick: string;
  };
  
 export type IUpdateUser = {
    nome: string;
    email: string;
    nick: string;
  };
  
  export type IUserResponse = {
    id: string;
    nome: string;
    email: string;
    senha: string;
    nascimento: string; // Formato: 'YYYY-MM-DD'
    nick: string;
    imagem: string;
  };
  