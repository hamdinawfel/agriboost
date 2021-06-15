import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, admin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        localStorage.accessToken  ? (
        <Component {...props} />
      ) : (
        <Redirect to="/admin/login" />
      )
    }
  />
);

const mapStateToProps = state => ({
    admin: state.admin
});
export default connect(mapStateToProps)(PrivateRoute);