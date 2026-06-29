import bcrypt from "bcryptjs";
import userRepository from "../repositories/user.repository";
import { CreateUserDTO } from "../dtos/user.dto";
 import jwt from "jsonwebtoken";

class UserService {
  async createUser(data: CreateUserDTO) {
    // Check if email already exists
    const existingEmail = await userRepository.findUserByEmail(data.email);

    if (existingEmail) {
      throw new Error("Email already exists.");
    }

    // Check if username already exists
    const existingUsername = await userRepository.findUserByUsername(
      data.username
    );

    if (existingUsername) {
      throw new Error("Username already exists.");
    }

    // Check if phone number already exists
    const existingPhone = await userRepository.findUserByPhone(data.phone);

    if (existingPhone) {
      throw new Error("Phone number already exists.");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Save user
    const user = await userRepository.createUser({
      fullName: data.fullName,
      username: data.username,
      email: data.email,
      phone: data.phone,
      password: hashedPassword,
    });

    return user;
  }
 


async loginUser(email: string, password: string) {
  const user = await userRepository.findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password.");
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );

  return { user, token };
}
}

export default new UserService();