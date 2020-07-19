import React from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import CardList from "../CardList";
import Login from "../Login";

export default () => (
  <>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={CardList} />
    </Switch>
  </>
);
