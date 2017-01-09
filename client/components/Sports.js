import React, { Component } from "react";
import ContentList from "./global/ContentList";
import { connect } from "react-redux";
import { fetchContent } from "../actions/AppActions";

class Sports extends Component {
  render() {
    return (
      <div>
        <h1>Sports</h1>
        <legend></legend>
        <ContentList content={this.props.content} />
      </div>
    );
  }
}

Sports.need = [
  () => { return fetchContent("sports"); }
];

function mapStateToProps(state) {
  return {
    content: state.app.content
  }
}

export default connect(mapStateToProps, {})(Sports);
