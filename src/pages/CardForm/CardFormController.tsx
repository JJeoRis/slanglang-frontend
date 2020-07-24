import React from "react";
import CardForm from "./templates/CardForm";
import { observer } from "mobx-react-lite";
import { useState } from "react";

const CardFormController = () => {
  const [tagList, setTagList] = useState<string[]>([]);

  const addTag = (key: string) => setTagList([...tagList, key]);

  const deleteTag = (key: string, deleteIdx: number) =>
    setTagList(tagList.filter((_, idx) => idx !== deleteIdx));

  return <CardForm tagList={tagList} addTag={addTag} deleteTag={deleteTag} />;
};

export default observer(CardFormController);
