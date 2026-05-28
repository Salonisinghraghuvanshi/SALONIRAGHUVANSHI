"use client";

import { ArrowRight } from "lucide-react";

const FollowSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#faf8f3] via-[#fffbe8] to-[#e8dfc8] pt-16 px-6 md:px-10 border-t border-[#e8dfc8]">
      
      {/* Subtle decorative background glow to mimic the premium feel */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a94a]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative min-h-[320px] md:min-h-[380px]">
        
        {/* LEFT — Portrait Image (Anchored to bottom) */}
        <div className="w-full md:w-[45%] rounded-lg flex justify-center md:justify-start order-2 md:order-1 mt-8 md:mt-0 h-full md:absolute bottom-0 left-0 z-10">
          <img
            // IMPORTANT: Use a transparent PNG image for this to look like the reference!
            src="/follow.jpeg" 
            alt="Saloni Singh"
            className="w-full h-full  object-contain object-center drop-shadow-xl"
          />
        </div>

        {/* RIGHT — Content */}
        <div className="w-full md:w-[45%] md:ml-auto flex flex-col items-center md:items-start text-center md:text-left z-20 md:py-16 order-1 md:order-2">
          
          <h2 className="text-[clamp(28px,4.5vw,46px)] font-extrabold text-[#1e1608] leading-[1.15] mb-8 max-w-[480px] tracking-tight">
            Follow for proven strategies on AI content creation, Meta ads, and cinematic visual branding.
          </h2>

          <a 
            href="https://instagram.com/salonisinghraghuvanshi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#1e1608] text-white text-sm font-semibold rounded-full px-8 py-3.5 hover:bg-[#c9a94a] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
          >
            Follow Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

        </div>
      </div>
    </section>
  );
};

export default FollowSection;