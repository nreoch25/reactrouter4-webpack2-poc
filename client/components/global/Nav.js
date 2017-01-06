import React, { Component } from "react";
import { Link } from "react-router";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>{ " " }
        <Link to="/news">News</Link>{ " " }
        <Link to="/sports">Sports</Link>{ " " }
        <Link to="/arts">Arts</Link>
      </nav>
    );
  }
}

export default Nav;
