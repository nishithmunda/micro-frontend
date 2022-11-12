import React from "react";

const SignIn = ({ onSignIn }: Props) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => {
          onSignIn(true);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default SignIn;

interface Props {
  onSignIn: (e: boolean) => void;
}
