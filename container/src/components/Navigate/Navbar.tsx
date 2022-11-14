import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import "./Navbar.css";
import { useHistory, useLocation } from "react-router-dom";

function Navbar() {
  const hideArray = ["/auth/signin"];
  const history = useHistory();
  const location = useLocation();
  const [show, handleShow] = useState(false);
  const [isShowNav, setIsShowNav] = useState(true);
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

  useEffect(() => {
    if (!hideArray.includes(location?.pathname)) {
      setIsShowNav(false);
    } else {
      setIsShowNav(true);
    }
  }, [location?.pathname]);

  return (
    <div
      className={`${isShowNav && "navbar__hide"} navbar ${
        show && "navbar__black"
      }`}
    >
      <div
        className="nav__logo"
        onClick={() => {
          history.push("/");
        }}
      >
        <Logo />
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
