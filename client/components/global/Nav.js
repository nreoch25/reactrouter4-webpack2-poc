import React, { Component } from "react";
import { Link } from "react-router";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>{ " " }
        <Link to="/sports">Sports</Link>{ " " }
      </nav>
    );
  }
}

export default Nav;
