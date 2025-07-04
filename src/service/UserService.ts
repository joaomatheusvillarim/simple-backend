import * as bcrypt from "bcryptjs";
import { UserRepository } from "../repository/UserRepository";

const userRepository = new UserRepository();
const saltRounds = 10;

class UserService {

  async createUser(
    name: string,
    email: string,
    password: string
  ) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return await userRepository.createUser(name, email, hashedPassword);
  }

  async getUserById(id: number) {
    return await userRepository.getUserById(id);
  }

  async getAllUsers() {
    return await userRepository.getAllUsers();
  }

  async updateUser(
    id: number,
    data: Partial<{
      name: string;
      email: string;
      password: string;
    }>
    ) {
      if (data.password) {
        data.password = await bcrypt.hash(data.password, saltRounds);
      }
      return await userRepository.updateUser(id, data);
  }

  async deleteUser(id: number) {
    return await userRepository.deleteUser(id);
  }
  
}

export default new UserService();