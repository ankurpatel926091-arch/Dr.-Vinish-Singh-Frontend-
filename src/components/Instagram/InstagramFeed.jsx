import React from "react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

export default function InstagramFeed() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-transparent via-sky-50/20 to-transparent font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <ScrollReveal variant="fade-up" className="text-center mb-5">
          <span className="text-orange-500 font-extrabold uppercase tracking-[3px] text-xs">
            Instagram
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3B7A] mt-1.5">
            Follow Dr. Vinish Kumar Singh
          </h2>

          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Follow us on Instagram for health tips, patient awareness,
            treatment updates and the latest urology information.
          </p>
        </ScrollReveal>

        {/* Elfsight Instagram Feed */}
        <ScrollReveal variant="scale-up" delay={200}>
          <div
            className="elfsight-app-7043849e-6810-4a13-b861-643061affb06"
            data-elfsight-app-lazy
          ></div>
        </ScrollReveal>

      </div>
    </section>
  );
}