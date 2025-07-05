import Image from "next/image";
import PendantImage from "../assets/PendantImage.jpg";
import ModelImage from "../assets/women_with_red_diamond.jpg";
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

const OurStory = () => {
  return (
    <section className="relative w-full bg-white px-4 md:px-8 lg:px-24 py-16 font-sans text-[#2E2B28] overflow-hidden">
      {/* Decorative Stars */}
      {/* <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-20 right-60" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-200 left-100" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-100 right-10" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute bottom-30 left-100" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute bottom-5 left-60" /> */}

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className={`text-3xl md:text-5xl font-normal mb-8 text-center lg:text-left ${playFair.className}`}>
          Our Story
        </h2>

        {/* Main Content: Side by Side */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Section */}
          <div className={`flex flex-col gap-6 w-full justify-start ${inter.className}`}>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              <Image
                src={PendantImage}
                alt="Pendant"
                width={200}
                height={220}
                className="rounded-md object-cover flex-shrink-0"
              />
              <p className="text-md md:text-lg text-[#2E2B28CC] pt-4 lg:pt-2 text-center lg:text-left font-light mb-15">
              True luxury lies in the details — in the precision of every cut, the brilliance of every gemstone and the craftsmanship behind each creation. At DIANO, we invite you to discover a world where refinement meets rarity and where every detail tells a story of elegance and excellence.
              </p>
            </div>

            <p className="text-md md:text-lg text-[#2E2B28CC] font-300 mt-2 lg:pl-20 text-center lg:text-left font-light">
            Each piece in our collection is a testament to this philosophy.
            <br />
            From rare, investment-grade diamonds to bespoke jewellery handcrafted for discerning tastes, DIANO is where artistry, ethics, and exclusivity converge. Step into a curated selection designed to captivate collectors, connoisseurs and creators alike.
            </p>

            <div className="mt-2 lg:pl-20 flex justify-center lg:justify-start">
              <button className="border border-[#2E2B28] px-5 py-2 text-sm hover:bg-[#2E2B28] hover:text-white transition">
                Explore the Collection
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="w-full aspect-[4/5] relative rounded-md overflow-hidden shadow-sm">
              <Image
                src={ModelImage}
                alt="Model wearing jewelry"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;