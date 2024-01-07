import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Eagle7 from "./components/Eagle7";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eagle7" element={<Eagle7 />} />
      </Routes>
    </>
  );
}
