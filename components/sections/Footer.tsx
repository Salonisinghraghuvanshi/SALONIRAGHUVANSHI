import { Mail, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "My work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];
  return (
    <footer className="bg-white text-[#1a1a1a] overflow-hidden">

      {/* ── TOP BAR: nav + email ── */}
      <div className="px-6 md:px-10 lg:px-16 pt-10 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-8 md:gap-10">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm whitespace-nowrap transition-colors duration-200 hover:text-[#c9a94a] ${
                item.name === "Home" ? "text-[#2c2415] font-semibold" : "text-[#6b5c3e] font-normal"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="mailto:salonisinghraghuvanshi@gmail.com"
          className="flex items-center gap-2 text-[13px] font-medium text-[#1a1a1a] border border-gray-300 rounded-full px-4 py-2 hover:border-[#c9a94a] hover:text-[#c9a94a] transition-colors whitespace-nowrap"
        >
          <Mail className="w-4 h-4" />
          salonisinghraghuvanshi@gmail.com
        </a>
      </div>

      {/* ── OVERSIZED NAME ── */}
      <div className="px-6 md:px-10 lg:px-14 overflow-hidden">
        <p
          className="whitespace-nowrap leading-[0.9] tracking-[-0.04em] pb-2"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          <span
            className="font-black text-[#1e1e1e]"
            style={{ fontSize: "clamp(80px, 17.5vw, 240px)" }}
          >
            Saloni
          </span>
          <span
            className="font-black"
            style={{
              fontSize: "clamp(80px, 17.5vw, 270px)",
              color: "#d4d4d4",
            }}
          >
            {" "}Singh
          </span>
        </p>
      </div>

      {/* ── DIVIDER ── */}
      <div className="mx-6 md:mx-10 lg:mx-14 mt-3 border-t border-gray-200" />

      {/* ── BOTTOM BAR ── */}
      <div className="px-6 md:px-10 lg:px-14 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#888]">

        {/* Left */}
        <div className="flex items-center gap-6">
          <span>@copyright 2025</span>
          <span className="hover:text-[#c9a94a] transition-colors">
            Privacy Policy
          </span>
        </div>

        {/* Center — social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/salonisinghraghuvanshi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiC%2F0YLB%2BS6ectJFFr8CWYg%3D%3D"
            target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#c9a94a] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/salonisinghraghuvanshi/"
            target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center text-[#888] hover:text-[#c9a94a] transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/share/1C7KkYmdGW/"
             target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center text-[#888] hover:text-[#c9a94a] transition-colors"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/salonising24"
             target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center text-[#888] hover:text-[#c9a94a] transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <span className="hover:text-[#c9a94a] transition-colors">
            Terms & Condition
          </span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}