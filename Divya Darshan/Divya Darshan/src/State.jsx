import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import statesData from "./statesData";
import "./State.css";

const State = () => {
  const [search, setSearch] = useState("");

  const filteredStates = statesData.filter((state) =>
    state.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="containerstate">
      <input
        type="text"
        placeholder="Search State..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="state-grid">
        {filteredStates.map((state, index) => (
          <div className="state-card" key={index}>
            <div className="img-box">
              <img
                src={state.image}
                alt={state.name}
                className="state-img"
              />
            </div>
            <h3 className="state-name">{state.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default State;