import React, { Component } from "react";
import { Link } from "react-router";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">OCELOT POC</a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/arts">Arts</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/sports">Sports</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
