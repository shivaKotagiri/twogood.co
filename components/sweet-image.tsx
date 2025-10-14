"use client";

import Image from "next/image";

export default function SweetImage() {
  return (
    <div className="flex flex-col items-center relative flex-shrink-0 translate-x-2 -translate-y-10">
      <Image
        src="/img5.avif"
        alt="Hero Image"
        width={880}
        height={880}
        priority
        className="relative rounded-lg h-auto flex-shrink-auto"
      />

      <div className="w-[183px] h-[183px]">
        <div className="w-full h-full">
          <Image 
            className="animate-spin-super-slow cursor-pointer absolute h-auto flex-shrink-auto top-[20%] left-[65%] -translate-x-1/2 -translate-y-1/2" 
            src="/svg.svg" 
            alt="SVG Icon" 
            width={182} 
            height={182} 
          />
          <div className="absolute top-[20%] left-[65%] -translate-x-1/2 -translate-y-1/2 text-3xl font-bold uppercase pointer-events-none">
            Buy
          </div>
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