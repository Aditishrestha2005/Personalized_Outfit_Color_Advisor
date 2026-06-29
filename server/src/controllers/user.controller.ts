import { Request, Response } from "express";
import userService from "../services/user.service";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);

      return res.status(201).json({
        success: true,
        message: "User registered successfully.",
        data: user,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
  async loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const result = await userService.loginUser(email, password);

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      data: result,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
}

export default new UserController();