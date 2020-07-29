import React, { useState, useEffect } from "react";
import TopAppBar from "../../../common/components/organisms/TopAppBar/index";
import {
  Container,
  Paper,
  TextField,
  Grid,
  Button,
  Typography,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { ICardForm } from "../module/repository/CardFormRepository";

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
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

type IProps = {
  handleCardCreation: (formData: ICardForm) => void;
  loading: boolean;
};

const TAG_LIST_NAME = "tagList";

export default ({ handleCardCreation, loading }: IProps) => {
  const classes = useStyles();

  const { register, errors, handleSubmit, setValue } = useForm<ICardForm>({
    reValidateMode: "onChange",
  });

  const [tagList, setTagList] = useState<string[]>([]);
  const addTag = (key: string) => {
    const newTagList = [...tagList, key];
    setTagList(newTagList);
    setValue(TAG_LIST_NAME, newTagList);
  };

  const deleteTag = (key: string, deleteIdx: number) => {
    const newTagList = tagList.filter((_, idx) => idx !== deleteIdx);
    setTagList(newTagList);
    setValue(TAG_LIST_NAME, newTagList);
  };

  useEffect(() => {
    register(TAG_LIST_NAME);
  }, [register]);

  return (
    <>
      <TopAppBar />
      <Container maxWidth="md">
        <div className={classes.paperWrapper}>
          <Paper className={classes.paper}>
            <form onSubmit={handleSubmit(handleCardCreation)}>
              <Grid container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography align="center" variant="h5" gutterBottom>
                    그동안 없던 새로운 단어를 추가해봐요
                  </Typography>
                </Grid>
                <Grid item xs>
                  <TextField
                    name="term"
                    label="단어"
                    placeholder="단어나 간단한 문장도 좋습니다"
                    fullWidth
                    required
                    variant="outlined"
                    inputRef={register({ required: true })}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="단어 뜻"
                    placeholder="단어가 가진 뜻에 대해 간략히 설명해주세요"
                    fullWidth
                    name="description"
                    variant="outlined"
                    multiline
                    required
                    rows={5}
                    inputRef={register({ required: true })}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="예제"
                    placeholder="단어가 사용되는 예를 적어주세요"
                    fullWidth
                    rows={3}
                    name="example"
                    multiline
                    required
                    variant="outlined"
                    inputRef={register({ required: true })}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="움짤"
                    placeholder="움짤 주소를 입력해주세요"
                    fullWidth
                    error={!!errors.gifUrlList}
                    helperText={!!errors.gifUrlList && "정확한 URL을 입력해주세요"}
                    name="gifUrlList[0]"
                    variant="outlined"
                    inputRef={register({
                      pattern: {
                        value: /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/,
                        message: "정확한 URL을 입력해주세요",
                      },
                    })}
                  />
                </Grid>
                <Grid item xs className={classes.tagBox}>
                  <ChipInput
                    variant="outlined"
                    label="태그"
                    value={tagList}
                    onAdd={addTag}
                    onDelete={deleteTag}
                    newChipKeys={["Enter", " "]}
                    fullWidth
                  />
                </Grid>
                <Grid item xs container justify="flex-end">
                  <Grid item>
                    <Button variant="contained">예제 추가</Button>
                  </Grid>
                  <Grid item className={classes.actionButton}>
                    <Button type="submit" variant="contained" color="primary">
                      등록
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </div>
      </Container>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
