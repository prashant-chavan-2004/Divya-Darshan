import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useParams } from "react-router-dom";
import "./Temple.css";

const Temple = () => {

  const { districtName } = useParams();

  const [temples, setTemples] = useState([]);
  const [selectedTemple, setSelectedTemple] = useState(null);

  // ✅ FIX: popup ref
  const popupRef = useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/temples/${districtName}`)
      .then((res) => {
        setTemples(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [districtName]);

  return (
    <div className="temple-page">

      {/* BACK BUTTON */}
      <button
        className="back-button"
        onClick={() => window.history.back()}
      >
        ⬅ Back
      </button>

      {/* TITLE */}
      <h1 className="district-title">
        {districtName} Temples
      </h1>

      {/* TEMPLE GRID */}
      <div className="district-container">

        {temples.map((temple, index) => (
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

            <h2 className="district-name">
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

    </div>
  );
};

export default Temple;