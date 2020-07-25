import { autobind } from "core-decorators";
import { createContext } from "react";
import { observable } from "mobx";
import cardFormRepository, {
  ICardForm,
} from "../repository/CardFormRepository";
import { ICard } from "../../../../common/modules/model/CardModel";

const sleep = async (ms: number) => {
  return new Promise((res, rej) => setTimeout(res, ms));
};

@autobind
class CardFormStore {
  @observable
  loading: boolean = false;

  async createCard(formData: ICardForm) {
    this.loading = true;
    const card = await cardFormRepository.createCard(formData);
    this.loading = false;
    return card;
  }
}

export default createContext(new CardFormStore());
