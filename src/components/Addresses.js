import { useState } from "react";
import axios from "axios";
import "../styles/Addresses.css";

export default function Addresses() {
  const [civic, setCivic] = useState();
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postal, setPostal] = useState("");

  const [addresses, setAddresses] = useState([]);

  function handleSubmit(e) {
    console.log("Should fecth a airport");

    const options = {
      method: "GET",
      url: "https://transactional-webapp-vc7a.onrender.com/getall",
    };

    axios(options)
      .then((res) => {
        console.log("res: ", res.data);
        setAddresses(res.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });

    e.preventDefault();
    console.log("Should fecth a airport");
  }

  function handleSaveAddress(e) {
    const options = {
      method: "POST",
      url: "https://transactional-webapp-vc7a.onrender.com/save",
      data: {
        civic,
        street,
        city,
        country,
        postal,
      },
    };

    axios(options)
      .then((res) => {
        console.log("res: ", res.data);
        setAddresses(res.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });

    e.preventDefault();
    console.log("Should fecth a airport");
  }

  return (
    <div className="personal-api-container">
      <form onSubmit={handleSubmit}>
        <div className="personal-api-input">
          <label>Civic number</label>
          <input
            type="text"
            value={civic}
            onChange={(e) => setCivic(Number(e.target.value))}
          />
        </div>

        <div className="personal-api-input">
          <label>Street</label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>

        <div className="personal-api-input">
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="personal-api-input">
          <label>Countery</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="personal-api-input">
          <label>PostalCode</label>
          <input
            type="text"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
          />
        </div>

        <button
          className="personal-api-button"
          type="button"
          onClick={handleSaveAddress}
        >
          Save An Address
        </button>

        <button className="personal-api-button">Load Addresses</button>
      </form>
      <div>
        {!!addresses.length &&
          addresses.map((el) => (
            <p>
              {el.civic}, {el.street}, {el.city}, {el.postal}, {el.country}
            </p>
          ))}
      </div>
    </div>
  );
}
