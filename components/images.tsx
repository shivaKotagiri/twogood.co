/* eslint-disable @next/next/no-img-element */
"use client";

export default function Images() {
  return (
    <div className="w-[98%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
      <img
        className="w-full h-auto object-cover"
        src="img1.avif"
        alt="img1"
      />
      <img
        className="w-full h-auto object-cover"
        src="img2.avif"
        alt="img2"
      />
      <img
        className="w-full h-auto object-cover"
        src="img3.avif"
        alt="img3"
      />
    </div>
  );
}