import { ICard } from "../../../../common/modules/model/CardModel";
import { v4 as uuidv4 } from "uuid";

export type ICardForm = {
  term: string;
  description: string;
  example: string;
  tagList: string[];
  gifUrlList: string[];
};

class CardFormRepository {
  // TODO : Replace it with real data
  card: ICard = {
    id: uuidv4(),
    term: "별다줄",
    description: "별걸 다 줄인다",
    user: { id: uuidv4(), name: "종현", email: "jh@naver.com" },
  };

  createCard(form: ICardForm) {
    return new Promise<ICard>((res, rej) => {
      res(this.card);
    });
  }
}

export default new CardFormRepository();
