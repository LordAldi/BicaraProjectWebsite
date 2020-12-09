import { Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
import SignIn from "./containers/Auth/SignIn/SignIn";
import Login from "./containers/Auth/Login/Login";
import Class from "./containers/Class/Class";
import Explore from "./containers/Explore/Explore";
import Home from "./containers/Home/Home";
import Layout from "./hoc/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video from "./containers/Video/Video";
import AuthRoute from "./components/utils/AuthRoute/AuthRoute";
import { AuthContext } from "./context";
import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const DATA = gql`
  query me {
    me {
      id
      username
      email
    }
  }
`;
// import "~slick-carousel/slick/slick.css";
// ;
// import logo from "./logo.svg";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [ID, setID] = useState(null);
  const [username, setUsername] = useState(null);
  const { loading, error, data } = useQuery(DATA);

  const relog = (uusername, uID) => {
    setUsername(uusername);
    setID(uID);
    setIsAuth(true);
  };

  const login = (uusername, uID, uToken) => {
    localStorage.setItem("token", `Bearer ${uToken}`);
    setUsername(uusername);
    setID(uID);
    setToken(uToken);
    setIsAuth(true);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUsername(null);
    setID(null);
    setToken(null);
    setIsAuth(false);
  };
  // console.log(data);
  useEffect(() => {
    if (!loading && !error) {
      relog(data.me.username, data.me.id);
      console.log(data.me);
    }
  }, [loading]);
  let routes = (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        login: login,
        logout: logout,
        ID: ID,
        username: username,
        token: token,
      }}
    >
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/class" component={Class} />
        <Route path="/about" component={About} />
        <AuthRoute path="/signin" component={SignIn} />
        <AuthRoute path="/login" component={Login} />
        <Route path="/collection/:slug" component={Video} />
        <Route path="/" exact component={Home} />
      </Switch>
    </AuthContext.Provider>
  );

  return <Layout>{routes}</Layout>;
}

export default App;
