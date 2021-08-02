import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";

import { onAuthStateChanged } from "../../../app/firebase";

import Google from "../../../assets/svg/google";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
  loginAsync,
  selectUser,
  changeUser,
} from "../../../features/user/userSlice";

import { useStyles } from "./style";

const Login = () => {
  const { root, container, padding } = useStyles();
  let history = useHistory();

  const userState = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(setUser);
    dispatch(changeUser(user));
    if (userState.user !== null && !userState.loading) {
      history.push("/home");
    }
    if (!!userState.error) {
      alert(userState.error);
    }
  }, [userState, history, user, dispatch]);

  useEffect(() => {
    if (userState.user !== null && !userState.loading) {
      history.push("/home");
    }
  }, [userState, history]);

  const handleLogin = () => {
    dispatch(loginAsync());
  };

  return (
    <div className={root}>
      <div className={container}>
        <div className={padding}>
          <div className={padding}>
            <h1>Chuckwudi</h1>
            <p>Order your delivery 🍖</p>
          </div>
          <Button
            onClick={handleLogin}
            variant="outlined"
            startIcon={<Google />}
          >
            Login with google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
