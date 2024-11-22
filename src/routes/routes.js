import express from 'express';
import bcrypt from 'bcrypt';
import { Op } from 'sequelize'; 
import { Usuarios, Publicacoes, Comentarios, Seguidores } from '../models/models.js';

const router = express.Router();

router.post('/usuarios', async (req, res) => {
  const { nome, email, nick, senha, nascimento } = req.body;

  console.log(req.body);

  if (!nome || !email || !nick || !senha || !nascimento) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  const currentYear = new Date().getFullYear();
  const userYear = new Date(nascimento).getFullYear();                       
                                                                          
  if (currentYear - 16 < userYear) {                                   
    return res.status(400).json({ erro: 'A idade deve ser maior que 16 anos' }); 
  }

  const emailCheck = await Usuarios.findOne({ where: { nick: { [Op.eq]: email } } });

  if (emailCheck) {
    return res.status(400).json({ erro: 'Email já está em uso' });
  }

  const nickCheck = await Usuarios.findOne({ where: { nick: { [Op.eq]: nick } } });

  if (nickCheck) {
    return res.status(400).json({ erro: 'Nick já está em uso' });
  }
  
  const senhaCriptografada = await bcrypt.hash(senha, 10);

  const newUser = await Usuarios.create({
    nome,
    email,
    nick,
    senha: senhaCriptografada,
    nascimento,
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
  });

  return res.status(201).json(
    {
      id: newUser.id,
      nome: newUser.nome,
      email: newUser.email,
      senha: newUser.senha,
      nascimento: newUser.nascimento,
      imagem: newUser.imagem
    }
  );
});

router.get('/usuarios', async (req, res) => {
  const query = req.query;

  const users = await Usuarios.findAll({ 
    where: { 
      [Op.or]: [
        { 
          nome: { 
            [Op.substring]: [query.search]
          } 
        }, { 
          nick: { 
            [Op.substring]: [query.search] 
          } 
        } 
      ] 
    } 
  });

  const data = users.map((user) => {
    return {
      id: user.id,
      nome: user.nome,
      email: user.email,
      nick: user.nick,
      imagem: user.imagem,
      nascimento: user.nascimento
    }
  }) 

  return res.status(200).json(data);
});

router.get('/usuarios/:usuario_id', async (req, res) => {
  const usuario_id = req.params.usuario_id;

  const user = await Usuarios.findByPk(usuario_id);

  if (!user) {
    return res.status(404).json({ erro: 'Usuário não encontrado' })
  }

  return res.status(200).json({
    nome: user.nome,
    email: user.email,
    nick: user.nick,
    imagem: user.imagem,
    nascimento: user.nascimento
  });
});

router.patch('/usuarios/:usuario_id', async (req, res) => {
  const { nome, email, nick } = req.body;
  const usuario_id = req.params.usuario_id;

  if (!nome && !email && !nick) {
    return res.status(400).json({ erro: 'Pelo menos um campo deve ser fornecido para atualização' });
  }

  const emailCheck = await Usuarios.findOne({ where: { email: { [Op.eq]: email } } });

  if (emailCheck) {
    return res.status(400).json({ erro: 'Email já está em uso' });
  }

  const nickCheck = await Usuarios.findOne({ where: { nick: { [Op.eq]: nick } } });

  if (nickCheck) {
    return res.status(400).json({ erro: 'Nick já está em uso' });
  }

  const user = await Usuarios.findByPk(usuario_id);

  if (!user) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  if (nome) user.nome = nome;
  if (email) user.email = email;
  if (nick) user.nick = nick;

  await user.save();

  return res.status(200).json({
    nome: user.nome,
    email: user.email,
    nick: user.nick,
    imagem: user.imagem,
    nascimento: user.nascimento
  });
})

router.post('/publicacoes', async (req, res) => { //
  const { publicacao, usuario_id } = req.body;

  if (!publicacao || !usuario_id) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  const usuario = await Usuarios.findByPk(usuario_id);

  if (!usuario){
    return res.status(400).json({ erro: 'Usuário não encontrado' });
  }

  const newPub = await Publicacoes.create({
    publicacao,
    usuario_id,
    criado_em: new Date()
  });

  return res.status(201).json({publicacao_id: newPub.id});
});

router.get('/publicacoes', async (req, res) => {
  const posts = await Publicacoes.findAll({
    include: [{
      model: Usuarios,
      as: 'User',
      attributes: ['imagem', 'nick']
    }]
  });

  const data = posts.map((post) => {
    return {
      publicacao_id: post.id,
      publicacao: post.publicacao,
      usuario_id: post.usuario_id,
      nick: post.User.nick,
      imagem: post.User.imagem,
      qtd_likes: post.qtd_likes,
      criado_em: post.criado_em
    }
  });

  const count = posts.length

  res.status(200).json({
    data,
    total: count
  })
});

router.get('/publicacoes/de/:usuario_id', async (req, res) => {
  const usuario_id = req.params.usuario_id;

  if (!usuario_id) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' })
  }

  const user = await Usuarios.findByPk(usuario_id);
  
  if (!user) {
    return res.status(404).json({ erro: 'Usuário não encontrado' })
  }

  const posts = await Publicacoes.findAll({
    where: { 
      usuario_id: {
        [Op.eq]: usuario_id 
      } 
    },
    include: [
      {
        model: Usuarios,
        as: 'User',
        attributes: ['imagem', 'nick']
      },
      {
        model: Comentarios,
        as: 'Comments'
      }
    ]
  });

  const data = posts.map((post) => {
    return {
      publicacao_id: post.id,
      publicacao: post.publicacao,
      usuario_id: post.usuario_id,
      nick: post.User.nick,
      imagem: post.User.imagem,
      qtd_likes: post.qtd_likes,
      qtd_comentarios: post.Comments.length,
      criado_em: post.createdAt
    }
  });

  const count = posts.length;

  res.status(200).json({
    data,
    total: count
  })
})

router.get('/publicacoes/:publicacao_id', async (req, res) => {
  const publicacao_id = req.params.publicacao_id;

  if (!publicacao_id) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  const post = await Publicacoes.findByPk(publicacao_id, {
    include: [{
      model: Usuarios,
      as: 'User',
      attributes: ['nick', 'imagem']
    }]
  });

  if (!post) {
    return res.status(404).json({ erro: 'Publicação não encontrada' });
  }

  const comments = await Comentarios.findAll({ 
    where: { 
      publicacao_id: 
      { [Op.eq]: 
        publicacao_id 
      } 
    },
    include: {
      model: Usuarios,
      as: 'User',
      attributes: ['nick', 'imagem']
    }
  });

  const data = comments.map((comment) => {
    return {
      comentario_id: comment.id,
      comentario: comment.comentario,
      usuario_id: comment.usuario_id,
      nick: comment.User.nick,
      imagem: comment.User.imagem,
      qtd_likes: comment.qtd_likes
    }
  });

  return res.status(200).json({
    publicacao_id: post.id,
    publicacao: post.publicacao,
    usuario_id: post.usuario_id,
    nick: post.User.nick,
    imagem: post.User.imagem,
    qtd_likes: post.qtd_likes,
    criado_em: post.criado_em,
    comentarios: data
  })
})

router.delete('/publicacoes', async (req, res) => {
  const { publicacao_id, usuario_id } = req.body;

  const post = await Publicacoes.findByPk(publicacao_id);

  if (!post) {
    return res.status(404).json({ erro: 'Publicação não encontrada' });
  }

  const user = await Usuarios.findByPk(usuario_id);

  if (!user) {
    return res.status(400).json({ erro: 'Usuário não informado' });
  }

  if (post.usuario_id !== usuario_id) {
    return res.status(403).json({ erro: 'Usuário não autorizado' })
  }

  post.destroy();

  return res.status(200).json({ mensagem: 'Publicação deletada com sucesso' })
})

router.post('/comentarios', async (req, res) => {
  const { publicacao_id, usuario_id, comentario } = req.body;

  if (!publicacao_id || !usuario_id || !comentario) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  const user = await Usuarios.findByPk(usuario_id);

  if (!user) {
    return res.status(400).json({ erro: 'Usuário não encontrado' });
  }

  const post = await Publicacoes.findByPk(publicacao_id);

  if (!post) {
    return res.status(400).json({ erro: 'Publicação não encontrada' })
  }

  const newCom = await Comentarios.create({
    usuario_id,
    publicacao_id,
    comentario
  })

  return res.status(201).json({comentario_id: newCom.id})
})

router.get('/comentarios', async (req, res) => {
  const publicacao_id = req.query.publicacao_id;

  if (!publicacao_id) {
    return res.status(400).json({ erro: 'Publicação não informada' });
  }

  const post = await Publicacoes.findByPk(publicacao_id);

  if (!post) {
    return res.status(404).json({ erro: 'Publicação não encontrada' });
  }

  const comments = await Comentarios.findAll({ 
    where: { 
      publicacao_id: { 
        [Op.eq]: publicacao_id 
      } 
    },
    include: [{
      model: Usuarios,
      as: 'User',
      attributes: ['nick', 'imagem']
    }]
  });

  const data = comments.map((comment) => {
    return {
      comentario_id: comment.id,
      comentario: comment.comentario,
      usuario_id: comment.usuario_id,
      nick: comment.User.nick,
      imagem: comment.User.imagem,
      qtd_likes: comment.qtd_likes
    }
  });

  res.status(200).json({
    data,
    count: comments.length
  })
})

router.delete('/comentarios', async (req, res) => {
  const { comentario_id, usuario_id } = req.body;

  if (!comentario_id || !usuario_id) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  const comment = await Comentarios.findByPk(comentario_id);

  if (!comment) {
    return res.status(404).json({ erro: 'Comentário não encontrado' });
  }

  const user = Usuarios.findByPk(usuario_id);

  if (!user) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  if (comment.usuario_id !== usuario_id) {
    return res.status(403).json({ erro: 'Usuário não autorizado' });
  }

  await comment.destroy();

  return res.status(204).json({});
})

router.post('/curtidas/publicacao', async (req, res) => {
  const { publicacao_id } = req.body;

  if (!publicacao_id) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' })
  }

  const post = await Publicacoes.findByPk(publicacao_id);

  if (!post) {
    return res.status(400).json({ erro: 'Publicação não encontrada' })
  }

  post.qtd_likes++;

  await post.save();

  res.status(200).json({ qtd_likes: post.qtd_likes })
})

router.delete('/curtidas/publicacao', async (req, res) => {
  const { publicacao_id } = req.body;

  if (!publicacao_id) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' })
  }

  const post = await Publicacoes.findByPk(publicacao_id);

  if (!post) {
    return res.status(400).json({ erro: 'Publicação não encontrada' })
  }

  post.qtd_likes--;

  await post.save();

  res.status(200).json({ qtd_likes: post.qtd_likes })
})

router.post('/curtidas/comentario', async (req, res) => {
  const { comentario_id } = req.body;

  if (!comentario_id) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' })
  }

  const comment = await Comentarios.findByPk(comentario_id);

  if (!comment) {
    return res.status(400).json({ erro: 'Comentário não encontrada' })
  }

  comment.qtd_likes++;

  await comment.save();

  res.status(200).json({ qtd_likes: comment.qtd_likes })
})

router.delete('/curtidas/comentario', async (req, res) => {
  const { comentario_id } = req.body;

  if (!comentario_id) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' })
  }

  const comment = await Comentarios.findByPk(comentario_id);

  if (!comment) {
    return res.status(400).json({ erro: 'Comentário não encontrada' })
  }

  comment.qtd_likes--;

  await comment.save();

  res.status(200).json({ qtd_likes: comment.qtd_likes })
})

router.post('/seguidores', async (req, res) => {
  const { usuario_id, usuario_a_seguir_id } = req.body;

  if (!usuario_id || !usuario_a_seguir_id) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  const userCheck = await Usuarios.findByPk(usuario_id);

  if (!userCheck) {
    return res.status(400).json({ erro: 'Usuário não encontrado' });
  }

  const followCheck = await Usuarios.findByPk(usuario_a_seguir_id);

  if (!followCheck) {
    return res.status(400).json({ erro: 'Usuário a ser seguido não encontrado' });
  }

  if (usuario_id === usuario_a_seguir_id) {
    return res.status(400).json({ erro: 'Você não pode seguir a si mesmo' });
  }

  const check = await Seguidores.findOne({
    where: {
      [Op.and]: {
        usuario_id: {
          [Op.eq]: usuario_a_seguir_id
        },
        seguidor_id: {
          [Op.eq]: usuario_id
        }
      }
    }
  });

  if (check) {
    return res.status(400).json({ erro: 'Você já segue este usuário'});
  }

  const newFollow = await Seguidores.create({
    usuario_id: usuario_a_seguir_id,
    seguidor_id: usuario_id
  })

  return res.status(201).json({seguidor_id: newFollow.id})
})

router.delete('/seguidores', async (req, res) => {
  const { usuario_id, usuario_a_seguir_id } = req.body;

  if (!usuario_id || !usuario_a_seguir_id) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  const userCheck = await Usuarios.findByPk(usuario_id);

  if (!userCheck) {
    return res.status(400).json({ erro: 'Usuário não encontrado' });
  }

  const followCheck = await Usuarios.findByPk(usuario_a_seguir_id);

  if (!followCheck) {
    return res.status(400).json({ erro: 'Usuário a ser não seguido não encontrado' });
  }

  if (usuario_id === usuario_a_seguir_id) {
    return res.status(400).json({ erro: 'Você não pode interagir com si mesmo' });
  }

  const check = await Seguidores.findOne({
    where: {
      [Op.and]: {
        usuario_id: {
          [Op.eq]: usuario_a_seguir_id
        },
        seguidor_id: {
          [Op.eq]: usuario_id
        }
      }
    }
  });

  if (!check) {
    return res.status(400).json({ erro: 'Você não segue este usuário'});
  }

  res.json({ seguidor_id: check.seguidor_id });

  await check.destroy();

  return res.status(200);
})

router.get('/seguidores/:usuario_id', async (req, res) => {
  const usuario_id = req.params.usuario_id;
  let { page, limit } = req.query;
  
  const user = await Usuarios.findByPk(usuario_id);

  if (user === null) {
    return res.status(404).json({ erro: 'Usuário não encontrado' })
  }

  if (!page) page = 1;
  if (!limit) limit = 10;

  const followers = await Seguidores.findAll({
    where: { 
      usuario_id: { 
        [Op.eq]: usuario_id 
      } 
    }, 
    include: [{
      model: Usuarios,
      as: 'Follower',
      attributes: ['nome', 'nick', 'imagem']
    }]
  });

  const data = followers.map((follower) => {
    return {
      seguidor_id: follower.id,
      nome: follower.Follower.nome,
      nick: follower.Follower.nick,
      imagem: follower.Follower.imagem,
    }
  }) 

  const count = followers.length;

  const totalPages = Math.floor(count/limit) + 1;

  res.status(200).json({
    data,
    total: count,
    currentPage: page,
    totalPages
  })
})

router.get('/seguidores/seguindo/:usuario_id', async (req, res) => {
  const usuario_id = req.params.usuario_id;
  
  const user = await Usuarios.findByPk(usuario_id);

  if (!user) {
    return res.status(404).json({ erro: 'Usuário não encontrado' })
  }

  const followers = await Seguidores.findAll({
    where: { 
      seguidor_id: { 
        [Op.eq]: usuario_id 
      } 
    }, 
    include: [{
      model: Usuarios,
      as: 'User',
      attributes: ['nome', 'nick', 'imagem']
    }]
  });

  const data = followers.map((follower) => {
    return {
      seguidor_id: follower.id,
      nome: follower.User.nome,
      nick: follower.User.nick,
      imagem: follower.User.imagem,
    }
  }) 

  const count = followers.length;

  res.status(200).json({
    data,
    total: count,
  })
})

export default router;