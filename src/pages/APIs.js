import React from "react";

import "../styles/APIs.css";
import GoogleTranslate from "../components/GoogleTranslate";
import Airports from "../components/Airports";
import Addresses from "../components/Addresses";

function APIs() {
  return (
    <div className="api-container">
      <h2>Ready to use APIs</h2>
      <div className="ready-api">
        <div>
          <GoogleTranslate />
        </div>
        <div>
          <Airports />
        </div>
      </div>

      <h2>My Personal API</h2>
      <div className="">
        <Addresses />
      </div>
    </div>
  );
}

export default APIs;
