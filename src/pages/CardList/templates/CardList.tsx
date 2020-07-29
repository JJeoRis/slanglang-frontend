import React from "react";
import { ICard } from "../../../common/modules/model/CardModel";
import Card from "../../../common/components/organisms/Card";
import { Container, Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
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
  loading: boolean;
};

export default ({ cardList, loading }: IProps) => {
  const classes = useStyles();
  return (
    <>
      <TopAppBar />
      <Container maxWidth="md">
        <Grid container direction="column" spacing={3}>
          <Grid item xs>
            <div className={classes.searchWrapper}>
              <Search />
            </div>
            {cardList.map((card) => (
              <div key={card.id} className={classes.cardWrapper}>
                <Card card={card} />
              </div>
            ))}
          </Grid>
          <Grid item xs container justify="center">
            <Grid>
              <Pagination count={10} color="primary" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
