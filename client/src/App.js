import { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { isLoggedIn } from "./redux/actions";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";

const App = ({ isLoggedIn }) => {
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
    </Switch>
  );
};

const mapDispatchToProps = (dispatch) => ({
  isLoggedIn: () => dispatch(isLoggedIn()),
  dispatch,
});

export default connect(null, mapDispatchToProps)(App);
