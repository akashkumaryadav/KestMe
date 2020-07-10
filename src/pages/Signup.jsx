import React from "react";

import { Link } from "react-router-dom";
import { signInWithGithub, signInWithGoogle } from "../helpers/auth";

const Signup = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="brand">
        <h1>KestMe</h1>
        <p>
          A old way to text{" "}
          <span role="img" aria-label="crazyemote">
            😜
          </span>
        </p>
      </div>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button class="loginBtn loginBtn--github" onClick={signInWithGithub}>
            Signup with Github
          </button>

          <button class="loginBtn loginBtn--google" onClick={signInWithGoogle}>
            Signup with Google
          </button>
          <Link to="/" style={{ alignSelf: "center" }}>
            Have account ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
