import { useState } from "react";
import axios from "axios";
import "../styles/Airports.css";

export default function Airports() {
  const [iataCode, setIataCode] = useState("");
  const [airportData, setAirportData] = useState("");

  function handleSubmit(e) {
    const options = {
      method: "GET",
      url: "https://airport-info.p.rapidapi.com/airport",
      params: { iata: iataCode },
      headers: {
        "X-RapidAPI-Key": "a290f8d3d7msh8b8f1306044ca0cp1e3e70jsn2066f472fc51",
        "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
      },
    };

    axios(options)
      .then((res) => {
        console.log("res.data.name: ", res.data);
        setAirportData(res.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });

    e.preventDefault();
  }

  return (
    <>
      <p className="api-title">Airports API</p>
      <form onSubmit={handleSubmit}>
        <label className="api-input">
          Enter an airport code (YYZ, YUL, etc...)
        </label>
        <input
          type="text"
          value={iataCode}
          onChange={(e) => setIataCode(e.target.value)}
        />
        {true && (
          <div className="airport-result">
            <div className="ready-api-input">
              <label>Airport name: </label>
              <span>{airportData.name}</span>
            </div>

            <div className="ready-api-input">
              <label>Airport website: </label>
              <span>{airportData.website}</span>
            </div>

            <div className="ready-api-input">
              <label>Airport Latitude: </label>
              <span>{airportData.latitude}</span>
            </div>

            <div className="ready-api-input">
              <label>Airport Longitude: </label>
              <span>{airportData.longitude}</span>
            </div>
          </div>
        )}
        <button className="api-button">Find Airport!</button>{" "}
      </form>
    </>
  );
}
