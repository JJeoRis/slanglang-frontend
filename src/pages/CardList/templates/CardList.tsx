import React from "react";
import { ICard } from "../../../common/modules/model/CardModel";
import Card from "../../../common/components/organisms/Card";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";

const useStyles = makeStyles((theme) =>
  createStyles({
    cardWrapper: {
      marginBottom: theme.spacing(1),
    },
  })
);

type IProps = {
  cardList: ICard[];
};

export default ({ cardList }: IProps) => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      {cardList.map((card) => (
        <div className={classes.cardWrapper}>
          <Card key={card.id} card={card} />
        </div>
      ))}
    </Container>
  );
};
