"use client";
import gsap from "gsap";
import { createContext, useRef } from "react";

export const TimelineContext = createContext<gsap.core.Timeline | null>(null);
export default function TimelineProvider({ children }: { children: React.ReactNode }) {
    const timeline = useRef(gsap.timeline({ paused: true }));
    return (
        <TimelineContext.Provider value={timeline.current}>
            { children }
        </TimelineContext.Provider>
    )
}   