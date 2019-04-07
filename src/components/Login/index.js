import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    };
  }
  componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    if (code) {
      fetch(`https://gatekeeper-brito.herokuapp.com/authenticate/${code}`)
        .then(response => response.json())
        .then(({ token }) => {
          this.setState({
            token
          });
        });
    }
  }
  render() {
    return (
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${
          this.props.client_id
        }&scope=${this.props.scope}&redirect_uri=${this.props.redirect_uri}`}
      >
        <button>Login</button>
      </a>
    );
  }
}
