/* eslint-disable @next/next/no-img-element */
"use client";
export default function Images() {
    return (
        <div className="lg:flex w-[98%] gap-5">
            <img className="lg:max-w-[33.3%] object-contain" src={"img1.avif"} alt="img1" />
            <img className="lg:max-w-[33.3%] object-contain" src={"img2.avif"} alt="img2" />
            <img className="lg:max-w-[33.3%] object-contain" src={"img3.avif"} alt="img3" />
        </div>
    )
}