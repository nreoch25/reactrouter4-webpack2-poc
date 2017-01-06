import React, { Component } from "react";
import Nav from "./global/Nav";
import { fetchPosts, fetchPhotos } from "../actions/AppActions";

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

App.need = [
  () => { return fetchPosts(); },
  () => { return fetchPhotos(); }
];

export default App;
