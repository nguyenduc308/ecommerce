import React from "react";
import { Route, Redirect } from "react-router-dom";
import PATHS from "../contants/paths";
function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to={PATHS.SIGNIN} />;
        }
      }}
    />
  );
}

export default PrivateRoute;
