import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginWithGoogle, onAuthStateChanged } from "../../../app/firebase";
import Google from "../../../assets/svg/google";

const Login = () => {
  let history = useHistory();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(setUser);
    if (user !== null) {
      history.push("/home");
    }
  }, [user, history]);

  const handleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        history.push("/home");
        setUser(res);
      })
      .catch((err) => alert(err));
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage:
          "radial-gradient(#f7a52a 1px, transparent 1px), radial-gradient(#f7a52a 1px, transparent 1px)",
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
        padding: 0,
        margin: 0,
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 10,
          boxShadow: "0 10px 25px rgba(0, 0, 0, .3)",
          width: 450,
          padding: "8px 24px",
        }}
      >
        <div style={{ padding: "2em 0" }}>
          <div style={{ padding: "2em 0" }}>
            <h1>Chuckwudi</h1>
            <p>Order your delivery 🍖</p>
          </div>
          <Button
            onClick={handleLogin}
            variant="outlined"
            startIcon={<Google />}
          >
            Login with google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
