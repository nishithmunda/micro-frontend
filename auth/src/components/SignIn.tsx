import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./style.css";

const SignIn = ({ onSignIn }: Props) => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        height: "100vh",
      }}
      className="signup"
    >
      <form className="signup__form">
        <div className="signup__input__wrapper">
          <TextField
            required
            id="standard-helperText"
            label="Email"
            variant="filled"
            defaultValue={email}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="signup__input__wrapper">
          <TextField
            required
            variant="filled"
            type="password"
            id="outlined-required"
            label="Password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          style={{
            marginTop: "50px",
            background: "#5436A9",
            color: "#FFF",
          }}
          onClick={() => {
            onSignIn(true);
          }}
          variant="contained"
          disableElevation
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default SignIn;

interface Props {
  onSignIn: (e: boolean) => void;
}
