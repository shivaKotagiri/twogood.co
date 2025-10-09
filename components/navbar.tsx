"use client";

import { Menu, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setHide(true)
      } else {
        setHide(false);
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);

  }, [])
  return (
    <nav className="w-full fixed top-0 left-0 right-0 flex items-center justify-between pt-6 z-50 pointer-events-none">
      <h2 id="logo" className="fixed top-5 left-5 uppercase font-black text-[31px] leading-[90%] flex flex-col z-50 p-1 cursor-pointer pointer-events-auto">
        <span>two</span>
        <span>good</span>
        <span>co.</span>
      </h2>
      <div id="nav-options" className="flex uppercase text-[12px] ml-auto gap-15 pointer-events-auto">
        <div id="nav-1" className={`hidden md:flex transition-opacity duration-100 ${hide ? "opacity-0 pointer-events-none": "opacity-100"} gap-15 px-4 py-2 transform -translate-x-[175px]`}>
          <p className="cursor-pointer">Shop</p>
          <p className="cursor-pointer">Wholesale</p>
          <p className="cursor-pointer">Catering</p>
          <p className="cursor-pointer">Donate</p>
        </div>
        <div id="nav-icons" className="fixed top-5 right-8 flex gap-15 bg-white px-5 py-3 rounded-full z-50 cursor-pointer pointer-events-auto">
          <Menu size={16} strokeWidth={1} />
          <ShoppingCart size={16} strokeWidth={1} />
        </div>
      </div>
    </nav>
  );
}
