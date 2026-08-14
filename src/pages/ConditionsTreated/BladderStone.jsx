import React from "react";
import { NavLink } from "react-router-dom";
import {
  Sparkles,
  Zap,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Stethoscope,
  Activity,
  ChevronRight,
  AlertTriangle,
  BadgeCheck,
  HeartPulse,
} from "lucide-react";
import PageHero from "../../components/PageHero";

// Image Import
import bladderStoneImg from "../../assets/Condition Treated/Bladder Stone.png";

const bladderTreatments = [
  {
    title: "Laser Cystolithotripsy",
    subtitle: "Endoscopic Laser Stone Dusting",
    desc: "Painless laser fragmentation of bladder stones using ultra-thin endoscopes without any external skin cuts or surgical incisions.",
    highlights: ["100% No Skin Cut", "Fine Laser Dusting", "Same-Day / 24h Discharge"],
    tag: "Painless & Scarless",
    bgIcon: "bg-blue-50 text-[#103F7C]",
    borderAccent: "border-t-4 border-t-[#103F7C]",
  },
  {
    title: "PCCNL / Keyhole Removal",
    subtitle: "For Large & Dense Bladder Stones",
    desc: "Specialized keyhole technique (pencil-thin entry) for complete fragmentation and evacuation of very large or multiple dense bladder calcifications.",
    highlights: ["Keyhole Entry (<5mm)", "Rapid Stone Evacuation", "High Success Rate"],
    tag: "Keyhole Precision",
    bgIcon: "bg-orange-50 text-orange-600",
    borderAccent: "border-t-4 border-t-orange-500",
  },
  {
    title: "Bladder Outlet Correction",
    subtitle: "Recurrence Prevention Treatment",
    desc: "Simultaneous treatment of the root cause (such as prostate enlargement or urethral strictures) to stop bladder stone recurrence.",
    highlights: ["Treats Root Cause", "Prevents Recurrence", "Restores Flow"],
    tag: "Root Cause Cure",
    bgIcon: "bg-blue-50 text-[#103F7C]",
    borderAccent: "border-t-4 border-t-[#103F7C]",
  },
];

const symptoms = [
  {
    title: "Lower Abdominal & Pelvic Pain",
    desc: "Persistent aching or sharp discomfort in the lower belly or perineal area.",
  },
  {
    title: "Sudden Urine Stream Interruption",
    desc: "Urinary stream suddenly stops midway due to stone obstructing bladder neck.",
  },
  {
    title: "Burning Urination & Blood (Hematuria)",
    desc: "Painful urination with visible blood or cloudy urine.",
  },
  {
    title: "Frequent Urgency & Dribbling",
    desc: "Inability to hold urine with constant urge to visit the restroom.",
  },
];

const bladderBenefits = [
  {
    icon: Zap,
    title: "Zero Skin Incisions",
    desc: "Endoscopic scope passes naturally through urine pathway.",
  },
  {
    icon: Clock,
    title: "Rapid 24-Hour Recovery",
    desc: "Minimal tissue trauma allows patients to return home quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Stitchless Laser Technique",
    desc: "Laser fiber pulverizes stones with zero surgical sutures required.",
  },
  {
    icon: BadgeCheck,
    title: "Root Cause Treatment",
    desc: "Combines stone removal with prostate/stricture therapy to prevent recurrence.",
  },
];

export default function BladderStone() {
  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      {/* Hero Header Banner */}
      <PageHero
        title="Bladder Stone Treatment & Laser Care"
        subTitle="Painless Endoscopic Cystolithotripsy"
        description="Stitchless endoscopic laser stone removal and complete bladder health evaluation by Senior Consultant Urologist Dr. Vinish Kumar Singh."
        bgImage={bladderStoneImg}
      />

      {/* ================= 1. CORE TREATMENTS OFFERED ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 text-[#103F7C] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-orange-500" />
            <span>ENDOUROLOGY SPECIALTY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Advanced Bladder Stone Procedures
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
            Modern, endoscopic laser solutions for painless bladder stone removal and long-term recurrence prevention.
          </p>
        </div>

        {/* 3-Column Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {bladderTreatments.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 ${item.borderAccent} shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.bgIcon}`}
                  >
                    <Stethoscope size={22} />
                  </div>
                  <span className="text-[10px] font-extrabold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-lg leading-snug group-hover:text-[#103F7C] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-[#103F7C] mb-3">
                  {item.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {item.desc}
                </p>

                {/* Highlights Checklist */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={14} className="text-orange-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-slate-50 hover:bg-[#103F7C] text-[#103F7C] hover:text-white border border-slate-200 text-xs font-bold transition-all duration-300"
                >
                  <span>Inquire Consultation</span>
                  <ChevronRight size={14} />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 2. WHY CHOOSE ENDOSCOPIC LASER ================= */}
      <div className="bg-white py-14 lg:py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100/70 text-orange-700 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Zap size={13} className="text-orange-500" />
              <span>LASER ADVANTAGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Endoscopic Laser is Preferred
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Key benefits of endoscopic laser cystolithotripsy for bladder stones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bladderBenefits.map((b, i) => {
              const IconComp = b.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center mb-3 border border-blue-200">
                    <IconComp size={20} />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-1">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= 3. SYMPTOMS & EVALUATION CARD ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Symptoms Checklist (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-extrabold uppercase tracking-wider mb-3">
              <AlertTriangle size={13} />
              <span>WARNING SIGNS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
              Symptoms of Bladder Stones
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-normal">
              If you experience sudden interruption in urine flow or pelvic discomfort, early evaluation prevents severe bladder wall infection:
            </p>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {symptoms.map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 font-normal leading-normal pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Diagnostic & Laser Advantages Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#103F7C] via-blue-900 to-[#103F7C] text-white rounded-3xl p-7 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-300 bg-white/10 px-3 py-1 rounded-full border border-white/15 inline-block mb-3">
                DIAGNOSTIC EXCELLENCE
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold mb-2 leading-snug">
                Bladder &amp; Stone Diagnostics
              </h3>

              <p className="text-xs text-blue-100 leading-relaxed font-normal mb-5">
                Dr. Vinish performs complete diagnostic screening including USG Pelvis, Diagnostic Cystoscopy, and Urine Culture to verify stone composition &amp; bladder health.
              </p>

              <div className="space-y-2.5 text-xs font-medium mb-6">
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/15">
                  <Activity size={16} className="text-orange-400 shrink-0" />
                  <span>High-Resolution USG Pelvis Imaging</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/15">
                  <HeartPulse size={16} className="text-orange-400 shrink-0" />
                  <span>Diagnostic Cystoscopy &amp; Flow Analysis</span>
                </div>
              </div>

              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102"
              >
                <Calendar size={16} />
                <span>Schedule Stone Evaluation</span>
              </NavLink>
            </div>
          </div>

        </div>
      </div>

      {/* ================= 4. CTA BANNER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Experiencing Bladder Pain or Flow Interruption?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Consult Dr. Vinish Kumar Singh for expert endoscopic laser stone care in Lucknow.</p>
          </div>
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <Calendar size={16} />
            <span>Book Appointment</span>
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>

    </section>
  );
}