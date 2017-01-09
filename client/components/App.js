import React, { Component } from "react";
import Nav from "./global/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>
        {this.props.children}
        <footer>Site Footer</footer>
      </div>
    );
  }
}

export default App;
