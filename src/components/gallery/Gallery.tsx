"use client";

import styles from "./gallery.module.scss";
import Image from "next/image";
import { motion, MotionValue } from "framer-motion";
import React from "react";

interface Props {
  mousePosition: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
  handle: string;
}

const Gallery: React.FC<Props> = ({ mousePosition, handle }) => {
  const { x, y } = mousePosition;

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <div className="absolute inset-0 z-10 backdrop-blur-[70px] " />
        <Image
          src={`/images/${handle}/background.png`}
          alt="background image"
          fill
        />
      </div>{" "}
      <motion.div
        className={`${styles.vignette} relative z-30`}
        style={{ x, y }}
      >
        <div className="absolute top-1/3 -left-10 -translate-x-10 z-[999] text-yellow-400  ">
          <h2 className="leading-[0.7] -translate-y-1/2 text-[7.5vw] font-extrabold tracking-tighter uppercase text-right">
            Amazonia
          </h2>
          <h2
            className="leading-[0.7] -translate-y-1/2 text-[7.5vw] font-extrabold tracking-tighter uppercase text-right"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #facc15",
              // textStroke: "1px #facc15", // this is optional and not supported in all browsers
            }}
          >
            Tones
          </h2>
          <div className="flex justify-between w-full -mt-3 ml-8 pl-20 flex-col">
            <span className="text-xs text-right">
              A split image animation using clip-path css value, animated with
              framer motion and Nextjs. Inspired by: https://tux.co/en/ and
              Olivier Larose. <br />
              All images by photographer{" "}
              <a
                href="https://www.instagram.com/gleesonpaulino/?hl=en"
                className="underline-offset-2 underline pb-1"
              >
                Gleeson Paulino
              </a>
            </span>
            <p className="text-right pt-4">©2025</p>
          </div>
        </div>
        <div className="absolute inset-6 z-30 backdrop-blur-[70px]" />
        <div className="absolute z-50 inset-6">
          <div className="absolute inset-6 z-40 backdrop-blur-[70px]" />
          <Image
            src={`/images/${handle}/about.png`}
            alt="vignette image"
            fill
          />
        </div>
        <Image src={`/images/${handle}/1.png`} alt="vignette image" fill />{" "}
      </motion.div>
    </div>
  );
};

export default Gallery;
