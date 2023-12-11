import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Favorite from "./components/fav";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
