"use client"
import Contact from "@/components/contact";
import Feedback from "@/components/feedback";
import Hero from "@/components/hero";
import Images from "@/components/images";
import Impact from "@/components/impact";
import Products from "@/components/products";
import Seperator from "@/components/seperator";
import Support from "@/components/support";
import SweetImage from "@/components/sweet-image";
import SweetMemo from "@/components/sweet-memo";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      lerp: 0.3,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    if(lenisRef.current) {
      lenisRef.current = lenis;
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy()
    }

  }, [])
  return (
    <div className="px-3 lg:px-5 scroll-smooth overflow-x-hidden">
      <Hero />
      <SweetImage />
      <SweetMemo />
      <Seperator left="buy good" right="do good"/>
      <Images />
      <Support />
      <Products />
      <Seperator left="Words of Goodness" right="Messages of Love & Support" />
      <Feedback />
      <Impact />
      <Contact />
    </div>
  );
}

