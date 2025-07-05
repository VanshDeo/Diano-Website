import Image from "next/image";
import MiddleImage from "../assets/bangles.jpg";
// import StarIcon from "../assets/star.png";
import { FiVideo, FiLock, FiPenTool, FiSettings } from "react-icons/fi";
import { Playfair_Display,Inter } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const features = [
  {
    
    title: "SIGNATURE SHOWCASE",
    description1: "A Closer Look at Perfection",
    description2: "Experience the brilliance of our jewels through ultra-clear, high-definition showcases. See every facet, every detail — as if holding it in your hands.",
  },
  {
    
    title: "PRIVATE ACCESS",
    description1: "An Invitation to Exclusivity",
    description2: "Our most rare and coveted pieces are available only by private appointment. Discover limited-edition collections reserved for an elite circle of collectors and connoisseurs.",
  },
  {
    
    title: "DESIGNER CHOICE",
    description1: "The Jeweller\'s Jeweller",
    description2: "Our gemstones and creations are handpicked by the world’s top designers and luxury houses — a trusted source for uncompromising quality and timeless inspiration.",
  },
  {
    
    title: "CUSTOM MADE",
    description1: "Crafted Just for You",
    description2: "Every piece is tailored to your vision — from selecting the perfect stone to bringing your bespoke design to life. DIANO turns your desires into enduring heirlooms.",
  },
];

const WhatSetsUsApart = () => {
  return (
    <section className="relative w-full bg-[#ffffff] py-20 px-4 md:px-24 text-[#2E2B28] font-sans overflow-hidden">
      {/* Decorative Stars */}
      {/* <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-10 left-60" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-30 right-70" />
      <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-100 right-10" />
      <Image src={StarIcon} alt="star" width={24} height={24} className="absolute bottom-100 left-10" />
      <Image src={StarIcon} alt="star" width={23} height={23} className="absolute bottom-10 left-100" /> */}
      

      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-5xl font-normal ${playFair.className}`}>What Sets Us Apart</h2>
        <p className={`text-sm md:text-base mt-2 text-[#3A3836] font-light ${inter.className}`}>
          A Signature Experience, Beyond the Ordinary
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {/* Left Two Cards */}
        <div className={`flex flex-col justify-between h-full gap-4 w-full ${inter.className} font-light`}>
          {features.slice(0, 2).map((feature, index) => (
            <div
              key={index}
              className="bg-[#FDFBF6] rounded p-6 flex flex-col gap-2 flex-1 justify-start shadow-sm text-center md:text-left md:items-start items-center"
            >
              
              <h3 className="text-base font-light text-[#2E2B28CC] mt-2 px-2 py-1 border border-[#D6C5A0] rounded-sm">{feature.title}</h3>
              <p className="text-sm text-[#2E2B28AD]">{feature.description1} <br /> {feature.description2}</p>
            </div>
          ))}
        </div>

        {/* Middle Image */}
        <div className="flex justify-center items-center h-full w-full">
          <Image
            src={MiddleImage}
            alt="Jewelry on hand"
            width={320}
            height={420}
            className="object-cover rounded-lg h-full w-full"
          />
        </div>

        {/* Right Two Cards */}
        <div className={`flex flex-col justify-between h-full gap-4 w-full ${inter.className} font-light`}>
          {features.slice(2).map((feature, index) => (
            <div
              key={index}
              className="bg-[#FDFBF6] rounded-xl p-6 flex flex-col gap-2 flex-1 justify-start shadow-sm text-center md:text-left md:items-start items-center"
            >
              
              <h3 className="text-base font-light mt-2 text-[#2E2B28CC] px-2 py-1 border border-[#D6C5A0] rounded-sm">{feature.title}</h3>
              <p className="text-sm text-[#2E2B28AD]">{feature.description1} <br /> {feature.description2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;