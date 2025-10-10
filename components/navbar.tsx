"use client";

import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [hide, setHide] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const navLinksRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  useGSAP(() => {
    if(!container.current) return;
    gsap.set("#menu-overlay", {
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    });
    gsap.set(".categories", {
      y: 100,
      opacity: 0
    })
    gsap.set(".footer-section", {
      opacity: 0,
      y: 20
    })
    timeline.current = gsap.timeline({ paused: true }).to("#menu-overlay", {
      delay: 0,
      duration: 0.35,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut"
    }).to(".categories", {
      y: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 0.5,
      ease: "power4.inOut",
    }).to(".footer-section", {
      opacity: 1,
      y: 0,
      duration: 0.35,
      stagger: 0.1,
      ease: "power4.out"
    })
  }, { scope: container})

  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  useEffect(() => {
    if(timeline.current) {
      if(menuIsOpen) {
        timeline.current.play();
        document.body.style.overflow = "hidden";
      } else {
        timeline.current.reverse();
        document.body.style.overflow = "unset";
      }
    }
  }, [menuIsOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        gsap.to(navLinksRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
          pointerEvents: "none",
        });
      } else {
        gsap.to(navLinksRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          pointerEvents: "auto",
        });
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={container} style={{ fontFamily: "Helvetica Now Text, Lucida Sans, Tahoma, sans-serif" }} className="fixed w-screen h-screen overflow-hidden">
      <div className={`${menuIsOpen ? 'text-white' : 'text-black'} fixed bg-transparent w-screen top-0 left-0 right-0 flex items-center justify-between pt-5 z-50 pointer-events-none transition-colors duration-300`}>
          <h2 id="logo" className="fixed top-5 left-5 uppercase font-black text-[31px] leading-[90%] flex flex-col z-50 p-1 cursor-pointer pointer-events-auto">
          <span>two</span>
          <span>good</span>
          <span>co.</span>
        </h2>
        <div id="nav-options" className="flex justify-start items-start uppercase text-[12px] ml-auto gap-17 pointer-events-auto">
          <div id="nav-1" ref={navLinksRef} className={`hidden md:flex transition-opacity duration-100 ${hide ? "opacity-0 pointer-events-none": "opacity-100"} gap-17 px-4 py-2 transform -translate-x-[185px]`}>
            <p className="cursor-pointer">Shop</p>
            <p className="cursor-pointer">Wholesale</p>
            <p className="cursor-pointer">Catering</p>
            <p className="cursor-pointer">Donate</p>
          </div>
          <div id="nav-icons" className={` fixed top-4 right-2 flex gap-17 px-5 py-3 rounded-full z-50 cursor-pointer pointer-events-auto`}>
            <div onClick={handleClick}>{menuIsOpen ? <X size={23} strokeWidth={1} /> : <Menu size={16} strokeWidth={1} />}</div>
            <ShoppingCart size={18} strokeWidth={1} />
          </div>
        </div>
      </div>
      <div id="menu-overlay" className={`${menuIsOpen ? "text-white bg-black": ""} w-screen h-screen fixed top-0 left-0 bg-black z-40`} style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}>
        <div>
          <div style={{ fontFamily: "Futura Now Headline"}} className="font-[850] text-[2.5rem] leading-10 text-end flex flex-col mt-50 uppercase lg:text-[5rem] lg:font-[850] px-5 lg:leading-20">
            <div className="overflow-hidden"><p className="categories">shop</p></div>
            <div className="overflow-hidden"><p className="categories">wholesale</p></div>
            <div className="overflow-hidden"><p className="categories">catering</p></div>
            <div className="overflow-hidden"><p className="categories">impact</p></div>
            <div className="overflow-hidden"><p className="categories">stories</p></div>
            <div className="overflow-hidden"><p className="categories">about</p></div>
            <div className="overflow-hidden"><p className="categories">contact</p></div>
            <div className="overflow-hidden"><p className="categories">donate</p></div>
          </div>
        </div>
        <div className="md:w-[60%] flex justify-between text-[12px] px-5 lg:-translate-y-10">
          <div className="footer-section">
            <div className="text-neutral-500 uppercase">connect with us</div>
            <div className="flex flex-col mt-8 text-[15px]">
              <div className="hover:text-neutral-500 transition-colors duration-250 cursor-pointer">Facebook</div>
              <div className="hover:text-neutral-500 transition-colors duration-250 cursor-pointer">Instagram</div>
              <div className="hover:text-neutral-500 transition-colors duration-250 cursor-pointer">Twitter</div>
              <div className="hover:text-neutral-500 transition-colors duration-250 cursor-pointer">LinkedIn</div>
              <div className="hover:text-neutral-500 transition-colors duration-250 cursor-pointer">Youtube</div>
            </div>
          </div>
          <div className="footer-section">
            <div className="text-neutral-500 uppercase">nitty gritties</div>
            <div className="flex flex-col mt-8 text-[15px]">
              <div className="hover:text-neutral-500 transition-colors duration-250 cursor-pointer">Good Things FAQs</div>
              <div className="hover:text-neutral-500 transition-colors duration-250 cursor-pointer">Good Food FAQs</div>
              <div className="hover:text-neutral-500 transition-colors duration-250 cursor-pointer">Good Places</div>
            </div>
          </div>
          <div className="footer-section lg:-translate-x-30">
            <div className="text-neutral-500 uppercase">get started</div>
            <div className="flex flex-col mt-8 text-[15px]">
              <div className="hover:text-neutral-500 transition-colors duration-250 cursor-pointer">Pathways</div>
              <div className="hover:text-neutral-500 transition-colors duration-250 cursor-pointer">Careers</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}