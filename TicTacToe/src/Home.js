import React from "react";
import { useParams } from "react-router";

export function Home() {
  let { id } = useParams();
  return (
    <main>
      <h1>{id}</h1>
      <p>Velkommen til denne side, hvor du kan spille TTT</p>
    </main>
  );
}
