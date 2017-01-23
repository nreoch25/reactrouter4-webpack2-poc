import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetail } from "../actions/AppActions";


class Detail extends Component {
  componentDidMount() {
    this.props.fetchDetail(this.props.params.id);
  }
  render() {
    return (
      <div>
        <h1>DETAIL</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    detail: state.app.detail
  }
}

export default connect(mapStateToProps, { fetchDetail })(Detail);
