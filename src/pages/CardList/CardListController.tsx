import React, { useContext, useEffect } from "react";
import CardList from "./templates/CardList";
import { observer } from "mobx-react-lite";
import CardListStore from "./modules/store/CardListStore";
import { useHistory } from "react-router-dom";

const CardListController = () => {
  const cardListStore = useContext(CardListStore);

  const { cardList, findAll } = cardListStore;

  useEffect(() => {
    findAll();
  }, []);

  return (
    <>
      <CardList cardList={cardList} />
    </>
  );
};

export default observer(CardListController);
