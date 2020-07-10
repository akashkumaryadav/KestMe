import React from "react";

import "../styles/loading.css";

const Loading = () => {
  return (
    <div
      style={{
        fontFamily: "Roboto, sans-serif",
        fontSize: "1rem",
        lineHeight: 1.5,
        display: "flex",
        WebkitBoxAlign: "center",
        alignItems: "center",
        WebkitBoxPack: "center",
        justifyContent: "center",
        margin: 0,
        minHeight: "100vh",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        id="container-load"
        style={{
          transform: "translateY(-50%)",
          padding: "0.2rem",
        }}
      >
        <p className="loading-text" aria-label="Loading">
          <span className="letter" aria-hidden="true">
            L
          </span>
          <span className="letter" aria-hidden="true">
            o
          </span>
          <span className="letter" aria-hidden="true">
            a
          </span>
          <span className="letter" aria-hidden="true">
            d
          </span>
          <span className="letter" aria-hidden="true">
            i
          </span>
          <span className="letter" aria-hidden="true">
            n
          </span>
          <span className="letter" aria-hidden="true">
            g
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loading;
