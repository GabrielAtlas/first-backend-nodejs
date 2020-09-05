import { Request, Response } from "express";

class ServerController {
  public async status(req: Request, res: Response) {
    console.log("Request from server status.");
    return res.json({ status: 200, message: "Hello world" });
  }
}

export default new ServerController();
