import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import { useParams } from "react-router-dom";
import "./Temple.css";

const Temple = () => {

  const { districtName } = useParams();

  const [temples, setTemples] = useState([]);
  const [selectedTemple, setSelectedTemple] = useState(null);

  const popupRef = useRef(null);

useEffect(() => {
  const url = `${import.meta.env.VITE_API_URL}/api/temples/${districtName}`;
  console.log("Fetching:", url);
  console.log("districtName:", districtName);

  axios.get(url)
    .then((res) => {
      console.log("Status:", res.status);
      console.log("Data:", res.data);
      console.log("Is array:", Array.isArray(res.data));
      setTemples(res.data);
    })
    .catch((err) => {
      console.log("Error status:", err.response?.status);
      console.log("Error message:", err.response?.data);
    });
}, [districtName]);

  return (
    <div className="temple-page">

      <button
        className="back-button"
        onClick={() => window.history.back()}
      >
        ⬅ Back
      </button>

      <h1 className="district-title">
        {districtName} Temples
      </h1>

      <div className="district-container">

       {Array.isArray(temples) &&
  temples.map((temple, index) => (
    <div
      key={index}
      className="district-card"
      onClick={() => setSelectedTemple(temple)}
    >
      <img
        src={temple.templeImage}
        alt={temple.templeName}
        className="temple-image"
      />

      <h2 className="temple-name">
        {temple.templeName}
      </h2>
    </div>
  ))}
      </div>

      {/* POPUP */}
      {selectedTemple && (
        <div className="popup-overlay">

          <div className="popup-box" ref={popupRef}>

            <button
              className="close-btn"
              onClick={() => setSelectedTemple(null)}
            >
              ✖
            </button>

            <img
              src={selectedTemple.templeImage}
              alt={selectedTemple.templeName}
              className="popup-image"
            />

            <h1>{selectedTemple.templeName}</h1>

            <p><b>State:</b> {selectedTemple.stateName}</p>
            <p><b>District:</b> {selectedTemple.districtName}</p>

            <p><b>History:</b><br /><br />
              {selectedTemple.templeHistory}
            </p>

            <p><b>Festival:</b><br /><br />
              {selectedTemple.ritualsFestival}
            </p>

            <p><b>Darshan Time:</b> {selectedTemple.darshanTiming}</p>
            <p><b>Pooja Time:</b> {selectedTemple.poojaTiming}</p>
            <p><b>Dress Code:</b> {selectedTemple.dressCodeRules}</p>

            <p><b>Guidelines:</b><br /><br />
              {selectedTemple.visitorGuidelines}
            </p>

            
            <div className="popup-buttons">

              <a
                href={selectedTemple.googleMapLink}
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go With Google
              </a>

              <a
                href={selectedTemple.hotelLink}
                target="_blank"
                rel="noreferrer"
                className="hotel-btn"
              >
                Hotel Find With Google
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="add-temple-wrapper">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSeB4z9aab2X89EWLbebq6WLG9a8bwKzfdIx-RAZuMhS0vj7Ow/viewform"
    target="_blank"
    rel="noreferrer"
  >
    <button className="add-temple-btn">
      + Add Temple
    </button>
  </a>
</div>
    </div>
  );
};

export default Temple;