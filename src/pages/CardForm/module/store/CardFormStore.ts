import { autobind } from "core-decorators";
import { createContext } from "react";
import { observable } from "mobx";
import cardFormRepository, { ICardForm } from "../repository/CardFormRepository";

@autobind
class CardFormStore {
  @observable
  loading: boolean = false;

  async createCard(formData: ICardForm) {
    let card;
    try {
      this.loading = true;
      card = await cardFormRepository.createCard(formData);
    } catch (err) {
      console.log("Error", err);
    } finally {
      this.loading = false;
    }

    return card;
  }
}

export default createContext(new CardFormStore());
