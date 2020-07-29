import React, { useContext, useEffect } from "react";
import CardForm from "./templates/CardForm";
import CardFormStore from "./module/store/CardFormStore";
import { observer } from "mobx-react-lite";
import { ICardForm } from "./module/repository/CardFormRepository";
import { useHistory } from "react-router-dom";
import { url } from "../../common/constants";
import { convertParamsToQuery } from "../CardList/utils";
import { toast } from "react-toastify";
import AuthStore from "../../common/modules/store/AuthStore";

const CardFormController = () => {
  const { loading, createCard } = useContext(CardFormStore);
  const { token } = useContext(AuthStore);
  const history = useHistory();

  const handleCardCreation = async (formData: ICardForm) => {
    const card = await createCard(formData);
    if (!!card) {
      history.push({
        pathname: url.cardList,
        search: convertParamsToQuery({ keyWord: card.term }),
        state: {
          card,
        },
      });
    } else {
      toast.error("카드 등록에 실패했어요. 잠시 후에 다시 시도해보세요");
    }
  };

  useEffect(() => {
    if (!token) {
      toast.error("로그인 후에 사용하세요");
      history.push(url.login);
    }
  }, [token, history]);

  return <CardForm handleCardCreation={handleCardCreation} loading={loading} />;
};

export default observer(CardFormController);
