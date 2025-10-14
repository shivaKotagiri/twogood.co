"use client";
import Image from "next/image";

export default function Impact() {
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
            <div className="flex gap-5 flex-shrink-0 min-w-0 overflow-hidden">
                <div className="relative min-w-0 flex-1 max-w-[540px]">
                    <Image
                        className="h-auto w-full object-cover"
                        src={"/img8.avif"} width={540} height={540} alt="Image"
                    />
                </div>
                <div className="relative min-w-0 flex-1 max-w-[540px]">
                    <Image
                        className="h-auto w-full object-cover"
                        src={"/img9.avif"} width={540} height={540} alt="Image"
                    />
                </div>
            </div>
        </div>
    )
}