import axios from "axios";
import { IUser } from "../model/UserModel";
import { v4 as uuidv4 } from "uuid";

const TOKEN_KEY = "TOKEN";

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

  saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
}

export default new AuthRepository();
