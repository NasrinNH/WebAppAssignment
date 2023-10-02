import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FaStream } from "react-icons/fa";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <FaStream />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Test APIs </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
