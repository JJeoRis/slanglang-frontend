import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Link } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import GavelIcon from "@material-ui/icons/Gavel";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useHistory, Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontFamily: "Permanent Marker, cursive",
    },
    iconBox: {
      fill: "white",
    },
  })
);

export default () => {
  const classes = useStyles();
  const history = useHistory();
  const goToLogin = () => history.push("/login");

  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography className={classes.title} variant="h5">
                <Link component={RouterLink} to="/" color="inherit" underline="none">
                  SlangSlang
                </Link>
              </Typography>
            </Grid>
            <Grid item className={classes.iconBox}>
              <IconButton aria-label="judge" color="inherit">
                <GavelIcon />
              </IconButton>
              <IconButton aria-label="profile" color="inherit" onClick={goToLogin}>
                <PersonIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
