import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles, HelpCircle, PhoneCall, Calendar } from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const faqs = [
  {
    q: "Are laser surgeries for kidney stones painless?",
    a: "Yes, modern laser procedures like RIRS and URSL are endoscopic and minimally invasive with zero external incisions, leading to minimal pain and rapid recovery.",
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
    a: "Key specialties include kidney stone laser surgery, HolEP prostate surgery, male infertility care, laparoscopic urology, UTI management, and reconstructive urology.",
  },
  {
    q: "How long is the recovery period after laser kidney stone surgery?",
    a: "Most patients are discharged within 24 hours and can safely resume normal light activities within 1 to 2 days under Dr. Vinish's guided recovery plan.",
  },
  {
    q: "Is insurance or cashless treatment facility available?",
    a: "Yes, cashless treatment facilities and medical insurance assistance are supported for surgical procedures at affiliated hospitals.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent font-sans relative overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#103F7C] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4 border border-blue-200/50 shadow-xs">
            <Sparkles size={14} className="text-orange-500 animate-pulse" />
            <span>COMMON DOUBTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Quick answers to common patient questions regarding urology consultations, laser procedures, and appointments.
          </p>
        </ScrollReveal>

        {/* Centered Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={index}
                variant="fade-up"
                delay={index * 60}
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-blue-400/80 bg-white shadow-lg shadow-blue-900/5 ring-2 ring-blue-500/10 border-l-4 border-l-[#103F7C]"
                      : "border-slate-200/80 bg-white/90 hover:bg-white hover:border-blue-200 hover:shadow-md"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-900 text-sm sm:text-base md:text-lg leading-snug gap-4 group"
                  >
                    <span className={`transition-colors duration-200 ${isOpen ? "text-[#103F7C] font-extrabold" : "group-hover:text-[#103F7C]"}`}>
                      {faq.q}
                    </span>

                    {/* Smooth Rotating Toggle Button */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#103F7C] text-white shadow-md shadow-blue-900/20"
                          : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-[#103F7C]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={18} className="transition-transform duration-300" />
                      ) : (
                        <Plus size={18} className="transition-transform duration-300" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-100 text-left">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA Banner (Replaces Clinic Card utility with clean interactive helper) */}
        <ScrollReveal variant="fade-up" delay={200} className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20 text-orange-400">
                <HelpCircle size={26} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">Have More Questions?</h3>
                <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-md">
                  Dr. Vinish Kumar Singh's medical team is here to assist you with any urology queries or appointments.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href="tel:+917275981480"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <PhoneCall size={16} />
                <span>Call +91 72759 81480</span>
              </a>
              <a
                href="#book-appointment"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
              >
                <Calendar size={16} />
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

