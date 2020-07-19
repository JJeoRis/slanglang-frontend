import React from "react";
import TopAppBar from "../../../common/components/organisms/TopAppBar/index";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { primaryColor } from "../../../styles/index";

const useStyles = makeStyles((theme) =>
  createStyles({
    paperBox: {
      width: "400px",
      padding: theme.spacing(1),
    },
    containerBox: {
      padding: theme.spacing(1),
    },
  })
);

export default () => {
  const classes = useStyles();

  return (
    <Container className={classes.containerBox}>
      <Grid container spacing={4}>
        <Grid item xs>
          <Typography variant="h5" align="center" gutterBottom>
            Sign in to SlangSlang
          </Typography>
        </Grid>

        <Grid container justify="center" alignItems="center">
          <Paper className={classes.paperBox}>
            <Grid container direction="column">
              <Grid item xs>
                <Typography variant="h6" align="center" gutterBottom>
                  Let's lead a trend
                </Typography>
              </Grid>
              <Grid xs>
                <Button fullWidth>카카오 로그인</Button>
              </Grid>
              <Grid xs>
                <Button fullWidth>네이버 로그인</Button>
              </Grid>
              <Grid xs>
                <Button fullWidth>구글 로그인</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
