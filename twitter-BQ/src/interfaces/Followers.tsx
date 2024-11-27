export type IFollowers = {
  data: [
    {
      seguidor_id: string;
      nome: string;
      nick: string;
      imagem: string;
    },
  ];
  total: number;
  currentPage: number;
  totalPages: number;
};

export type IFollowing = {
  data: [
    {
      usuario_id: string;
      nome: string;
      nick: string;
      imagem: string;
    },
  ];
  total: number;
};

export type IFollow = {
  usuario_id: string;
  usuario_a_seguir_id: string;
};
