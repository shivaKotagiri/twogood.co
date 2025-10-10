import Hero from "@/components/hero";
import Images from "@/components/images";
import Products from "@/components/products";
import Seperator from "@/components/seperator";
import Support from "@/components/support";
import SweetImage from "@/components/sweet-image";
import SweetMemo from "@/components/sweet-memo";

export default function Home() {
  return (
    <div className="px-3 lg:px-5">
      <Hero />
      <SweetImage />
      <SweetMemo />
      <Seperator left="buy good" right="do good"/>
      <Images />
      <Support />
      <Products />
      <Seperator left="Words of Goodness" right="Messages of Love & Support" />
    </div>
  );
}

