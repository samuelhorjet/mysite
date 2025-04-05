"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/Component/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Team", href: "#team" },
  { name: "Roadmap", href: "#roadmap" },
  {
    name: "Blog",
    href: "#blog",
    hasDropdown: true,
    dropdownItems: [
      { name: "Blog", href: "#blog" },
      { name: "Blog Details", href: "#blog-details" },
    ],
  },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-36 pl-40">
            {/* Combined logo image with Coindox text */}
            <Image
              src="/images/logo-2.svg"
              alt="Coindox logo"
              fill
              className="object-contain absolute right-96"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="group relative">
                    <button
                      className="flex items-center gap-1 text-sm text-gray-300 transition group-hover:text-primary"
                      aria-expanded={activeDropdown === item.name}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute left-0 top-full z-50 mt-1 hidden min-w-[160px] rounded-md bg-gray-900 py-2 shadow-lg group-hover:block">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 m-40 text-lg text-gray-300 hover:bg-gray-800 hover:text-primary"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-lg text-gray-300 transition hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-primary text-primary"
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 top-16 z-50 w-full bg-black/95 pb-6 pt-2 backdrop-blur md:hidden">
          <ul className="flex flex-col gap-1 px-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="flex w-full items-center justify-between py-2 text-gray-300 transition hover:text-primary"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={activeDropdown === item.name}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-1 border-l border-gray-800 pl-4">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block py-2 text-gray-300 transition hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-300 transition hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 px-4">
            <Button
              variant="outline"
              size="sm"
              className="w-full rounded-full border-primary text-primary"
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
