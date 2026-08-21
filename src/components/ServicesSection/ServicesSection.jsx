import React from "react";
import { NavLink } from "react-router-dom";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  RefreshCw,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

export const servicesData = [
  {
    id: "urology",
    title: "Urology Care",
    subtitle: "Advanced Endourology & Stitchless Laser Surgeries",
    path: "/services/urology",
    icon: Stethoscope,
    badgeBg: "bg-blue-50 text-[#103F7C] border-blue-200",
    accentColor: "from-[#103F7C] to-blue-600",
    description:
      "Comprehensive diagnostic & surgical management of urinary tract disorders, kidney stones, enlarged prostate (BPH), and reconstructive urology.",
    highlights: [
      "Stitchless Laser RIRS & PCNL for Kidney Stones",
      "HoLEP Laser Prostatectomy for BPH",
      "Bladder Stone & Ureteroscopic Laser Surgery",
      "Recurrent Urinary Tract Infection (UTI) Care",
    ],
  },
  {
    id: "andrology",
    title: "Andrology & Male Health",
    subtitle: "Male Infertility & Reproductive Wellness",
    path: "/services/andrology",
    icon: Activity,
    badgeBg: "bg-orange-50 text-orange-600 border-orange-200",
    accentColor: "from-orange-500 to-amber-600",
    description:
      "Specialized evidence-based treatments for male reproductive disorders, hormonal imbalances, varicocele care, and erectile health.",
    highlights: [
      "Male Infertility Evaluation & Micro-TESE",
      "Erectile Dysfunction & Vascular Care",
      "Microscopic Varicocelectomy",
      "Hormonal Replenishment & Testosterone Care",
    ],
  },
  {
    id: "nephrology",
    title: "Clinical Nephrology",
    subtitle: "Comprehensive Kidney Health & Preservation",
    path: "/services/nephrology",
    icon: HeartPulse,
    badgeBg: "bg-[#103F7C] text-white border-blue-900",
    accentColor: "from-blue-700 to-indigo-800",
    description:
      "Expert medical management of acute & chronic kidney diseases (CKD), hypertensive kidney damage, glomerulonephritis, and dialysis coordination.",
    highlights: [
      "Chronic Kidney Disease (CKD) Management",
      "Diabetic & Hypertensive Nephropathy Care",
      "Proteinuria & Glomerular Health Protocols",
      "Pre-Dialysis & Renal Failure Management",
    ],
  },
  {
    id: "renal-transplant",
    title: "Renal Transplant",
    subtitle: "Pre-Transplant Evaluation & Post-Op Care",
    path: "/services/renal-transplant",
    icon: RefreshCw,
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    accentColor: "from-emerald-600 to-teal-700",
    description:
      "Rigorous donor & recipient clinical evaluation, surgical planning, immunosuppression protocols, and long-term post-transplant graft protection.",
    highlights: [
      "Donor & Recipient Pre-Transplant Workup",
      "Immunological Compatibility Assessment",
      "Post-Transplant Graft Surveillance",
      "Long-term Immunosuppression Management",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-14 lg:py-20 bg-slate-50/80 font-sans relative overflow-hidden border-t border-slate-200/60">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ================= CENTERED SECTION HEADER ================= */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#103F7C] border border-blue-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-orange-500" />
            <span>CORE MEDICAL SPECIALTIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprehensive Urology &amp;{" "}
            <span className="bg-gradient-to-r from-[#103F7C] to-orange-500 bg-clip-text text-transparent">
              Renal Care Services
            </span>
          </h2>

          <p className="mt-2.5 text-sm sm:text-lg text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto">
            Delivering world-class laser surgical precision, evidence-based andrological treatments, and dedicated kidney care in Lucknow.
          </p>
        </ScrollReveal>

        {/* ================= 4 SERVICES CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4.5">
          {servicesData.map((service, index) => {
            const IconComp = service.icon;
            return (
              <ScrollReveal
                key={service.id}
                variant="scale-up"
                delay={index * 120}
                className="h-full"
              >
                <NavLink
                  to={service.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="block group h-full focus:outline-none"
                >
                  <div
                    className="bg-white rounded-3xl p-5 sm:p-5.5 border border-slate-200/90 flex flex-col justify-between group relative overflow-hidden h-full cursor-pointer"
                  >
                    {/* Top Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.accentColor}`} />

                    <div>
                      {/* Icon & Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#103F7C]">
                          <IconComp size={22} />
                        </div>

                        <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${service.badgeBg}`}>
                          Specialty
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-extrabold text-slate-900 text-xl sm:text-2xl leading-snug mb-1.5">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-[12.5px] font-extrabold text-orange-600 mb-3.5 uppercase tracking-wider">
                        {service.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 text-justify">
                        {service.description}
                      </p>

                      {/* Key Highlights Checklist */}
                      <div className="space-y-2.5 border-t border-slate-100 pt-4 mb-6">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-slate-800">
                            <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug text-xs sm:text-[12.5px]">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Action Link */}
                    <div className="w-full py-3 px-4 rounded-xl bg-slate-50 text-[#103F7C] border border-slate-200/80 font-bold text-xs sm:text-sm flex items-center justify-between">
                      <span>Explore Specialty</span>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </NavLink>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ================= BOTTOM QUALITY ASSURANCE BANNER ================= */}
        <ScrollReveal variant="fade-up" delay={300} className="mt-12">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                  15+ Years Clinical Surgical Mastery &amp; 5,000+ Laser Surgeries
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                  Practicing at Rudraksh IVF &amp; Urology Centre &amp; Dr. Shilpi Maternity &amp; Urology Centre in Lucknow.
                </p>
              </div>
            </div>

            <NavLink
              to="/#book-appointment"
              className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-extrabold shrink-0 transition-all hover:scale-105 shadow-md"
            >
              Book Appointment
            </NavLink>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

