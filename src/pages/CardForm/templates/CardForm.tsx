import React from "react";
import TopAppBar from "../../../common/components/organisms/TopAppBar/index";
import { Container, Paper, TextField, Grid, Button, Typography } from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    paperWrapper: {
      padding: theme.spacing(2, 0),
    },
    paper: {
      padding: theme.spacing(2),
    },
    actionButton: {
      marginLeft: theme.spacing(2),
    },
    tagBox: {
      "& input": {
        minWidth: "50px",
      },
    },
  })
);

type IProps = {
  tagList: string[];
  addTag: (key: string) => void;
  deleteTag: (key: string, index: number) => void;
};

export default ({ tagList, addTag, deleteTag }: IProps) => {
  const classes = useStyles();

  return (
    <>
      <TopAppBar />
      <Container maxWidth="sm">
        <div className={classes.paperWrapper}>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={2}>
              <Grid item xs>
                <Typography align="center" variant="h5" gutterBottom>
                  그동안 없던 새로운 단어를 추가해봐요
                </Typography>
              </Grid>
              <Grid item xs>
                <TextField
                  label="단어"
                  placeholder="단어나 간단한 문장도 좋습니다"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  label="단어 뜻"
                  placeholder="단어가 가진 뜻에 대해 간략히 설명해주세요"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={5}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  label="예제"
                  placeholder="단어가 사용되는 예를 적어주세요"
                  fullWidth
                  rows={3}
                  multiline
                  variant="outlined"
                />
              </Grid>
              <Grid item xs className={classes.tagBox}>
                <ChipInput
                  variant="outlined"
                  label="태그"
                  value={tagList}
                  onAdd={(chip) => addTag(chip)}
                  onDelete={(chip, index) => deleteTag(chip, index)}
                  newChipKeys={["Enter", " "]}
                  fullWidth
                />
              </Grid>
              <Grid item xs container justify="flex-end">
                <Grid item>
                  <Button variant="contained">예제 추가</Button>
                </Grid>
                <Grid item className={classes.actionButton}>
                  <Button variant="contained" color="primary">
                    등록
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </>
  );
};
