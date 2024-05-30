"use client";

import styles from "./header.module.scss";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./nav/Nav";
import Logo from "./logo/Logo";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [bgColor, setBgColor] = useState("#e7e6f2");
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <div className={styles.header} style={{ backgroundColor: bgColor }}>
      <div className={styles.bar}>
        <Link href="/">
          <Logo />
        </Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Gallery
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className={styles.shopContainer}
        >
          <div className={styles.el}>
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M304 192 A48 48 0 0 1 256 240 A48 48 0 0 1 208 192 A48 48 0 0 1 304 192 z"
              />
            </svg>
            <p>Valle del cauca, co</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setBackgroundColor={setBgColor} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
