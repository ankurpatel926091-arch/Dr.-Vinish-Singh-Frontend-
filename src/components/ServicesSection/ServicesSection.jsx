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
      "HolEP Laser Prostatectomy for BPH",
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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#103F7C] border border-blue-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-orange-500" />
            <span>CORE MEDICAL SPECIALTIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprehensive Urology &amp;{" "}
            <span className="bg-gradient-to-r from-[#103F7C] to-orange-500 bg-clip-text text-transparent">
              Renal Care Services
            </span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto">
            Delivering world-class laser surgical precision, evidence-based andrological treatments, and dedicated kidney care in Lucknow.
          </p>
        </div>

        {/* ================= 4 SERVICES CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {servicesData.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.accentColor}`} />

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#103F7C] group-hover:bg-[#103F7C] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <IconComp size={22} />
                    </div>

                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${service.badgeBg}`}>
                      Specialty
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl leading-snug group-hover:text-[#103F7C] transition-colors mb-1">
                    {service.title}
                  </h3>

                  <p className="text-[11px] font-bold text-orange-600 mb-3 uppercase tracking-wider">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed font-normal mb-5 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight text-[11px]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <NavLink
                  to={service.path}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#103F7C] text-[#103F7C] hover:text-white border border-slate-200/80 font-bold text-xs flex items-center justify-between transition-all duration-300 group-hover:shadow-md cursor-pointer"
                >
                  <span>Explore Specialty</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM QUALITY ASSURANCE BANNER ================= */}
        <div className="mt-12 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                15+ Years Clinical Surgical Mastery &amp; 5,000+ Laser Surgeries
              </h4>
              <p className="text-[11px] text-slate-500 font-normal">
                Practicing at Rudraksh IVF &amp; Urology Centre &amp; Dr. Shilpi Maternity &amp; Urology Centre in Lucknow.
              </p>
            </div>
          </div>

          <NavLink
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shrink-0 transition-all hover:scale-105 shadow-2xs"
          >
            Book Appointment
          </NavLink>
        </div>

      </div>
    </section>
  );
}
