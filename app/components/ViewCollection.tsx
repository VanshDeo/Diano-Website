// app/components/ViewCollectionImages.tsx
"use client";

import React from "react";
import Image from "next/image";
import Img1 from "../assets/bangles.jpg"; 
import Img2 from "../assets/hand_ring-1.jpg";
import Img3 from "../assets/circle-ring.jpg";
import Img4 from "../assets/hand-ring-2.jpg";
import StarIcon from "../assets/star.png";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const images = [Img1, Img2, Img3, Img4];

const ViewCollectionImages = () => {
  return (
    <section className="w-full py-16 px-4 md:px-20 bg-white relative">
      {/* Optional Decorative Stars */}
      <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-20 right-60" />
      <Image src={StarIcon} alt="star" width={22} height={22} className="absolute bottom-2 left-70" />

      <h2 className={`text-center text-5xl font-normal text-[#2E2B28] mb-12 ${playFair.className}`}>
        View Our Collections
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className="relative w-full h-[350px] rounded overflow-hidden">
            <Image
              src={img}
              alt={`Jewelry ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewCollectionImages;