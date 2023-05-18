import React from "react";
import NavStyle from "./styles/Topbar.module.css";
import logo from "./../logo.png";
import styles from "./styles/Home.module.css";

const Topbar = () => {
  return (
    <div className={NavStyle.Navbar} id="navbar">
      <div>
        <div className={NavStyle.logo}>
          <img
            style={{
              height: "3rem",
              width: "3rem",
              borderRadius: "50%",
            }}
            src={logo}
            alt="logo"
          />
          <span>E-Kitab</span>
        </div>
        <div className={NavStyle.action}>
          <button className={styles.btn}>Login</button>
          {/* <button style={{
                        background: "var(--indigo)",
                        color: "var(--white)"
                    }}>
                        Signup
                    </button> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
