import React, { ChangeEvent, KeyboardEvent } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "white",
    },
  })
);

type IProps = {
  term: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEnter: () => void;
};

export default ({ term, handleChange, handleEnter }: IProps) => {
  const classes = useStyles();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.which === 13) {
      handleEnter();
    }
  };

  return (
    <TextField
      variant="outlined"
      className={classes.root}
      fullWidth
      value={term}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
