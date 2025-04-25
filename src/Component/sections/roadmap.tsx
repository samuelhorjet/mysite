"use client";

import { useEffect, useRef } from "react";

const roadmapStages = [
  {
    title: "Stage 1",
    period: "Q1 - 2023",
    items: [
      "Ideation",
      "Proof of Concept",
      "Business Deck",
      "Security Audit",
      "Token on BEP 20",
    ],
    position: "left",
  },
  {
    title: "Stage 2",
    period: "Q2 - 2023",
    items: [
      "Mainnet Launch",
      "Smart Contract Upgrade",
      "Cross-Chain Interoperability",
      "Governance Model Implementation",
      "Whitepaper Release",
    ],
    position: "right",
  },
  {
    title: "Stage 3",
    period: "Q3 - 2023",
    items: [
      "Decentralized Finance Expansion",
      "Proof of Concept",
      "Privacy Enhancements",
      "Developer Grants Program",
      "BCL Mobile App",
    ],
    position: "left",
  },
  {
    title: "Stage 4",
    period: "Q4 - 2023",
    items: [
      "Builder NFT Airdrop",
      "Website Launch",
      "Legal Opinion",
      "NFT Marketplace Launch",
      "Whitepaper Release",
    ],
    position: "right",
  },
  {
    title: "Stage 5",
    period: "Q5 - 2024",
    items: [
      "Scalability Improvements",
      "Real-World Integration",
      "User-Friendly Wallet",
      "Sustainable Blockchain",
      "Global Community Expansion",
    ],
    position: "left",
  },
  {
    title: "Stage 6",
    period: "Q6 - 2024",
    items: [
      "Citizenship and land parcel",
      "Meta Event Arena Launch",
      "First Planet Phase 1 Launch",
      "NFT Artist Onboarding Release",
      "Initial Metaverse Offering Launch", // Fixed apostrophe in "Launce" to "Launch"
    ],
    position: "right",
  },
];

export default function Roadmap() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;

      setTimeout(() => {
        if (pathRef.current) {
          pathRef.current.style.transition = "stroke-dashoffset 2s ease-in-out";
          pathRef.current.style.strokeDashoffset = "0";
        }
      }, 100);
    }
  }, []);

  return (
    <section
      id="roadmap"
      className="gradient1-bg py-20 relative overflow-hidden"
    >
      <div className="mx-auto container px-4 relative">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-medium md:text-6xl">Roadmap</h2>
          <p className="mx-auto text-xl font-semibold text-gray-400">
            Blockchain&apos;s bold infrastructure for growth
          </p>
        </div>

        <div className="relative">
          {/* SVG Path */}
          <svg
            className="absolute left-1/2 top-0 h-full -translate-x-1/2 w-[100px] md:block"
            viewBox="0 0 100 1200"
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            <path
              ref={pathRef}
              d="M50,0 Q70,200 50,400 Q30,600 50,800 Q70,1000 50,1200"
              fill="none"
              stroke="rgb(20, 184, 166)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 8px rgb(20, 184, 166))",
              }}
            />
            {roadmapStages.map((_, index) => (
              <circle
                key={`dot-${index}`}
                cx="50"
                cy={200 * index}
                r="5"
                fill="white"
                style={{ filter: "drop-shadow(0 0 5px white)" }}
              />
            ))}
          </svg>

          <div className="space-y-32 relative">
            {roadmapStages.map((stage, index) => (
              <div key={index} className="relative flex justify-center">
                <div
                  className={`w-full md:w-5/12 ${
                    stage.position === "left" ? "md:mr-auto" : "md:ml-auto"
                  } relative bg-[#000416] rounded-lg overflow-hidden`}
                >
                  {/* Arrows */}
                  <div
                    className={`absolute ${
                      stage.position === "left" ? "right-0" : "left-0"
                    } top-1/2 -translate-y-1/2 ${
                      stage.position === "left"
                        ? "translate-x-1/2"
                        : "-translate-x-1/2"
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-teal-500 transform rotate-45"
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`p-12 relative z-10 ${
                      stage.position === "right" ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="mb-6">
                      <h3
                        className={`text-2xl font-semibold ${
                          stage.position === "right" ? "pr-6" : "pl-6"
                        }`}
                      >
                        {stage.title}
                      </h3>
                      <p
                        className={`text-teal-500 text-2xl font-semibold ${
                          stage.position === "right" ? "pr-6" : "pl-6"
                        }`}
                      >
                        {stage.period}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {stage.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={`flex items-center gap-3 ${
                            stage.position === "right"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          {stage.position === "right" ? (
                            <>
                              <span className="text-gray-300">{item}</span>
                              <span className="inline-block w-4 h-0.5 bg-teal-500"></span>
                            </>
                          ) : (
                            <>
                              <span className="inline-block w-4 h-0.5 bg-teal-500"></span>
                              <span className="text-gray-300">{item}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
