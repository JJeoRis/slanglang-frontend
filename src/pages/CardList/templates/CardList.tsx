import React from "react";
import {ICard} from "../../../common/modules/model/CardModel";
import Card from "../../../common/components/organisms/Card";
import {Container, Grid} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Skeleton, Pagination} from "@material-ui/lab";
import TopAppBar from "../../../common/components/organisms/TopAppBar";
import Search from "../../../common/components/organisms/Search";
import {range} from "../../../helpers/generic";
import {observer} from "mobx-react";
import 'mobx-react-lite/batchingForReactDom'

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

const CardList = ({cardList, loading}: IProps) => {
    const classes = useStyles();
    return (
        <>
            <TopAppBar/>
            <Container maxWidth="md">
                <Grid container direction="column" spacing={3}>
                    <Grid item xs>
                        <div className={classes.searchWrapper}>
                            <Search/>
                        </div>
                        {cardList.map((card) => (
                            <div key={card.id} className={classes.cardWrapper}>
                                <Card card={card}/>
                            </div>
                        ))}
                        {loading && (
                            <>
                                {range(2).map(idx =>
                                    <Grid item xs key={idx}>
                                        <Skeleton height={150}/>
                                    </Grid>
                                )}
                            </>
                        )}
                    </Grid>
                    <Grid item xs container justify="center">
                        <Grid>
                            <Pagination count={10} color="primary"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </>
    );
};

export default observer(CardList);