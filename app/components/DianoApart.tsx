import React from 'react'
import Image from 'next/image';
import gem3 from "../assets/gem3.jpg";
// import StarIcon from "../assets/star.png";
import { Playfair_Display,Open_Sans } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
});

const DianoApart = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between gap-10 bg-[#FAF8F2] mt-20 lg:mt-30'>
        {/* <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-238 left-5" />
        <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-330 left-150" /> */}
        {/* Info Section */}
      <div className='flex flex-col px-15 py-15 mt-15 max-w-xl mx-auto items-center lg:items-start'>
        <h1 className={`${playFair.className} text-5xl text-[#2E2B28] text-center lg:text-left lg:whitespace-nowrap`} style={{fontWeight: 400}}>What Sets DIANO Apart</h1>
        <ul className={`list-disc ml-5 mt-10 ${openSans.className} font-light text-md lg:text-xl`}>
          <li>A century-old legacy of curating the rarest gemstones with uncompromising integrity.</li>
          <li className='mt-10'>Direct partnerships with ethical mines and master cutters in Antwerp, the heart of the diamond trade.</li>
        </ul>

        <button className={`mt-10 ${openSans.className} h-10 text-white bg-[#D6C5A0] px-3 rounded-sm shadow-md hover:scale-105 active:scale-95 transition-all duration-300`}>Get a Free Valuation</button>
      </div>

      {/* Image Section */}
        <div className='flex items-center justify-center'>
            <Image
            src={gem3}
            alt="Diano Apart"
            width={500}
            height={500}
            className='h-full object-cover'
            />
            </div>
    </div>
  )
}

export default DianoApart
