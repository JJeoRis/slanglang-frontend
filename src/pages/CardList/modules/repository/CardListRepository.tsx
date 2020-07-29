import { IParams } from "../../utils/index";
import axios from "axios";
import { endPoints } from "../../../../common/constants/index";

class CardListRepository {
  async find(params: IParams) {
    const cards = await axios.get(endPoints.cards, { params });
    return cards.data;
  }
}

export default new CardListRepository();
