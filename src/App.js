import { Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
// import SignIn from "./containers/Auth/SignIn/SignIn";
// import Login from "./containers/Auth/Login/Login";
import Class from "./containers/Class/Class";
import Explore from "./containers/Explore/Explore";
import Home from "./containers/Home/Home";
import Layout from "./hoc/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video from "./containers/Video/Video";
// import AuthRoute from "./components/utils/AuthRoute/AuthRoute";
import Category from "./containers/Category/Category";
import ClassItem from "./containers/Class/ClassItem/ClassItem";
import EditorsPick from "./containers/EditorsPick/EditorsPick";
import EventPage from "./containers/Event/Event";
import EventItem from "./containers/Event/EventItem/EventItem";
// import { useState, useEffect } from "react";

// import "~slick-carousel/slick/slick.css";
// ;
// import logo from "./logo.svg";

function App() {
  let routes = (
    <Switch>
      <Route path="/Home" component={Home} />
      <Route path="/content" component={Explore} />
      <Route path="/event/:slug" component={EventItem} />
      <Route path="/event" component={EventPage} />
      <Route path="/class/:slug" component={ClassItem} />
      <Route path="/class" component={Class} />
      <Route path="/about" component={About} />
      <Route path="/ep/:slug" component={EditorsPick} />
      {/* <AuthRoute path="/signin" component={SignIn} />
      <AuthRoute path="/login" component={Login} /> */}
      <Route path="/collection/:slug" component={Video} />
      <Route path="/category/:slug" component={Category} />
      <Route path="/" exact component={Home} />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
}

export default App;
