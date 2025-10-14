"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Hero({ timeline }: { timeline: gsap.core.Timeline}) {
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if(!container.current) return;
    gsap.set(".landing-animation", {
      y: 500,
      opacity: 0,
    })
    const landing = gsap.to(".landing-animation", {
        delay: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2
    });
    timeline.add(landing, 0);
  }, { scope: container })
  return (
    <section ref={container} id="hero" className="flex flex-col items-center max-w-screen overflow-hidden mt-50 leading-[3rem] sm:leading-[5rem] md:leading-[7rem] lg:leading-[9rem] xl:leading-[13rem]">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="landing-animation uppercase font-extrabold text-start tracking-[-0.05em] pt-[20px] sm:pt-[40px] whitespace-nowrap overflow-hidden"
          style={{ fontSize: "calc((100vw - 48px) * 0.1695)" }}
        >
          CHANGE
        </div>
      </div>
      <div className="flex whitespace-nowrap overflow-hidden">
        <div
          className="landing-animation uppercase font-extrabold text-start tracking-[-0.05em] pt-[20px] sm:pt-[40px] whitespace-nowrap overflow-hidden"
          style={{ fontSize: "calc((100vw - 48px) * 0.1695)" }}
        >
          THE&nbsp;
        </div>
        <div
          className="landing-animation uppercase font-extrabold text-start tracking-[-0.05em] pt-[20px] sm:pt-[40px] whitespace-nowrap overflow-hidden"
          style={{ fontSize: "calc((100vw - 48px) * 0.1695)" }}
        >
          COURSE
        </div>
      </div>
    </section>
  );
}
