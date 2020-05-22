import React from "react";
import { Link } from "react-router-dom";
const NoFound = () => {
  return (
    <div>
      <p className="error-msg">
        Oops! That ain't right! Trying again would be an cool idea.
      </p>
      <Link className="btn" to="/">
        Home
      </Link>
    </div>
  );
};

export default NoFound;
