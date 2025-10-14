"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function SweetImage({ timeline }: { timeline: gsap.core.Timeline }) {
  const container = useRef<HTMLDivElement | null>(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(container);
    
    gsap.set(q(".landing-animation"), {
      y: 500,
      opacity: 0
    });
    
    gsap.set(q(".animate-rotate"), {
      opacity: 0,
      scale: 0
    });
    
    const landing = gsap.to(q(".landing-animation"), {
      duration: 0.35,
      opacity: 1,
      y: 0,
      ease: "power3.out",
    });
    
    const rotate = gsap.to(q(".animate-rotate"), {
      scale: 1,
      delay: 0,
      duration: 0.5,
      rotate: 360,
      opacity: 1,
    });

    gsap.to(".animate-rotate", {
      y: () => window.innerHeight * 2,
      ease: "none",
      scrollTrigger: {
        trigger: "#container", 
        start: "top top",
        end: "bottom bottom",  
        scrub: true,         
      }
    });

    
    timeline.add(landing, ">");
    timeline.add(rotate, ">");
  }, { scope: container, dependencies: [timeline] });
  
  return (
    <div ref={container} className="flex flex-col items-center relative flex-shrink-0 translate-x-2 -translate-y-10">
      <Image
        src="/img5.avif"
        alt="Hero Image"
        width={880}
        height={880}
        priority
        className="landing-animation relative rounded-lg h-auto flex-shrink-0"
      />

      <div className="absolute top-[20%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-[183px] h-[183px] animate-rotate">
        <Image 
          className="animate-spin-super-slow cursor-pointer w-full h-full" 
          src="/svg.svg" 
          alt="SVG Icon" 
          width={182} 
          height={182} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold uppercase pointer-events-none">
          Buy
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-super-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-super-slow {
          animation: spin-super-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}