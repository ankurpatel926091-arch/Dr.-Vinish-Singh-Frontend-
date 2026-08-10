import React, { useState } from "react";
import { Plus, MapPin, Phone, Clock, Navigation, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "Are laser surgeries for kidney stones painless?",
    a: "Yes, modern laser procedures like RIRS and URSL are endoscopic and minimally invasive with zero external incisions, leading to minimal pain and quick recovery.",
  },
  {
    q: "What are the OPD clinic timings in Alambagh, Lucknow?",
    a: "Dr. Vinish Kumar Singh's clinic operates Monday through Saturday from 10:00 AM to 8:00 PM.",
  },
  {
    q: "Do I need a prior appointment for consultation?",
    a: "Prior appointment is recommended to ensure minimal waiting time. Same-day appointments can also be scheduled via call or online booking.",
  },
  {
    q: "What urology treatments are provided by Dr. Vinish?",
    a: "Key specialties include kidney stone laser surgery, HolEP prostate surgery, male infertility care, UTI management, and reconstructive urology.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const googleMapsUrl = "https://maps.google.com/?q=Alambagh+Lucknow";

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header (Centered Alignment above Grid for Perfect Balance) */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#103F7C] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Sparkles size={12} className="text-orange-500" />
            <span>Common Doubts</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-normal">
            Quick answers to common patient questions regarding urology consultations and laser procedures.
          </p>
        </div>

        {/* 2-Column Grid with Equal Alignment */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column - FAQ Accordion List (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-blue-300 bg-white shadow-md shadow-blue-900/5 ring-1 ring-blue-100/80"
                      : "border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm leading-snug gap-4 group"
                  >
                    <span className={`transition-colors duration-200 ${isOpen ? "text-[#103F7C] font-extrabold" : "group-hover:text-[#103F7C]"}`}>
                      {faq.q}
                    </span>

                    {/* Smooth Rotating Plus Icon Container */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-orange-500 text-white rotate-45 shadow-sm"
                          : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-[#103F7C]"
                      }`}
                    >
                      <Plus size={16} className="transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Smooth Fluid Height & Opacity Expansion */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-blue-100/60 pt-3">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Clinic Quick Info Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#103F7C] via-blue-900 to-[#0d3364] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
              {/* Background Glow Orb */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-300 bg-white/10 px-3 py-1 rounded-full border border-white/15 inline-block mb-4">
                  CLINIC INFORMATION
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold mb-6">
                  Dr. Vinish Kumar Singh Clinic
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-orange-400 shrink-0 mt-0.5" />
                    <span className="text-blue-100 leading-relaxed">
                      Shop No.-1, In front of Sant Nirankari Satsang Bhawan, Singar Nagar, Alambagh, Lucknow
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-orange-400 shrink-0" />
                    <a href="tel:+917275981480" className="text-blue-100 font-semibold hover:text-white transition-colors">
                      +91 72759 81480
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-orange-400 shrink-0" />
                    <span className="text-blue-100 font-medium">
                      Mon – Sat : 10:00 AM – 8:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-8 pt-6 border-t border-white/15">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Navigation size={16} />
                  <span>Get Map Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
