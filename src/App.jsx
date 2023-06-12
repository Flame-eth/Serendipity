import { useState } from "react";

import "./App.scss";
import { Navbar } from "./components";
import Hero from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
