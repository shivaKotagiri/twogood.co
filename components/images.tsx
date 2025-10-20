/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Images() {
  const container = useRef<HTMLDivElement | null> (null);
  useGSAP(() => {
    if(!container.current) return;
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray<HTMLImageElement>(".images");
      if(!images.length) return;
      gsap.set(images, {
        opacity: 0,
        scale: 1.05, 
        overflow: "hidden"
      })
      gsap.to(images, {
        opacity: 1,
        duration: 0.75,
        scale: 1,
        stagger: 0.25,
        ease: "power1.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
      });
    }, container);
    
    return () => ctx.revert();
  }, { scope: container})
  return (
    <div ref={container} className="w-[98%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
      <img
        className="images w-full h-auto object-cover"
        src="img1.avif"
        alt="img1"
      />
      <img
        className="images w-full h-auto object-cover"
        src="img2.avif"
        alt="img2"
      />
      <img
        className="images w-full h-auto object-cover"
        src="img3.avif"
        alt="img3"
      />
    </div>
  );
}