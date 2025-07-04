import React from 'react'
import { Playfair_Display,Open_Sans,Mulish } from "next/font/google";
import Image from 'next/image';
// import StarIcon from "../assets/star.png";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpg";


const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
});

const mulish = Mulish({
    subsets: ["latin"],
    weight: ["300","400", "500", "600", "700"],
})

const testimonials = [
    {
        desc: "“DIANO\'s sapphires are unparalleled. Their team\'s expertise made my custom commission a masterpiece.”\n — Elena V., Collector",
        src: test1
    },
    {
        desc: "“Every piece I\'ve purchased from DIANO radiates elegance and quality. Their craftsmanship is simply unmatched.”\n — Sophia M., Designer",
        src: test2
    },
    {
        desc: "“Working with DIANO was a seamless experience. The gemstone I received exceeded my expectations in brilliance and cut.”\n — Arjun S., Connoisseur",
        src: test3
    }
]

const Testimonial = () => {
  return (
    <div className='w-full bg-[#FAF8F2] mt-20 lg:mt-30'>
        {/* <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-710 left-40" />
        <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-720 left-250" />
        <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-815 left-90" /> */}
      <h1 className={`${playFair.className} text-5xl text-[#2E2B28] text-center py-8`}>Testimonial</h1>
      <p className={`${openSans.className} text-lg font-light text-[#2E2B28CC] text-center`}>Trusted by the World&apos;s Finest Designers</p>

      <div className='flex flex-col md:flex-row gap-5 max-w-5xl mx-auto mt-5 items-center'>
       {testimonials.map((item, index) => (
    <div key={index} className='border border-[#D6C5A066] rounded-xl w-1/2 mb-15'>
        <div className='flex justify-center lg:justify-left'>
        <Image 
        src={item.src}
        alt="testimonial 1"
        width={100}
        height={100}
        className='rounded-full ml-10 lg:ml-0 mt-10 w-24 h-24 object-cover'
        />
        </div>
        <p className={`p-10 ${mulish.className} text-[#2E2B2880] text-center lg:text-left`}>{item.desc}</p>
        </div>
    ))}
      </div>
    </div>
  )
}

export default Testimonial
