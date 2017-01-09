import React, { Component } from "react";
import { fetchContent } from "../actions/AppActions";

class Arts extends Component {
  render() {
    return (
      <h1>Arts</h1>
    );
  }
}

Arts.need = [
  () => { return fetchContent("arts"); }
];

export default Arts;
