import React from "react";
import { FaInstagram } from "react-icons/fa";
import { ExternalLink, ArrowRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

export default function InstagramFeed() {
  return (
    <section className="py-14 lg:py-20 bg-slate-50/80 font-sans relative overflow-hidden border-t border-slate-200/70">
      {/* Background Decorative Soft Light Blobs */}
      <div className="absolute top-0 right-1/4 -mt-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 sm:mb-12">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 text-orange-600 border border-orange-200/60 text-xs font-extrabold uppercase tracking-wider mb-3">
              <FaInstagram size={14} className="text-orange-500" />
              <span>INSTAGRAM REELS &amp; UPDATES</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#103F7C] tracking-tight leading-tight">
              Follow Dr. Vinish Kumar Singh{" "}
              <span className="text-[#103F7C]">
                @drvinishurosurgeon
              </span>
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-[#103F7C] leading-relaxed font-normal">
              Watch patient awareness reels, laser surgery visual guides, and health tips directly from Dr. Vinish&apos;s clinic.
            </p>
          </div>

          <a
            href="https://www.instagram.com/drvinishurosurgeon/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 shrink-0"
          >
            <FaInstagram size={16} />
            <span>Follow @drvinishurosurgeon</span>
            <ExternalLink size={14} />
          </a>
        </ScrollReveal>

        {/* ================= ELFSIGHT LIVE INSTAGRAM FEED CARD FRAME ================= */}
        <ScrollReveal variant="scale-up" delay={150}>
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-orange-500" />

            {/* Elfsight Live Widget */}
            <div
              className="elfsight-app-7043849e-6810-4a13-b861-643061affb06 w-full"
              data-elfsight-app-lazy
            ></div>
          </div>
        </ScrollReveal>

        {/* ================= BOTTOM FOLLOW PROMPT BANNER ================= */}
        <ScrollReveal variant="fade-up" delay={250} className="mt-10 sm:mt-12">
          <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-orange-500 p-0.5 shrink-0 shadow-md">
                <div className="w-full h-full bg-[#103F7C] rounded-[14px] flex items-center justify-center text-white">
                  <FaInstagram size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold">Stay Informed on Urology Health</h3>
                <p className="text-xs sm:text-sm text-blue-100 mt-0.5 font-normal">
                  Follow @drvinishurosurgeon for daily patient awareness, surgery visual reels &amp; health tips.
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/drvinishurosurgeon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 shrink-0"
            >
              <FaInstagram size={16} />
              <span>Follow on Instagram</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}