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
        <footer style={{marginTop: "20px"}}>
          <div className="panel panel-default">
            <div className="panel-footer"><h4>Ocelot Footer</h4></div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
