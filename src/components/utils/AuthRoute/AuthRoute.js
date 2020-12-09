import { useContext } from "react";

import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../../context";

const AuthRoute = ({ component: Component, authenticated, ...rest }) => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth === true ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
