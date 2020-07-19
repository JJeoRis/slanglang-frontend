import { extendObservable } from "mobx";
import { autobind } from "core-decorators";
import { IUserModel } from "./UserModel";

export type ICard = {
  id: string;
  title: string;
  description: string;
  user: IUserModel;
};

@autobind
class CardModel {
  constructor(data: CardModel) {
    extendObservable(this, data);
  }
}
