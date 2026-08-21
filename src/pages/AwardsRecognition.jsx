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
  Check,
} from "lucide-react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import awardsBanner from "../assets/About/AwardsRecognition.png";

const awardsData = [
  {
    icon: Trophy,
    title: "Prize Paper Award - KUACON 2016",
    organization: "Karnataka Urology Association (Goa)",
    year: "2016",
    category: "Prize Paper Honor",
    description:
      "Awarded prize paper honor for research presentation on 'Clinicopathological Outcome of Carcinoma Penis' at KUACON 2016.",
    bgIcon: "bg-orange-50 text-orange-600 border-orange-200",
    accentBorder: "border-t-4 border-t-orange-500",
  },
  {
    icon: Medal,
    title: "First Prize - International Conference KGMC",
    organization: "King George's Medical University, Lucknow",
    year: "2003",
    category: "International Symposium",
    description:
      "Won 1st Prize for paper presentation at International Conference on 'Role of Free Radicals And Antioxidants in Health & Disease'.",
    bgIcon: "bg-blue-50 text-[#103F7C] border-blue-200",
    accentBorder: "border-t-4 border-t-[#103F7C]",
  },
  {
    icon: Star,
    title: "American Urology Association (AUA) Resident Trainee Selection",
    organization: "Urology Society of India (USI) & AUA (USA)",
    year: "2017",
    category: "International Trainee Selection",
    description:
      "Selected by USI to represent resident trainees at the American Urology Association (AUA) Annual Meeting 2017.",
    bgIcon: "bg-orange-50 text-orange-600 border-orange-200",
    accentBorder: "border-t-4 border-t-orange-500",
  },
  {
    icon: Award,
    title: "USICON National Paper Presentations",
    organization: "Urology Society of India (Hyderabad & Mumbai)",
    year: "2016-2017",
    category: "National Research Presentation",
    description:
      "Presented papers on Functional Outcome of Partial Penectomy (USICON 2016) and Hyaluronic Acid in Urethral Stricture prevention (USICON 2017).",
    bgIcon: "bg-blue-50 text-[#103F7C] border-blue-200",
    accentBorder: "border-t-4 border-t-[#103F7C]",
  },
  {
    icon: Microscope,
    title: "FIAGES & USA Fellowships Distinction",
    organization: "FIAGES (New Delhi) & International Forum (USA)",
    year: "Fellowship",
    category: "Surgical Fellowships",
    description:
      "Fellowship in Gastrointestinal Endo Surgery (New Delhi) and specialized advanced training in Andrology and male reproductive health.",
    bgIcon: "bg-orange-50 text-orange-600 border-orange-200",
    accentBorder: "border-t-4 border-t-orange-500",
  },
  {
    icon: GraduationCap,
    title: "M.Ch Urology Super Speciality Distinction",
    organization: "Institute Of Nephro-Urology (INU), Bangalore",
    year: "2017",
    category: "Super Speciality Honor",
    description:
      "Completed 3-year super speciality residency at INU Bangalore with high clinical and surgical merit across complex reconstructive procedures.",
    bgIcon: "bg-blue-50 text-[#103F7C] border-blue-200",
    accentBorder: "border-t-4 border-t-[#103F7C]",
  },
];

const memberships = [
  {
    name: "Society of Endoscopic & Laparoscopic Surgeons of India (SELSI)",
    role: "Life Member",
    desc: "Active life member contributing case publications & minimally invasive surgical techniques.",
  },
  {
    name: "Urology Society of India (USI)",
    role: "Life Member",
    desc: "Continuous involvement in national BOE symposiums, clinical research & annual congresses.",
  },
  {
    name: "South Zone Urology Society of India (SZUSI)",
    role: "Life Member",
    desc: "Active member in regional urologic meetings and paper presentations.",
  },
  {
    name: "Karnataka Urology Association",
    role: "Active Member",
    desc: "Participant in state urology symposiums, KUACON conference & surgical updates.",
  },
  {
    name: "Bangalore Urological Society",
    role: "Active Member",
    desc: "Presented paper on Management Option for Orthotopic Neobladder Lithiasis.",
  },
  {
    name: "American Urology Association (AUA)",
    role: "International Member",
    desc: "Selected as AUA Resident Trainee 2017 representing USI.",
  },
];

export default function AwardsRecognition() {
  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      {/* Hero Header Banner */}
      <PageHero
        title="Awards & Accreditations"
        subTitle="Honors & Achievements"
        description="Recognizing dedicated clinical service, surgical innovation, academic research presentations, and 15+ years of evidence-based urologic care."
        bgImage={awardsBanner}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        
        {/* Top 4 Quick Impact Highlights */}
        <ScrollReveal variant="fade-up" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
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
        </ScrollReveal>

        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={100} className="text-center max-w-3xl mx-auto mb-12">
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
        </ScrollReveal>

        {/* 2-Column Balanced Cards Grid for Spacious & Premium Desktop Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {awardsData.map((award, index) => {
            const IconComp = award.icon;
            return (
              <ScrollReveal key={index} variant="scale-up" delay={index * 100} className="h-full">
                <div
                  className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 ${award.accentBorder} shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group h-full`}
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
              </ScrollReveal>
            );
          })}
        </div>

        {/* Professional Memberships Section */}
        <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xs mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#103F7C] text-xs font-semibold uppercase tracking-wider mb-2">
                <BadgeCheck size={13} className="text-orange-500" />
                <span>Professional Associations</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Medical Memberships &amp; Affiliations (All 6 Societies)
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
        </ScrollReveal>

        {/* Minimal CTA Banner */}
        <ScrollReveal variant="fade-up" delay={200} className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              <span>Evidence-Based Care</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Need Expert Medical Consultation?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Get in touch with Dr. Vinish Kumar Singh for specialized urological treatment in Lucknow.</p>
          </div>
          
          <NavLink
            to="/#book-appointment"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <Calendar size={16} />
            <span>Book Appointment</span>
            <ArrowRight size={16} />
          </NavLink>
        </ScrollReveal>

      </div>
    </section>
  );
}