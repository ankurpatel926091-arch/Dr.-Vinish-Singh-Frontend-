import React from "react";
import { NavLink } from "react-router-dom";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Stethoscope,
  ChevronRight
} from "lucide-react";
import PageHero from "../../components/PageHero";

const conditionDetails = {
  title: "Loss of Libido Treatment",
  subTitle: "Hormonal & Sexual Wellness Restoration",
  description: "Comprehensive evaluation of physical, hormonal, and psychological factors contributing to low sex drive by Senior Urologist Dr. Vinish Kumar Singh.",
  treatments: [
    {
      title: "Hormonal Profile & Endocrine Care",
      subtitle: "Testosterone & Prolactin Evaluation",
      desc: "Detailed blood diagnostics to check free testosterone, thyroid levels, and prolactin to pinpoint endocrine causes.",
      highlights: ["Hormone Balancing", "Medical Management", "Targeted Therapy"],
      tag: "Diagnostic Care",
      bgIcon: "bg-blue-50 text-[#103F7C]",
      borderAccent: "border-t-4 border-t-[#103F7C]",
    },
    {
      title: "Psychological & Wellness Counseling",
      subtitle: "Integrated Sexual Health",
      desc: "Stress reduction guidance, psychosexual counseling, and lifestyle adjustment plans to restore sexual desire and vitality.",
      highlights: ["Confidential Counseling", "Stress Management", "Overall Wellness"],
      tag: "Wellness Therapy",
      bgIcon: "bg-orange-50 text-orange-600",
      borderAccent: "border-t-4 border-t-orange-500",
    },
  ],
  symptoms: [
    { title: "Absence of Sexual Thoughts", desc: "Little to no desire for intimate activities or sexual thoughts." },
    { title: "Chronic Stress & Anxiety", desc: "Mental fatigue and work-related stress suppressing libido." },
    { title: "Associated Erectile Difficulties", desc: "Difficulty achieving erections due to lack of sexual interest." },
    { title: "Hormonal Imbalance Symptoms", desc: "Low energy levels, mood changes, and muscle weakness." },
  ]
};

export default function LossOfLibido() {
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
            <span>MALE SEXUAL WELLNESS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Restoring Vitality &amp; Sexual Desire
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
            Evidence-based medical care designed to address low libido discreetly and effectively.
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
          <h3 className="text-xl font-bold text-slate-900 mb-4">Contributing Factors &amp; Signs</h3>
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
            <h3 className="text-xl sm:text-2xl font-extrabold">Concerned About Low Libido?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Schedule a confidential expert consultation with Dr. Vinish Kumar Singh.</p>
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
