import React, { useContext } from "react";
import CardForm from "./templates/CardForm";
import CardFormStore from "./module/store/CardFormStore";
import { observer } from "mobx-react-lite";
import { ICardForm } from "./module/repository/CardFormRepository";
import { useHistory } from "react-router-dom";
import { url } from "../../common/constants";
import { convertParamsToQuery } from "../CardList/utils";

const CardFormController = () => {
  const { loading, createCard } = useContext(CardFormStore);
  const history = useHistory();

  const handleCardCreation = async (formData: ICardForm) => {
    const card = await createCard(formData);
    history.push({
      pathname: url.cardList,
      search: convertParamsToQuery({ keyWord: card.term }),
      state: {
        card,
      },
    });
  };

  return <CardForm handleCardCreation={handleCardCreation} loading={loading} />;
};

export default observer(CardFormController);
