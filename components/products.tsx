"use client";
import Image from "next/image";

export default function Products() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-20">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={product.src}
              alt={product.title}
              width={600}
              height={600}
              className="rounded-lg w-full max-w-[500px] h-auto object-cover"
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
