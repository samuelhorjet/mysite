"use client";

import { useState } from "react";
import Image from "next/image";
import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Yevhen Oleksiy",
    role: "Blockchain Architect",
    image: "/images/team_01.png",
    rating: 5.0,
    socials: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Pavlo Fedor",
    role: "Founder & CEO",
    image: "/images/team_02.png",
    rating: 5.0,
    socials: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Serhii Anatolii",
    role: "Marketing Manager",
    image: "/images/team_03.png",
    rating: 5.0,
    socials: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Ivan Petrov",
    role: "Blockchain Engineer",
    image: "/images/team_04.png",
    rating: 5.0,
    socials: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
];

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="gradient1-bg py-20">
      <div className="md:px-8 px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium tracking-tight mb-10 text-white md:text-6xl">
            Our Dedicated Team
          </h2>
          <p className="mx-auto text-xl text-gray-400">
            Always ready our team to help you
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg h-100 bg-[#000416] p-6 transition"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 0)",
              }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Top-right corner accent */}
              <div
                className="absolute right-0 top-0 h-16 w-16 bg-white/5"
                style={{
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                }}
              ></div>

              {/* Bottom-left corner accent */}
              <div
                className="absolute bottom-0 left-0 h-16 w-16 bg-[#36437c]"
                style={{
                  clipPath: "polygon(0 0, 0 100%, 100% 100%)",
                }}
              ></div>

              {/* Rating */}
              <div className="absolute right-4 top-4 flex items-center gap-1 text-sm">
                <span className="text-cyan-500">★</span>
                <span className="text-white">{member.rating.toFixed(1)}</span>
              </div>

              {/* Profile Image */}
              <div className="relative mx-auto mb-6 mt-5 h-40 w-40 overflow-hidden rounded-full border-2 border-gray-800">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`Photo of ${member.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name and Role */}
              <div className="text-center">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-lg  text-gray-400">{member.role}</p>
              </div>

              {/* Hexagon Toggle Button */}
              <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-10">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center bg-cyan-500/20 transition-all duration-300",
                    hoveredMember === index ? "scale-0" : "scale-100"
                  )}
                  style={{
                    clipPath:
                      "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                  }}
                >
                  <span className="text-lg text-cyan-500">+</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div
                className={cn(
                  "absolute left-1/2 bottom-6 transform -translate-x-1/2 flex items-center justify-center gap-4 transition-all duration-300",
                  hoveredMember === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                )}
              >
                <a
                  href={member.socials.twitter}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-cyan-500/80"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href={member.socials.facebook}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-cyan-500/80"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={member.socials.linkedin}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-cyan-500/80"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.socials.instagram}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-cyan-500/80"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
