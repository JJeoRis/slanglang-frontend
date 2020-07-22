import { createContext } from "react";
import { autobind } from "core-decorators";
import { observable, reaction } from "mobx";
import { IUser } from "../model/UserModel";
import userRepository from "../repository/AuthRepository";

@autobind
class AuthStore {
  constructor() {
    reaction(
      () => this.user,
      (_) => console.log(this.user)
    );
  }

  @observable
  user?: IUser;

  @observable
  token: string = "";

  async login(username: string, email: string) {
    const { token, user } = await userRepository.login(username, email);
    this.user = user;
    this.token = token;
  }
}

export default createContext(new AuthStore());
