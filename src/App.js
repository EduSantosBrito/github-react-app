import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/";
import Login from "./components/Login/";
import "./App.css";

const CLIENT_ID = "533c813c23b88a073584";
const SCOPE = "user";
const REDIRECT_URI = "http://localhost:3000/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
  }

  isLogged = () => {
    if (localStorage.getItem("token-oAuth")) {
      this.setState({
        token: localStorage.getItem("token-oAuth")
      });
      return true;
    }
    return false;
  };

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() => {
            return this.isLogged() ? (
              <Redirect to="/home" />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          path="/login"
          render={() => {
            return (
              <Login
                client_id={CLIENT_ID}
                scope={SCOPE}
                redirect_uri={REDIRECT_URI}
              />
            );
          }}
        />
        <Route path="/home" component={Home} />
      </Router>
    );
  }
}

export default App;
