import React, { Component } from "react"
import ContentListItem from "./ContentListItem";

export default function ContentList(props: Object) {
  return (
    <div>
      {
        props.content.map((item, i) => {
          return <ContentListItem key={i} content={item} />;
        })
      }
    </div>
  );
}
