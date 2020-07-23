import React from "react";
import TopAppBar from "../../../common/components/organisms/TopAppBar/index";
import { Container, Paper, TextField, Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    paperWrapper: {
      padding: theme.spacing(2, 0),
    },
    paper: {
      padding: theme.spacing(2),
    },
  })
);

export default () => {
  const classes = useStyles();

  return (
    <>
      <TopAppBar />
      <Container maxWidth="sm">
        <div className={classes.paperWrapper}>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={2}>
              <Grid item xs>
                <TextField label="단어" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs>
                <TextField label="단어 뜻" fullWidth variant="outlined" c />
              </Grid>
              <Grid item xs>
                <TextField label="예제" fullWidth />
              </Grid>
              <Grid item xs>
                <TextField label="태그" fullWidth />
              </Grid>
              <Grid item xs container justify="flex-end">
                <Grid item>
                  <Button>등록</Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </>
  );
};
