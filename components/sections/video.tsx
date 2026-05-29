"use client";

import { useState, useRef, useEffect, useCallback, type MouseEvent } from "react";
import { Volume2, VolumeX, X, ChevronLeft, ChevronRight, Film, Sparkles, Target, Layers } from "lucide-react";

interface VideoItem {
  id: string;
  videoUrl: string;
  accent: string;
  icon?: typeof Film;
  tag?: string;
  title?: string;
}

interface VideoCardProps {
  v: VideoItem;
  index: number;
  onClick: () => void;
}

interface DragState {
  on: boolean;
  startX: number;
  scrollLeft: number;
}

interface ArrowState {
  left: boolean;
  right: boolean;
}

// ── Add more videos here ──────────────────────────────────
const videos: VideoItem[] = [
  {
    id: "v1",
    videoUrl: "https://res.cloudinary.com/dbcxbzqr5/video/upload/v1773748463/IMG_4356_lqoz9q.mov",
    accent: "#b8860b",
    icon: Film,
  },
  {
    id: "v2",
    videoUrl: "https://res.cloudinary.com/dbcxbzqr5/video/upload/v1778520823/B1ED31ED-FEA6-4B06-89E5-57C834FE57D4_s8uarn.mp4",
    accent: "#c0622a",
    icon: Target,
  },
  {
    id: "v3",
    videoUrl: "https://res.cloudinary.com/dbcxbzqr5/video/upload/v1778518826/copy_1925A47A-A58C-4077-B16D-F41B86835EE0_1_rfajjb.mov",
    accent: "#3d7a5c",
    icon: Sparkles,
  },
  {
    id: "v4",
    videoUrl: "https://res.cloudinary.com/dbcxbzqr5/video/upload/v1778518947/prototype-H_1_unttp0.mp4",
    accent: "#5a4fcf",
  },
  {
    id: "v5",
    videoUrl: "https://res.cloudinary.com/dbcxbzqr5/video/upload/v1780046605/copy_0C9BE133-9798-47F0-B808-266B37E042A0_fxneny.mov",
    accent: "#b8860b",
    icon: Film,
  },
  {
    id: "v6",
    videoUrl: "https://res.cloudinary.com/dbcxbzqr5/video/upload/v1778519336/copy_23247E1E-E520-46B2-8758-480B42951D46_zt4w8l.mov",
    accent: "#c0622a",
    icon: Layers,
  },
];

