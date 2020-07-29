import axios from "axios";
import { endPoints } from "../../../../common/constants/index";

export type ICardForm = {
  term: string;
  description: string;
  example: string;
  tagList: string[];
  gifUrlList: string[];
};

class CardFormRepository {
  async createCard(form: ICardForm) {
    return await (await axios.post(endPoints.cards, form)).data;
  }
}

export default new CardFormRepository();
