import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <div className="cocktail">
      <div className="img-container">
        <img className="imgsrc" src={image} alt={name} />
      </div>

      <div className="cocktail-footer">
        <h3 className="footer-name">{name}</h3>
        <h4 className="footer-glass">{glass}</h4>
        <p className="footer-info">{info}</p>
        <Link to={`/cocktail/${id}`} className="btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
