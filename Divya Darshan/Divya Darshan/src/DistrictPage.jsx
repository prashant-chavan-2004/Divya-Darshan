import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import districtData from "./districtData";
import "./DistrictPage.css";

const DistrictPage = () => {

  const { stateName } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stateKey = stateName
    .toLowerCase()
    .replace(/\s+/g, "_");

  const districts = districtData[stateKey] || [];

  return (
    <div className="district-page">

      <button
        className="back-button"
        onClick={() => navigate("/states")}
      >
      <bold> ⬅</bold> Back to States
      </button>

      <h1 className="district-title">
        {stateName}
      </h1>
      <div className="district-container">
        {
          districts.map((item, index) => (
            <div
              key={index}
              className="district-card"
            >
              <img
                src={item.image}
                alt={item.district}
                className="district-img"
              />
              <h2 className="district-name">
                {item.district}
              </h2>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default DistrictPage;