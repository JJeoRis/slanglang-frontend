import React from "react";
import { ICard } from "../../../common/modules/model/CardModel";
import Card from "../../../common/components/organisms/Card";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import TopAppBar from "../../../common/components/organisms/TopAppBar";
import Search from "../../../common/components/organisms/Search";

const useStyles = makeStyles((theme) =>
  createStyles({
    cardWrapper: {
      marginBottom: theme.spacing(1),
    },
    searchWrapper: {
      padding: theme.spacing(2, 0),
    },
  })
);

type IProps = {
  cardList: ICard[];
};

export default ({ cardList }: IProps) => {
  const classes = useStyles();
  return (
    <>
      <TopAppBar />
      <Container maxWidth="md">
        <div className={classes.searchWrapper}>
          <Search />
        </div>
        {cardList.map((card) => (
          <div className={classes.cardWrapper}>
            <Card key={card.id} card={card} />
          </div>
        ))}
      </Container>
    </>
  );
};
