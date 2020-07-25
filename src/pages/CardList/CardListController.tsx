import React, { useContext, useEffect } from "react";
import CardList from "./templates/CardList";
import { observer } from "mobx-react-lite";
import CardListStore from "./modules/store/CardListStore";
import { useLocation } from "react-router-dom";
import { convertQueryToParams } from "./utils";

const CardListController = () => {
  const cardListStore = useContext(CardListStore);
  const { search } = useLocation();

  const { cardList, find, loading } = cardListStore;

  useEffect(() => {
    find(convertQueryToParams(search));
  }, [find, search]);

  return (
    <>
      <CardList loading={loading} cardList={cardList} />
    </>
  );
};

export default observer(CardListController);
