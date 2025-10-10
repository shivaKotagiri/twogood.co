import Hero from "@/components/hero";
import Images from "@/components/images";
import Seperator from "@/components/seperator";
import Support from "@/components/support";
import SweetImage from "@/components/sweet-image";
import SweetMemo from "@/components/sweet-memo";

export default function Home() {
  return (
    <div className="overflow-x-hidden px-3 lg:px-5">
      <Hero />
      <SweetImage />
      <SweetMemo />
      <Seperator left="buy good" right="do good"/>
      <Images />
      <Support />
    </div>
  );
}
