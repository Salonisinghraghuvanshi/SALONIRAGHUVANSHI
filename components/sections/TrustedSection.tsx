"use client";

const logos = [
  { name: "SpiceX", icon: "⬡" },
  { name: "Lumina Wellness", icon: null },
  { name: "Aura Aesthetics", icon: null },
  { name: "Verve Brands", icon: null },
  { name: "Purely Infused", icon: null },
  { name: "Botanica Media", icon: null },
];

const painPoints = [
  "You're struggling to create high-end visual content that actually converts on Meta ads.",
  "You feel exhausted juggling videography, Canva designs, and daily social media algorithms.",
  "You crave a cohesive, premium aesthetic that sets your brand apart in a crowded feed.",
];

const problemCards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a94a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Low Engagement",
    desc: "Your incredible products aren't getting the organic reach or cinematic showcase they deserve online.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a94a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Content Burnout",
    desc: "Juggling AI prompt generation, filming lifestyle sequences, and managing Meta ads is draining your creative energy.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a94a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Inconsistent Aesthetic",
    desc: "Without a unified Canva and videography strategy, your brand lacks the premium, minimalist feel needed to attract high-ticket buyers.",
  },
];

const TrustedSection = () => {
  return (
    <section className="bg-white w-full font-sans">

      {/* ── TRUSTED BY BANNER ── */}
      <div className="py-12 px-6 text-center border-b border-[#e8dfc8]">
        <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-[#1e1608] leading-tight mb-8">
          Why 
          <span className="text-[#c9a94a]">You</span>{" "}
          Need Me
          <br />
          for Your Premium Brand
        </h2>

        {/* Logo strip */}
      {/* <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
        {logos.map((logo) => (
          <span
            key={logo.name}
            className="text-[#9e8c6e] text-[13px] font-semibold tracking-wide whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-200"
          >
            {logo.icon && <span className="mr-1.5">{logo.icon}</span>}
            {logo.name}
          </span>
        ))}
      </div> */}
    </div>

{/* ── PAIN POINT SECTION ── */ }
<div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

  {/* LEFT — Headline + checklist */}
  <div className="md:col-span-1 flex flex-col gap-6">
    <h2 className="text-[clamp(26px,3.5vw,36px)] font-extrabold text-[#1e1608] leading-[1.2]">
      Overwhelmed by
      <br />
      Content Creation {" "}
      <span className="text-[#c9a94a]">& Algorithms?</span>
    </h2>

    <button className="self-start flex items-center gap-2.5 bg-[#c9a94a] text-white text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-[#b8973d] hover:scale-105 transition-all duration-200 active:scale-100">
      Let&apos;s Fix That
      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
        <svg width="8" height="10" viewBox="0 0 10 12" fill="none">
          <path d="M1 1L9 6L1 11V1Z" fill="white" />
        </svg>
      </span>
    </button>

    <ul className="flex flex-col gap-3 mt-1">
      {painPoints.map((point, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#1e1608] flex items-center justify-center">
            <svg width="10" height="8" viewBox="0 0 12 9" fill="none">
              <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-sm text-[#5a4a2e] leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* CENTER — Portrait image */}
  <div className="md:col-span-1 flex justify-center">
    <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden bg-[#e8dfc8]">
      <img
        src="/img.jpeg"
        alt="Social Media Strategist portrait"
        className="w-full h-full object-cover object-top"
      />
      {/* subtle warm overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1e1608]/30 to-transparent" />
    </div>
  </div>

  {/* RIGHT — Problem cards */}
  <div className="md:col-span-1 flex flex-col gap-5">
    {problemCards.map((card, i) => (
      <div
        key={i}
        className="flex flex-col gap-1.5 p-4 rounded-xl border border-[#e8dfc8] bg-[#fffbe8] hover:border-[#c9a94a]/50 hover:shadow-sm transition-all duration-200"
      >
        <div className="w-9 h-9 rounded-lg bg-[#fff3d0] flex items-center justify-center mb-1">
          {card.icon}
        </div>
        <h3 className="text-[15px] font-bold text-[#1e1608]">{card.title}</h3>
        <p className="text-[13px] text-[#6b5c3e] leading-relaxed">{card.desc}</p>
      </div>
    ))}
  </div>

</div>
    </section >
  );
};

export default TrustedSection;