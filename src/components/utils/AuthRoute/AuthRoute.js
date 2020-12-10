import { useContext } from "react";
import { UserContext } from "../../../Provider/UserProvider/UserProvider";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, authenticated, ...rest }) => {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user.isAuth === true ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
