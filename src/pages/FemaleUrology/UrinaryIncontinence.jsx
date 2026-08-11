import React from "react";
import { NavLink } from "react-router-dom";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Stethoscope,
  ShieldCheck,
  Activity,
} from "lucide-react";
import PageHero from "../../components/PageHero";
import conditionImg from "../../assets/FemaleUrology/incontinence.jpg";

export default function UrinaryIncontinence() {
  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      <PageHero
        title="Female Urinary Incontinence Care"
        subTitle="TVT / TOT Sling Procedures &amp; Pelvic Floor Recovery"
        description="Advanced minimally invasive TVT/TOT mesh sling procedures and non-surgical pelvic floor therapy for stress &amp; urge urinary incontinence by Senior Urologist Dr. Vinish Kumar Singh."
      />

      {/* Main Content Grid: Image + Minimal Explanation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Condition Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#103F7C]/15 via-blue-500/10 to-orange-500/15 shadow-xl">
              <div className="bg-[#0b1b36] rounded-[22px] overflow-hidden h-72 sm:h-96 relative group border border-slate-200/80">
                <img
                  src={conditionImg}
                  alt="Female Urinary Incontinence Care"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#103F7C]/90 via-[#103F7C]/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#103F7C] text-white text-[11px] font-bold shadow-md border border-white/20">
                    <Stethoscope size={13} />
                    <span>Female Urology</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <h3 className="font-extrabold text-base sm:text-xl leading-snug drop-shadow-md">
                    TVT / TOT Sling Surgery
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Concise Explanation */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 text-[#103F7C] text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles size={13} className="text-orange-500" />
              <span>OVERVIEW &amp; TREATMENT</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Regain Bladder Control &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#103F7C] to-orange-500">Confidence</span>
            </h2>

            <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Involuntary leakage of urine during coughing, laughing, or physical activity (Stress Urinary Incontinence) is a treatable medical condition. Dr. Vinish Kumar Singh provides state-of-the-art minimally invasive TVT (Tension-free Vaginal Tape) and TOT (Transobturator Tape) suburethral sling procedures with 95%+ success rates and rapid 24-hour recovery.
            </p>

            {/* Key Minimal Treatment Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6 w-full">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center font-bold mb-2">
                  <Activity size={18} />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">TVT / TOT Sling Surgery</h4>
                <p className="text-xs text-slate-500 mt-1 leading-snug">Daycare minimally invasive urethral tape support with immediate results.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold mb-2">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Pelvic Floor Therapy</h4>
                <p className="text-xs text-slate-500 mt-1 leading-snug">Biofeedback &amp; targeted muscle strengthening for mild incontinence.</p>
              </div>
            </div>

            {/* Quick Highlights list */}
            <div className="mt-6 space-y-2 w-full">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={15} className="text-orange-500 shrink-0" />
                <span>Painless daycare procedure with minimal stay and fast healing</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={15} className="text-orange-500 shrink-0" />
                <span>Restores natural bladder sphincter support &amp; leak-free lifestyle</span>
              </div>
            </div>

            <div className="mt-6">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#103F7C] hover:bg-blue-900 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-102"
              >
                <Calendar size={15} />
                <span>Book Doctor Consultation</span>
                <ArrowRight size={15} />
              </NavLink>
            </div>

          </div>

        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 pt-4">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Struggling with Involuntary Urine Leakage?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Get expert guidance &amp; advanced sling treatment from Dr. Vinish Kumar Singh.</p>
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
