import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const { user: currentUser } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser.token === null ? (
          <Redirect to="/sign-in" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
