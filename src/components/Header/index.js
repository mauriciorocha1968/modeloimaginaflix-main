import React from "react";
import styles from "./Header.module.css";

const Header = ({ black }) => {
  return (
    <div className={black ? styles.hblack : styles.header}>
      <div className={styles.logo}>
        <img src="./logoImaginaflix.svg" alt="" />
      </div>
      <div className={styles.user}>
        <img
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
