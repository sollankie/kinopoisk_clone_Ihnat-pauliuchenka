import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import pixemaSVG from "../icons/pixema_light.svg";

const Nav: React.FC = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`${styles.nav} ${show ? styles.nav_black : ""}`}>
      <div className={styles.nav_contents}>
        <div className={styles.nav_logo}>
          <Link to="/">
            <img src={pixemaSVG} alt="Pixema Light Logo" />
          </Link>
        </div>
        <img
          onClick={() => navigate("/profile")}
          className={styles.avatar}
          src="https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;

