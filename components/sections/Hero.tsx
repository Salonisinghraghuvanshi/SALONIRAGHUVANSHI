"use client";

import { useState, useEffect } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // 1. Updated navLinks to objects with actual paths/IDs
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "My work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col relative overflow-hidden">

      {/* ── BACKGROUND IMAGES ── */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
        {/* Mobile image */}
        <img
          src="/SALONI.jpg"
          alt=""
          aria-hidden="true"
          className="block md:hidden w-[100vw] h-[100vh] object-cover object-bottom"
        />
        {/* Desktop image */}
        <img
          src="/SALONI (1).jpg"
          alt=""
          aria-hidden="true"
          className="hidden md:block w-full h-full object-cover object-right-bottom"
        />
      </div>

      {/* ── NAVBAR ── */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-10 lg:px-14 py-4 md:py-5">
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <img
            src="/logo.png"
            alt="Saloni Singh logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-bold text-[17px] text-[#2c2415] tracking-tight whitespace-nowrap">
            Saloni Singh
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm whitespace-nowrap transition-colors duration-200 hover:text-[#c9a94a] ${
                i === 0 ? "text-[#2c2415] font-semibold" : "text-[#6b5c3e] font-normal"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop WhatsApp CTA (Fixed nesting issue) */}
        <a 
          href="https://wa.me/message/AKKMPYWLTDKJA1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex bg-[#2c2415] text-white text-sm font-semibold rounded-full px-5 py-2.5 whitespace-nowrap transition-all duration-200 hover:bg-[#c9a94a] hover:scale-105 flex-shrink-0 no-underline items-center justify-center"
        >
          Contact Me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer z-30 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-[#2c2415] rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-[#2c2415] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-[#2c2415] rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* ── MOBILE DROPDOWN ── */}
      <div
        className={`md:hidden absolute top-0 left-0 right-0 z-10 bg-[#fffbe8]/97 backdrop-blur-md pt-[68px] pb-8 px-8 flex flex-col border-b border-[#c9a94a]/20 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-3"
        }`}
      >
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-[15px] text-[#2c2415] font-medium py-3 border-b border-[#c9a94a]/15 hover:text-[#c9a94a] transition-colors"
          >
            {item.name}
          </a>
        ))}
        
        {/* Mobile WhatsApp CTA (Fixed nesting issue) */}
        <a 
          href="https://wa.me/message/AKKMPYWLTDKJA1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-5 bg-[#2c2415] text-white text-sm font-semibold rounded-full px-5 py-3 transition-all duration-200 hover:bg-[#c9a94a] no-underline flex items-center justify-center"
        >
          Contact me
        </a>
      </div>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-[3] flex-1 flex md:items-center min-h-[calc(100vh-64px)]">
        <div
          className={`px-6 md:px-[6%] pt-8 pb-16 w-full md:max-w-[52%] transition-all duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1
            className={`text-[clamp(36px,5.5vw,54px)] font-extrabold text-[#1e1608] leading-[1.13] tracking-tight mb-[clamp(2rem,2.5vw,2rem)] transition-all duration-700 delay-100 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Elevate Your Brand's
            <br />
            Digital Presence &
            <br />
            Social Reach
          </h1>

          <p
            className={`text-sm md:text-[15px] text-[#5a4a2e] leading-relaxed mb-[clamp(2rem,2.5vw,2rem)] max-w-[340px] transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Minimalist aesthetics, cinematic videography, and AI-driven Meta ads that scale premium lifestyle and wellness brands.
          </p>

          <div
            className={`flex items-center gap-4 transition-all duration-700 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <a 
              href="https://drive.google.com/drive/folders/1sXOQwuKQ5AIY9eo_-lzKhTGlJU7qRPFa?usp=sharing"
              className="bg-[#1e1608] text-white text-sm font-semibold rounded-full px-6 py-3 flex items-center gap-2.5 transition-all duration-200 hover:bg-[#c9a94a] hover:scale-105 active:scale-100"
            >
              View My Work
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <svg width="9" height="11" viewBox="0 0 10 12" fill="none">
                  <path d="M1 1L9 6L1 11V1Z" fill="white" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;