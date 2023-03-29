import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Game } from "./Game";
import { StreamingChild } from "./Child";

function App() {
  return (
    <div className="App">
      <h1>TTT Game</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/TTT" element={<Game />}> */}
        <Route
          path="/TTT/:id"
          element={<Home />}
          render={(props) => <Home id={props.match.params.id} />}
        >
          {/* <Route path=":id" element={<StreamingChild />} /> */}
        </Route>
      </Routes>
      <footer>Her er footeren</footer>
    </div>
  );
}

export default App;