// ── Single Video Card ─────────────────────────────────────
function VideoCard({ v, index, onClick }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const Icon = v.icon;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? el.play().catch(() => { }) : el.pause(); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="flex-shrink-0 w-70 sm:w-78 md:w-82 cursor-pointer group"
      style={{ animation: `cardIn 0.45s ease ${index * 70}ms both` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* White card wrapper */}
      <div className="rounded-2xl overflow-hidden border border-[#ddd4be] bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-md">

        {/* Fixed-size video box — same for all cards */}
        <div className="relative w-full h-86 sm:h-90 md:h-94 bg-[#ede6d6] overflow-hidden">

          {/* Shimmer while loading */}
          {!loaded && (
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg,#ede6d6 25%,#e0d5c1 50%,#ede6d6 75%)",
                backgroundSize: "400px 100%",
                animation: "shimmer 1.5s infinite linear",
              }}
            />
          )}

          {/* Autoplay muted video */}
          <video
            ref={videoRef}
            src={v.videoUrl}
            muted
            loop
            playsInline
            onCanPlay={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />

          {/* Bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Tag badge — top left */}
          {/* <div
            className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md border"
            style={{ color: v.accent, borderColor: `${v.accent}50`, background: `${v.accent}18` }}
          >
            <Icon size={9} />
            {v.tag}
          </div> */}

          {/* Watch with sound pill — center, on hover */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-250"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            <div className="flex items-center gap-1.5 bg-white/90 text-[#1c1710] text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-md">
              <Volume2 size={12} />
              Watch with sound
            </div>
          </div>
        </div>

        {/* Card footer */}
        {/* <div className="flex items-center justify-between px-3.5 py-2.5 border-t border-[#ddd4be] bg-white">
          <p className="text-[12.5px] font-bold text-[#1c1710] truncate max-w-[85%]"
             style={{ fontFamily: "'Playfair Display', serif" }}>
            {v.title}
          </p>
          <span className="w-2 h-2 rounded-full flex-shrink-0 opacity-70" style={{ background: v.accent }} />
        </div> */}
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────
export function VideoShowcase() {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLVideoElement | null>(null);
  const drag = useRef<DragState>({ on: false, startX: 0, scrollLeft: 0 });
  const [playing, setPlaying] = useState<VideoItem | null>(null);
  const [muted, setMuted] = useState<boolean>(false);
  const [arrows, setArrows] = useState<ArrowState>({ left: false, right: true });

  const updateArrows = useCallback((): void => {
    const el = stripRef.current;
    if (!el) return;
    setArrows({
      left: el.scrollLeft > 8,
      right: el.scrollLeft < el.scrollWidth - el.clientWidth - 8,
    });
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    updateArrows();
    return () => el.removeEventListener("scroll", updateArrows);
  }, [updateArrows]);

  const scroll = (dir: number): void => stripRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  const onMD = (e: MouseEvent<HTMLDivElement>): void => {
    const el = stripRef.current;
    if (!el) return;
    drag.current = { on: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = "grabbing";
  };
  const onMM = (e: MouseEvent<HTMLDivElement>): void => {
    if (!drag.current.on) return;
    const el = stripRef.current;
    if (!el) return;
    e.preventDefault();
    el.scrollLeft = drag.current.scrollLeft - (e.pageX - el.offsetLeft - drag.current.startX) * 1.1;
  };
  const onMU = (): void => {
    drag.current.on = false;
    if (stripRef.current) stripRef.current.style.cursor = "grab";
  };

  const openModal = (v: VideoItem): void => {
    setPlaying(v);
    setMuted(false);
    setTimeout(() => {
      if (modalRef.current) { modalRef.current.muted = false; modalRef.current.play().catch(() => { }); }
    }, 100);
  };
  const closeModal = (): void => { modalRef.current?.pause(); setPlaying(null); };
  const toggleMute = (): void => { if (modalRef.current) modalRef.current.muted = !muted; setMuted(m => !m); };

  return (
    <>
      {/* Font + keyframes — minimal inline style */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Lato:wght@400;600;700&display=swap');
        @keyframes cardIn   { from { opacity:0; transform:translateY(14px) } to { opacity:1; transform:none } }
        @keyframes shimmer  { from { background-position:-400px 0 } to { background-position:400px 0 } }
        @keyframes mfadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes mslideUp { from { opacity:0; transform:scale(0.96) translateY(14px) } to { opacity:1; transform:none } }
        .hide-scrollbar                { -ms-overflow-style:none; scrollbar-width:none; }
        .hide-scrollbar::-webkit-scrollbar { display:none; }
      `}</style>

      {/* ── Section ─────────────────────────────── */}
      <section
        className="w-full border-t border-[#ddd4be] py-14 sm:py-16 px-4 sm:px-6"
        style={{
          fontFamily: "'Lato', sans-serif",
          background: "linear-gradient(135deg,#f7f2ea 0%,#f0e9d8 100%)",
        }}
      >
        {/* max-w-6xl centred wrapper */}
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">

            {/* Left — title */}
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="block w-6 h-[1.5px] bg-[#b8860b]" />
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#b8860b]">
                  Featured Work
                </span>
              </div>
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-[#1c1710] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The <em className="italic text-[#b8860b]">Reel.</em>
              </h2>
            </div>

            {/* Right — subtitle + arrows */}
            <div className="flex flex-col sm:items-end gap-3">
              <p className="text-sm text-[#8a7a62] leading-relaxed max-w-xs">
                Scroll or drag to explore. Click any card to watch with sound.
              </p>
              {/* Arrows — hidden on mobile (touch scroll is enough) */}
              <div className="flex gap-2">
                <button
                  onClick={() => scroll(-1)}
                  disabled={!arrows.left}
                  className="w-9 h-9 rounded-full border border-[#ddd4be] bg-white text-[#4a3f2e] flex items-center justify-center shadow-sm transition-all duration-200 hover:border-[#b8860b] hover:text-[#b8860b] disabled:opacity-25 disabled:cursor-default"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  onClick={() => scroll(1)}
                  disabled={!arrows.right}
                  className="w-9 h-9 rounded-full border border-[#ddd4be] bg-white text-[#4a3f2e] flex items-center justify-center shadow-sm transition-all duration-200 hover:border-[#b8860b] hover:text-[#b8860b] disabled:opacity-25 disabled:cursor-default"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* ── Scroll strip — contained inside max-w-6xl ── */}
          {/* overflow-x-auto on the inner strip, parent clips it */}
          <div className="overflow-hidden rounded-xl">
            <div
              ref={stripRef}
              className="hide-scrollbar flex gap-3 sm:gap-4 overflow-x-auto pb-3 snap-x snap-mandatory"
              style={{ cursor: "grab" }}
              onMouseDown={onMD}
              onMouseMove={onMM}
              onMouseUp={onMU}
              onMouseLeave={onMU}
            >
              {/* Leading space */}
              <div className="flex-shrink-0 w-1" />

              {videos.map((v, i) => (
                <div key={v.id} className="snap-start">
                  <VideoCard v={v} index={i} onClick={() => openModal(v)} />
                </div>
              ))}

              {/* Trailing space */}
              <div className="flex-shrink-0 w-1" />
            </div>
          </div>

          {/* ── Footer ── */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
            {/* Project count */}
            <div className="flex items-center gap-2 text-xs text-[#8a7a62]">
              <span>{videos.length} projects</span>
              <span className="block w-10 h-px bg-[#ddd4be]" />
            </div>

            {/* CTA */}
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
      </section>

      {/* ── Modal ──────────────────────────────────── */}
      {playing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(28,23,16,0.85)", backdropFilter: "blur(14px)", animation: "mfadeIn 0.2s ease" }}
          onClick={closeModal}
        >
          <div
            className="w-full max-w-3xl rounded-2xl overflow-hidden border border-[#ddd4be] bg-white shadow-2xl"
            style={{ animation: "mslideUp 0.28s cubic-bezier(0.23,1,0.32,1)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-[#ddd4be] bg-[#f5f0e8]">
              <div className="flex items-center gap-2.5 min-w-0">
                {/* Accent tag */}
                {/* <span
                  className="flex-shrink-0 text-[9.5px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border"
                  style={{ color: playing.accent, borderColor: `${playing.accent}50`, background: `${playing.accent}14` }}
                >
                  {playing.tag}
                </span> */}
                {/* <p
                  className="text-base sm:text-lg font-bold text-[#1c1710] truncate"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {playing.title}
                </p> */}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                <button
                  onClick={toggleMute}
                  className="w-8 h-8 rounded-full border border-[#ddd4be] bg-white text-[#4a3f2e] flex items-center justify-center transition-all hover:border-[#b8860b] hover:text-[#b8860b]"
                >
                  {muted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                </button>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full border border-[#ddd4be] bg-white text-[#4a3f2e] flex items-center justify-center transition-all hover:border-[#c0622a] hover:text-[#c0622a]"
                >
                  <X size={13} />
                </button>
              </div>
            </div>

            {/* Video player */}
            <div className="bg-[#111] flex items-center justify-center">
              <video
                ref={modalRef}
                src={playing.videoUrl}
                controls
                playsInline
                className="w-full max-h-[72vh] object-contain block"
                onEnded={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoShowcase;