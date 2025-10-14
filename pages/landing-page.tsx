"use client";

import Hero from "@/components/hero";
import SweetImage from "@/components/sweet-image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function LandingPage() {
    const container = useRef<HTMLDivElement | null>(null);
    const timeline = useRef(gsap.timeline({ paused: true }));
    useEffect(() => {
        if(container.current) {
            timeline.current.play();
        } else {
            timeline.current.pause();
        }
    }, [timeline])
    return (
        <div ref={container}>
            <Hero timeline={timeline.current} />
            <SweetImage timeline={timeline.current} />
        </div>
    )
}