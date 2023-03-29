import React from "react";
import { useParams } from "react-router-dom";

export function StreamingChild() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  return (
    <div>
      <h1>{this.props.id}</h1>
      <h3>Next player: {id}</h3>
    </div>
  );
}
