"use client";

import React from "react";
import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.copyright}></div>
      <div className={styles.name}>
        <p className={styles.codeBy}>Code by</p>
        <p className={styles.valentina}>Valentina</p>
        <p className={styles.marino}>Mariño</p>
      </div>
    </div>
  );
};

export default Logo;
