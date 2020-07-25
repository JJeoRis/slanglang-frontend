import { autobind } from "core-decorators";
import { observable, reaction } from "mobx";
import { ICard } from "../../../../common/modules/model/CardModel";
import { createContext } from "react";
import cardListRepository from "../repository/CardListRepository";
import { IParams } from "../../utils/index";

@autobind
class CardListStore {
  constructor() {
    reaction(
      () => this.cardList,
      (_) => console.log(this.cardList.length)
    );
  }

  @observable
  loading: boolean = false;

  @observable
  cardList: ICard[] = [];

  async find(params: IParams) {
    this.loading = true;
    this.cardList = await cardListRepository.find(params);
    this.loading = false;
  }
}

export default createContext(new CardListStore());
