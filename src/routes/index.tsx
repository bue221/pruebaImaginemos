import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { PATHS } from "../constants/routes.constants";

const HomePage = lazy(() => import("../components/Pages/Home"));
const LoginPage = lazy(() => import("../components/Pages/Login"));
const RegisterPage = lazy(() => import("../components/Pages/Register"));
const NotFoundPage = lazy(() => import("../components/Pages/NotFoundPage"));

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={PATHS.HOME} />
      </Route>
      <Route exact path={PATHS.HOME} component={HomePage} />
      <Route path={PATHS.LOGIN} component={LoginPage} />
      <Route path={PATHS.REGISTER} component={RegisterPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
};
