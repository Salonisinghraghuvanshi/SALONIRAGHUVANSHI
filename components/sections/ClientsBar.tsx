"use client";

export function ClientsBar() {
  const tools = [
    { image: "/logos/chat.png", alt: "ChatGPT" },
    { image: "/logos/gem.jpg", alt: "Gemini" },
    { image: "/logos/claude.png", alt: "Claude" },
    { image: "/logos/kling.png", alt: "Kling AI" },
    { image: "/logos/can.jpg", alt: "Canva Pro" },
    { image: "/logos/cap.png", alt: "CapCut" },
    { image: "/logos/buffer.png", alt: "Buffer" },
    { image: "/logos/flow.png", alt: "Flow AI" },
  ];

  return (
    <section className="bg-white py-12 md:py-16 border-t border-[#e8dfc8] overflow-hidden">
      
      {/* 
        Injecting a simple CSS animation directly into the component 
        so it works instantly without needing to edit tailwind config files.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 mb-8 md:mb-12">
        <p className="text-center text-[#9e8c6e] font-sans text-xs md:text-sm uppercase tracking-widest font-bold">
          Powered by Industry-Leading Tools & AI
        </p>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative w-full flex">
        <div className="animate-marquee gap-10 md:gap-16 px-5 md:px-8">
          
          {/* 
            We render the array TWICE [...tools, ...tools] 
            This creates a seamless infinite loop when the animation resets
          */}
          {[...tools, ...tools].map((tool, index) => (
            <div 
              key={index} 
              // Notice the sizes are much bigger now! (w-120px to w-180px)
              className="flex-shrink-0 flex items-center justify-center w-[120px] h-[55px] md:w-[180px] md:h-[75px]"
            >
              <img 
                src={tool.image} 
                alt={tool.alt}
                // Removed all grayscale and opacity classes to keep them full color!
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
          ))}
          
        </div>
      </div>
      
    </section>
  );
}