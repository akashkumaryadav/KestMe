import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ChatRooms from "./pages/ChatRooms";
import ProtectedRoute from "./helpers/ProtectedRoute";
import PublicRoute from "./helpers/PublicRoute";
import { auth } from "./services/firebase";
import { ThemeProvider } from "@livechat/ui-kit";
import "./styles/App.css";
import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";

const theme = {
  vars: {
    "primary-color": "#6AB04A",
  },

  AgentBar: {
    css: {
      opacity: 1,
      backgroundColor: "${primary-color}",
      height: "60px",
    },
  },
  TextComposer: {
    css: {
      color: "#000",
    },
  },
  MessageList: {
    css: {
      borderStyle: "solid",
      borderWidth: "0px 0px 0px 0px",
      borderRadius: "40px 40px 0px 0px",
      borderColor: "blue",
      padding: "20px",
      fontSize: "1.2rem",
      backgroundColor: "whitesmoke",
      paddingBottom: "70px",
    },
  },
  Message: {
    MessageText: {
      css: {
        borderStyle: "solid",
        borderWidth: "0px",
      },
    },
  },
};

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
        setTimeout(() => setLoading(false), 1500);
      } else {
        setAuthenticated(false);
        setTimeout(() => setLoading(false), 1500);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        className=" container App"
        style={{
          boxShadow: "1px 1px 10px 10px  rgba(25,25,25,0.2)",
        }}
      >
        {loading && !auth.currentUser && <Loading />}
        {!loading && (
          <Router>
            <Switch>
              <PublicRoute
                path="/"
                authenticated={authenticated}
                exact
                component={Signin}
              />
              <PublicRoute
                path="/signup"
                authenticated={authenticated}
                exact
                component={Signup}
              />
              <ProtectedRoute
                path="/chatrooms"
                authenticated={authenticated}
                exact
                component={ChatRooms}
              />
              <Route component={NotFound} />
            </Switch>
          </Router>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
