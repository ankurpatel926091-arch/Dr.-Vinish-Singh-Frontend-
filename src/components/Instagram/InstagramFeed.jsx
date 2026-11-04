import React, { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { ExternalLink, ArrowRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

export default function InstagramFeed() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const scriptId = "elfsight-platform-script";
          let script = document.getElementById(scriptId);
          if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://static.elfsight.com/platform/platform.js";
            script.async = true;
            document.body.appendChild(script);
          }
        }
      },
      { rootMargin: "350px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 lg:py-20 bg-slate-50/80 font-sans relative overflow-hidden border-t border-slate-200/70">
      {/* Background Decorative Soft Light Blobs */}
      <div className="absolute top-0 right-1/4 -mt-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-12">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 text-orange-600 border border-orange-200/60 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-2.5 sm:mb-3">
              <FaInstagram size={15} className="text-orange-500" />
              <span>UROLOGY INSIGHTS &amp; UPDATES</span>
            </div>

            <h2 className="text-[20px] min-[380px]:text-[22px] sm:text-3xl lg:text-4xl font-extrabold text-[#103F7C] tracking-tight leading-tight">
              <span className="block sm:inline">Follow Dr. Vinish Kumar Singh</span>{" "}
              <span className="text-orange-500 block sm:inline">@drvinishurosurgeon</span>
            </h2>

            <p className="mt-2 text-xs sm:text-base text-slate-600 sm:text-[#103F7C] leading-relaxed font-medium sm:font-semibold max-w-xl mx-auto md:mx-0">
              <span className="sm:hidden">
                Stay informed with expert urology tips, patient awareness videos, and laser treatment updates.
              </span>
              <span className="hidden sm:inline">
                Stay informed with expert urology tips, patient-awareness videos, treatment insights, and updates on advanced laser procedures.
              </span>
            </p>
          </div>

          <a
            href="https://www.instagram.com/drvinishurosurgeon/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 shrink-0"
          >
            <FaInstagram size={16} />
            <span>Follow on Instagram</span>
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
              className="elfsight-app-7043849e-6810-4a13-b861-643061affb06 w-full min-h-[280px]"
              data-elfsight-app-lazy
            ></div>
          </div>
        </ScrollReveal>

        {/* ================= BOTTOM FOLLOW PROMPT BANNER ================= */}
        <ScrollReveal variant="fade-up" delay={250} className="mt-8 sm:mt-12">
          <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-5 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl border border-white/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-left w-full sm:w-auto">
              {/* Mobile Header Row: Icon aligned with Heading */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-orange-500 p-0.5 shrink-0 shadow-md">
                  <div className="w-full h-full bg-[#103F7C] rounded-[14px] flex items-center justify-center text-white">
                    <FaInstagram size={22} className="sm:hidden" />
                    <FaInstagram size={28} className="hidden sm:block" />
                  </div>
                </div>
                <h3 className="sm:hidden text-[15px] font-extrabold text-white leading-snug">
                  Stay Informed on Urology Health
                </h3>
              </div>

              <div>
                <h3 className="hidden sm:block text-lg sm:text-xl font-extrabold text-white">
                  Stay Informed on Urology Health
                </h3>
                <p className="text-[11px] sm:text-sm text-blue-100 mt-1 sm:mt-0.5 font-normal leading-relaxed text-left">
                  <span className="sm:hidden">
                    Follow @drvinishurosurgeon for trusted health guidance, patient awareness videos, and urology tips.
                  </span>
                  <span className="hidden sm:inline">
                    Follow @drvinishurosurgeon for trusted health guidance, patient-awareness videos, advanced treatment insights, and practical urology tips.
                  </span>
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/drvinishurosurgeon/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 shrink-0"
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