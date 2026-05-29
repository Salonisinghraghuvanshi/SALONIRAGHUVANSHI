"use client";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white w-full font-sans py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT — Large portrait */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#e8dfc8]">
            <img
              src="/me.jpeg"
              alt="Saloni Singh — Social Media & Content Strategist"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="flex flex-col gap-6">

          {/* About me label */}
          <div className="flex items-center gap-3">
            <span className="block w-8 h-[2px] bg-[#c9a94a]" />
            <span className="text-sm text-[#6b5c3e] font-medium tracking-wide">About me</span>
          </div>

          {/* Headline */}
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold text-[#1e1608] leading-[1.15]">
            Meet{" "}
            <span className="text-[#c9a94a]">Saloni Singh</span>
            <br />
            Your AI & Content
            <br />
            Strategist
          </h2>

          {/* Description */}
          <p className="text-sm md:text-[15px] text-[#5a4a2e] leading-relaxed max-w-[420px]">
            Without a cohesive visual strategy, even the best products get lost in the feed. I help premium brands break through the noise using ultra-realistic videography, seamless Canva Pro designs, and highly targeted Meta ad campaigns to build digital presences that convert.
          </p>

          {/* CTA */}
          <button className="self-start flex items-center gap-2.5 bg-[#c9a94a] text-white text-sm font-semibold rounded-full px-6 py-3 hover:bg-[#b8973d] hover:scale-105 transition-all duration-200 active:scale-100">
            <a href="https://drive.google.com/drive/folders/1sXOQwuKQ5AIY9eo_-lzKhTGlJU7qRPFa?usp=sharing" className="text-white">
              View My Portfolio
            </a>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg width="9" height="11" viewBox="0 0 10 12" fill="none">
                <path d="M1 1L9 6L1 11V1Z" fill="white" />
              </svg>
            </span>
          </button>

          {/* Stats row */}
          <div className="flex items-top gap-10 pt-2 mt-2">
            <div className="flex flex-col gap-0.5">
              <span className="text-[40px] font-extrabold text-[#1e1608] leading-none">50+</span>
              <span className="text-xs text-[#6b5c3e] font-medium">Brands Scaled</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[40px] font-extrabold text-[#1e1608] leading-none">10M</span>
              <span className="text-xs text-[#6b5c3e] font-medium">Organic Views</span>
            </div>

            {/* Small floating portrait — bottom right */}
            <div className="ml-auto w-36 h-36 rounded-xl overflow-hidden flex-shrink-0 self-top">
              <img
                src="/mine.jpeg"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Year range */}
          <p className="text-xs text-[#9e8c6e] font-medium tracking-wide -mt-16">2019–2025</p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;