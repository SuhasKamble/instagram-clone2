import { Button } from "@material-ui/core";
import { auth } from "./firebase";
import React from "react";
import { provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/294px-Instagram_logo.svg.png"
        alt=""
      />

      <Button className="login__button" onClick={signIn}>
        SignIn with Google
      </Button>
    </div>
  );
}

export default Login;
