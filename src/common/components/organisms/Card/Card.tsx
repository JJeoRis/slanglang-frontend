import React from "react";
import { ICard } from "../../../modules/model/CardModel";
import { Card, CardContent, Typography } from "@material-ui/core";

type IProps = {
  card: ICard;
};

export default ({ card }: IProps) => (
  <>
    <Card elevation={2}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {card.title}
        </Typography>
        <Typography>{card.description}</Typography>
      </CardContent>
    </Card>
  </>
);
