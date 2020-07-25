import { autobind } from "core-decorators";
import { observable, reaction } from "mobx";
import { ICard } from "../../../../common/modules/model/CardModel";
import { createContext } from "react";
import cardListRepository from "../repository/CardListRepository";

@autobind
class CardListStore {
  constructor() {
    reaction(
      () => this.cardList,
      (_) => console.log(this.cardList.length)
    );
  }

  @observable
  cardList: ICard[] = [];

  async findAll() {
    this.cardList = await cardListRepository.findAll();
  }
}

export default createContext(new CardListStore());
