import express from "express";
import * as dotenv from "dotenv";
import sequelize from "./config/database";
import { setupSwagger } from "./config/swagger";
import userRoutes from "./routes/UserRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use(userRoutes);
app.use(authRoutes);

setupSwagger(app);

sequelize.sync({force: true}).then(() => {
  console.log("Banco de dados conectado");
  app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
}).catch((error) => {
  console.error("Erro ao conectar o banco de dados", error);
});