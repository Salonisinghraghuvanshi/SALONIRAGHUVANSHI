"use client";

import { useState, useRef } from "react";
import { Play, Film, Sparkles, Target, Layers, X } from "lucide-react";

const videos = [
  {
    id: "vid-1",
    title: "Bourbon Cinematic Launch",
    tag: "Cinematic",
    duration: "0:45",
    orientation: "landscape",
    thumbnail: "/SALONI.jpg",
    videoUrl: "https://res.cloudinary.com/dbcxbzqr5/video/upload/v1773748463/IMG_4356_lqoz9q.mov",
    icon: Film,
    accent: "#c9a94a",
  },
  {
    id: "vid-2",
    title: "Edits on trendy Topics with a strategic hook to maximize Meta ad performance.",
    tag: "Paid Ads",
    duration: "0:30",
    orientation: "portrait",
    thumbnail: "/SALONI (1).jpg",
    videoUrl: "https://res.cloudinary.com/dbcxbzqr5/video/upload/v1778520823/B1ED31ED-FEA6-4B06-89E5-57C834FE57D4_s8uarn.mp4",
    icon: Target,
    accent: "#e07b4a",
  },
  {
    id: "vid-3",
    title: "Minimalist B-Roll Reel",
    tag: "Social",
    duration: "0:15",
    orientation: "landscape",
    thumbnail: "/SALONI (1).jpg",
    videoUrl: "",
    icon: Layers,
    accent: "#8b7dd8",
  },
  {
    id: "vid-4",
    title: "Wellness Brand Portfolio Video",
    tag: "AI Content",
    duration: "0:50",
    orientation: "landscape",
    thumbnail: "/SALONI.jpg",
    videoUrl: "https://res.cloudinary.com/dbcxbzqr5/video/upload/v1778518947/prototype-H_1_unttp0.mp4",
    icon: Sparkles,
    accent: "#6aab8e",
  },
  {
    id: "vid-4",
    title: "Wellness Brand Portfolio Video",
    tag: "AI Content",
    duration: "0:50",
    orientation: "landscape",
    thumbnail: "/SALONI.jpg",
    videoUrl: "https://res.cloudinary.com/dbcxbzqr5/video/upload/v1778518947/prototype-H_1_unttp0.mp4",
    icon: Sparkles,
    accent: "#6aab8e",
  },
];

