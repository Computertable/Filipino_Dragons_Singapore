"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-lg text-(--brand-red)">
          Filipino Dragons SG
        </h1>

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