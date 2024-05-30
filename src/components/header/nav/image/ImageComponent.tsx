import React from "react";
import styles from "./image.module.scss";
import { motion } from "framer-motion";
import { opacity } from "../../anim";
import Image from "next/image";

interface ImageProps {
  src: string;
  isActive: boolean;
}

const ImageComponent = ({ src, isActive }: ImageProps) => {
  return (
    <motion.div
      className={styles.imageContainer}
      variants={opacity}
      animate={isActive ? "open" : "closed"}
    >
      <Image src={`/images/${src}`} fill={true} alt="image" />
    </motion.div>
  );
};

export default ImageComponent;
