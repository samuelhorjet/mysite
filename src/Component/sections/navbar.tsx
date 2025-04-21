"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
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
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeHash, setActiveHash] = useState<string>("");

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return activeHash === href;
    }
    return pathname === href;
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#");
    };

    handleHashChange(); // Run on load
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="fixed top-0 z-50 backdrop-blur w-full gradient-bg">
      <div className="mx-4 md:mx-8 lg:container lg:mx-auto flex md:h-20 lg:h-24 h-18 items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-36 pl-40">
            <Image
              src="/images/logo-2.svg"
              alt="Coindox logo"
              fill
              className="object-contain absolute right-96"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-50 lg:flex">
          <ul className="flex gap-10 items-center h-full">
            {navItems.map((item) => (
              <li key={item.name} className="relative flex items-center h-full">
                {item.hasDropdown ? (
                  <div className="group relative flex items-center h-full">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-lg font-bold transition py-2 ${
                        isActive(item.href)
                          ? "text-[#14a384]"
                          : "text-white hover:text-[#14a384]"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180 stroke-[2.5]" />
                    </Link>
                    <div className="absolute left-0 top-full z-50 transition-all duration-300 rounded-md bg-gray-900 py-2 shadow-lg min-w-[150px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg text-white hover:bg-gray-800 hover:text-[#14a384]"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-lg font-bold transition py-2 ${
                      isActive(item.href)
                        ? "text-[#14a384]"
                        : "text-white hover:text-[#14a384]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <button className="login-button flex items-center gap-2 px-6 py-2 text-white font-bold uppercase tracking-wide">
            <Image
              src="/images/user-logo.png"
              alt="User icon"
              width={20}
              height={20}
              className="object-contain"
            />
            Login
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="text-white block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 flex transition-opacity duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/70"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`ml-auto w-72 max-w-full h-full bg-[#0c0c0c] p-6 pt-24 overflow-y-auto shadow-lg text-white transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-6 left-4 text-white z-10"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <div className="mb-6">
            <Image
              src="/images/logo-2.svg"
              alt="Logo"
              width={150}
              height={100}
            />
          </div>
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className={`w-full flex justify-between items-center text-left py-2 transition ${
                        isActive(item.href)
                          ? "text-[#14a384] font-bold"
                          : "text-white"
                      }`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-1 border-l border-gray-700 pl-4">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block py-2 transition hover:text-[#14a384]"
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
                    className={`block py-2 transition ${
                      isActive(item.href)
                        ? "text-[#14a384] font-bold"
                        : "text-white hover:text-[#14a384]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
