import React from "react";
import { NavLink } from "react-router-dom";
import {
  Award,
  Trophy,
  Medal,
  Star,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BadgeCheck,
  ShieldCheck,
  Building2,
  GraduationCap,
  Microscope,
} from "lucide-react";
import PageHero from "../components/PageHero";

const awardsData = [
  {
    icon: Trophy,
    title: "Excellence in Endourology & Laser Care",
    organization: "Regional Healthcare Excellence Forum",
    year: "2023",
    category: "Laser Surgery Milestone",
    description:
      "Awarded for exceptional clinical outcomes and pioneering painless laser RIRS kidney stone and HolEP prostate procedures.",
    bgIcon: "bg-orange-50 text-orange-600 border-orange-200",
    accentBorder: "border-t-4 border-t-orange-500",
  },
  {
    icon: Medal,
    title: "Best Research Paper Presentation",
    organization: "Indian Urological Association Conference",
    year: "2021",
    category: "Clinical Research",
    description:
      "Honored for groundbreaking research in minimally invasive reconstructive urology and advanced endoscopic surgical techniques.",
    bgIcon: "bg-blue-50 text-[#103F7C] border-blue-200",
    accentBorder: "border-t-4 border-t-[#103F7C]",
  },
  {
    icon: Star,
    title: "Academic Distinction in Surgical Urology",
    organization: "Super Speciality Medical Board",
    year: "2018",
    category: "Academic Gold Standard",
    description:
      "Recognized for top academic standing and clinical surgical performance during specialized M.Ch residency at INU Bangalore.",
    bgIcon: "bg-orange-50 text-orange-600 border-orange-200",
    accentBorder: "border-t-4 border-t-orange-500",
  },
  {
    icon: Award,
    title: "Pioneer in Minimally Invasive Surgery",
    organization: "State Urological Society",
    year: "2016",
    category: "Surgical Innovation",
    description:
      "Commended for introducing modern endoscopic & laparoscopic treatment protocols for faster patient recovery.",
    bgIcon: "bg-blue-50 text-[#103F7C] border-blue-200",
    accentBorder: "border-t-4 border-t-[#103F7C]",
  },
  {
    icon: Microscope,
    title: "Advanced Fellowship Training Distinction",
    organization: "FIAGES & International Urology Forum (USA)",
    year: "2015",
    category: "Super Speciality Fellowship",
    description:
      "Completed fellowship in Gastrointestinal Endo Surgery (New Delhi) and specialized training in Andrology & male health.",
    bgIcon: "bg-orange-50 text-orange-600 border-orange-200",
    accentBorder: "border-t-4 border-t-orange-500",
  },
  {
    icon: GraduationCap,
    title: "Merit Distinction in General Surgery",
    organization: "Government Medical College (GMC), Amritsar",
    year: "2012",
    category: "Residency Honor",
    description:
      "Awarded for outstanding clinical decision-making, emergency surgical trauma care, and academic distinction during MS residency.",
    bgIcon: "bg-blue-50 text-[#103F7C] border-blue-200",
    accentBorder: "border-t-4 border-t-[#103F7C]",
  },
];

const memberships = [
  {
    name: "Indian Urological Association (IUA)",
    role: "Lifetime Member",
    desc: "Active contributor to national urology workshops, clinical research & annual symposiums.",
  },
  {
    name: "Fellow of FIAGES (New Delhi)",
    role: "Certified Fellow",
    desc: "Recognized specialist in advanced laparoscopic and endoscopic gastrointestinal surgery.",
  },
  {
    name: "Urological Society of India (USI)",
    role: "Active Member",
    desc: "Engaged in continuous medical education, evidence-based care & surgical guidelines.",
  },
];

export default function AwardsRecognition() {
  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      {/* Hero Header Banner */}
      <PageHero
        title="Awards & Accreditations"
        subTitle="Honors & Achievements"
        description="Recognizing dedicated clinical service, surgical innovation, academic distinction, and 15+ years of evidence-based urologic care."
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        
        {/* Top 4 Quick Impact Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-3">
              <Trophy size={20} />
            </div>
            <h4 className="font-extrabold text-xl text-[#103F7C]">15+ Years</h4>
            <p className="text-xs font-medium text-slate-500 mt-0.5">Surgical Excellence</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center mb-3">
              <Medal size={20} />
            </div>
            <h4 className="font-extrabold text-xl text-[#103F7C]">6+ Major</h4>
            <p className="text-xs font-medium text-slate-500 mt-0.5">Awards &amp; Honors</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-3">
              <BadgeCheck size={20} />
            </div>
            <h4 className="font-extrabold text-xl text-[#103F7C]">5,000+</h4>
            <p className="text-xs font-medium text-slate-500 mt-0.5">Laser Surgeries</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center mb-3">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-extrabold text-xl text-[#103F7C]">98%</h4>
            <p className="text-xs font-medium text-slate-500 mt-0.5">Success Rate</p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 text-[#103F7C] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-orange-500" />
            <span>Honors &amp; Accomplishments</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Recognized for Clinical &amp; Academic Leadership
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            A testament to continuous dedication towards patient care, cutting-edge laser stone technology, and evidence-based surgical practices.
          </p>
        </div>

        {/* 2-Column Balanced Cards Grid for Spacious & Premium Desktop Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {awardsData.map((award, index) => {
            const IconComp = award.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 ${award.accentBorder} shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-2xs ${award.bgIcon}`}
                    >
                      <IconComp size={22} />
                    </div>

                    <span className="text-xs font-extrabold text-orange-600 bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200 shadow-2xs">
                      {award.year}
                    </span>
                  </div>

                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                    {award.category}
                  </span>

                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl leading-snug group-hover:text-[#103F7C] transition-colors mb-2.5">
                    {award.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#103F7C] mb-4">
                    <Building2 size={16} className="text-orange-500 shrink-0" />
                    <span>{award.organization}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {award.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-orange-600">
                  <CheckCircle2 size={15} />
                  <span>Verified Medical Distinction</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Memberships Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xs mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#103F7C] text-xs font-semibold uppercase tracking-wider mb-2">
                <BadgeCheck size={13} className="text-orange-500" />
                <span>Professional Associations</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Medical Memberships &amp; Affiliations
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {memberships.map((mem, i) => (
              <div
                key={i}
                className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 hover:bg-blue-50/40 transition-colors"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                  {mem.role}
                </span>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-2">
                  {mem.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-normal leading-relaxed">
                  {mem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              <span>Evidence-Based Care</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Need Expert Medical Consultation?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Get in touch with Dr. Vinish Kumar Singh for specialized urological treatment in Lucknow.</p>
          </div>
          
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95 shrink-0"
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