import React from "react";
import { NavLink } from "react-router-dom";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Stethoscope,
  Activity,
  ShieldCheck,
  Zap,
  Clock,
  Award,
  HeartPulse,
} from "lucide-react";
import PageHero from "./PageHero";

export default function ConditionPage({
  title,
  subTitle,
  description,
  category = "Urology Care",
  heroBg,
  image,
  overviewTitle,
  overviewText,
  treatmentCards = [],
  highlights = [],
  detailedTreatments = [],
  symptoms = [],
}) {
  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      {/* Page Hero */}
      <PageHero
        title={title}
        subTitle={subTitle}
        description={description}
        bgImage={heroBg}
      />

      {/* Top Clinical Highlights Bar */}
      <div className="bg-[#103F7C] text-white py-2.5 shadow-md border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-white/15">
            <div className="px-2 flex flex-col items-center">
              <span className="text-orange-400 font-black text-xl sm:text-2xl">15+ Years</span>
              <span className="text-xs sm:text-sm text-blue-100 font-medium mt-0.5">Surgical Expertise</span>
            </div>
            <div className="px-2 flex flex-col items-center">
              <span className="text-orange-400 font-black text-xl sm:text-2xl">100%</span>
              <span className="text-xs sm:text-sm text-blue-100 font-medium mt-0.5">Confidential Care</span>
            </div>
            <div className="px-2 flex flex-col items-center">
              <span className="text-orange-400 font-black text-xl sm:text-2xl">Painless</span>
              <span className="text-xs sm:text-sm text-blue-100 font-medium mt-0.5">Laser &amp; Micro-Surgery</span>
            </div>
            <div className="px-2 flex flex-col items-center">
              <span className="text-orange-400 font-black text-xl sm:text-2xl">Same-Day</span>
              <span className="text-xs sm:text-sm text-blue-100 font-medium mt-0.5">Discharge Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Image + Overview Explanation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Condition Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-[#103F7C]/15 via-blue-500/10 to-orange-500/15 shadow-xl">
              <div className="bg-white rounded-[22px] overflow-hidden h-80 sm:h-[420px] relative group border border-slate-200/90 flex items-center justify-center p-5">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/80 via-white to-slate-100 text-[#103F7C] p-6 text-center rounded-xl border border-slate-200/80">
                    <div className="w-20 h-20 rounded-2xl bg-[#103F7C] text-white flex items-center justify-center mb-5 shadow-lg">
                      <Stethoscope size={40} className="text-orange-400" />
                    </div>
                    <h3 className="font-extrabold text-xl sm:text-2xl leading-snug">{title}</h3>
                    <p className="text-sm text-slate-500 mt-2.5 leading-relaxed font-medium">
                      Specialized Clinical &amp; Surgical Care led by Senior Urologist Dr. Vinish Kumar Singh
                    </p>
                  </div>
                )}
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#103F7C] text-white text-xs sm:text-sm font-extrabold shadow-md border border-white/20">
                    <Stethoscope size={15} className="text-orange-400" />
                    <span>{category}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Overview Explanation */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#103F7C] text-xs sm:text-sm font-black uppercase tracking-wider mb-3.5">
              <Sparkles size={15} className="text-orange-500" />
              <span>OVERVIEW &amp; CLINICAL CARE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {overviewTitle || (
                <>
                  Advanced Medical &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#103F7C] to-orange-500">Surgical Solutions</span>
                </>
              )}
            </h2>

            <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {overviewText || description}
            </p>

            {/* Treatment Cards Grid */}
            {treatmentCards.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-5 mt-7 w-full">
                {treatmentCards.map((card, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-all">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold mb-3 ${idx % 2 === 0 ? "bg-blue-50 text-[#103F7C]" : "bg-orange-50 text-orange-600"}`}>
                      {idx % 2 === 0 ? <Activity size={20} /> : <ShieldCheck size={20} />}
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">{card.title}</h4>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Highlights List */}
            {highlights.length > 0 && (
              <div className="mt-7 space-y-3 w-full">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm sm:text-base font-bold text-slate-800">
                    <CheckCircle2 size={20} className="text-orange-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#103F7C] hover:bg-blue-900 text-white font-extrabold text-sm sm:text-base shadow-lg transition-all hover:scale-102"
              >
                <Calendar size={18} />
                <span>Book Doctor Consultation</span>
                <ArrowRight size={18} />
              </NavLink>
            </div>

          </div>

        </div>
      </div>

      {/* Detailed Treatments Section */}
      {detailedTreatments.length > 0 && (
        <div className="bg-white py-14 lg:py-18 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs sm:text-sm font-black text-orange-600 uppercase tracking-widest bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
                ADVANCED TREATMENT OPTIONS
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 leading-tight">
                Tailored Medical &amp; Laser Surgical Protocols
              </h3>
              <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
                Proven clinical procedures conducted by Senior Urologist &amp; Transplant Surgeon Dr. Vinish Kumar Singh.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-7">
              {detailedTreatments.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-md hover:bg-white transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#103F7C]/10 text-[#103F7C] flex items-center justify-center font-bold mb-5">
                      <Zap size={24} className="text-orange-500" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-lg sm:text-xl mb-2.5">{item.title}</h4>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                  {item.tag && (
                    <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-extrabold text-[#103F7C] bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100">
                        {item.tag}
                      </span>
                      <CheckCircle2 size={18} className="text-orange-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Symptoms Section */}
      {symptoms.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="bg-white rounded-3xl p-8 lg:p-14 text-slate-900 shadow-xl border border-slate-200/90 relative overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#103F7C] via-blue-600 to-orange-500" />
            
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/90 text-orange-700 text-xs sm:text-sm font-black uppercase tracking-wider border border-orange-200">
                  <HeartPulse size={16} className="text-orange-600" />
                  <span>WHEN TO CONSULT A DOCTOR</span>
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 leading-tight">
                  Key Symptoms &amp; Clinical Indicators
                </h3>
                <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
                  Early medical consultation prevents complications, reduces recovery time, and protects long-term health.
                </p>
                <div className="mt-8">
                  <NavLink
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#103F7C] hover:bg-blue-900 text-white font-extrabold text-sm sm:text-base shadow-lg transition-all hover:scale-102"
                  >
                    <Calendar size={18} />
                    <span>Schedule Appointment</span>
                    <ArrowRight size={18} />
                  </NavLink>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                {symptoms.map((sym, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-orange-300 hover:bg-orange-50/40 transition-all duration-300 group">
                    <div className="flex items-center gap-2.5 mb-2 text-[#103F7C] font-extrabold text-base sm:text-lg group-hover:text-orange-600 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold">
                        <HeartPulse size={18} />
                      </div>
                      <span className="leading-snug">{sym.title}</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-2">{sym.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 pt-2 text-center">
        <div className="bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#0c2e5c] text-white rounded-3xl p-8 sm:p-10 border border-blue-900/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="text-left relative z-10">
            <h4 className="text-2xl sm:text-3xl font-black text-white">Need Expert Medical Advice?</h4>
            <p className="text-base sm:text-lg text-blue-100 mt-2 font-normal">Consult Senior Urologist &amp; Kidney Transplant Surgeon Dr. Vinish Kumar Singh in Lucknow.</p>
          </div>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-base shadow-lg transition-all shrink-0 hover:scale-102 relative z-10"
          >
            <Calendar size={18} />
            <span>Book Appointment Now</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
