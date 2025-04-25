"use client";

import Image from "next/image";

// Partner logos with their respective image files
const partners = [
  {
    name: "ApeCoin",
    logo: "/images/brand_01.png", // Placeholder - would need the actual image
  },
  {
    name: "GEMINI",
    logo: "/images/brand_02.png", // Placeholder - would need the actual image
  },
  {
    name: "NEAR",
    logo: "/images/brand_03.png", // Placeholder - would need the actual image
  },
  {
    name: "USDD",
    logo: "/images/brand_04.png",
  },
  {
    name: "Stacks",
    logo: "/images/brand_05.png",
  },
  {
    name: "SOLANA",
    logo: "/images/brand_06.png",
  },
  {
    name: "BitTorrent",
    logo: "/images/brand_07.png",
  },
  {
    name: "Klaytn",
    logo: "/images/brand_08.png",
  },
  {
    name: "Algorand",
    logo: "/images/brand_09.png",
  },
  {
    name: "BUSD",
    logo: "/images/brand_10.png",
  },
  {
    name: "WBTC",
    logo: "/images/brand_11.png",
  },
  {
    name: "TrueUSD",
    logo: "/images/brand_12.png",
  },
];

export default function PartnersSection() {
  return (
    <section className="relative bg-[#000416] py-20">
      {/* Corner decorations */}
      <div
        className="absolute left-0 top-0 h-16 w-16 bg-[#00082d]"
        style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 h-16 w-16 bg-[#00082d]"
        style={{ clipPath: "polygon(100% 100%, 0% 100%, 100% 0)" }}
      ></div>

      <div className="md:px-8 px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-6xl font-medium text-white">Our Partners</h2>
          <p className="mx-auto text-xl mt-7 text-gray-400">
            Discover Our Trusted Blockchain Partners
          </p>
        </div>

        <div className="mx-auto max-w-full pt-10 pl-20">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group flex items-center justify-center"
              >
                <div className="relative h-12 w-full transition-all duration-300">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={200}
                    height={48}
                    className="h-auto w-auto max-w-full object-contain opacity-60 transition-all duration-300 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
