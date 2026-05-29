"use client";

import { useRef, useState } from "react";




const posts = [
  { image: "/post/9.PNG", label: "Minimalist LinkedIn Banner" },
  {  image: "/post/10.PNG", label: "Ultra-Realistic Bottle Design" },
  {  image: "/post/11.PNG", label: "Herbal Infusion Campaign" },
  {  image: "/post/12.PNG", label: "High-End Wellness Aesthetic" },
  {  image: "/post/13.PNG", label: "Technical Slotted Cap Anatomy" },
  {  image: "/post/14.jpeg", label: "Spiced Bourbon Ad" },
  {  image: "/post/15.jpeg", label: "85mm Lens Product Shot" },
  {  image: "/post/16.jpeg", label: "Premium Conversion Campaign" },
  { image: "/post/17.jpeg", label: "Minimalist LinkedIn Banner" },
  {  image: "/post/1.jpeg", label: "Ultra-Realistic Bottle Design" },
  {  image: "/post/2.jpeg", label: "Ultra-Realistic Bottle Design" },
  {  image: "/post/3.jpeg", label: "Herbal Infusion Campaign" },
  {  image: "/post/4.jpeg", label: "High-End Wellness Aesthetic" },
  {  image: "/post/5.webp", label: "Technical Slotted Cap Anatomy" },
  {  image: "/post/6.jpeg", label: "Spiced Bourbon Ad" },
  {  image: "/post/7.jpeg", label: "85mm Lens Product Shot" },
  {  image: "/post/8.jpeg", label: "Premium Conversion Campaign" },
];

// ── Reusable carousel section ──
const WorkCarousel = ({
  title,
  accent,
  subtitle,
  items,
  aspectRatio,
}: {
  title: string;
  accent: string;
  subtitle: string;
  items: { image: string; label: string }[];
  aspectRatio: string;
}) => {
  const [active, setActive] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);


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
             <button
          className="self-start sm:self-auto flex items-center gap-2 bg-[#1c1710] text-white text-sm font-bold px-6 py-3 rounded-full shadow transition-all duration-200 hover:bg-[#b8860b] hover:scale-105 active:scale-100"
        >
          <a href="https://drive.google.com/drive/folders/1sXOQwuKQ5AIY9eo_-lzKhTGlJU7qRPFa?usp=sharing">See More Work</a>
          <svg width="8" height="10" viewBox="0 0 10 12" fill="none">
            <path d="M1 1L9 6L1 11V1Z" fill="currentColor" />
          </svg>
        </button>
          </div>
        </div>

        {/* Category filter pills */}
        {/* <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[13px] font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 whitespace-nowrap ${active === cat
                  ? "bg-[#1e1608] text-white border-[#1e1608]"
                  : "bg-white text-[#5a4a2e] border-[#e8dfc8] hover:border-[#c9a94a] hover:text-[#c9a94a]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div> */}

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-3 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, i) => (
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
            </div>
          ))}
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
    items={posts}
    aspectRatio="1/1"
  />
);

export default PostsSection;