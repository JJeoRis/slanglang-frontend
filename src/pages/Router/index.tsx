import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import CardList from "../CardList";
import Login from "../Login";
import CardForm from "../CardForm";
import { observer } from "mobx-react-lite";
import AuthStore from "../../common/modules/store/AuthStore";

const Router = () => {
  const { token, syncToken } = useContext(AuthStore);
  useEffect(() => {
    syncToken();
  }, [token, syncToken]);

  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cardForm" component={CardForm} />
        <Route path="/" component={CardList} />
      </Switch>
    </>
  );
};

export default observer(Router);
