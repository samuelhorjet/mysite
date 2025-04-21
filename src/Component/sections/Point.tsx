"use client";

import { Shield, Zap, ArrowRightLeft, BarChart3 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function PainPoints() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const westX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-20%", "-30%"]
  );
  const westY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-20%", "20%"]
  );

  const eastX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "20%", "30%"]
  );
  const eastY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "20%", "-20%"]
  );

  return (
    <section className="gradient1-bg py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Left Side Visual */}
          <div className="relative flex-1 h-[350px]">
            {/* Large Center Circle */}
            <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 z-10">
              <Image
                src="/images/about_shape1-removebg-preview.png"
                alt="center-ring"
                width={570}
                height={570}
                className="w-full h-full object-contain"
              />
              <div className="absolute left-1/2 top-1/2 w-[120px] h-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00082d] flex items-center justify-center">
                <Image
                  src="/images/syber_icon.svg"
                  alt="icon"
                  width={120}
                  height={120}
                />
              </div>
            </div>

            {/* West Ring with Dark Shadow */}
            <motion.div
              style={{ x: westX, y: westY }}
              className="absolute left-[0%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] z-0 opacity-80"
            >
              <div className="absolute inset-0 rounded-full bg-black blur-2xl opacity-40" />
              <Image
                src="/images/about_shape1-removebg-preview.png"
                alt="west-ring"
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* East Ring with Dark Shadow */}
            <motion.div
              style={{ x: eastX, y: eastY }}
              className="absolute right-[13%] top-1/2 -translate-y-1/2 w-[180px] h-[180px] z-0 opacity-80"
            >
              <div className="absolute inset-0 rounded-full bg-black blur-2xl opacity-40" />
              <Image
                src="/images/about_shape1-removebg-preview.png"
                alt="east-ring"
                width={180}
                height={180}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          {/* Right Side Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-medium md:text-5xl">
              Blockchain Addressing
              <br />
              Industry Pain Points
            </h2>
            <p className="text-gray-400 text-xl max-w-135">
              Blockchain technology has brought significant advancements to
              various industries. Here are some common pain points faced by
              industries when it comes to blockchain solutions.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-2">
                <Shield className="mt-1 h-5 w-5 text-emerald-400" />
                <span>Privacy and Security</span>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="mt-1 h-5 w-5 text-emerald-400" />
                <span>Cost and Complexity</span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRightLeft className="mt-1 h-5 w-5 text-emerald-400" />
                <span>Interoperability</span>
              </div>
              <div className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-5 w-5 text-emerald-400" />
                <span>Regulatory Compliance</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="mt-1 h-5 w-5 text-emerald-400" />
                <span>Sustainable Chain</span>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="mt-1 h-5 w-5 text-emerald-400" />
                <span>Energy Conservation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
