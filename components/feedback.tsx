/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import lists from "@/utils/feedbacks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper"

SwiperCore.use([Navigation]);
export default function Feedback() {
    const [click, setClick] = useState<number>(0);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const swiperRef = useRef<SwiperCore | null>(null);
    function handleClick(index: number) {
        setClick(index);
        setIsClicked(true);
        if(swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
    }
    return (
        <section style={{ fontFamily: "Helvetica Now Text, Lucida Sans, Tahoma, sans-serif" }} className="w-screen h-fit flex px-5 pt-5 flex-col overflow-x-hidden mb-20">
            <div className="w-[100%]" style={{ touchAction: 'pan-y' }}>
                <Swiper
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    slidesPerView="auto" 
                    freeMode={true} 
                    grabCursor={true} 
                    pagination={false}
                    loop={true}
                    centeredSlides={true}
                    touchStartPreventDefault={false}
                    simulateTouch={true}
                    allowTouchMove={true}
                    className="mySwiper"
                >
                {lists.map((list, index) => (
                    <SwiperSlide
                    key={index}
                    className="lg:!w-[305px] !w-[150px] flex-shrink-0 cursor-pointer flex items-start justify-center bg-white rounded-2xl h-auto text-xl lg:text-2xl p-6"
                    >
                    <div
                        onClick={() => handleClick(index)}
                        className="flex flex-col text-start leading-none"
                    >
                        <div className={`rounded-full h-4 w-4 border mb-3 ${click === index && isClicked ? "bg-black": "bg-transparent"}`} />
                        <div className="mb-1">{list.id}</div>
                        <div> {list.name} </div>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div style={{ fontFamily: "Futura Now Headline" }} className="mt-[5%] px-[10%] leading-none uppercase flex justify-center items-center text-center font-extrabold text-[1.5rem] lg:text-[4.5rem]">
                {lists[click].content}
            </div>
            <div className="flex justify-center items-center w-full">
                <button className="text-sm uppercase bg-black px-20 py-5 text-center rounded-4xl max-w-[21rem] text-white mt-[5%]"> send your own message</button>
            </div>
            <div className="mt-7 flex flex-col text-base text-neutral-900 text-center w-full justify-center items-center">
                <div>Sometimes it&apos;s the smallest actions</div>
                <div>that can make the biggest impact.</div>
            </div>
        </section>
    );
}