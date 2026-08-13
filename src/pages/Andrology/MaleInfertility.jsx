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
  Users,
  Microscope,
} from "lucide-react";
import PageHero from "../../components/PageHero";
import maleInfertilityBanner from "../../assets/Male Urology/Male Infertility.png";

const fertilityTreatments = [
  {
    title: "Micro-TESE (Sperm Retrieval)",
    subtitle: "Advanced Microsurgical Extraction",
    desc: "High-magnification microscopic testicular sperm extraction for severe azoospermia (zero sperm count) in couples planning IVF/ICSI.",
    highlights: ["Microscopic 20x Precision", "High Sperm Retrieval Rate", "Same-Day Daycare Procedure"],
    tag: "Microscopic Tech",
    bgIcon: "bg-blue-50 text-[#103F7C]",
    borderAccent: "border-t-4 border-t-[#103F7C]",
  },
  {
    title: "Microscopic Varicocelectomy",
    subtitle: "Varicocele Repair Surgery",
    desc: "Gold-standard microsurgical ligation of enlarged scrotal veins to improve sperm count, motility, DNA integrity, and testosterone.",
    highlights: ["Lowest Recurrence Rate (<1%)", "Preserves Testicular Lymphatics", "Rapid Post-Op Recovery"],
    tag: "Gold Standard Repair",
    bgIcon: "bg-orange-50 text-orange-600",
    borderAccent: "border-t-4 border-t-orange-500",
  },
  {
    title: "Hormonal & Medical Spermatogenesis",
    subtitle: "Non-Surgical Fertility Care",
    desc: "Targeted hormonal balancing, antioxidant therapy, and lifestyle protocols to enhance sperm count (Oligozoospermia) & motility.",
    highlights: ["Comprehensive Screening", "Personalised Medication", "Regular Semen Monitoring"],
    tag: "Medical Therapy",
    bgIcon: "bg-blue-50 text-[#103F7C]",
    borderAccent: "border-t-4 border-t-[#103F7C]",
  },
];

const symptoms = [
  {
    title: "Low Sperm Count or Motility",
    desc: "Sub-optimal semen analysis parameters (Oligozoospermia / Asthenozoospermia).",
  },
  {
    title: "Testicular Pain or Varicocele Swelling",
    desc: "Visible dull ache or bag-of-worms sensation in scrotum during standing.",
  },
  {
    title: "Hormonal Imbalance & Fatigue",
    desc: "Reduced serum testosterone levels, low energy, or reduced muscle mass.",
  },
  {
    title: "Unexplained Couple Infertility",
    desc: "Inability to conceive after 12 months of unassisted trying.",
  },
];

const fertilityBenefits = [
  {
    icon: Microscope,
    title: "20x Microscopic Precision",
    desc: "High-power surgical microscope preserves testicular blood vessels.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Confidential Care",
    desc: "Strict patient privacy and empathetic couple-centric guidance.",
  },
  {
    icon: Clock,
    title: "Same-Day Recovery",
    desc: "Microsurgical procedures allow patients to return home the same evening.",
  },
  {
    icon: BadgeCheck,
    title: "Evidence-Based Protocols",
    desc: "Adheres to international American Urological Association (AUA) fertility guidelines.",
  },
];

export default function MaleInfertility() {
  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      {/* Hero Header Banner */}
      <PageHero
        title="Male Infertility & Andrology Care"
        subTitle="Micro-TESE & Comprehensive Fertility Evaluation"
        description="State-of-the-art microsurgical sperm retrieval, varicocele repair, semen diagnostics, and personalized medical treatments by Senior Andrologist Dr. Vinish Kumar Singh."
        bgImage={maleInfertilityBanner}
      />

      {/* ================= 1. CORE TREATMENTS OFFERED ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 text-[#103F7C] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-orange-500" />
            <span>ANDROLOGY &amp; FERTILITY SPECIALTY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Advanced Male Fertility Treatments
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
            Evidence-based medical, hormonal, and microsurgical solutions to optimize male fertility outcomes.
          </p>
        </div>

        {/* 3-Column Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {fertilityTreatments.map((item, idx) => (
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

      {/* ================= 2. WHY CHOOSE MICROSURGERY ================= */}
      <div className="bg-white py-14 lg:py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100/70 text-orange-700 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Zap size={13} className="text-orange-500" />
              <span>CLINICAL ADVANTAGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Microscopic Andrology Care
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Key clinical benefits of optical magnification and specialized male fertility care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fertilityBenefits.map((b, i) => {
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
              <span>WHEN TO CONSULT AN ANDROLOGIST</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
              Indications for Male Fertility Screening
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-normal">
              Early diagnosis of male factor infertility helps couples identify correctable causes and avoid unnecessary delayed treatments:
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

          {/* Right Column: Diagnostic & Semen Analysis Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#103F7C] via-blue-900 to-[#103F7C] text-white rounded-3xl p-7 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-300 bg-white/10 px-3 py-1 rounded-full border border-white/15 inline-block mb-3">
                COMPREHENSIVE TESTING
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold mb-2 leading-snug">
                Advanced Semen &amp; Hormonal Screening
              </h3>

              <p className="text-xs text-blue-100 leading-relaxed font-normal mb-5">
                Dr. Vinish performs complete diagnostic evaluation including WHO-standard Semen Analysis, Scrotal Color Doppler Ultrasound, Serum FSH/Testosterone, and Sperm DNA Fragmentation.
              </p>

              <div className="space-y-2.5 text-xs font-medium mb-6">
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/15">
                  <Activity size={16} className="text-orange-400 shrink-0" />
                  <span>WHO Semen Analysis &amp; Sperm Morphology</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/15">
                  <HeartPulse size={16} className="text-orange-400 shrink-0" />
                  <span>Scrotal Doppler &amp; Sperm DNA Fragmentation</span>
                </div>
              </div>

              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102"
              >
                <Calendar size={16} />
                <span>Schedule Fertility Check</span>
              </NavLink>
            </div>
          </div>

        </div>
      </div>

      {/* ================= 4. CTA BANNER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Seeking Confidential Male Fertility Guidance?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Consult Dr. Vinish Kumar Singh for evidence-based andrology care &amp; microsurgical solutions.</p>
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
