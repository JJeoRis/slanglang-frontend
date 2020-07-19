import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Grid,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import GavelIcon from "@material-ui/icons/Gavel";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    iconBox: {
      fill: "white",
    },
  })
);

export default () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography variant="h5">SlangSlang</Typography>
            </Grid>
            <Grid item className={classes.iconBox}>
              <IconButton aria-label="judge" color="inherit">
                <GavelIcon />
              </IconButton>
              <IconButton aria-label="profile" color="inherit">
                <PersonIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
