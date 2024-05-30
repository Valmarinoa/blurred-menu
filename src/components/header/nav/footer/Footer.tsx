import React from "react";
import styles from "./footer.module.scss";
import { footer } from "../../anim";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      variants={footer}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.footer}
    >
      This is a personal project where I showcase daily life in my hometown,{" "}
      <br /> as I experiment with React.JS and Framer Motion animations.
    </motion.div>
  );
};

export default Footer;
