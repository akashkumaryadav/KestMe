import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="container text-center"
      style={{ paddingTop: "50%", transform: "translateY(-50%)" }}
    >
      <h1>
        404 Page Not Found{" "}
        <span role="img" aria-label="danger-emote">
          😈
        </span>
      </h1>
      <span style={{ fontSize: "1.2rem" }}>
        Let's Go Back
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          Home
        </Link>
      </span>
    </div>
  );
};

export default NotFound;
