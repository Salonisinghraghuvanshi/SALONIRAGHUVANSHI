"use client";

import { ArrowUpRight, BarChart3, TrendingUp, Users } from "lucide-react";

const caseStudies = [
  {
    id: "01",
    client: "SpiceX Beverage Co.",
    title: "Herbal Bourbon Product Launch",
    role: "AI Concept Art, Videography & Meta Ads",
    description:
      "Developed the end-to-end visual identity and lifestyle marketing sequence for an innovative beverage brand featuring in-the-bottle extraction. Utilizing ultra-realistic AI generation and 85mm lens style videography, we showcased the proprietary slotted strainer cap and PET plastic textures. The campaign culminated in a high-converting Meta ad showing the perfect bourbon pour while spices remained flawlessly filtered.",
    metrics: [
      { label: "CPA Reduction", value: "42%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Ad ROAS", value: "4.8x", icon: <BarChart3 className="w-4 h-4" /> },
    ],
    image: "/SALONI.jpg",
    reverse: false,
  },
  {
    id: "02",
    client: "Lumina Aesthetics",
    title: "Organic Scaling via Canva Pro",
    role: "Social Media Strategy & Canva Design",
    description:
      "Transformed a disjointed Instagram feed into a premium, cohesive digital storefront. By creating minimal, elegant Canva Pro templates and establishing a strict visual hierarchy, we elevated the brand's perceived value. Paired with a consistent posting schedule and community management, organic reach skyrocketed within 90 days.",
    metrics: [
      { label: "Follower Growth", value: "+12k", icon: <Users className="w-4 h-4" /> },
      { label: "Engagement", value: "+150%", icon: <TrendingUp className="w-4 h-4" /> },
    ],
    image: "/SALONI (1).jpg",
    reverse: true,
  },
  {
    id: "03",
    client: "Verve Wellness",
    title: "Cinematic UGC TikTok Campaign",
    role: "Short-Form Video & UGC Direction",
    description:
      "Bridged the gap between high-end commercial visuals and authentic user-generated content. We directed a series of unboxing and lifestyle opening sequences that felt organic to the TikTok algorithm but maintained a luxury aesthetic, resulting in viral traction and sold-out inventory.",
    metrics: [
      { label: "Organic Views", value: "2.4M", icon: <Users className="w-4 h-4" /> },
      { label: "Conversion Rate", value: "8.5%", icon: <BarChart3 className="w-4 h-4" /> },
    ],
    image: "/SALONI.jpg",
    reverse: false,
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="bg-white w-full font-sans py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* ── HEADER ── */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[2px] bg-[#c9a94a]" />
            <span className="text-sm text-[#6b5c3e] font-medium tracking-wide uppercase">Proven Results</span>
            <span className="block w-8 h-[2px] bg-[#c9a94a]" />
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#1e1608] leading-[1.15] mb-4 tracking-tight">
            Featured <span className="text-[#c9a94a]">Case Studies</span>
          </h2>
          <p className="text-[15px] text-[#5a4a2e] leading-relaxed max-w-[500px]">
            A deep dive into how strategic visual content, AI workflows, and targeted ads transform premium brands into market leaders.
          </p>
        </div>

        {/* ── CASE STUDIES LIST ── */}
        <div className="flex flex-col gap-20 md:gap-32">
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16 ${
                study.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* Image Column */}
              <div className="w-full md:w-1/2 group">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#faf8f3] border border-[#e8dfc8] shadow-sm">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-[#1e1608]/5 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-[#1e1608] font-bold text-lg w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                    {study.id}
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <span className="text-[#c9a94a] text-[13px] font-bold uppercase tracking-wider mb-2">
                  {study.client}
                </span>
                
                <h3 className="text-[clamp(24px,3vw,36px)] font-extrabold text-[#1e1608] leading-tight mb-4">
                  {study.title}
                </h3>
                
                <div className="inline-block bg-[#faf8f3] border border-[#e8dfc8] text-[#6b5c3e] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                  {study.role}
                </div>
                
                <p className="text-[15px] text-[#5a4a2e] leading-relaxed mb-8">
                  {study.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 w-full mb-8">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col gap-1 border-l-2 border-[#c9a94a] pl-4">
                      <div className="flex items-center gap-1.5 text-[#9e8c6e] text-xs font-bold uppercase tracking-wide">
                        {metric.icon}
                        {metric.label}
                      </div>
                      <span className="text-2xl font-black text-[#1e1608]">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="group flex items-center gap-2 text-[#1e1608] text-sm font-bold border-b-2 border-[#1e1608] pb-1 hover:text-[#c9a94a] hover:border-[#c9a94a] transition-colors duration-300">
                  Read Full Breakdown
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 pt-12 border-t border-[#e8dfc8] flex flex-col items-center text-center">
          <h3 className="text-2xl font-extrabold text-[#1e1608] mb-4">Want similar results for your brand?</h3>
          <button className="bg-[#1e1608] text-white text-sm font-semibold rounded-full px-8 py-3.5 hover:bg-[#c9a94a] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0">
            View Pricing & Packages
          </button>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;