export type IAddPost = {
  publicacao: string | undefined;
  usuario_id: string | undefined;
};

export type IPost = {
  publicacao_id: string;
  publicacao: string;
  usuario_id: string;
  nick: string;
  imagem: string;
  qtd_likes: number;
  criado_em: string;
};

export type IPostList = {
  data: IPost[];
  total: number;
};

type ICommmet = {
  comentario_id: string;
  comentario: string;
  usuario_id: string;
  nick: string;
  imagem: string;
  qtd_likes: number;
  criado_em: string;
};

export type IPostComment = {
  data: [
    {
      publicacao_id: string;
      publicacao: string;
      usuario_id: string;
      nick: string;
      imagem: string;
      qtd_likes: number;
      criado_em: string;
      comentarios: ICommmet[];
    },
  ];
};

export type IPostCommentSingle = {
  publicacao_id: string;
  publicacao: string;
  usuario_id: string;
  nick: string;
  imagem: string;
  qtd_likes: number;
  criado_em: string;
  comentarios: ICommmet[];
};
