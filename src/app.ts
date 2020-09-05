import express from "express";
import { Sequelize } from "sequelize";

import serverRoute from "./routes/server";

import UserModel from "./database/models/UserModel";

class App {
  public server: express.Application;
  public connection: Sequelize;

  public constructor() {
    this.server = express();
    this.registerRoutes();
    this.setupMySQL();
  }

  private setupMySQL() {
    console.log("Iniciando a conexão com o banco de dados...");
    this.connection = new Sequelize("nodejs", "root", "", {
      host: "localhost",
      dialect: "mysql",
    });
    this.connection
      .authenticate()
      .then(() => {
        console.log("Conectado com sucesso.");
        UserModel.init(this.connection);
      })
      .catch(() => {
        console.log("Erro ao se conectar com o banco de dados.");
      });
  }

  private registerRoutes() {
    this.server.use("/v1/server", serverRoute);
  }
}

export default new App().server;
