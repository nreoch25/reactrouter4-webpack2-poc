import React, { Component } from "react";
import { fetchContent } from "../actions/AppActions";

class News extends Component {
  render() {
    return (
      <h1>News</h1>
    );
  }
}

News.need = [
  () => { return fetchContent("news"); }
];

export default News;
