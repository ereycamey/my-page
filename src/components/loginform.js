import styles from "./loginform.module.css";
import voting from './voting.png'
import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { Redirect } from "react-router-dom";

const LoginForm = props => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
    props.parentCallback(true);
    return <Redirect to="/default" />;
  }

  return (
    <div className="page2">
        <img src={voting} height="400" width="400" style={{position: 'relative'}} alt="login"/>
        <div className={styles["cover2"]}>
            <h1>Online Voting System</h1>
      {loggedIn && <Redirect to="/default" />}
            <form onSubmit={handleSubmit} noValidate>
                <center><div className="field">
                <div className="control">
                  <input
                    placeholder="Email Address"
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="field">
                <div className="control">
                  <input
                    placeholder="Password"
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
                <br></br>
                <br></br>
              <button
                type="submit"
                className={styles["vote-btn"]}
              >
                Login to Vote
              </button></center>
            </form>
        </div>
        </div>
    )
}
export default LoginForm;