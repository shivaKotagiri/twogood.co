"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { ChangeEvent, useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import Image from "next/image";
export default function Contact() {
    const [value, setValue] = useState<string>("enter your email address for good");
    const [focus, setFocus] = useState<boolean>(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

  return (
    <div style={{ fontFamily: "Helvetica Now Text, Lucida Sans, Tahoma, sans-serif"}} className="mt-30 mb-20 w-full">
      <div className="flex items-center gap-3 w-full mb-15 lg:mb-54 border-b pb-3 border-b-neutral-400">
        <input
          className="text-black text-[1.5rem] lg:text-[2.5rem] uppercase w-full font-extrabold focus:outline-none"
          onChange={handleChange}
          type="text"
          value={value}
          onFocus={() => {
            setFocus(true);
            if(value.trim() === "enter your email address for good") {
                setValue("")
            }
          }}
          onBlur={() => {
            setFocus(false)
            if(value.trim().length == 0) {
                setValue("enter your email address for good")
            }
          }}
        />
        {!focus ? <FaArrowRightLong size={20} />: <AiOutlineEnter size={25} strokeWidth={3} />}
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-5 text-sm">
            <div className="text-neutral-400 uppercase">connect with us</div>
            <div className="justify-start">
                <div className="cursor-pointer hover:text-neutral-500 transition-colors duration-300">Facebook</div>
                <div className="cursor-pointer hover:text-neutral-500 transition-colors duration-300">Instagram</div>
                <div className="cursor-pointer hover:text-neutral-500 transition-colors duration-300">Twitter</div>
                <div className="cursor-pointer hover:text-neutral-500 transition-colors duration-300">LinkedIn</div>
                <div className="cursor-pointer hover:text-neutral-500 transition-colors duration-300">Youtube</div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[70%]">
            <Image src={"/logo.webp"} height={216} width={215} alt="Logo" className="flex-shrink-auto h-auto w-[150px] lg:w-[200px]" />
            <div className="py-20 uppercase flex gap-5 text-neutral-500 text-sm justify-center items-center">
                <div className="cursor-pointer">© Two Good Co. 2025</div>
                <div className="cursor-pointer">Terms of Use</div>
                <div className="cursor-pointer">Privacy Policy</div>
            </div>
            <div className="text-sm text-center">
                We are proud and privileged to have our home on this land, and to be able to continue the long tradition of community coming together around food, begun thousands of years ago by First Nations peoples. As we stand together on this unceded land, we acknowledge our First Nations people, are the original custodians of this land, and we recognise their deep connection to land, water, sky and community which continues today. We pay our deep respects to community elders, past, present and emerging, for they hold the memories, the traditions, the culture and hopes of Aboriginal and Torres Strait Islander peoples. Always was, always will be Aboriginal land.
            </div>
        </div>
        <div className="flex flex-col gap-5 text-sm">
            <div className="text-neutral-400 uppercase">The nitty gritties</div>
            <div className="">
                <div className="cursor-pointer hover:text-neutral-500 transition-colors duration-300">Good Things FAQs</div>
                <div className="cursor-pointer hover:text-neutral-500 transition-colors duration-300">Good Food FAQs</div>
                <div className="cursor-pointer hover:text-neutral-500 transition-colors duration-300">Good Places</div>
                <div className="cursor-pointer hover:text-neutral-500 transition-colors duration-300">Pathways</div>
                <div className="cursor-pointer hover:text-neutral-500 transition-colors duration-300">Careers</div>
                <div className="cursor-pointer hover:text-neutral-500 transition-colors duration-300">Wholesale</div>
            </div>
        </div>
      </div>
    </div>
  );
}
