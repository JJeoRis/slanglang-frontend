import axios from "axios";
import { IUser } from "../model/UserModel";
import { v4 as uuidv4 } from "uuid";

class AuthRepository {
  async login(username: String, email: String) {
    const response = await axios.post<string>("/users/sign-in", {
      username,
      email,
    });

    return {
      token: response.data.split(" ")[1],
      user: {
        id: uuidv4(),
        email,
        name: username,
      } as IUser,
    };
  }
}

export default new AuthRepository();
