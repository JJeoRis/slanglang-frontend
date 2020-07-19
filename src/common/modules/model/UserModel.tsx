import { autobind } from "core-decorators";
import { extendObservable } from "mobx";

export type IUserModel = {
  id: String;
  email: String;
  name: String;
};

@autobind
class UserModel {
  constructor(data: UserModel) {
    extendObservable(this, UserModel);
  }
}
