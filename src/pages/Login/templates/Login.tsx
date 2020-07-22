import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import LoginButton, { ISuccessArgs } from "../../../common/components/organisms/LoginButton";

const useStyles = makeStyles((theme) =>
  createStyles({
    paperBox: {
      width: "300px",
      padding: theme.spacing(1),
    },
    containerBox: {
      padding: theme.spacing(1),
    },
  })
);

type IProps = {
  handleLogin: (username: string, email: string) => void;
};

export default ({ handleLogin }: IProps) => {
  const classes = useStyles();

  const onSuccess = ({ name, email }: ISuccessArgs) => {
    handleLogin(name, email);
  };

  const onFailure = () => {};

  return (
    <Container className={classes.containerBox}>
      <Grid container spacing={4}>
        <Grid item xs>
          <Typography variant="h5" align="center" gutterBottom>
            Sign in to SlangSlang
          </Typography>
        </Grid>

        <Grid item container justify="center" alignItems="center">
          <Paper className={classes.paperBox}>
            <Grid item container direction="column">
              <Grid item xs>
                <Typography variant="h6" align="center" gutterBottom>
                  Let's lead a trend
                </Typography>
              </Grid>
              <Grid item container direction="column" spacing={1}>
                <Grid item xs>
                  <LoginButton type="kakao" onSuccess={onSuccess} onFailure={onFailure} />
                </Grid>
                <Grid item xs>
                  <LoginButton type="naver" onSuccess={onSuccess} onFailure={onFailure} />
                </Grid>
                <Grid item xs>
                  <LoginButton type="google" onSuccess={onSuccess} onFailure={onFailure} />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
