"use client";

import Image from "next/image";

export default function SweetImage() {
  return (
    <div className="flex flex-col items-center mt-8">
      <Image
        src="https://cdn.sanity.io/images/w8f1ak3c/production/492561cd624e31a70ffbca1ac98e87a5871d1ac3-2880x1606.png/2bcc3b0bb22cc8373f3aae9aeb97de1e50d64eae2-2880x1606.png?rect=0,0,2880,1507&fp-x=0.5&fp-y=0.469258011362239&w=2560&h=1390&fit=crop&crop=focalpoint&auto=format"
        alt="Hero Image"
        width={2560}
        height={1390}
        priority
        className="rounded-lg md:w-[100%]"
      />

      <div className="w-[183px] h-[183px]">
        <div className="relative w-full h-full">
          <Image 
            className="animate-spin-super-slow cursor-pointer" 
            src="/svg.svg" 
            alt="SVG Icon" 
            width={182} 
            height={182} 
          />
          <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold uppercase pointer-events-none">
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