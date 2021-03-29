import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
import "./entry.style.css";
export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login")

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setpassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("fill up all the form");
    }
    // Todod call api to submit the form
    console.log(email, password);
  };
  
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
         {frmLoad ==="login" &&( 
        <LoginForm
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          email={email}
          pass={password}
        />)}
        {frmLoad === 'reset' &&(
        <ResetPassword
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          email={email}
          pass={password}
        />)}
      </Jumbotron>
    </div>
  );
};
