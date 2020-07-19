import React from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import CardList from "../CardList";

export default () => (
  <>
    <Switch>
      <Route path="/" component={CardList} />
    </Switch>
  </>
);
