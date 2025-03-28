"use client";

import { useState } from "react";
import styles from "./description.module.scss";
import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Project {
  name: string;
  handle: string;
}

interface Props {
  mousePosition: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
  projects: Project[];
}

const Description: React.FC<Props> = ({ mousePosition, projects }) => {
  const [index, setIndex] = useState(0);
  const { x, y } = mousePosition;

  return (
    <div className={styles.description}>
      <div className={styles.descriptionContainer}>
        {projects.map(({ name }, i) => (
          <p onMouseOver={() => setIndex(i)} key={`p${i}`}>
            {name}
          </p>
        ))}
      </div>

      <motion.div className={styles.vignette} style={{ x, y }}>
        <Image
          src={`/images/${projects[index].handle}/about.png`}
          alt={`${projects[index].name} about image`}
          fill
        />
      </motion.div>
    </div>
  );
};

export default Description;
