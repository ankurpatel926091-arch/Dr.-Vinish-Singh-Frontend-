import React from "react";
import { NavLink } from "react-router-dom";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Stethoscope,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import PageHero from "../../components/PageHero";

const conditionDetails = {
  title: "Vesicovaginal Fistula (VVF) Repair",
  subTitle: "Precision Reconstructive Fistula Surgery",
  description: "Laparoscopic, robotic, and transvaginal reconstructive repair for vesicovaginal fistula (VVF) to permanently resolve urinary leakage by Senior Urologist Dr. Vinish Kumar Singh.",
  treatments: [
    {
      title: "Transvaginal / Laparoscopic VVF Repair",
      subtitle: "Precision Flap Interposition Repair",
      desc: "Excision of fistula tract with multi-layer watertight closure and tissue flap interposition (Martius / omental flap) to guarantee fistula healing.",
      highlights: ["High First-Time Cure Rate (>95%)", "Watertight Multi-Layer Closure", "Tissue Flap Interposition Protection"],
      tag: "Reconstructive Surgery",
      bgIcon: "bg-blue-50 text-[#103F7C]",
      borderAccent: "border-t-4 border-t-[#103F7C]",
    },
    {
      title: "Cystoscopy & Fistula Mapping",
      subtitle: "Pre-Operative Structural Diagnostic",
      desc: "Diagnostic cystoscopy and retrograde pyelogram to evaluate ureteral orifice distance and precise fistula tract diameter.",
      highlights: ["Precise Anatomic Mapping", "Evaluates Ureteral Clearance", "Tailors Surgical Approach"],
      tag: "Diagnostic Care",
      bgIcon: "bg-orange-50 text-orange-600",
      borderAccent: "border-t-4 border-t-orange-500",
    },
  ],
  symptoms: [
    { title: "Continuous Involuntary Leakage", desc: "Constant urine leakage from vagina, day and night, regardless of posture." },
    { title: "Post-Pelvic Surgery Onset", desc: "Leakage starting days or weeks after hysterectomy or obstructed labor." },
    { title: "Vaginal Irritation & Odor", desc: "Recurrent vulvar skin irritation, wetness, or ammonia odor." },
    { title: "Absence of Normal Urination", desc: "Decreased voiding through urethra due to continuous fistula leakage." },
  ]
};

export default function VesicovaginalFistula() {
  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      <PageHero
        title={conditionDetails.title}
        subTitle={conditionDetails.subTitle}
        description={conditionDetails.description}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 text-[#103F7C] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-orange-500" />
            <span>ADVANCED FISTULA RECONSTRUCTION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Permanent VVF Fistula Repair
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
            Restoring complete dryness and quality of life through microsurgical and laparoscopic reconstructive techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {conditionDetails.treatments.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 ${item.borderAccent} shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.bgIcon}`}>
                    <Stethoscope size={22} />
                  </div>
                  <span className="text-[10px] font-extrabold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-lg leading-snug group-hover:text-[#103F7C] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-[#103F7C] mb-3">{item.subtitle}</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">{item.desc}</p>

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
                  <span>Book Consultation</span>
                  <ChevronRight size={14} />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Key Symptoms of Vesicovaginal Fistula</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {conditionDetails.symptoms.map((s, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-800 text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 pt-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Seeking Solution for Post-Surgical Fistula Leakage?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Consult Dr. Vinish Kumar Singh for expert reconstructive VVF repair.</p>
          </div>
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 shrink-0"
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
