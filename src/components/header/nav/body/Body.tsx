import React from "react";
import styles from "./body.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { translate, blur } from "../../anim";

interface LinkItem {
  title: string;
  href: string;
  src: string;
}

interface LinkProps {
  links: LinkItem[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: React.Dispatch<
    React.SetStateAction<{ isActive: boolean; index: number }>
  >;
}

const Body = ({ links, selectedLink, setSelectedLink }: LinkProps) => {
  //   return ever single character of the title inside of the span, then animate the span individually.
  const getChar = (title: string) => {
    let chars: React.JSX.Element[] = [];
    title.split("").forEach((char, index) => {
      chars.push(
        <motion.span
          // first value is 'enter' and second value is 'exit'
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
        const { title, href } = link;
        return (
          <Link
            key={`l_${index}`}
            href={href}
            onMouseOver={() => {
              setSelectedLink({ isActive: true, index });
            }}
            onMouseLeave={() => {
              setSelectedLink({ isActive: false, index });
            }}
          >
            {/* here we vary the motion for every single link.
            If the selected link is active, and the link is not the one that has been hovered, 
            then we want to blur it, else we dont want to blur it.*/}
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
