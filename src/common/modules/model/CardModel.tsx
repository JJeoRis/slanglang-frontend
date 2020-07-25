import { extendObservable } from "mobx";
import { autobind } from "core-decorators";
import { IUser } from "./UserModel";

export type ICard = {
  id: string;
  term: string;
  description: string;
  user: IUser;
};

@autobind
class CardModel {
  constructor(data: CardModel) {
    extendObservable(this, data);
  }
}
