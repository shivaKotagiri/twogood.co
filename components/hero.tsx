export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center max-w-screen overflow-hidden mt-50 leading-[3rem] sm:leading-[5rem] md:leading-[7rem] lg:leading-[9rem] xl:leading-[13rem]">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="uppercase font-extrabold text-start tracking-[-0.05em] pt-[20px] sm:pt-[40px] whitespace-nowrap overflow-hidden"
          style={{ fontSize: "calc((100vw - 48px) * 0.1695)" }}
        >
          CHANGE
        </div>
      </div>
      <div className="flex whitespace-nowrap overflow-hidden">
        <div
          className="uppercase font-extrabold text-start tracking-[-0.05em] pt-[20px] sm:pt-[40px] whitespace-nowrap overflow-hidden"
          style={{ fontSize: "calc((100vw - 48px) * 0.1695)" }}
        >
          THE&nbsp;
        </div>
        <div
          className="uppercase font-extrabold text-start tracking-[-0.05em] pt-[20px] sm:pt-[40px] whitespace-nowrap overflow-hidden"
          style={{ fontSize: "calc((100vw - 48px) * 0.1695)" }}
        >
          COURSE
        </div>
      </div>
    </section>
  );
}
