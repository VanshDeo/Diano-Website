"use client";

import Image from "next/image";
import React from "react";
import RingImage from "../assets/white-ring.jpg"; // Replace with your actual image path
import StarIcon from "../assets/star.png";

const FAQIntroSection = () => {
  return (
    <section className="w-full px-4 md:px-20 py-20 relative overflow-hidden">
      {/* Decorative Star */}
      <Image
        src={StarIcon}
        alt="star"
        width={20}
        height={20}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden md:block"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2
  className="text-5xl leading-tight font-normal"
  style={{
    fontFamily: "Playfair Display",
    color: "rgba(46, 43, 40, 0.9)",
    fontSize : "62px"
  }}
>
  Frequently asked<br />
  questions
</h2>

        <p
  className="mt-6 text-lg font-light text-[#2E2B28CC]"
  style={{
    fontFamily: "Inter",
    fontWeight: 300,
    color: "rgba(46, 43, 40, 0.8)",
    lineHeight: "1.2", // tighter line height
  }}
>
  Discover everything you need to know about DIANO&apos;s gemstones,
  custom designs, certifications, and services. We&apos;re here to help
  make your jewelry experience seamless and special.
</p>


        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-square md:aspect-auto md:min-h-[400px] rounded-sm overflow-hidden">
  <Image
    src={RingImage}
    alt="Ring on hand"
    fill
    className="object-cover"
    priority
  />
</div>

      </div>
    </section>
  );
};

export default FAQIntroSection;