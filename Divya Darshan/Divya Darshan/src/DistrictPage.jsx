import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Add useNavigate
import districtData from "./districtData";
import "./DistrictPage.css";

const DistrictPage = () => {
  const { stateName } = useParams();
  const navigate = useNavigate(); // Add this

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const districts = districtData[decodeURIComponent(stateName)] || [];

  return (
    <div className="district-page">
      {/* BACK BUTTON - OPTIONAL */}
      <button 
        className="back-button"
        onClick={() => navigate('/states')}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        ← Back to States
      </button>

      {/* STATE TITLE */}
      <h1 className="district-title">
        {decodeURIComponent(stateName)}
      </h1>

      {/* REST OF YOUR CODE REMAINS SAME */}
      <div className="district-container">
        {districts.map((item, index) => (
          <div key={index} className="district-card">
            <img
              src={item.image}
              alt={item.temple}
              className="district-img"
            />
            <h3 className="state-name">{item.state}</h3>
            <h2 className="district-name">{item.district}</h2>
            <p className="temple-name">{item.temple}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistrictPage;