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
  MapPin,
} from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

export const servicesData = [
  {
    id: "urology",
    title: "Advanced Urology Care",
    subtitle: "MINIMALLY INVASIVE LASER & ENDOUROLOGICAL SURGERIES",
    path: "/services/urology",
    icon: Stethoscope,
    badgeBg: "bg-blue-50 text-[#103F7C] border-blue-200",
    accentColor: "from-[#103F7C] to-blue-600",
    description:
      "Comprehensive diagnosis and advanced surgical management of kidney stones, prostate enlargement, urinary tract disorders, and other complex urological conditions.",
    highlights: [
      " RIRS & PCNL for Kidney Stones",
      " HoLEP Laser Surgery for Enlarged Prostate",
      " URSL & Bladder Stone Surgery",
      " UTI and Urinary Obstruction Management",
    ],
  },
  {
    id: "andrology",
    title: "Andrology & Male Health",
    subtitle: "MALE INFERTILITY & SEXUAL WELLNESS",
    path: "/services/andrology",
    icon: Activity,
    badgeBg: "bg-orange-50 text-orange-600 border-orange-200",
    accentColor: "from-orange-500 to-amber-600",
    description:
      "Confidential, evidence-based evaluation and treatment for male infertility, sexual health concerns, hormonal disorders, and other male reproductive conditions.",
    highlights: [
      "Male Infertility Evaluation & Treatment",
      "Erectile Dysfunction Management",
      "Microsurgical Varicocelectomy",
      "Hormonal and Testosterone Assessment",
    ],
  },
  {
    id: "nephrology",
    title: "Reconstructive & Paediatric Urology",
    subtitle: "ADVANCED CARE FOR COMPLEX UROLOGICAL CONDITIONS",
    path: "/services/nephrology",
    icon: HeartPulse,
    badgeBg: "bg-[#103F7C] text-white border-blue-900",
    accentColor: "from-blue-700 to-indigo-800",
    description:
      "Specialised surgical care for urethral disorders, congenital urinary abnormalities, and complex urological conditions affecting both adults and children.",
    highlights: [
      "Buccal Mucosa Graft Urethroplasty",
      "Bladder Neck Reconstruction",
      "Paediatric Pyeloplasty",
      "Hypospadias Repair & Ureteric Reimplantation",
    ],
  },
  {
    id: "renal-transplant",
    title: "Renal Transplant Care",
    subtitle: "COMPREHENSIVE TRANSPLANT EVALUATION & SURGICAL CARE",
    path: "/services/renal-transplant",
    icon: RefreshCw,
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    accentColor: "from-emerald-600 to-teal-700",
    description:
      "Coordinated care for kidney transplant patients, encompassing clinical assessment, surgical planning, transplant procedures, and structured post-operative follow-up.",
    highlights: [
      "Donor and Recipient Evaluation",
      "Pre-Transplant Clinical Assessment",
      "Renal Transplant Surgery",
      "Post-Transplant Monitoring and Follow-Up",
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
            Advanced Urology,Andrology &amp;{" "}
            <span className="bg-gradient-to-r from-[#103F7C] to-orange-500 bg-clip-text text-transparent">
              Renal Care 
            </span>
          </h2>

          <p className="mt-2.5 text-sm sm:text-lg text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto">
Delivering comprehensive urological care through advanced laser procedures, minimally invasive surgeries, and evidence-based treatments for kidney, prostate, and male reproductive health conditions.          </p>
        </ScrollReveal>

        {/* ================= 4 SERVICES CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
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
                    className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 flex flex-col justify-between group relative overflow-hidden h-full cursor-pointer"
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
                      <h3 className="font-extrabold text-slate-900 text-xl sm:text-2xl leading-snug mb-1.5 min-h-[3.5rem]">
                        {service.id === "renal-transplant" ? (
                          <>
                            Renal Transplant <br className="hidden sm:block" />Care
                          </>
                        ) : (
                          service.title
                        )}
                      </h3>

                      <p className="text-xs sm:text-[12.5px] font-extrabold text-orange-600 mb-3.5 uppercase tracking-wider min-h-[2.5rem] flex items-center">
                        {service.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 min-h-[4.25rem]">
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
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                  15+ Years of Surgical Excellence &amp; 5,000+ Successful Procedures
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-relaxed">
                  Leading advanced urological care at{" "}
                  <a
                    href="https://www.google.com/maps?q=Rudraksh+IVF+And+Urology+Centre+Lucknow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-orange-600 hover:underline"
                  >
                    Rudraksh IVF &amp; Urology Centre
                  </a>{" "}
                  &amp;{" "}
                  <a
                    href="https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#103F7C] hover:underline"
                  >
                    Dr. Shilpi Maternity &amp; Urology Centre
                  </a>
                  , Lucknow.
                </p>
              </div>
            </div>

            <NavLink
              to="/#book-appointment"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-extrabold shrink-0 transition-all hover:scale-105 shadow-md text-center"
            >
              Book Appointment
            </NavLink>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

