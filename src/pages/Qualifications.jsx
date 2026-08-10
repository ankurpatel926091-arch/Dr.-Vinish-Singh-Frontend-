import React from "react";
import { NavLink } from "react-router-dom";
import { GraduationCap, Award, BadgeCheck, BookOpen, Sparkles, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

const qualifications = [
  {
    icon: GraduationCap,
    title: "MBBS",
    institute: "King George's Medical University (KGMU), Lucknow",
    year: "Completed",
    desc: "Foundation in general medicine and patient care principles.",
    bgIcon: "bg-blue-50 text-[#103F7C]",
  },
  {
    icon: GraduationCap,
    title: "MS (General Surgery)",
    institute: "Recognized Medical Institution",
    year: "Completed",
    desc: "Comprehensive surgical residency and clinical decision making.",
    bgIcon: "bg-amber-50 text-amber-600",
  },
  {
    icon: Award,
    title: "M.Ch. Urology",
    institute: "Super Speciality Training",
    year: "Completed",
    desc: "Advanced super-speciality training in endourology, laser procedures, and reconstructive urology.",
    bgIcon: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: BadgeCheck,
    title: "Professional Membership",
    institute: "Indian Urological Association",
    year: "Active Member",
    desc: "Continuous involvement in clinical research, workshops, and annual urological symposiums.",
    bgIcon: "bg-orange-50 text-orange-600",
  },
];

export default function Qualifications() {
  return (
    <section className="bg-slate-50/60 min-h-screen">
      <PageHero
      title="Academic Background"
      subTitle="Qualifications & Credentials"
      description="Strong academic background with specialized super-speciality training in Urology and reconstructive laser care." 
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Summary Column */}
          <ScrollReveal variant="slide-right" className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
              EDUCATION & TRAINING
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 leading-tight">
              Academic Excellence & Professional Credentials
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              A strong educational foundation combined with specialized clinical training enables precise diagnosis and modern laser treatment for complex urological conditions.
            </p>

            <div className="mt-6 space-y-4 w-full">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <BookOpen size={22} className="text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Continuous Education</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">Active participation in urology workshops & surgical forums.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <BadgeCheck size={22} className="text-[#103F7C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Evidence-Based Practice</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">Following internationally accepted clinical treatment protocols.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Qualifications Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {qualifications.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal key={index} variant="scale-up" delay={index * 100} className="h-full">
                  <div
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bgIcon}`}>
                          <IconComponent size={24} />
                        </div>
                        <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-base leading-snug mb-1">
                        {item.title}
                      </h3>

                      <p className="text-xs font-semibold text-[#103F7C] mb-2">
                        {item.institute}
                      </p>

                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <ScrollReveal variant="fade-up" delay={200} className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] to-blue-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Schedule Your Consultation</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Get expert guidance & evidence-based medical treatment from Dr. Vinish.</p>
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
      </ScrollReveal>
    </section>
  );
}