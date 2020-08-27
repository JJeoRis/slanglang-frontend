import {autobind} from "core-decorators";
import {observable} from "mobx";
import {ICard} from "../../../../common/modules/model/CardModel";
import {createContext} from "react";
import cardListRepository from "../repository/CardListRepository";
import {IParams} from "../../utils";

@autobind
class CardListStore {
    @observable
    loading: boolean = false;

    @observable
    cardList: ICard[] = [];

    async find(params: IParams) {
        try {
            this.loading = true;
            this.cardList = await cardListRepository.find(params);
        } catch (err) {
            console.log(err);
        } finally {
            this.loading = false;
        }
    }
}

export default createContext(new CardListStore());
