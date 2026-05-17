import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import State from "./State";
import DistrictPage from "./DistrictPage";
import Temple from "./Temple";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/states" element={<State />} />
        <Route path="/district/:stateName" element={<DistrictPage />} />
        <Route path="/temple/:stateName/:districtName" element={<Temple />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;