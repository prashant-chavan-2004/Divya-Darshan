import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import districtData from "./districtData";
import "./DistrictPage.css";
import temple from "./Temple";

const DistrictPage = () => {

  const { stateName } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stateKey = stateName
    .toLowerCase()
    .replace(/\s+/g, "_");

  const districts =
    districtData[stateKey] || [];

  return (
    <div className="district-page">

      {/* Back Button */}
      <button
        className="back-button"
        onClick={() => navigate("/states")}
      >
        ⬅ Back to States
      </button>

      {/* State Title */}
      <h1 className="district-title">
        {stateName}
      </h1>

      {/* District Cards */}
      <div className="district-container">

        {districts.map((item, index) => (
          <div
            key={index}
            className="district-card"

            onClick={() =>
              navigate(
                `/temple/${stateName}/${item.district}`
              )
            }
          >

            {/* District Image */}
            <img
              src={item.image}
              alt={item.district}
              className="district-img"
            />

            {/* District Name */}
            <h2 className="district-name">
              {item.district}
            </h2>

          </div>
        ))}

      </div>

    </div>
  );
};

export default DistrictPage;