export function VideoShowcase() {
  const [playing, setPlaying] = useState(null);
  const videoRef = useRef(null);

  const openVideo = (video) => {
    setPlaying(video);
    setTimeout(() => videoRef.current?.play(), 80);
  };

  const closeVideo = () => {
    videoRef.current?.pause();
    setPlaying(null);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .video-card { transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
        .video-card:hover { transform: translateY(-4px); }
        .video-card:hover .thumb-img { transform: scale(1.06); opacity: 0.65; }
        .video-card:hover .play-btn { transform: scale(1.12); border-color: rgba(255,255,255,0.9); background: rgba(255,255,255,0.22); }
        .video-card:hover .accent-bar { width: 100%; }

        .thumb-img { transition: transform 0.7s cubic-bezier(0.23,1,0.32,1), opacity 0.4s ease; }
        .play-btn  { transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease; }
        .accent-bar { width: 0; transition: width 0.5s cubic-bezier(0.23,1,0.32,1); }

        .modal-overlay { animation: fadeIn 0.25s ease; }
        .modal-box    { animation: slideUp 0.3s cubic-bezier(0.23,1,0.32,1); }
        @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }

        /* --- Masonry-style CSS Grid --- */
        .reel-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 260px 260px;
          gap: 12px;
        }

        /* 
          Layout:
          [landscape big] [landscape big] [portrait] [portrait]
          [landscape sm ] [landscape sm ] [portrait] [portrait]

          portrait cols 3-4 span both rows → tall cards
          landscape col 1 row 1 → wide-ish
          landscape col 2 row 1 → wide-ish
          landscape col 1 row 2 → 
          landscape col 2 row 2 →
        */

        /* vid-1: landscape — top-left 2 cols, row 1 */
        .card-0 { grid-column: 1 / 3; grid-row: 1 / 2; }
        /* vid-4: landscape — bottom-left 2 cols, row 2 */
        .card-3 { grid-column: 1 / 3; grid-row: 2 / 3; }
        /* vid-2: portrait — col 3, spans both rows */
        .card-1 { grid-column: 3 / 4; grid-row: 1 / 3; }
        /* vid-3: portrait — col 4, spans both rows */
        .card-2 { grid-column: 4 / 5; grid-row: 1 / 3; }

        @media (max-width: 768px) {
          .reel-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 200px 360px 200px;
            gap: 10px;
          }
          .card-0 { grid-column: 1 / 3; grid-row: 1 / 2; }
          .card-1 { grid-column: 1 / 2; grid-row: 2 / 3; }
          .card-2 { grid-column: 2 / 3; grid-row: 2 / 3; }
          .card-3 { grid-column: 1 / 3; grid-row: 3 / 4; }
        }

        @media (max-width: 480px) {
          .reel-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 160px 300px 160px;
            gap: 8px;
          }
        }
      `}</style>

      <section
        style={{ fontFamily: "'DM Sans', sans-serif", background: "#0f0d08" }}
        className="w-full py-20 px-5 md:px-10"
      >
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-[#c9a94a] uppercase mb-3">
                — Featured Work
              </p>
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-5xl md:text-6xl font-bold text-white leading-[1.05]"
              >
                The Reel.
              </h2>
            </div>
            <p className="text-sm text-white/40 max-w-[280px] leading-relaxed">
              Commercial videography fused with data-driven strategy — content that looks beautiful and converts.
            </p>
          </div>

          {/* ── Mixed Grid ── */}
          <div className="reel-grid">
            {videos.map((v, i) => {
              const Icon = v.icon;
              const isPortrait = v.orientation === "portrait";
              return (
                <div
                  key={v.id}
                  className={`video-card card-${i} relative overflow-hidden rounded-2xl cursor-pointer bg-[#1a1610]`}
                  onClick={() => openVideo(v)}
                >
                  {/* Thumbnail */}
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="thumb-img absolute inset-0 w-full h-full opacity-75"
                    style={{ objectFit: isPortrait ? "cover" : "cover", objectPosition: "center" }}
                  />

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Accent bar bottom */}
                  <div
                    className="accent-bar absolute bottom-0 left-0 h-[2.5px]"
                    style={{ background: v.accent }}
                  />

                  {/* Tag */}
                  <div
                    className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest backdrop-blur-md"
                    style={{
                      background: `${v.accent}18`,
                      border: `1px solid ${v.accent}50`,
                      color: v.accent,
                    }}
                  >
                    <Icon className="w-3 h-3" />
                    {v.tag}
                  </div>

                  {/* Duration */}
                  <div className="absolute top-3 right-3 text-[10px] text-white/50 font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md">
                    {v.duration}
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="play-btn w-12 h-12 rounded-full flex items-center justify-center border border-white/30 bg-white/10 backdrop-blur-sm"
                    >
                      <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      className={`font-bold text-white leading-tight ${isPortrait ? "text-lg" : "text-xl"}`}
                    >
                      {v.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── CTA ── */}
          <div className="mt-10 flex justify-center">
            <button className="flex items-center gap-2.5 border border-white/15 text-white text-sm font-semibold rounded-full px-7 py-3.5 hover:bg-[#c9a94a] hover:border-[#c9a94a] hover:text-[#1e1608] transition-all duration-300 hover:scale-105 active:scale-100">
              Work With Me
              <svg width="9" height="11" viewBox="0 0 10 12" fill="none">
                <path d="M1 1L9 6L1 11V1Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Modal Player ── */}
      {playing && (
        <div
          className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-lg px-4"
          onClick={closeVideo}
        >
          <div
            className="modal-box relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors"
            >
              <X className="w-4 h-4" /> Close
            </button>

            {/* Player */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl bg-black"
              style={{ border: `1px solid ${playing.accent}30` }}
            >
              <video
                ref={videoRef}
                src={playing.videoUrl}
                controls
                className="w-full max-h-[80vh] object-contain"
                onEnded={closeVideo}
              />
            </div>

            {/* Meta */}
            <div className="mt-4 flex items-center gap-3">
              <span
                className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full"
                style={{
                  background: `${playing.accent}18`,
                  color: playing.accent,
                  border: `1px solid ${playing.accent}44`,
                }}
              >
                {playing.tag}
              </span>
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white font-bold text-xl"
              >
                {playing.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoShowcase;