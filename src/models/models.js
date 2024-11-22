import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const sequelize = new Sequelize(
    process.env.DB_PROD_NAME,
    process.env.DB_PROD_USER,
    process.env.DB_PROD_PASSWORD,
    {
        host: process.env.DB_PROD_HOST,
        port: process.env.DB_PROD_PORT,
        dialect: process.env.DB_PROD_DIALECT,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
        logging: false,
    }
);

const Usuarios = sequelize.define("Usuarios", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    nome: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    nick: {type: DataTypes.STRING, allowNull: false},
    senha: {type: DataTypes.STRING, allowNull: false},
    nascimento: {type: DataTypes.DATE, allowNull: false},
    imagem: {type: DataTypes.STRING, allowNull: false},
},{
    timestamps: false
});

const Publicacoes = sequelize.define("Publicacoes", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    publicacao: {type: DataTypes.STRING, allowNull: false},
    usuario_id: {type: DataTypes.UUID, allowNull: false},
    qtd_likes: {type: DataTypes.NUMBER, defaultValue: 0, allowNull: false},
    criado_em: {type: DataTypes.DATE, allowNull: false},
},{
    timestamps: false
});

const Comentarios = sequelize.define("Comentarios", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    publicacao_id: {type: DataTypes.UUID, allowNull: false},
    usuario_id: {type: DataTypes.UUID, allowNull: false},
    qtd_likes: {type: DataTypes.NUMBER, defaultValue: 0, allowNull: false},
    comentario: {type: DataTypes.STRING, allowNull: false},
    // criado_em: {type: DataTypes.DATE, allowNull: false},
},{
    timestamps: false
});

const Seguidores = sequelize.define("Seguidores", {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    usuario_id: {type: DataTypes.UUID, allowNull: false},
    seguidor_id: {type: DataTypes.UUID, allowNull: false},
},{
    timestamps: false
});

Publicacoes.belongsTo(Usuarios, { foreignKey: 'usuario_id', as: 'User' });

Publicacoes.hasMany(Comentarios, { as: "Comments", foreignKey: 'publicacao_id', onDelete: 'CASCADE', hooks: true });
Comentarios.belongsTo(Publicacoes, { foreignKey: 'publicacao_id', as: 'Post' });

Comentarios.belongsTo(Usuarios, { foreignKey: 'usuario_id', as: 'User' });

Seguidores.belongsTo(Usuarios, { foreignKey: 'usuario_id', as: 'User' });
Seguidores.belongsTo(Usuarios, { foreignKey: 'seguidor_id', as: 'Follower' })

export { Usuarios, Publicacoes, Comentarios, Seguidores, sequelize };