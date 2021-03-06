import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const devYear = new Date("2020").getFullYear();
  const thisYear = new Date().getFullYear();
  let year;

  devYear >= thisYear ? (year = devYear) : (year = `${devYear} - ${thisYear}`);

  return (
    <footer
      className="container-fluid"
      style={{
        color: "white",
        textAlign: "center",
        marginTop: "18px",
        background: "blue",
        padding: "18px"
      }}
    >
      &copy; Copyright <span className="text-warning">{year}</span> by
      <Link to="https://github.com/tsprasath/" className="text-light">
        {" "}
        Prasath Sivasubramaniyan{" "}
      </Link>
    </footer>
  );
}

export default Footer;
