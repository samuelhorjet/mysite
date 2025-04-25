import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient1-bg text-white mb-10 pt-16">
      <div className="md:px-8 px-4">
        <div className="mb-12 grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Left Block */}
          <div>
            <div className="mb-6">
              <div className="relative h-12 w-40">
                <Image
                  src="/images/logo-2.svg"
                  alt="Coindox logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-white text-xl font-semibold uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[18px] text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  One pager
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Presentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Token Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Others Links */}
          <div>
            <h3 className="mb-4 text-white text-xl font-semibold uppercase">
              Others Links
            </h3>
            <ul className="space-y-2 text-[18px] text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  API Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-white text-xl font-semibold uppercase">
              Legal
            </h3>
            <ul className="space-y-2 text-[18px] text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms & Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[18px] text-gray-400 text-center md:text-left">
              Copyright © {currentYear} Coindox. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary text-gray-400">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="hover:text-primary text-gray-400">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="hover:text-primary text-gray-400">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="hover:text-primary text-gray-400">
                <Github size={18} />
              </Link>
              <Link href="#" className="hover:text-primary text-gray-400">
                <Twitter size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
