import { useState, useRef } from "react";
import axios from "axios";

import classes from "./AuthForm.module.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // validation

    setIsLogin(true);
    if (isLogin) {
    } else {
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
          {
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response.data.error.message);
          if (err.response.data.error.message) {
            setErrorMessage(err.response.data.error.message);
            alert(err.response.data.error.message);
          }
        })
        .finally(() => {
          // alert(errorMessage);
          setIsLoading(false);
        });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <h5 style={{ color: "white" }}>{errorMessage}</h5>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Loading...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
