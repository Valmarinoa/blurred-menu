"use client";
import React, { useState } from "react";
import styles from "./nav.module.scss";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./body/Body";
import ImageComponent from "./image/ImageComponent";
import Footer from "./footer/Footer";
interface LinkItem {
  title: string;
  href: string;
  src: string;
  bg: string;
}

interface NavProps {
  setBackgroundColor: (color: string) => void;
}
const Nav: React.FC<NavProps> = ({ setBackgroundColor }) => {
  const links = [
    {
      title: "Vivero",
      href: "/",
      src: "image1.png",
      bg: "#80c46a",
    },
    {
      title: "Monte",
      href: "/monte",
      src: "image3.png",
      bg: "#e7e6f2",
    },
    {
      title: "Campiña",
      href: "/campina",
      src: "image2.png",
      bg: "#d14e8e",
    },

    {
      title: "Agüita",
      href: "/aguita",
      src: "image4.png",
      bg: "#b8a792",
    },
    {
      title: "Piña Oro",
      href: "/pinaoro",
      src: "image5.png",
      bg: "#fecd59",
    },
    {
      title: "Valle",
      href: "/valle",
      src: "image7.png",
      bg: "#5385d2",
    },
    {
      title: "Virgencita",
      href: "/virgen",
      src: "image6.png",
      bg: "#aff8ff",
    },
  ];

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const handleLinkClick = (index: number) => {
    setSelectedLink({ isActive: true, index });
    setBackgroundColor(links[index].bg);
  };

  return (
    <motion.div
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setBackgroundColor={setBackgroundColor}
          />
          <Footer />
        </div>
        <ImageComponent
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
};

export default Nav;
