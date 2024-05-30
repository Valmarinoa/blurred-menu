import React, { useState } from "react";
import styles from "./nav.module.scss";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./body/Body";
import ImageComponent from "./image/ImageComponent";

const Nav = () => {
  const links = [
    {
      title: "Vivero",
      href: "/",
      src: "image1.png",
      bg: "#",
    },
    {
      title: "Campiña",
      href: "/campina",
      src: "image2.png",
      bg: "#68AEF3",
    },
    {
      title: "Monte",
      href: "/monte",
      src: "image3.png",
      bg: "#e7e6f2",
    },
    {
      title: "Agüita",
      href: "/aguita",
      src: "image4.png",
      bg: "#b8a792",
    },
    {
      title: "Piña Oro",
      href: "/piñaoro",
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
      bg: "#68AEF3",
    },
  ];

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
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
          />
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
