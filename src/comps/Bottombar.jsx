import React from "react";
import styles from "./styles/Input.module.css";

const Bottombar = ({ children }) => {
  return <div className={styles.bottom_bar}>{children}</div>;
};

export default Bottombar;
