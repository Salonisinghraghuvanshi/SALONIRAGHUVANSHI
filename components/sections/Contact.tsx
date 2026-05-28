"use client";

import { useState, type ChangeEvent } from "react";
import { Calendar, ArrowRight, MapPin, Mail } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  number: string;
  url: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    url: "",
    number: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const sendToWhatsApp = () => {
    const { name, email, url, number, message } = formData;

    if (!name || !email) {
      alert("Please fill in at least your name and email.");
      return;
    }

    const text =
      `*Hii Saloni Nice Connecting with you*

*My Name is* ${name}
*You can contact me at this email* ${email}
*and This is my Brand/URL* ${url || "Not provided"}
*Whatsapp Number:* ${number || "Not provided"}
*Project Details:*${message || "No details provided"}
*Looking forward to connecting!*
*Thank you!*

`;

    const phone = "917897603858"; // +91 78976 03858
    const waURL = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(waURL, "_blank");
  };

  return (
    <section id="contact" className="bg-white w-full font-sans py-16 px-6 md:px-10 border-t border-[#e8dfc8]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* LEFT — Text & Info */}
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-[2px] bg-[#c9a94a]" />
              <span className="text-sm text-[#6b5c3e] font-medium tracking-wide uppercase">Get In Touch</span>
            </div>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#1e1608] leading-[1.15] mb-4 tracking-tight">
              Ready to Elevate <br />
              Your <span className="text-[#c9a94a]">Brand?</span>
            </h2>
            <p className="text-[15px] text-[#5a4a2e] leading-relaxed max-w-[420px]">
              Whether you need cinematic videography, high-converting Meta ads, or a complete AI-driven content strategy, let's build something extraordinary together.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-2">
            {/* Email Block */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#faf8f3] border border-[#e8dfc8] flex items-center justify-center flex-shrink-0 text-[#c9a94a]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="pt-1">
                <span className="block text-[12px] text-[#9e8c6e] font-bold uppercase tracking-wider mb-0.5">Email Me</span>
                <a href="mailto: salonisinghraghuvanshi@gmail.com" className="text-[15px] text-[#1e1608] font-semibold hover:text-[#c9a94a] transition-colors" target="_blank" rel="noopener noreferrer">
                  salonisinghraghuvanshi@gmail.com
                </a>
              </div>
            </div>

            {/* Calendar/Booking Block */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#faf8f3] border border-[#e8dfc8] flex items-center justify-center flex-shrink-0 text-[#c9a94a]" >
                <Calendar className="w-5 h-5" />
              </div>
              <div className="pt-1">
                <span className="block text-[12px] text-[#9e8c6e] font-bold uppercase tracking-wider mb-0.5">Book a Discovery Call</span>
                <a href="https://calendly.com/salonisinghraghuvanshi/30min" className="text-[15px] text-[#1e1608] font-semibold hover:text-[#c9a94a] transition-colors" target="_blank" rel="noopener noreferrer">
                  Schedule via Calendly
                </a>
              </div>
            </div>

            {/* Location Block */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#faf8f3] border border-[#e8dfc8] flex items-center justify-center flex-shrink-0 text-[#c9a94a]">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="pt-1">
                <span className="block text-[12px] text-[#9e8c6e] font-bold uppercase tracking-wider mb-0.5">Location</span>
                <span className="text-[15px] text-[#1e1608] font-semibold">
                  Working Globally
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="bg-[#faf8f3] p-8 md:p-10 rounded-3xl border border-[#e8dfc8] shadow-sm relative overflow-hidden">
          {/* Subtle top-right corner glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c9a94a]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 relative z-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] text-[#1e1608] font-bold tracking-wide uppercase">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full bg-white border border-[#e8dfc8] rounded-xl px-4 py-3.5 text-[14px] text-[#1e1608] placeholder:text-[#c2b9a7] focus:outline-none focus:border-[#c9a94a] focus:ring-1 focus:ring-[#c9a94a] transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] text-[#1e1608] font-bold tracking-wide uppercase">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@brand.com"
                  className="w-full bg-white border border-[#e8dfc8] rounded-xl px-4 py-3.5 text-[14px] text-[#1e1608] placeholder:text-[#c2b9a7] focus:outline-none focus:border-[#c9a94a] focus:ring-1 focus:ring-[#c9a94a] transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] text-[#1e1608] font-bold tracking-wide uppercase">Brand / Company URL</label>
              <input
                type="text"
                name="url"
                value={formData.url}
                onChange={handleChange}
                placeholder="www.yourbrand.com"
                className="w-full bg-white border border-[#e8dfc8] rounded-xl px-4 py-3.5 text-[14px] text-[#1e1608] placeholder:text-[#c2b9a7] focus:outline-none focus:border-[#c9a94a] focus:ring-1 focus:ring-[#c9a94a] transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[12px] text-[#1e1608] font-bold tracking-wide uppercase">Your Whatsapp Number</label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="+91 6272829900"
                className="w-full bg-white border border-[#e8dfc8] rounded-xl px-4 py-3.5 text-[14px] text-[#1e1608] placeholder:text-[#c2b9a7] focus:outline-none focus:border-[#c9a94a] focus:ring-1 focus:ring-[#c9a94a] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] text-[#1e1608] font-bold tracking-wide uppercase">Project Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your visual goals, current social presence, or Meta ad budget..."
                className="w-full bg-white border border-[#e8dfc8] rounded-xl px-4 py-3.5 text-[14px] text-[#1e1608] placeholder:text-[#c2b9a7] focus:outline-none focus:border-[#c9a94a] focus:ring-1 focus:ring-[#c9a94a] transition-all resize-none"
              />
            </div>

            <button
              type="button"
              onClick={sendToWhatsApp}
              className="group flex items-center justify-center gap-3 bg-[#000000] text-white text-sm font-semibold rounded-xl px-8 py-4 mt-2 hover:bg-[#1ebe5c] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Send via WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;