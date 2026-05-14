import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import State from "./State";
import DistrictPage from "./DistrictPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/states" element={<State />} />
        <Route path="/district/:stateName" element={<DistrictPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;