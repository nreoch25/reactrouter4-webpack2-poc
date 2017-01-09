import React, { Component } from "react";
import { fetchContent } from "../actions/AppActions";

class Sports extends Component {
  render() {
    return (
      <h1>Sports</h1>
    );
  }
}

Sports.need = [
  () => { return fetchContent("sports"); }
];

export default Sports;
