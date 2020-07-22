import React, { useCallback, useContext } from "react";
import Login from "./templates/Login";
import { observer } from "mobx-react-lite";
import AuthStore from "../../common/modules/store/AuthStore";
import { useHistory } from "react-router-dom";

const LoginController = () => {
  const authStore = useContext(AuthStore);
  const history = useHistory();

  const { login } = authStore;

  const onSuccessRouting = useCallback(() => history.push("/"), [history]);

  const handleLogin = async (username: string, email: string) => {
    await login(username, email);
    onSuccessRouting();
  };

  return <Login handleLogin={handleLogin} />;
};

export default observer(LoginController);
