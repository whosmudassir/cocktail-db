import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Error = () => {
  return (
    <section className="error">
      <div className="error-container">
        <h1>Oops! There's nothing here</h1>
        <Link to="/" className="goback">
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
