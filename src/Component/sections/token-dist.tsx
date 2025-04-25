"use client";

import { Bitcoin } from "lucide-react";
import Image from "next/image";

export default function TokenDistribution() {
  return (
    <section className="gradient1-bg py-20 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start gap-20">
        {/* Left panel with angled corner */}
        <div className="relative mt-15 bg-[#000416] h-155 max-w-150 text-white flex-1 p-20 rounded-xl shadow-lg">
          {/* Angled top-right corner */}
          <div
            className="absolute top-0 right-0 w-28 h-28 bg-[#00082d]"
            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
          ></div>

          {/* Logo circle */}
          <div className="mb-15 inline-flex h-15 w-15 items-center justify-center rounded-full bg-gradient-to-r from-blue-800 to-cyan-400">
            <Bitcoin className="h-10 w-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-medium mb-7">Token Distribution</h2>

          {/* Description */}
          <p className="text-2xl text-gray-300 font-semibold mb-12">
            Token distribution refers to the process of allocating and
            distributing tokens within a blockchain ecosystem.
          </p>

          {/* Extended description */}
          <p className="text-gray-400 text-xl font-semibold w-100">
            When a new blockchain project is launched, a specific number of
            tokens are created, and these tokens are distributed among various
            stakeholders, including founders.
          </p>
        </div>

        {/* Right: Donut Chart */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full">
            <Image
              src="/images/token-distribution.png"
              alt="Token Distribution"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
