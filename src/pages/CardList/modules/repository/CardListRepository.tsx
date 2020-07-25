import { ICard } from "../../../../common/modules/model/CardModel";
import { v4 as uuidv4 } from "uuid";
import { IParams } from "../../utils/index";

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
    {
      id: uuidv4(),
      term: "공부",
      description: "공부 좀 해보자",
      user: { id: uuidv4(), name: "종현", email: "jh@naver.com" },
    },
  ];

  find({ isTag = false, page = 1, term = "", userId = "" }: IParams) {
    return new Promise<ICard[]>((res, rej) => {
      res(this.cardList.filter((card) => (term ? card.term.includes(term) : true)));
    });
  }
}

export default new CardListRepository();
