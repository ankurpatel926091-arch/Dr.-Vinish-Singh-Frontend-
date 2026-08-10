import React from "react";
import { NavLink } from "react-router-dom";
import {
  Calendar,
  ClipboardList,
  Stethoscope,
  Activity,
  HeartPulse,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function PatientJourney() {
const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Book Appointment",
      desc: "Schedule online or via call at a time convenient for you.",
      isKeyStep: false,
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Initial Assessment",
      desc: "Comprehensive review of medical history and symptoms.",
      isKeyStep: false,
    },
    {
      number: "03",
      icon: Stethoscope,
      title: "Expert Consultation",
      desc: "Personalised consultation & care plan discussion with Dr. Vinish.",
      isKeyStep: true,
    },
    {
      number: "04",
      icon: Activity,
      title: "Advanced Diagnostics",
      desc: "Precise evaluation using modern diagnostic equipment if needed.",
      isKeyStep: false,
    },
    {
      number: "05",
      icon: HeartPulse,
      title: "Ongoing Care",
      desc: "Targeted treatment with scheduled recovery follow-ups.",
      isKeyStep: false,
    },
  ];

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-transparent via-white/50 to-transparent overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimal Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#103F7C] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>PATIENT JOURNEY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Your Path to{" "}
            <span className="bg-gradient-to-r from-[#103F7C] to-blue-600 bg-clip-text text-transparent">
              Better Health
            </span>
          </h2>

          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-normal">
            A seamless, transparent consultation and treatment experience from first visit to recovery.
          </p>
        </div>

        {/* 5-Step Process Timeline Container */}
        <div className="relative mb-8 sm:mb-10">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-[2px] bg-slate-200 -z-0 rounded-full" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-start relative z-10">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center group bg-slate-50/50 lg:bg-transparent p-5 lg:p-0 rounded-2xl border border-slate-100 lg:border-none"
                >
                  {/* Icon Circle */}
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                        step.isKeyStep
                          ? "bg-[#103F7C] text-white shadow-md shadow-blue-900/20"
                          : "bg-white border border-slate-200 text-[#103F7C] shadow-xs group-hover:border-blue-300"
                      }`}
                    >
                      <IconComp size={26} />
                    </div>

                    {/* Step Number Pill */}
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      {step.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#103F7C] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  {/* Key Step Badge if applicable */}
                  {step.isKeyStep && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-50 border border-orange-200/70 text-[9px] font-bold text-orange-600 uppercase tracking-wider mb-1.5">
                      <Sparkles size={9} />
                      <span>KEY STEP</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal CTA Button */}
        <div className="flex flex-col items-center justify-center text-center">
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#103F7C] hover:bg-blue-900 text-white font-semibold text-sm shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <Calendar size={16} className="text-orange-400" />
            <span>Book Consultation</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
