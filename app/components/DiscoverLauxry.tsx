import Image from "next/image";
import RingImage from "../assets/Ring.jpg";
// import StarIcon from "../assets/star.png";
import { Playfair_Display,Inter } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const DiscoverLuxury = () => {
  return (
    <section className="relative w-full bg-[#ffffff] py-20 px-4 md:px-24 font-sans text-[#2E2B28] overflow-hidden">
      {/* Decorative Stars */}
      {/* <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-10 right-50" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-70 left-10" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute bottom-40 right-60" /> */}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Image (landscape format) */}
        <div className="w-full max-w-xl aspect-[14/10] relative rounded-md overflow-hidden">
          <Image
            src={RingImage}
            alt="Diamond Ring"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6 max-w-xl text-left">
          <h2 className={`text-3xl md:text-5xl font-normal ${playFair.className}`}>
            Discover luxury in the details.
          </h2>
          <p className={`text-sm md:text-base text-[#2E2B28CC] ${inter.className} font-light`}>
            From everyday elegance to collector’s editions, our handcrafted pieces are shaped by heritage and refined by vision.
          </p>
          <button className="w-max border border-[#2E2B28] px-5 py-2 text-sm hover:bg-[#2E2B28] hover:text-white transition">
            Explore the Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverLuxury;