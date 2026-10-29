import React from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  UserCheck,
  Award,
  ShieldCheck,
  Calendar,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  Stethoscope,
  Briefcase,
  Building2,
} from "lucide-react";
import doctorImg from "../../assets/doctor.jpg";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import DoctorProfileCard from "../DoctorProfileCard/DoctorProfileCard";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-blue-50/40 py-8 sm:py-10 lg:py-12 overflow-hidden font-sans">
      
      {/* Background Subtle Gradient Blurs */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ================= LEFT COLUMN: DOCTOR IMAGE & DECORATIVE FRAME ================= */}
          <div className="lg:col-span-5 relative flex flex-col justify-between h-full order-2 lg:order-1">
            <ScrollReveal variant="scale-up" duration={800} className="w-full h-full flex flex-col justify-between max-w-md lg:max-w-none">
              <div className="relative h-full flex flex-col justify-between">
                {/* Outer Decorative Glow & Border */}
                <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#103F7C]/15 via-blue-500/10 to-orange-500/15 shadow-xl flex-1 flex flex-col">
                  <div className="bg-white rounded-[22px] overflow-hidden flex-1 min-h-[380px] sm:min-h-[440px] relative group">
                    <img
                      src={doctorImg}
                      alt="Dr. Vinish Kumar Singh - Senior Urologist & Kidney Transplant Surgeon"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b55]/85 via-transparent to-transparent opacity-90" />

                    {/* Doctor Name & Designation Card Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/90 text-white text-[10px] font-bold uppercase tracking-wider mb-2 backdrop-blur-sm">
                        <Stethoscope size={12} />
                        <span>Urology &amp; Transplant Specialist</span>
                      </div>

                      <h3 className="font-extrabold text-xl sm:text-2xl leading-snug drop-shadow-sm">
                        Dr. Vinish Kumar Singh
                      </h3>
                      
                      <p className="text-xs text-blue-100 font-medium mt-1">
                        M.B.B.S. (KGMU), M.S. (General Surgery), FIAGES, M.Ch (Urology - INU Bangalore) | Associate Professor in TSM Medical College 
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1 (Top Left): M.Ch Urology */}
                <ScrollReveal
                  variant="fade-up"
                  delay={300}
                  className="absolute top-3 left-2 sm:top-5 sm:-left-5 bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3 z-20 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[11px] sm:text-sm text-slate-900 leading-tight">
                      M.Ch Urology
                    </h4>
                    <p className="text-[9.5px] sm:text-[10px] text-slate-500 font-medium">
                      INU, Bangalore (2017)
                    </p>
                  </div>
                </ScrollReveal>

                {/* Action Buttons Under Doctor Photo: 1 line side-by-side on mobile */}
                <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 w-full shrink-0">
                  <NavLink
                    to="/appointment-request"
                    className="w-full min-w-0 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2.5 sm:py-3 rounded-xl sm:rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-[10.5px] xs:text-[11px] sm:text-xs shadow-md shadow-orange-500/20 transition-all duration-300 hover:scale-102 active:scale-98 whitespace-nowrap overflow-hidden"
                  >
                    <Calendar size={13} className="shrink-0" />
                    <span className="truncate">Book Appointment</span>
                    <ArrowRight size={12} className="shrink-0 hidden xs:inline" />
                  </NavLink>

                  <a
                    href="tel:+917275981480"
                    className="w-full min-w-0 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2.5 sm:py-3 rounded-xl sm:rounded-full border border-slate-300 hover:border-[#103F7C] text-[#103F7C] hover:bg-[#103F7C] hover:text-white font-extrabold text-[10.5px] xs:text-[11px] sm:text-xs bg-white shadow-2xs transition-all duration-300 hover:scale-102 active:scale-98 whitespace-nowrap overflow-hidden"
                  >
                    <Phone size={13} className="shrink-0" />
                    <span className="truncate">Call +91 72759 81480</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ================= RIGHT COLUMN: ABOUT DOCTOR BIO, QUALIFICATIONS & EXPERIENCE ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full order-1 lg:order-2">
            
            {/* Headline */}
            <ScrollReveal variant="fade-up" delay={150} className="shrink-0">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Leading Consultant Urologist &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#103F7C] via-blue-700 to-orange-500">
                  Transplant Surgeon
                </span>
              </h1>
            </ScrollReveal>

            {/* Rich Doctor Profile Card */}
            <ScrollReveal variant="fade-up" delay={200} className="my-auto py-3 w-full flex-1 flex flex-col justify-center">
              <DoctorProfileCard />
            </ScrollReveal>

            {/* 3 Quick Highlight Stats */}
            <div className="mt-auto pt-2 grid grid-cols-3 gap-3 w-full shrink-0">
              <ScrollReveal variant="scale-up" delay={450} className="h-full">
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-2xs h-full">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Award size={16} className="text-orange-500 shrink-0" />
                    <h4 className="text-base sm:text-lg font-extrabold text-[#103F7C]">15+ Yrs</h4>
                  </div>
                  <p className="text-[10px] font-medium text-slate-500">Excellence</p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="scale-up" delay={520} className="h-full">
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-2xs h-full">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <UserCheck size={16} className="text-blue-600 shrink-0" />
                    <h4 className="text-base sm:text-lg font-extrabold text-[#103F7C]">15000+</h4>
                  </div>
                  <p className="text-[10px] font-medium text-slate-500">Laser Procedures</p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="scale-up" delay={590} className="h-full">
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-2xs h-full">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                    <h4 className="text-base sm:text-lg font-extrabold text-[#103F7C]">99%</h4>
                  </div>
                  <p className="text-[10px] font-medium text-slate-500">Success Rate</p>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}