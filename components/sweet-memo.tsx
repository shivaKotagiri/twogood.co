"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function SweetMemo() {
    const container = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if(!container.current) return;
        const items = gsap.utils.toArray(container.current);
        const animation = gsap.from(items, {
            y: 100,
            opacity: 0,
            duration: 0.6,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container.current,
                scroller: "body",
                start: "top bottom",
                toggleActions: "play none none none",
                once: true
            }
        });
        if(ScrollTrigger.isInViewport(container.current)) {
            animation.play();
        }
    }, [])
    return (
        <div ref={container} className="animation mt-10 flex flex-col justify-center items-center">
            <h1 className="animation text-5xl font-black text-center uppercase">sweet memories</h1>
            <h4 style={{ fontFamily: "Helvetica Now Text, Lucida Sans, Tahoma, sans-serif"}} className="animation mt-5 text-sm px-20 md:px-30 lg:50 text-center">Sweet Memories is our tribute to a different sort of nourishment. Something joyful; something special. Something good for the spirit.</h4>
            <p style={{ fontFamily: "Helvetica Now Text, Lucida Sans, Tahoma, sans-serif"}} className="animation mt-5 text-center w-screen uppercase text-xs">shop &nbsp; today.</p>
        </div>
    )
}