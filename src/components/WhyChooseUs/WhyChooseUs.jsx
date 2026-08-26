import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ShieldCheck,
  Zap,
  Award,
  Clock,
  CheckCircle2,
  Stethoscope,
  HeartPulse,
  Sparkles,
  UserCheck,
  Building2,
  Calendar,
  Phone,
  ArrowRight,
  ChevronRight,
  Activity,
  Check,
  X,
} from "lucide-react";
import doctorImg from "../../assets/doctor.jpg";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const whyUsFeatures = [
  {
    icon: Zap,
    title: "Advanced Laser Technology",
    desc: "Advanced Holmium laser technology for RIRS, HoLEP, PCNL and endoscopic stone procedures—designed to minimise incisions, discomfort and recovery time.",
    badge: "MINIMALLY INVASIVE PRECISION",
    iconBg: "bg-blue-50 text-[#103F7C] border-blue-200",
    hoverBorder: "hover:border-[#103F7C]",
  },
  {
    icon: Award,
    title: "Extensive Surgical Expertise",
    desc: "M.Ch.-qualified Consultant Urologist with extensive experience in advanced endourology, reconstructive procedures, and complex urological surgeries.",
    badge: "SUPER-SPECIALISED CARE",
    iconBg: "bg-orange-50 text-orange-600 border-orange-200",
    hoverBorder: "hover:border-orange-500",
  },
  {
    icon: Building2,
    title: "Two Specialised Care Centres",
    desc: "Expert consultations and advanced urological treatment available at Rudraksh IVF & Urology Centre and Dr. Shilpi Maternity & Urology Centre, Lucknow.",
    badge: "ACCESSIBLE UROLOGY CARE",
    iconBg: "bg-blue-50 text-[#103F7C] border-blue-200",
    hoverBorder: "hover:border-[#103F7C]",
  },
  {
    icon: Clock,
    title: "Faster Post-Surgical Recovery",
    desc: "Modern endoscopic and laser procedures help minimise surgical trauma, support shorter hospital stays, and enable an earlier return to routine activities.",
    badge: "MINIMALLY INVASIVE APPROACH",
    iconBg: "bg-orange-50 text-orange-600 border-orange-200",
    hoverBorder: "hover:border-orange-500",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Urology & Andrology",
    desc: "Advanced care for kidney stones, prostate disorders, urinary conditions, male infertility, erectile dysfunction, and complex reconstructive concerns.",
    badge: "COMPLETE CARE SPECTRUM",
    iconBg: "bg-blue-50 text-[#103F7C] border-blue-200",
    hoverBorder: "hover:border-[#103F7C]",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Ethical Care",
    desc: "Clear clinical guidance, evidence-based treatment planning, transparent communication, and compassionate support throughout every stage of care.",
    badge: "PATIENT-FIRST APPROACH",
    iconBg: "bg-orange-50 text-orange-600 border-orange-200",
    hoverBorder: "hover:border-orange-500",
  },
];

