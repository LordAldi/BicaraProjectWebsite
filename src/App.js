import { Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
import SignIn from "./containers/Auth/SignIn/SignIn";
import Class from "./containers/Class/Class";
import Explore from "./containers/Explore/Explore";
import Home from "./containers/Home/Home";
import Layout from "./hoc/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "~slick-carousel/slick/slick.css";
// ;
// import logo from "./logo.svg";

function App() {
  let routes = (
    <Switch>
      <Route path="/Home" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/class" component={Class} />
      <Route path="/about" component={About} />
      <Route path="/signin" component={SignIn} />
      <Route path="/" component={Home} />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
}

export default App;
