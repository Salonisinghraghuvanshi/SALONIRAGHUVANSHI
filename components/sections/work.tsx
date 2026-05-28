"use client";

import { useRef, useState } from "react";

const postCategories = [
  "All",
  "Canva Pro",
  "AI Concept Art",
  "Meta Ad Creatives",
  "Brand Identity",
  "Product Mockups",
];

const reelCategories = [
  "All",
  "Cinematic Reels",
  "Lifestyle Sequence",
  "UGC Ads",
  "Commercial B-Roll",
  "AI Video Generation",
];

const posts = [
  { category: "Canva Pro", image: "/SALONI.jpg", label: "Minimalist LinkedIn Banner" },
  { category: "AI Concept Art", image: "/SALONI (1).jpg", label: "Ultra-Realistic Bottle Design" },
  { category: "Meta Ad Creatives", image: "/SALONI.jpg", label: "Herbal Infusion Campaign" },
  { category: "Brand Identity", image: "/SALONI (1).jpg", label: "High-End Wellness Aesthetic" },
  { category: "Product Mockups", image: "/SALONI.jpg", label: "Technical Slotted Cap Anatomy" },
  { category: "Canva Pro", image: "/SALONI (1).jpg", label: "Spiced Bourbon Ad" },
  { category: "AI Concept Art", image: "/SALONI.jpg", label: "85mm Lens Product Shot" },
  { category: "Meta Ad Creatives", image: "/SALONI (1).jpg", label: "Premium Conversion Campaign" },
];

const reels = [
  { category: "Cinematic Reels", image: "/SALONI.jpg", label: "Perfect Pour Sequence" },
  { category: "Lifestyle Sequence", image: "/SALONI (1).jpg", label: "Unboxing & Opening Sequence" },
  { category: "UGC Ads", image: "/SALONI.jpg", label: "In-the-Bottle Extraction Demo" },
  { category: "Commercial B-Roll", image: "/SALONI (1).jpg", label: "Bourbon & Spices Mix" },
  { category: "AI Video Generation", image: "/SALONI.jpg", label: "Cinematic Spice Drop" },
  { category: "Cinematic Reels", image: "/SALONI (1).jpg", label: "Transparent PET Textures" },
  { category: "UGC Ads", image: "/SALONI.jpg", label: "Minimal Elegant Setup" },
  { category: "Commercial B-Roll", image: "/SALONI (1).jpg", label: "High-End Product Reveal" },
];

// ── Reusable carousel section ──
const WorkCarousel = ({
  title,
  accent,
  subtitle,
  categories,
  items,
  aspectRatio,
}: {
  title: string;
  accent: string;
  subtitle: string;
  categories: string[];
  items: { category: string; image: string; label: string }[];
  aspectRatio: string;
}) => {
  const [active, setActive] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <section id="work" className="bg-white w-full font-sans py-16 px-6 md:px-10 border-t border-[#e8dfc8]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-[clamp(26px,3.8vw,40px)] font-extrabold text-[#1e1608] leading-[1.15]">
              {title}{" "}
              <span className="text-[#c9a94a]">{accent}</span>
            </h2>
            <p className="mt-2 text-sm text-[#6b5c3e] leading-relaxed max-w-[380px]">
              {subtitle}
            </p>
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-[#c9a94a]/40 bg-white flex items-center justify-center text-[#2c2415] hover:bg-[#c9a94a] hover:text-white hover:border-[#c9a94a] transition-all duration-200"
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-[#1e1608] flex items-center justify-center text-white hover:bg-[#c9a94a] transition-all duration-200"
              aria-label="Next"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[13px] font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 whitespace-nowrap ${
                active === cat
                  ? "bg-[#1e1608] text-white border-[#1e1608]"
                  : "bg-white text-[#5a4a2e] border-[#e8dfc8] hover:border-[#c9a94a] hover:text-[#c9a94a]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-3 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filtered.length === 0 ? (
            <p className="text-sm text-[#9e8c6e] py-12">No work in this category yet.</p>
          ) : (
            filtered.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 group relative rounded-2xl overflow-hidden border border-[#e8dfc8] bg-[#faf8f3] hover:border-[#c9a94a]/60 hover:shadow-lg transition-all duration-300"
                style={{
                  width: aspectRatio === "9/16" ? "200px" : "280px",
                }}
              >
                <div
                  className="overflow-hidden"
                  style={{ aspectRatio }}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Overlay label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1e1608]/80 via-[#1e1608]/30 to-transparent px-4 py-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-[12px] font-semibold tracking-wide">
                    {item.label}
                  </span>
                </div>

                {/* Top-right category badge */}
                <div className="absolute top-3 right-3 bg-[#c9a94a]/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

// ── Posts Section ──
export const PostsSection = () => (
  <WorkCarousel
    title="Static & AI"
    accent="Creatives"
    subtitle="High-converting Canva Pro designs, ultra-realistic AI concepts, and Meta ad creatives tailored for premium brands."
    categories={postCategories}
    items={posts}
    aspectRatio="1/1"
  />
);

// ── Reels Section ──
export const ReelsSection = () => (
  <WorkCarousel
    title="Cinematic &"
    accent="Short-Form"
    subtitle="Engaging lifestyle sequences, UGC, and 85mm-style commercial videography that stops the scroll."
    categories={reelCategories}
    items={reels}
    aspectRatio="9/16"
  />
);

export default PostsSection;