"use client";

import { ArrowUpRight, BarChart3, TrendingUp, Users, Server, ShieldCheck } from "lucide-react";

const caseStudies = [
  {
    id: "01",
    client: "SpiceX Herbal Bourbon Whisky",
    title: "Product Visualization & Marketing Assets",
    role: "Creative Direction • Product Rendering • Brand Assets",
    description:
      "Developed premium product visualizations for SpiceX Herbal Bourbon Whisky, highlighting the bottle design, slotted strainer cap mechanism, and herbal ingredients including cinnamon, cloves, cardamom, star anise, mint, and lemon. Produced marketing-ready visuals for digital campaigns and designed LinkedIn branding assets optimized for professional platforms.",
    metrics: [
      {
        label: "Deliverables",
        value: "15+ Assets",
        icon: <TrendingUp className='w-4 h-4' />,
      },
      {
        label: "Platforms",
        value: "LinkedIn",
        icon: <Users className='w-4 h-4' />,
      },
    ],
    image: "/case (4).jpeg",
    reverse: false,
  },

  {
    id: "02",
    client: "Drive Genius AI",
    title: "AI Brand Identity System",
    role: "Brand Strategy • UI Direction • Visual Design",
    description:
      "Created a complete visual identity system for Drive Genius AI. Defined typography, color systems, design language, and marketing visuals to establish a premium and trustworthy AI brand presence. Designed assets that can scale consistently across websites, social media, presentations, and future product launches.",
    metrics: [
      {
        label: "Brand System",
        value: "Complete",
        icon: <BarChart3 className='w-4 h-4' />,
      },
      {
        label: "Assets",
        value: "Multi-Channel",
        icon: <TrendingUp className='w-4 h-4' />,
      },
    ],
    image: "/case (3).jpeg",
    reverse: true,
  },

  {
    id: "03",
    client: "Aruba Maritime",
    title: "Maritime Certificate Management Platform",
    role: "MERN Stack Development • Cloud Infrastructure",
    description:
      "Built and maintained web-based certificate management systems for maritime operations. Managed deployment workflows, cloud hosting, backend integrations, and platform reliability. Focused on secure data handling, document verification workflows, and scalable infrastructure for operational efficiency.",
    metrics: [
      {
        label: "Technology",
        value: "MERN Stack",
        icon: <Server className='w-4 h-4' />,
      },
      {
        label: "Hosting",
        value: "Cloud",
        icon: <ShieldCheck className='w-4 h-4' />,
      },
    ],
    image: "/case (2).jpeg",
    reverse: false,
  },

  {
    id: "04",
    client: "Personal Brand Projects",
    title: "Content Creation & Visual Storytelling",
    role: "Video Editing • Graphic Design • Social Media",
    description:
      "Produced short-form videos, brand graphics, presentation decks, and marketing creatives for startups and personal brands. Combined storytelling, motion design, and visual strategy to create content optimized for engagement and professional brand positioning.",
    metrics: [
      {
        label: "Creative Skills",
        value: "Multi-Discipline",
        icon: <Users className='w-4 h-4' />,
      },
      {
        label: "Content",
        value: "Video + Design",
        icon: <TrendingUp className='w-4 h-4' />,
      },
    ],
    image: "/case (1).jpeg",
    reverse: true,
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
            A deep dive into how strategic visual content, robust development, and tailored design transform brands into market leaders.
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

                {/* <button className="group flex items-center gap-2 text-[#1e1608] text-sm font-bold border-b-2 border-[#1e1608] pb-1 hover:text-[#c9a94a] hover:border-[#c9a94a] transition-colors duration-300">
                  Read Full Breakdown
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button> */}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-24 pt-12 border-t border-[#e8dfc8] flex flex-col items-center text-center">
          <h3 className="text-2xl font-extrabold text-[#1e1608] mb-4">Want similar results for your brand?</h3>
          <button className="bg-[#1e1608] text-white text-sm font-semibold rounded-full px-8 py-3.5 hover:bg-[#c9a94a] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0">
            View Pricing & Packages
          </button>
        </div> */}

      </div>
    </section>
  );
};

export default CaseStudiesSection;