import React from 'react'
import Image from 'next/image'
import gem1 from "../assets/gem1.jpg";
import gem2 from "../assets/gem2.jpg";
// import StarIcon from "../assets/star.png";
import { Playfair_Display,Open_Sans } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const HeroSection = () => {
  return (
    <div>
        {/* <Image src={StarIcon} alt="star" width={20} height={20} className="absolute bottom-50 left-30" />
        <Image src={StarIcon} alt="star" width={20} height={20} className="absolute bottom-60 right-100" />
        <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-30 right-80" /> */}

      <div className='flex flex-col md:flex-row items-center justify-center gap-5 px-6 md:px-30 mt-10 lg:ml-20'>
        
        <div>
        <Image
         src={gem1}
         alt="Gem 1"
            width={300}
            height={300}
            className='rounded-tl-[60px] overflow-hidden w-50 h-70 lg:w-90 lg:h-60 object-cover'
        />
        </div>

        <div className='relative lg:top-35'>
        <Image
         src={gem2}
         alt="Gem 2"
            width={300}
            height={300}
            className='rounded-br-[60px] overflow-hidden w-50 h-70 lg:w-90 lg:h-60 object-cover'
        />
        </div>

        <div className='relative lg:bottom-15 lg:right-37'>
            <h1 className={`${playFair.className} text-5xl text-[#2E2B28E8]`} style={{fontWeight: 400}}>Rare Gems.</h1>
        </div>

        <div className='relative lg:top-35 lg:right-35 '>
            <p className={`${playFair.className} text-5xl text-[#2E2B28E8] text-center`} style={{fontWeight: 400}}>Unseen Beauty</p>
            <p className={`${openSans.className} text-lg font-light mt-15 mb-10 text-center lg:text-left`}>Explore DIANO&apos;s private collection of rare gemstones and elite jewellery — presented through curated AI-generated visuals for connoisseurs, collectors, and design houses.</p>
            <button className={`bg-[#D6C5A0] px-5 py-2 rounded-sm shadow-lg text-white cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300`}>Explore the Collection</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default HeroSection
