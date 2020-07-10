import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../services/firebase";

const ProtectedRoutes = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default ProtectedRoutes;
