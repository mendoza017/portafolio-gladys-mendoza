"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ROUTES, TABS } from "@/lib/constants";

const navLinks = [
  { link: ROUTES.HOME, label: TABS.HOME },
  { link: ROUTES.SERVICES, label: TABS.SERVICES },
  { link: ROUTES.WORKS, label: TABS.WORKS },
  { link: ROUTES.BRANDS, label: TABS.BRANDS },
  { link: ROUTES.CONTACTME, label: TABS.CONTACTME },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isFixed = scrollY >= 25;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isFixed
          ? "bg-black/25 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[75px]">
        <a href={ROUTES.HOME} className="flex-shrink-0">
          <Image src="/GM.png" alt="logo" width={65} height={65} className="h-[65px] w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map(({ link, label }) => (
            <a
              key={link}
              href={link}
              className="text-white text-sm font-semibold hover:text-[var(--color-primary)] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <nav className="hidden md:flex items-center">
          <a
            href={ROUTES.LETSTALK}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--color-primary)] text-[var(--color-primary)] rounded-2xl px-4 py-2 min-w-[120px] text-center text-sm font-semibold transition-all hover:bg-white hover:text-black"
          >
            {TABS.LETSTALK}
          </a>
        </nav>

        <button
          className="md:hidden text-white w-10 h-10 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {menuOpen && (
          <div className="absolute top-[80px] right-5 w-[350px] bg-black rounded-xl shadow-lg p-4 md:hidden z-50">
            <nav className="flex flex-col">
              {navLinks.map(({ link, label }) => (
                <a
                  key={link}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="text-white border-b border-[var(--color-neutral)] py-3 px-4 hover:text-[var(--color-primary)] transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href={ROUTES.LETSTALK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white py-3 px-4 hover:text-[var(--color-primary)] transition-colors"
              >
                {TABS.LETSTALK}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
