import React from "react";
import { signInWithGoogle, signInWithGithub } from "../helpers/auth";
import { Link } from "react-router-dom";
import Brand from "../components/Brand";

const Signin = () => {
  return (
    <>
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
        <Brand />
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="loginBtn loginBtn--github"
              onClick={signInWithGithub}
            >
              Login with Github
            </button>

            <button
              className="loginBtn loginBtn--google"
              onClick={signInWithGoogle}
            >
              Login with Google
            </button>
            <Link to="/signup" style={{ alignSelf: "center" }}>
              Not registerd ?
            </Link>
          </div>
        </div>
        <div
          style={{ marginTop: "40%", textAlign: "center", fontWeight: "bold" }}
        >
          crafted by{" "}
          <i
            className="fas fa-heart"
            style={{ color: "red", margin: "0.4rem" }}
          ></i>
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/akash_udaky"
            >
              udaky
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Signin;
// <form>
//   <input
//     type="email"
//     name="email"
//     value={email}
//     onChange={handleOnChange}
//   />
//   <input
//     type="password"
//     name="password"
//     value={password}
//     onChange={handleOnChange}
//   />
//   <button onClick={handleOnClick}>Login</button>
// </form>
//   const [user, setUser] = useState({
//   email: "",
//   password: "",
// });
// const { email, password } = user;
// const handleOnChange = (event) => {
//   return setUser({ ...user, [event.target.name]: event.target.value });
// };

// const handleOnClick = async (event) => {
//   event.preventDefault();
//   try {
//     await signin(email, password);
//   } catch (error) {
//     console.log(error);
//   }
// };
