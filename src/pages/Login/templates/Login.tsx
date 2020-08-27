import React from "react";
import {Container, Grid, Paper, Typography, Link} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import LoginButton, {ISuccessArgs} from "../../../common/components/organisms/LoginButton";
import {Link as RouterLink} from "react-router-dom";
import {toast} from "react-toastify";
import {Helmet} from "react-helmet";

const useStyles = makeStyles((theme) =>
    createStyles({
        paperBox: {
            width: "300px",
            padding: theme.spacing(1),
        },
        containerBox: {
            padding: theme.spacing(1),
        },
        title: {
            fontFamily: "Permanent Marker, cursive",
        },
    })
);

type IProps = {
    handleLogin: (username: string, email: string) => void;
};

export default ({handleLogin}: IProps) => {
    const classes = useStyles();

    const onSuccess = ({name, email}: ISuccessArgs) => {
        toast.success("Success to login", {autoClose: 1500});
        setTimeout(() => handleLogin(name, email), 1500);
    };

    const onFailure = () => {
    };

    return (
        <Container className={classes.containerBox}>
            <Grid container spacing={4} direction="column">
                <Grid item xs>
                    <Typography variant="h5" align="center" className={classes.title}>
                        Welcome to
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant="h3" align="center" gutterBottom className={classes.title}>
                        <Link component={RouterLink} to="/" color="inherit" underline="none">
                            SLANGSLANG
                        </Link>
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
                                    <LoginButton type="kakao" onSuccess={onSuccess} onFailure={onFailure}/>
                                </Grid>
                                <Grid item xs>
                                    <LoginButton type="naver" onSuccess={onSuccess} onFailure={onFailure}/>
                                </Grid>
                                <Grid item xs>
                                    <LoginButton type="google" onSuccess={onSuccess} onFailure={onFailure}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Helmet>
                <title>Login</title>
            </Helmet>
        </Container>
    );
};
