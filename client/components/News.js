import React, { Component } from "react";
import ContentList from "./global/ContentList";
import { connect } from "react-redux";
import { fetchContent } from "../actions/AppActions";

class News extends Component {
  componentDidMount() {
    this.props.fetchContent("news");
  }
  render() {
    return (
      <div>
        <h1>News</h1>
        <legend></legend>
        <ContentList content={this.props.content} />
      </div>
    );
  }
}

News.need = [
  () => { return fetchContent("news"); }
];

function mapStateToProps(state) {
  return {
    content: state.app.content
  }
}

export default connect(mapStateToProps, { fetchContent })(News);
