import express from "express";
import { sequelize } from "./src/models/models.js"; // Importando o Sequelize configurado
import routes from "./src/routes/routes.js"; // Importando as rotas

const app = express();

app.use(express.json()); // Para processar JSON nas requisições
app.use(routes); // Utilizando as rotas importadas

// Sincronizando o banco de dados e iniciando o servidor
sequelize.sync().then(() => {
  console.log("Database synchronized");
  // Iniciando o servidor
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});