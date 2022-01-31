import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import MovieDescription from "./pages/MovieDescription";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/description/:id" element={<MovieDescription />} />
    </Routes>
  );
}

export default App;
