import React, { Component } from "react";
import ContentList from "./global/ContentList";
import { connect } from "react-redux";
import { fetchContent } from "../actions/AppActions";

class Arts extends Component {
  render() {
    return (
      <div>
        <h1>Arts</h1>
        <legend></legend>
        <ContentList content={this.props.content} />
      </div>
    );
  }
}

Arts.need = [
  () => { return fetchContent("arts"); }
];

function mapStateToProps(state) {
  return {
    content: state.app.content
  }
}

export default connect(mapStateToProps, {})(Arts);
