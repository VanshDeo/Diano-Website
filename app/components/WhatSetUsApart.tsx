import Image from "next/image";
import MiddleImage from "../assets/bangles.jpg";
import StarIcon from "../assets/star.png";
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
    icon: <FiVideo size={24} className="text-[#D6C5A0]" />,
    title: "AI SHOWCASE",
    description: "Ultra-clear, lifelike gem previews",
  },
  {
    icon: <FiLock size={24} className="text-[#D6C5A0]" />,
    title: "PRIVATE ACCESS",
    description: "Exclusive collections, by invite only",
  },
  {
    icon: <FiPenTool size={24} className="text-[#D6C5A0]" />,
    title: "DESIGNER CHOICE",
    description: "Trusted by top global creators",
  },
  {
    icon: <FiSettings size={24} className="text-[#D6C5A0]" />,
    title: "CUSTOM MADE",
    description: "Jewels made just for you",
  },
];

const WhatSetsUsApart = () => {
  return (
    <section className="relative w-full bg-[#ffffff] py-20 px-4 md:px-24 text-[#2E2B28] font-sans overflow-hidden">
      {/* Decorative Stars */}
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-10 left-60" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-30 right-70" />
      <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-100 right-10" />
      <Image src={StarIcon} alt="star" width={24} height={24} className="absolute bottom-100 left-10" />
      <Image src={StarIcon} alt="star" width={23} height={23} className="absolute bottom-10 left-100" />
      

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
              className="bg-[#FDFBF6] rounded p-6 flex flex-col gap-2 flex-1 justify-center shadow-sm text-center md:text-left md:items-start items-center"
            >
              <div className="bg-white p-3 w-max rounded-full border border-[#D6C5A0]">
                {feature.icon}
              </div>
              <h3 className="text-sm font-light text-[#2E2B28CC] mt-2">{feature.title}</h3>
              <p className="text-sm text-[#2E2B28AD]">{feature.description}</p>
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
              className="bg-[#FDFBF6] rounded-xl p-6 flex flex-col gap-2 flex-1 justify-center shadow-sm text-center md:text-left md:items-start items-center"
            >
              <div className="bg-white p-3 w-max rounded-full border border-[#D6C5A0]">
                {feature.icon}
              </div>
              <h3 className="text-sm font-light mt-2 text-[#2E2B28CC]">{feature.title}</h3>
              <p className="text-sm text-[#2E2B28AD]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;