"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Products() {
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if(!container.current) return;
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray<HTMLImageElement>(".images");
      if(!images.length) return;
      images.map((img, i) => {
        gsap.from(img, {
          opacity: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scale: 0.95,
          delay: i * 0.1,
          y: 60,
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none reverse",
            once:true
          }
        })
      })
    }, container)

    return () => ctx.revert();
  }, { scope: container })
  const products = [
    {
      src: "/img5.avif",
      title: "sweet memories cookbook",
      price: "$75",
    },
    {
      src: "/img4.avif",
      title: "the hugs + kisses pack",
      price: "$169",
    },
    {
      src: "/img6.avif",
      title: "donate a meal to a women's shelter",
      price: "$10",
    },
    {
      src: "/img7.avif",
      title: "the love + care pack",
      price: "$50",
    },
  ];

  return (
    <div className="px-[7%] py-16">
      <div ref={container} className="grid grid-cols-2 gap-16 md:gap-20">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={product.src}
              alt={product.title}
              width={600}
              height={600}
              className="images rounded-lg w-full max-w-[600px] h-auto object-cover"
            />
            <div className="mt-6 sm:mt-8 md:mt-10 uppercase text-xs flex flex-col items-center gap-1 sm:gap-2">
              <h4 className="tracking-wider text-[11px] sm:text-[12px] md:text-[13px]">
                {product.title}
              </h4>
              <p className="text-[10px] sm:text-[11px] md:text-[12px] opacity-80">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



