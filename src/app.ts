import express from "express";

import serverRoute from "./routes/server";

class App {
  public server: express.Application;

  public constructor() {
    this.server = express();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.server.use("/v1/server", serverRoute);
  }
}

export default new App().server;
