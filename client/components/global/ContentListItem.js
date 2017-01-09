import React, { Component } from "react";
import { Link } from "react-router";

export default function ContentListItem(props: Object) {
  console.log(props.content);
  return (
    <div className="well">
      <h4>{props.content.title}</h4>
      <h6>{props.content.description}</h6>
    </div>
  );
}
