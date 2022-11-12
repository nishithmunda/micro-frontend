import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const [show, handleShow] = useState(false);

  {
    console.log(history);
  }
  const navbarBackground = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarBackground);

    return () => {
      window.removeEventListener("scroll", navbarBackground);
    };
  });
  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <div
        className="nav__logo"
        onClick={() => {
          history.push("/");
        }}
      >
        <Logo />
      </div>

      <button
        className="nav__avatar"
        onClick={() => {
          history.push("/auth/signin");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Navbar;
