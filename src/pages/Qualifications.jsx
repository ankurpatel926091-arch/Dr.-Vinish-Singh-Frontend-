import React from "react";
import { NavLink } from "react-router-dom";
import { GraduationCap, Award, BadgeCheck, BookOpen, Sparkles, Calendar, ArrowRight, CheckCircle2, ShieldCheck, Microscope } from "lucide-react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import drVinishBanner from "../assets/About/DrVinishKumarSingh.png";

const qualifications = [
  {
    icon: Award,
    title: "M.Ch. (Urology)",
    institute: "Institute Of Nephro-Urology (INU), Bangalore",
    year: "2017",
    desc: "Super-speciality 3-year residency in Endourology, RIRS laser stone care, HolEP, Laparoscopic Urology, and Reconstructive procedures.",
    bgIcon: "bg-blue-50 text-[#103F7C]",
    level: "Super Speciality",
  },
  {
    icon: GraduationCap,
    title: "M.S. (General Surgery)",
    institute: "Govt. Medical College (GMC), Amritsar (Punjab)",
    year: "2012",
    desc: "3-year surgical residency with extensive hands-on experience in emergency trauma care, general surgery, and clinical diagnosis.",
    bgIcon: "bg-orange-50 text-orange-600",
    level: "Post Graduation",
  },
  {
    icon: GraduationCap,
    title: "M.B.B.S.",
    institute: "King George Medical University (KGMU), Lucknow",
    year: "2007",
    desc: "Joined through UP CPMT 2002. Cleared all professional exams in first attempt with honours distinction in Biochemistry.",
    bgIcon: "bg-emerald-50 text-emerald-600",
    level: "Graduation",
  },
  {
    icon: Microscope,
    title: "Fellowships (FIAGES & Andrology)",
    institute: "FIAGES (New Delhi) & USA Training",
    year: "Fellowship",
    desc: "Fellowship in Gastrointestinal Endo Surgery (FIAGES, New Delhi) & specialized training in Andrology and male health (USA).",
    bgIcon: "bg-purple-50 text-purple-600",
    level: "Fellowship",
  },
  {
    icon: BadgeCheck,
    title: "Intermediate (10+2 Science)",
    institute: "CBSE Board, Gaya",
    year: "1999",
    desc: "Passed with 1st Division (70%) with HONOURS and distinction in Biology.",
    bgIcon: "bg-slate-100 text-slate-700",
    level: "Higher Secondary",
  },
  {
    icon: BadgeCheck,
    title: "High School (10th)",
    institute: "CBSE Board, Lucknow",
    year: "1997",
    desc: "Passed with 1st Division (70%) conducted by CBSE Board.",
    bgIcon: "bg-slate-100 text-slate-600",
    level: "Secondary School",
  },
];

export default function Qualifications() {
  return (
    <section className="bg-slate-50/60 min-h-screen">
      <PageHero
        title="Academic Qualifications"
        subTitle="Degrees & Surgical Credentials"
        description="Authentic medical degrees and super-speciality surgical qualifications from premier institutions: KGMU Lucknow, GMC Amritsar, and INU Bangalore." 
        bgImage={drVinishBanner}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Summary Column */}
          <ScrollReveal variant="slide-right" className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
              EDUCATION &amp; SURGICAL TRAINING
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 leading-tight">
              Academic Excellence &amp; Super-Speciality Credentials
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              Dr. Vinish Kumar Singh holds super-speciality M.Ch in Urology from Institute of Nephro-Urology, Bangalore, M.S. Surgery from GMC Amritsar, and MBBS from prestigious KGMU Lucknow.
            </p>

            <div className="mt-6 space-y-4 w-full">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <BookOpen size={22} className="text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">100% First Attempt Merit</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">Passed all medical examinations in first attempt with honours distinction.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <BadgeCheck size={22} className="text-[#103F7C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">National &amp; International Fellowships</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">FIAGES (New Delhi) &amp; AUA Resident Trainee selection (USA 2017).</p>
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
                        <span className="text-xs font-extrabold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                          {item.year}
                        </span>
                      </div>

                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#103F7C] bg-blue-50 px-2.5 py-0.5 rounded-md inline-block mb-2">
                        {item.level}
                      </span>

                      <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug mb-1">
                        {item.title}
                      </h3>

                      <p className="text-xs font-bold text-slate-700 mb-2">
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
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Get expert guidance &amp; evidence-based medical treatment from Dr. Vinish Kumar Singh.</p>
          </div>
          <NavLink
            to="/#book-appointment"
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