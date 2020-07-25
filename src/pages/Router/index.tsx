import React from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import CardList from "../CardList";
import Login from "../Login";
import CardForm from "../CardForm";

export default () => (
  <>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/cardForm" component={CardForm} />
      <Route path="/" component={CardList} />
    </Switch>
  </>
);
