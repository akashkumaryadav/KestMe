import React from "react";
import { signout } from "../helpers/auth";
import { auth } from "../services/firebase";
import { Link } from "react-router-dom";

const Home = () => {
  console.log(auth.currentUser);
  return (
    <div>
      This is home page
      <ul>
        <li>
          <Link to="/signin">signin</Link>
        </li>
        <li>
          <Link to="/signup">signup</Link>
        </li>
        <li>
          <Link to="/chatroom">chatroom</Link>
        </li>
      </ul>
      {auth.currentUser && (
        <button
          onClick={() => {
            signout();
          }}
        >
          signout
        </button>
      )}
    </div>
  );
};

export default Home;
