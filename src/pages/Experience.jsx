import React from "react";
import { NavLink } from "react-router-dom";
import { BriefcaseBusiness, Building2, CalendarDays, BadgeCheck, Sparkles, Calendar, ArrowRight, MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import drVinishBanner from "../assets/About/DrVinishKumarSingh.png";

const experienceData = [
  {
    title: "Associate Professor in Urology",
    hospital: "TSM Medical College & Hospital, Lucknow",
    duration: "2017 - Present",
    type: "Academic & Clinical Appointment",
    description:
      "Teaching U.G. and P.G. medical students, guiding clinical case demonstrations, and managing complex urological surgeries and renal care.",
  },
  {
    title: "Consultant Urologist & Transplant Surgeon",
    hospital: "SKD Kanpur Road & Ajanta Hospital Alambagh, Lucknow",
    duration: "Present",
    type: "Senior Clinical Practice",
    description:
      "Specializing in painless laser kidney stone surgery (RIRS, PCNL), HolEP laser prostatectomy, reconstructive urology, and male infertility treatment.",
  },
  {
    title: "Post Graduate Super Speciality Specialist (M.Ch Urology)",
    hospital: "Department of Urology, Institute of Nephro-Urology (INU), Bangalore",
    duration: "3 Years Residency (2014 - 2017)",
    type: "Super Speciality Residency",
    description:
      "Advanced hands-on operative training in endourology, urodynamics, ESWL, paediatric pyeloplasty, hypospadias repair, and reconstructive urethral surgeries.",
  },
  {
    title: "Senior Resident Specialist",
    hospital: "Department of General Surgery, Eras Medical College, Lucknow",
    duration: "1 Year 6 Months",
    type: "Senior Residency & Mentorship",
    description:
      "Involved in daily teaching and training of U.G. and P.G. medical students of the Department of General Surgery, emergency trauma care, and elective surgical procedures.",
  },
  {
    title: "Junior Resident I, II & III (M.S. General Surgery)",
    hospital: "Department of General Surgery, Govt. Medical College, Amritsar (Punjab)",
    duration: "3 Years Residency (2009 - 2012)",
    type: "PG Surgical Residency",
    description:
      "Managed massive emergency, OPD, and inpatient surgical workload, performing general surgical procedures and completing research thesis on breast lump evaluation.",
  },
  {
    title: "Compulsory Rotatory Medical Intern",
    hospital: "G.M. & Associated Hospital Lucknow and U.H.M Hospital, Kanpur",
    duration: "1 Year",
    type: "Clinical Internship",
    description:
      "Comprehensive 1-year rotatory clinical internship across surgery, medicine, emergency care, and specialized wards following M.B.B.S. graduation from KGMU.",
  },
];

export default function Experience() {
  return (
    <section className="bg-slate-50/60 min-h-screen">
      {/* Hero Header */}
      <PageHero 
        title="Clinical & Academic Experience"
        subTitle="Professional Journey & Appointments"
        description="Over 15 years of dedicated surgical and clinical practice in advanced urology, endourology, reconstructive care, and medical teaching."
        bgImage={drVinishBanner}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Summary Column */}
          <ScrollReveal variant="slide-right" className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
              SURGICAL &amp; TEACHING EXPERTISE
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 leading-tight">
              15+ Years Dedicated to Urological Leadership
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              From top medical institutes in Bangalore, Amritsar, and Lucknow to Associate Professor at TSM Medical College, Dr. Vinish brings vast clinical experience and patient-centered healing.
            </p>

            <div className="mt-6 space-y-4 w-full">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <BadgeCheck size={22} className="text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">5000+ Laser Surgeries</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">Pioneer in RIRS, HolEP, PCNL &amp; laparoscopic urology procedures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <BriefcaseBusiness size={22} className="text-[#103F7C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Academic Associate Professor</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">Associate Professor at TSM Medical College &amp; Hospital since 2017.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Timeline Column */}
          <div className="lg:col-span-7 relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-3 bottom-3 w-[2px] bg-slate-200" />

            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <ScrollReveal
                  key={index}
                  variant="scale-up"
                  delay={index * 100}
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

                    <div className="flex items-center gap-2 text-xs font-bold text-[#103F7C] mb-1">
                      <Building2 size={15} className="text-orange-500 shrink-0" />
                      <span>{item.hospital}</span>
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-3">
                      {item.type}
                    </span>

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <ScrollReveal variant="fade-up" delay={200} className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] to-blue-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Consult with Senior Urologist</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Schedule your consultation for advanced laser urology treatment.</p>
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