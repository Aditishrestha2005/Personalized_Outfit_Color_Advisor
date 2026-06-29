import User, { IUser } from "../models/user.model";

class UserRepository {
  async createUser(userData: Partial<IUser>) {
    return await User.create(userData);
  }

  async findUserByEmail(email: string) {
    return await User.findOne({ email });
  }

  async findUserByUsername(username: string) {
    return await User.findOne({ username });
  }

  async findUserByPhone(phone: string) {
    return await User.findOne({ phone });
  }

  async findUserById(id: string) {
    return await User.findById(id);
  }
}

export default new UserRepository();