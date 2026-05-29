"use client";

import { useRef, useState } from "react";

const services = [
  {
    title: "AI Content & Canva Pro Design",
    desc: "Leveraging advanced AI tools and Canva Pro to maintain a minimal, elegant, and highly engaging visual identity.",
    image: "/AI.jpeg",
  },
  {
    title: "Cinematic Videography",
    desc: "Ultra-realistic product shoots and lifestyle marketing sequences that capture every intricate detail to captivate your audience.",
    image: "/Cinematic.jpeg",
  },
  {
    title: "Meta Ads & Strategy",
    desc: "Data-driven advertising campaigns designed to turn high-quality content into measurable ROI and brand scaling.",
    image: "/Meta.jpeg",
  },
  {
    title: "End-to-End Social Management",
    desc: "Comprehensive handling of your social platforms—from perfectly crafted LinkedIn banners to daily Instagram engagement.",
    image: "/E2E.jpeg",
  },
];

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth < 640 ? container.offsetWidth - 48 : 320;
    const next = dir === "right"
      ? Math.min(activeIndex + 1, services.length - 1)
      : Math.max(activeIndex - 1, 0);
    container.scrollTo({ left: next * (cardWidth + 20), behavior: "smooth" });
    setActiveIndex(next);
  };

  return (
    <section id="services" className="bg-[#faf8f3] w-full font-sans py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold text-[#1e1608] leading-[1.15]">
            Here&apos;s How I Help You
            <br />
            <span className="text-[#c9a94a]">Stand Out</span>
          </h2>
          <p className="mt-3 text-sm text-[#6b5c3e] max-w-[360px] leading-relaxed">
            High-end aesthetics, cinematic product visuals, and data-backed ad strategies to turn your followers into customers.
          </p>
        </div>

        {/* Cards scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[calc(100vw-80px)] sm:w-[300px] md:w-[320px] bg-white rounded-2xl border border-[#e8dfc8] overflow-hidden hover:border-[#c9a94a]/50 hover:shadow-md transition-all duration-200"
            >
              {/* Text content */}
              <div className="p-5 pb-4">
                <h3 className="text-[16px] font-extrabold text-[#1e1608] leading-snug mb-2">
                  {service.title}
                </h3>
                <p className="text-[13px] text-[#6b5c3e] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Image */}
              <div className="mx-5 mb-5 rounded-xl overflow-hidden aspect-[4/3] bg-[#e8dfc8]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => scroll("left")}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full border border-[#c9a94a]/40 flex items-center justify-center text-[#2c2415] bg-white hover:bg-[#c9a94a] hover:text-white hover:border-[#c9a94a] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Previous"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={activeIndex === services.length - 1}
            className="w-10 h-10 rounded-full bg-[#1e1608] flex items-center justify-center text-white hover:bg-[#c9a94a] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Next"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;