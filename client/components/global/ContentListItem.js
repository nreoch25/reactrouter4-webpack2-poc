import React, { Component } from "react";
import { Link } from "react-router";

export default function ContentListItem(props: Object) {
  let section = props.content.typeAttributes.sectionList[0];
  let sourceId = props.content.sourceId;
  let detailURL = `${section}/${sourceId}`;
  return (
    <Link to={detailURL}>
      <div className="well">
        <h4>{props.content.title}</h4>
        <h6>{props.content.description}</h6>
      </div>
    </Link>
  );
}
