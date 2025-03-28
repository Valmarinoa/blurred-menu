"use client";

import styles from "./style.module.scss";
import Lenis from "@studio-freight/lenis";
import { useEffect, MouseEvent } from "react";
import { useSpring, MotionValue } from "framer-motion";
import Gallery from "@/components/gallery/Gallery";
import Description from "@/components/description/Description";

interface ProjectProps {
  name: string;
  handle: string;
}

const projects = [
  { name: "uno", handle: "uno" },
  { name: "dos", handle: "dos" },
  { name: "tres", handle: "tres" },
  { name: "cuatro", handle: "cuatro" },
  { name: "cinco", handle: "cinco" },
];

interface MousePosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export default function Home() {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition: MousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  const mouseMove = (e: MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const targetX = clientX - window.innerWidth * 0.25;
    const targetY = clientY - window.innerWidth * 0.3;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <main onMouseMove={mouseMove} className={styles.main}>
      {projects.map(({ handle }, i) => (
        <Gallery mousePosition={mousePosition} handle={handle} key={i} />
      ))}
      {/* <div className="fixed bottom-0 left-0 p-3 text-yellow-400 flex flex-col gap-4 w-full">
        <h2 className="text-[8vw] uppercase font-black leading-[0.8]">
          Amazonia
          <br /> Tones
        </h2>
        <div className="flex justify-between w-full">
          {" "}
          <span className="px-5 font-normal text-sm">
            A split image animation using clip-path css value, animated with
            framer motion and Nextjs. Inspired by: https://tux.co/en/ and
            photographer{" "}
            <a
              href="https://www.instagram.com/gleesonpaulino/?hl=en"
              className="underline-offset-2 underline pb-1"
            >
              Gleeson Paulino
            </a>
          </span>
          <p className="text-right">2025</p>
        </div>
      </div> */}

      {/* <Description mousePosition={mousePosition} projects={projects} /> */}
    </main>
  );
}
