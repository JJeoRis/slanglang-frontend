import { ICard } from "../../../../common/modules/model/CardModel";
import { v4 as uuidv4 } from "uuid";

class CardListRepository {
  cardList: ICard[] = [
    {
      id: uuidv4(),
      term: "별다줄",
      description: "별걸 다 줄인다",
      user: { id: uuidv4(), name: "종현", email: "jh@naver.com" },
    },
    {
      id: uuidv4(),
      term: "별다줄",
      description: "별걸 다 줄인다",
      user: { id: uuidv4(), name: "종현", email: "jh@naver.com" },
    },
  ];

  findAll() {
    return new Promise<ICard[]>((res, rej) => {
      res(this.cardList);
    });
  }
}

export default new CardListRepository();
