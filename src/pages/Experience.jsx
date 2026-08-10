import React from "react";
import { NavLink } from "react-router-dom";
import { BriefcaseBusiness, Building2, CalendarDays, BadgeCheck, Sparkles, Calendar, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";

const experienceData = [
  {
    title: "Senior Consultant Urologist",
    hospital: "Super Speciality Healthcare Centre, Lucknow",
    duration: "Present",
    description:
      "Leading comprehensive care for kidney stones, prostate conditions, male infertility, and laparoscopic/laser surgeries.",
  },
  {
    title: "Consultant Urologist & Transplant Surgeon",
    hospital: "Advanced Urology Institute",
    duration: "2018 - 2022",
    description:
      "Managed complex urological procedures with focus on RIRS, HolEP laser prostatectomy, and reconstructive urology.",
  },
  {
    title: "Senior Resident Specialist",
    hospital: "Premier Tertiary Teaching Hospital",
    duration: "2015 - 2018",
    description:
      "Supervised surgical training in endourology, emergency urological trauma care, and evidence-based patient management.",
  },
];

export default function Experience() {
  return (
    <section className="bg-slate-50/60 min-h-screen">
      {/* Hero Header */}
      <PageHero 
        title="Clinical Experience"
        subTitle="Professional Journey"
        description="Over 15 years of dedicated surgical and clinical practice in advanced urology, endourology, and patient care."
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Summary Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
              SURGICAL EXPERTISE
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 leading-tight">
              Dedicated to Modern Urological Care
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              Years of specialized surgical practice in diagnosing and treating complex conditions, using international treatment guidelines for fast patient recovery.
            </p>

            <div className="mt-6 space-y-4 w-full">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <BadgeCheck size={22} className="text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Patient-Centred Approach</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">Treatment plans designed around individual patient health goals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <BriefcaseBusiness size={22} className="text-[#103F7C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Modern Surgical Procedures</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">Specialized in laser stone removal & minimally invasive surgeries.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Timeline Column */}
          <div className="lg:col-span-7 relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-3 bottom-3 w-[2px] bg-slate-200" />

            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-14 group"
                >
                  {/* Node Dot */}
                  <div className="absolute left-4 top-4 w-4 h-4 rounded-full bg-[#103F7C] border-2 border-white shadow-xs group-hover:scale-125 group-hover:bg-orange-500 transition-all duration-300 -translate-x-1/2" />

                  {/* Card Content */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                        <CalendarDays size={13} />
                        <span>{item.duration}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-[#103F7C] mb-3">
                      <Building2 size={15} />
                      <span>{item.hospital}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] to-blue-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Consult with Senior Urologist</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Schedule your consultation for advanced laser urology treatment.</p>
          </div>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold shadow-md transition-transform hover:scale-105 active:scale-95 shrink-0"
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