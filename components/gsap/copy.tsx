"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

interface Props {
  children: React.ReactNode;
  onScrollTrigger?: boolean;
  delay?: number;
}

gsap.registerPlugin(ScrollTrigger, SplitText);

interface SplitTextInstance {
  lines: HTMLElement[];
  revert: () => void;
}

export default function Copy({ children, onScrollTrigger = false, delay = 0 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitRef = useRef<SplitTextInstance | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      if (splitRef.current) splitRef.current.revert();
      const split = new SplitText(containerRef.current, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
      }) as unknown as SplitTextInstance;

      const lines = split.lines;
      gsap.set(lines, { yPercent: 200, opacity: 0, overflow: "hidden" });

      const animationProps = {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        delay,
      };

      if (onScrollTrigger) {
        gsap.to(lines, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
      } else {
        gsap.to(lines, animationProps);
      }

      splitRef.current = split;

      return () => {
        split.revert();
      };
    },
    { dependencies: [onScrollTrigger, delay, children] }
  );

  return (
    <div ref={containerRef} className="overflow-hidden mt-[5%]">
      {children}
    </div>
  );
}
