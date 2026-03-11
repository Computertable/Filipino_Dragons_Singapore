"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <Image
            src="/FDS Logo Only - PNG Version.png"
            alt="FDS Logo"
            width={70}
            height={70}
            className="mr-3"
          />
          <h1 className="font-bold text-lg text-(--brand-black)">
            Filipino Dragons (Singapore)
          </h1>
        </div>

        <div className="space-x-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-(--brand-red) transition">
            About
          </a>
          <a href="#team" className="hover:text-(--brand-red) transition">
            Team
          </a>
          <a href="#events" className="hover:text-(--brand-red) transition">
            Events
          </a>
          <a href="#join" className="hover:text-(--brand-red) transition">
            Join
          </a>
        </div>
      </div>
    </nav>
  );
}