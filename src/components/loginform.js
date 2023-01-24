import styles from "./loginform.module.css";
import React from "react";
import { Link } from "react-router-dom";
import voting from './voting.png'


function LoginForm() {
    return (
        <div className="page2">
        <img src={voting} height="400" width="400" style={{position: 'relative'}} alt="login"/>
        <div className={styles["cover2"]}>
            <h1>Online Voting System</h1>
            <br></br>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
                <Link to="/navbar">
                <button className={styles["login-btn"]}>Login</button></Link>
                <Link to="/navbar">
                <button className={styles["login-btn"]}>Continue as a Voter</button></Link>
        </div>
        </div>
    )
}
export default LoginForm;