import React, { ChangeEvent, useEffect } from "react";
import { Grid, IconButton } from "@material-ui/core";
import SearchBox from "../../molecules/SearchBox/index";
import AddIcon from "@material-ui/icons/Add";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import { useHistory, useLocation } from "react-router-dom";
import { url } from "../../../constants/index";
import { useState } from "react";
import { convertParamsToQuery, convertQueryToParams } from "../../../../pages/CardList/utils/index";

export default () => {
  const history = useHistory();
  const { search } = useLocation();

  useEffect(() => {
    const { keyWord: currentKeyWord } = convertQueryToParams(search);
    setTerm(currentKeyWord ? currentKeyWord : "");
  }, [search]);

  const goToCardForm = () => history.push(url.cardForm);
  const [term, setTerm] = useState("");

  const handleTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  };

  const handleEnter = () => {
    history.push({
      pathname: "/",
      search: !term ? "" : convertParamsToQuery({ keyWord: term }),
    });
  };

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs>
        <SearchBox term={term} handleChange={handleTermChange} handleEnter={handleEnter} />
      </Grid>
      <Grid item>
        <IconButton>
          <ShuffleIcon />
        </IconButton>
        <IconButton onClick={goToCardForm}>
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
