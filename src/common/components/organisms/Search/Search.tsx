import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import SearchBox from "../../molecules/SearchBox/index";
import AddIcon from "@material-ui/icons/Add";
import ShuffleIcon from "@material-ui/icons/Shuffle";

export default () => {
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs>
        <SearchBox />
      </Grid>
      <Grid item>
        <IconButton>
          <ShuffleIcon />
        </IconButton>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