const comparisonData = [
  {
    feature: "Surgical Incision & Cuts",
    laser: "100% No Cut / Keyhole (<5mm)",
    traditional: "Large 5 to 10 cm Abdominal Incision",
  },
  {
    feature: "Pain & Blood Loss",
    laser: "Minimal Pain & Laser Vessel Sealing",
    traditional: "High Pain, Bleeding & Sutures Required",
  },
  {
    feature: "Hospital Stay & Discharge",
    laser: "Same Day / 24 to 48 Hours Discharge",
    traditional: "5 to 7 Days Hospital Bed Stay",
  },
  {
    feature: "Recovery Time",
    laser: "Resume Work in 2 to 3 Days",
    traditional: "3 to 4 Weeks Complete Bed Rest",
  },
  {
    feature: "Recurrence & Clearance Rate",
    laser: "99% Complete Laser Dusting & Enucleation",
    traditional: "Higher Risk of Remaining Fragments",
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <section className="bg-slate-50/80 py-12 lg:py-16 font-sans relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/3 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#103F7C] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 border border-blue-200/60 shadow-xs">
            <Sparkles size={15} className="text-orange-500" />
            <span>PILLARS OF CLINICAL EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Choose{" "}
            <span className="text-[#103F7C]">Dr. Vinish</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Kumar Singh?
            </span>
          </h2>

          <p className="mt-2.5 text-sm sm:text-lg text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto">
            Combining extensive surgical expertise, advanced M.Ch. training, modern laser technology, and a compassionate, patient-first approach to deliver <p></p> precise and personalised urological care in Lucknow.
          </p>

          {/* Sub Navigation Switcher Tabs */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => setActiveTab("features")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                activeTab === "features"
                  ? "bg-[#103F7C] text-white shadow-md shadow-blue-900/20 scale-105"
                  : "bg-white text-slate-600 hover:text-[#103F7C] border border-slate-200"
              }`}
            >
              ⭐ Key Clinical Advantages
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("comparison")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                activeTab === "comparison"
                  ? "bg-[#103F7C] text-white shadow-md shadow-blue-900/20 scale-105"
                  : "bg-white text-slate-600 hover:text-[#103F7C] border border-slate-200"
              }`}
            >
              ⚡ Laser vs. Conventional Surgery
            </button>
          </div>
        </ScrollReveal>

        {/* TAB 1: 6 FEATURES GRID */}
        {activeTab === "features" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4.5">
            {whyUsFeatures.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal
                  key={idx}
                  variant="scale-up"
                  delay={idx * 100}
                  className="h-full"
                >
                  <div
                    className={`bg-white rounded-3xl p-5 sm:p-5.5 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group h-full ${item.hoverBorder}`}
                  >
                    <div>
                      {/* Top Row: Icon & Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${item.iconBg}`}
                        >
                          <IconComp size={22} />
                        </div>

                        <span className="text-[11px] font-extrabold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl leading-snug group-hover:text-[#103F7C] transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-extrabold text-[#103F7C] group-hover:text-orange-600 transition-colors">
                      <span>Evidence-Based Treatment</span>
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}

        {/* TAB 2: COMPARISON TABLE */}
        {activeTab === "comparison" && (
          <ScrollReveal variant="fade-up">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8 max-w-5xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Painless Laser Surgery vs Conventional Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  See why patients prefer advanced Holmium Laser RIRS, HoLEP, and PCNL procedures.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="py-3.5 px-4 font-bold text-slate-700">Clinical Aspect</th>
                      <th className="py-3.5 px-4 font-bold text-[#103F7C] bg-blue-50/70">
                        ⚡ Dr. Vinish's Laser Surgery
                      </th>
                      <th className="py-3.5 px-4 font-bold text-slate-500">Traditional Surgery</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-4 px-4 font-bold text-slate-900">{row.feature}</td>
                        <td className="py-4 px-4 font-semibold text-emerald-800 bg-emerald-50/40">
                          <div className="flex items-center gap-1.5">
                            <Check size={16} className="text-emerald-600 shrink-0" />
                            <span>{row.laser}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <X size={16} className="text-rose-400 shrink-0" />
                            <span>{row.traditional}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Live Numbers & Stats Bar */}
        <ScrollReveal variant="fade-up" delay={250} className="mt-14">
          <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-8 sm:p-10 shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-3">
                <h4 className="text-3xl sm:text-4xl font-extrabold text-orange-400">15+</h4>
                <p className="text-xs sm:text-sm text-blue-100 mt-1 font-semibold">Years of Clinical Excellence</p>
                <p className="text-[12px] text-blue-200/80 mt-0.5">Advanced Urological Care</p>
              </div>

              <div className="p-3 border-l border-white/15">
                <h4 className="text-3xl sm:text-4xl font-extrabold text-orange-400">5000+</h4>
                <p className="text-xs sm:text-sm text-blue-100 mt-1 font-semibold">Successful Procedures</p>
                <p className="text-[12px] text-blue-200/80 mt-0.5">RIRS, HoLEP & PCNL</p>
              </div>

              <div className="p-3 border-l border-white/15">
                <h4 className="text-3xl sm:text-4xl font-extrabold text-orange-400">2</h4>
                <p className="text-xs sm:text-sm text-blue-100 mt-1 font-semibold">Specialised Care Centres</p>
                <p className="text-[12px] text-blue-200/80 mt-0.5">Comprehensive Urology Services</p>
              </div>

              <div className="p-3 border-l border-white/15">
                <h4 className="text-3xl sm:text-4xl font-extrabold text-orange-400">99%</h4>
                <p className="text-xs sm:text-sm text-blue-100 mt-1 font-semibold">Patient Satisfaction</p>
                <p className="text-[12px] text-blue-200/80 mt-0.5">Trusted & Ethical Care</p>
              </div>
            </div>

            {/* CTA Row inside Bar */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/40 flex items-center justify-center shrink-0">
                  <Stethoscope size={20} className="text-orange-300" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Consult Dr. Vinish Kumar Singh</h4>
                  <p className="text-xs text-blue-100">Receive expert guidance for kidney stones, prostate disorders, male health concerns, and complex urological conditions in Lucknow.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <NavLink
                  to="/#book-appointment"
                  className="px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 flex items-center gap-1.5"
                >
                  <Calendar size={15} />
                  <span>Book Appointment</span>
                </NavLink>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

