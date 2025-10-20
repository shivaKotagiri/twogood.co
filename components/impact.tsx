"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Impact() {
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
            duration: 0.5,
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
        <div className="w-full h-auto flex flex-col-reverse lg:flex-row gap-8 lg:gap-5 justify-between overflow-x-hidden">
            <div style={{ fontFamily: "Helvetica Now Text, Lucida Sans, Tahoma, sans-serif"}} className="lg:w-[25%] w-[65%] flex flex-col gap-5 flex-shrink-0">
                <div style={{ fontFamily: "Futura Now Headline, Lucida Sans, Tahoma, sans-serif"}} className="text-2xl font-extrabold uppercase">
                    Our Impact.
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        The thing is, we don&apos;t save anyone.
                    </div>
                    <div>
                        What we do is provide a safe space for women to change the course of their own lives.
                    </div>
                    <div>
                        After many years of living in crisis, abuse and complex trauma, restoring self-worth is foundational for independence. We believe that through experiences that promote love and respect, we can spark and nurture a sense of self-worth for those on the path of healing.
                    </div>
                    <div className="text-[0.8rem]" style={{ fontFamily: "Helvetica Now Text, Lucida Sans, Tahoma, sans-serif" }}>
                        HERE&apos;S HOW WE DO IT
                    </div>
                </div>
            </div>
            <div ref={container} className="flex gap-5 flex-shrink-0 min-w-0 overflow-hidden">
                <div className="relative min-w-0 flex-1 max-w-[540px]">
                    <Image
                        className="h-auto w-full object-cover images"
                        src={"/img8.avif"} width={540} height={540} alt="Image"
                    />
                </div>
                <div className="relative min-w-0 flex-1 max-w-[540px] images">
                    <Image
                        className="h-auto w-full object-cover"
                        src={"/img9.avif"} width={540} height={540} alt="Image"
                    />
                </div>
            </div>
        </div>
    )
}