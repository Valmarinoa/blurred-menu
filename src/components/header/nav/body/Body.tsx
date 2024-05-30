"use client";
import React from "react";
import styles from "./body.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { translate, blur } from "../../anim";

interface LinkItem {
  title: string;
  href: string;
  src: string;
  bg: string; // Add bg property
}

interface LinkProps {
  links: LinkItem[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: React.Dispatch<
    React.SetStateAction<{ isActive: boolean; index: number }>
  >;
  setBackgroundColor: (color: string) => void; // Add setBackgroundColor prop
}

const Body = ({
  links,
  selectedLink,
  setSelectedLink,
  setBackgroundColor,
}: LinkProps) => {
  const getChar = (title: string) => {
    let chars: React.JSX.Element[] = [];
    title.split("").forEach((char, index) => {
      chars.push(
        <motion.span
          custom={[index * 0.02, (title.length - index) * 0.02]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={`c_${index}`}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href, bg } = link;
        return (
          <Link
            key={`l_${index}`}
            href={href}
            onMouseOver={() => {
              setSelectedLink({ isActive: true, index });
              setBackgroundColor(bg); // Set background color on hover
            }}
            onMouseLeave={() => {
              setSelectedLink({ isActive: false, index });
            }}
          >
            <motion.p
              variants={blur}
              initial="initial"
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
            >
              {getChar(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
