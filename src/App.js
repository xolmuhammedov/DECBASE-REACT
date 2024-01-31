import React from "react";
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service"

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Service />
    </div>
  );
}

export default App;
