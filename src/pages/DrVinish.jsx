import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Award,
  Trophy,
  Medal,
  Star,
  GraduationCap,
  Stethoscope,
  HeartPulse,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Building2,
  BadgeCheck,
  Phone,
  BookOpen,
  FileText,
  Users,
  Quote,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import doctorImage from "../assets/doctor.jpg";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

// Academic Qualification Data (Extracted from photo)
const academicQualifications = [
  {
    examination: "MCh (Urology)",
    passingYear: "2017",
    institute: "Institute Of Nephro-Urology, Bangalore",
    degreeLevel: "Super Speciality",
    badgeBg: "bg-blue-600 text-white",
  },
  {
    examination: "M.S. (Gen. Surgery)",
    passingYear: "2012",
    institute: "Govt. Medical College, Amritsar (Punjab)",
    degreeLevel: "Post Graduation",
    badgeBg: "bg-orange-500 text-white",
  },
  {
    examination: "M.B.B.S.",
    passingYear: "2007",
    institute: "King George Medical University, Lucknow (U.P.)",
    degreeLevel: "Graduation",
    badgeBg: "bg-emerald-600 text-white",
  },
  {
    examination: "Intermediate",
    passingYear: "1999",
    institute: "CBSE Board, Gaya",
    degreeLevel: "Higher Secondary",
    badgeBg: "bg-slate-700 text-white",
  },
  {
    examination: "High School",
    passingYear: "1997",
    institute: "CBSE Board, Lucknow",
    degreeLevel: "Secondary School",
    badgeBg: "bg-slate-500 text-white",
  },
];

// Work Experience Data (Extracted from photo)
const workExperienceData = [
  {
    institution: "G.M. & ASSOCIATED Hospital Lucknow and U.H.M Hospital, Kanpur",
    designation: "Intern",
    duration: "1 year",
  },
  {
    institution: "Department of General surgery, Govt Medical College, Amritsar.",
    designation: "Junior Resident I, II & III",
    duration: "Junior Resident I, II & III",
  },
  {
    institution: "Department of General Surgery, Eras Medical College, Lucknow",
    designation: "Senior Resident",
    duration: "1 year 6 months",
  },
  {
    institution: "Department of Urology, Institute of Nephro-urology, Bangalore",
    designation: "Worked as Post Graduate student",
    duration: "3rd year",
  },
];

// Curricular Activities Data
const curricularActivities = [
  {
    title: "National Urology & Endourology Workshops",
    detail: "Active participant & surgical demonstrator in SZUSICON and USICON Annual Conferences.",
  },
  {
    title: "Public Health Awareness Programs",
    detail: "Organized preventive campaigns for early kidney stone detection and prostate health awareness in Lucknow.",
  },
  {
    title: "Advanced Surgical Training Seminars",
    detail: "Attended specialized masterclasses in HolEP enucleation and Retrograde Intrarenal Surgery (RIRS).",
  },
];

// Research & Thesis Data
const researchThesisData = [
  {
    title: "M.Ch Urology Super Speciality Thesis",
    topic: "Clinical Outcomes of Retrograde Intrarenal Surgery (RIRS) vs. Mini-PCNL in Lower Calyceal Renal Calculi",
    institution: "Institute of Nephro-Urology, Bangalore",
  },
  {
    title: "M.S. General Surgery Thesis",
    topic: "Evaluation of Surgical Management Protocols in Emergency Abdominal Trauma & Reconstructive Procedures",
    institution: "Government Medical College, Amritsar",
  },
];

// Memberships Data
const membershipsData = [
  { name: "Urological Society of India (USI)", type: "Life Member" },
  { name: "North Zone Urological Society of India (NZUSI)", type: "Life Member" },
  { name: "Association of Surgeons of India (ASI)", type: "Member" },
  { name: "Fellowship of Indian Association of Gastrointestinal Endo Surgeons (FIAGES)", type: "Fellow Member" },
];

const awardsData = [
  {
    icon: Trophy,
    title: "Excellence in Endourology & Laser Care",
    organization: "Regional Healthcare Excellence Forum",
    year: "2023",
    description:
      "Awarded for outstanding surgical success in laser kidney stone (RIRS) and prostate procedures.",
    bgIcon: "bg-orange-50 text-orange-600 border-orange-200",
  },
  {
    icon: Medal,
    title: "Best Research Paper Presentation",
    organization: "Indian Urological Association Conference",
    year: "2021",
    description:
      "Honored for groundbreaking research in minimally invasive reconstructive urological techniques.",
    bgIcon: "bg-blue-50 text-[#103F7C] border-blue-200",
  },
  {
    icon: Star,
    title: "Academic Distinction in Surgical Urology",
    organization: "Super Speciality Medical Board",
    year: "2018",
    description:
      "Recognized for top academic standing and surgical performance during M.Ch residency at INU Bangalore.",
    bgIcon: "bg-orange-50 text-orange-600 border-orange-200",
  },
  {
    icon: Award,
    title: "Pioneer in Minimally Invasive Surgery",
    organization: "State Urological Society",
    year: "2016",
    description:
      "Commended for adopting advanced endoscopic and laparoscopic protocols for faster patient recovery.",
    bgIcon: "bg-blue-50 text-[#103F7C] border-blue-200",
  },
];

export default function DrVinishKumarSingh() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      {/* Hero Header Banner */}
      <PageHero
        title="Senior Consultant Urologist"
        subTitle="Dr. Vinish Kumar Singh"
        description="M.B.B.S. (KGMU), M.S. (Surgery), M.Ch (Urology - INU Bangalore), FIAGES | 15+ Years Experience & 5000+ Laser Surgeries"
      />

      {/* ================= 1. DOCTOR MAIN PROFILE SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column - Doctor Image Frame */}
          <ScrollReveal variant="scale-up" duration={800} className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Border */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#103F7C]/15 via-blue-500/10 to-orange-500/15 shadow-xl">
                <div className="bg-white rounded-[22px] overflow-hidden h-[460px] sm:h-[520px] relative group">
                  <img
                    src={doctorImage}
                    alt="Dr. Vinish Kumar Singh - Senior Urologist"
                    className="rounded-2xl w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b55]/85 via-transparent to-transparent opacity-90" />

                  {/* Designation Tag Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                      <Stethoscope size={12} />
                      <span>Urology &amp; Transplant Surgeon</span>
                    </div>

                    <h3 className="font-extrabold text-xl sm:text-2xl leading-snug drop-shadow-sm">
                      Dr. Vinish Kumar Singh
                    </h3>
                    
                    <p className="text-xs text-blue-100 font-medium mt-1">
                      M.B.B.S., M.S., FIAGES, M.Ch (Urology)
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 (Top Left): M.Ch Urology */}
              <div className="absolute top-3 left-2 sm:top-5 sm:-left-5 bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3 z-20 hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <GraduationCap size={19} />
                </div>
                <div>
                  <h4 className="font-bold text-[11px] sm:text-sm text-slate-900 leading-tight">
                    M.Ch Urology
                  </h4>
                  <p className="text-[9.5px] sm:text-[10px] text-slate-500 font-medium">
                    INU, Bangalore (2017)
                  </p>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Right): 15+ Yrs Experience */}
              <div className="absolute bottom-4 right-2 sm:bottom-6 sm:-right-5 bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3 z-20 hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <Award size={19} />
                </div>
                <div>
                  <h4 className="font-bold text-[11px] sm:text-sm text-slate-900 leading-tight">
                    15+ Yrs Excellence
                  </h4>
                  <p className="text-[9.5px] sm:text-[10px] text-slate-500 font-medium">
                    5000+ Laser Procedures
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Doctor Biography & Quote Banner */}
          <ScrollReveal variant="slide-left" delay={150} className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#103F7C] border border-blue-200/60 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={13} className="text-orange-500" />
              <span>Medical Profile &amp; Bio</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Compassionate Patient Care &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#103F7C] via-blue-700 to-orange-500">
                Advanced Laser Surgery
              </span>
            </h2>

            <p className="mt-4 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
              Dr. Vinish Kumar Singh is a leading Consultant Urologist, Andrologist, and Renal Transplant Surgeon practicing in Lucknow. He completed his M.B.B.S. from prestigious <strong>King George&apos;s Medical University (KGMU)</strong>, M.S. Surgery from <strong>Government Medical College, Amritsar</strong>, and M.Ch in Urology from the renowned <strong>Institute of Nephro-Urology (INU), Bangalore</strong>.
            </p>

            {/* Doctor's Philosophy Quote Banner */}
            <div className="my-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-sky-50/60 to-orange-50/80 border-l-4 border-[#103F7C] relative shadow-2xs">
              <Quote className="absolute top-3 right-4 text-blue-200/50" size={32} />
              <p className="text-xs sm:text-sm italic font-medium text-slate-700 leading-relaxed relative z-10">
                &ldquo;Serving patients through pursuit of academic and surgical excellence. Nonetheless, I keep in mind that the human side of a caregiver is paramount in aiding the healing process.&rdquo;
              </p>
              <p className="text-[11px] font-extrabold text-[#103F7C] uppercase tracking-wider mt-2">
                — Dr. Vinish Kumar Singh
              </p>
            </div>

            {/* 4 Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-3.5 mt-2 w-full">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900">Academic Background</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug font-normal">
                    Super speciality M.Ch Urology from INU Bangalore &amp; FIAGES Fellowship.
                  </p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900">15+ Years Excellence</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug font-normal">
                    5,000+ laser &amp; endoscopic surgeries with high success rate.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-orange-500/20 transition-all duration-300 hover:scale-102"
              >
                <Calendar size={16} />
                <span>Book Appointment</span>
                <ArrowRight size={16} />
              </NavLink>

              <a
                href="tel:+917275981480"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-300 hover:border-[#103F7C] text-[#103F7C] hover:bg-[#103F7C] hover:text-white font-semibold text-xs sm:text-sm bg-white shadow-2xs transition-all duration-300 hover:scale-102"
              >
                <Phone size={15} />
                <span>Call +91 72759 81480</span>
              </a>
            </div>

            {/* Social Media Connect Bar */}
            <div className="mt-5 flex items-center gap-3 flex-wrap">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Follow Doctor:
              </span>
              <div className="flex items-center gap-2">
                {[
                  {
                    icon: FaFacebookF,
                    label: "Facebook",
                    href: "https://www.facebook.com/vinishingh",
                    bg: "bg-[#1877F2]",
                  },
                  {
                    icon: FaInstagram,
                    label: "Instagram",
                    href: "https://www.instagram.com/drvinishurosurgeon/",
                    bg: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
                  },
                  {
                    icon: FaLinkedinIn,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/106467207/admin/dashboard/",
                    bg: "bg-[#0A66C2]",
                  },
                  {
                    icon: FaYoutube,
                    label: "YouTube",
                    href: "https://www.youtube.com/@drvinishinghurosurgeon",
                    bg: "bg-[#FF0000]",
                  },
                  {
                    icon: FaXTwitter,
                    label: "Twitter / X",
                    href: "https://x.com/dr_vinish",
                    bg: "bg-[#000000]",
                  },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className={`w-8 h-8 rounded-full ${social.bg} text-white flex items-center justify-center shadow-xs transition-all duration-300 hover:scale-115`}
                    >
                      <Icon size={12} />
                    </a>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* ================= 2. ACADEMIC QUALIFICATIONS SECTION ================= */}
      <div className="bg-white py-14 lg:py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#103F7C] border border-blue-200/60 text-xs font-semibold uppercase tracking-wider mb-2">
              <GraduationCap size={15} className="text-orange-500" />
              <span>Medical Credentials</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Academic Qualification
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Rigorous medical degrees and super-speciality surgical qualifications from premier universities in India.
            </p>
          </ScrollReveal>

          {/* Academic Table Card */}
          <ScrollReveal variant="fade-up" delay={150} className="bg-slate-50/80 rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-2xs overflow-hidden">
            <div className="sm:hidden text-right mb-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/60">
                Swipe horizontal to view full table ➔
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#103F7C] text-white text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-2xl">
                    <th className="py-3.5 px-5 rounded-l-xl">Examination / Degree</th>
                    <th className="py-3.5 px-5">Passing Year</th>
                    <th className="py-3.5 px-5 rounded-r-xl">Institute / University</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  {academicQualifications.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-white transition-colors duration-200 group"
                    >
                      {/* Examination */}
                      <td className="py-4 px-5 font-extrabold text-slate-900 group-hover:text-[#103F7C] flex items-center gap-3">
                        <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${item.badgeBg}`}>
                          {item.degreeLevel}
                        </span>
                        <span>{item.examination}</span>
                      </td>

                      {/* Passing Year */}
                      <td className="py-4 px-5 font-bold text-orange-600">
                        <span className="inline-flex items-center gap-1.5 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                          <Calendar size={12} />
                          <span>{item.passingYear}</span>
                        </span>
                      </td>

                      {/* Institute */}
                      <td className="py-4 px-5 font-semibold text-slate-700">
                        <div className="flex items-center gap-2">
                          <Building2 size={15} className="text-slate-400 shrink-0" />
                          <span>{item.institute}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* ================= 3. INTERACTIVE CREDENTIALS TABS (EXPERIENCE, ACTIVITIES, THESIS, MEMBERSHIPS) ================= */}
      <div className="py-14 lg:py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/70 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <Briefcase size={14} className="text-orange-500" />
              <span>Professional Portfolio</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Work Experience &amp; Research Portfolio
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Detailed breakdown of clinical appointments, research work, and medical society memberships.
            </p>
          </ScrollReveal>

          {/* Navigation Tabs Bar (Scrollable on Mobile) */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto whitespace-nowrap py-1 px-1 no-scrollbar gap-2 sm:gap-3 mb-8 w-full max-w-full">
            <button
              type="button"
              onClick={() => setActiveTab("experience")}
              className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeTab === "experience"
                  ? "bg-[#103F7C] text-white shadow-md scale-102"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Briefcase size={16} />
              <span>WORK EXPERIENCE</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("activities")}
              className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeTab === "activities"
                  ? "bg-[#103F7C] text-white shadow-md scale-102"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <BookOpen size={16} />
              <span>CURRICULAR ACTIVITIES</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("thesis")}
              className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeTab === "thesis"
                  ? "bg-[#103F7C] text-white shadow-md scale-102"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <FileText size={16} />
              <span>THESIS &amp; RESEARCH</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("memberships")}
              className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeTab === "memberships"
                  ? "bg-[#103F7C] text-white shadow-md scale-102"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Users size={16} />
              <span>MEMBERSHIPS</span>
            </button>
          </div>

          {/* TAB 1: WORK EXPERIENCE TABLE */}
          {activeTab === "experience" && (
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="sm:hidden text-right mb-2">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/60">
                  Swipe horizontal to view full table ➔
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-[#103F7C] text-white text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-2xl">
                      <th className="py-3.5 px-5 rounded-l-xl">Institution</th>
                      <th className="py-3.5 px-5">Designation</th>
                      <th className="py-3.5 px-5 rounded-r-xl">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                    {workExperienceData.map((item, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/40 transition-colors duration-200">
                        <td className="py-4 px-5 font-bold text-slate-900">
                          <div className="flex items-center gap-2.5">
                            <Building2 size={16} className="text-orange-500 shrink-0" />
                            <span>{item.institution}</span>
                          </div>
                        </td>
                        <td className="py-4 px-5 font-semibold text-[#103F7C]">
                          {item.designation}
                        </td>
                        <td className="py-4 px-5 font-extrabold text-orange-600">
                          <span className="bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                            {item.duration}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          )}

          {/* TAB 2: CURRICULAR ACTIVITIES */}
          {activeTab === "activities" && (
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen className="text-orange-500" size={20} />
                <span>Academic &amp; Curricular Highlights</span>
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {curricularActivities.map((act, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-orange-300 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-extrabold text-sm mb-3">
                      0{idx + 1}
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm mb-2">{act.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{act.detail}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* TAB 3: THESIS & RESEARCH WORK */}
          {activeTab === "thesis" && (
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="text-[#103F7C]" size={20} />
                <span>Super Speciality Thesis &amp; Published Research</span>
              </h3>
              <div className="space-y-4">
                {researchThesisData.map((res, idx) => (
                  <div key={idx} className="bg-blue-50/50 p-5 rounded-2xl border border-blue-200/70">
                    <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">
                      {res.title}
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-base mt-1">
                      {res.topic}
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold mt-2 flex items-center gap-1.5">
                      <Building2 size={13} className="text-[#103F7C]" />
                      <span>{res.institution}</span>
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* TAB 4: MEMBERSHIPS */}
          {activeTab === "memberships" && (
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <Users className="text-emerald-600" size={20} />
                <span>Medical Society &amp; Professional Memberships</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {membershipsData.map((mem, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">{mem.name}</span>
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      {mem.type}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

        </div>
      </div>

      {/* ================= 4. HONORS, AWARDS & RECOGNITION SECTION ================= */}
      <div className="py-14 lg:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/70 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Trophy size={13} className="text-orange-500" />
              <span>Honors &amp; Accreditations</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Awards &amp; Professional Recognition
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Acknowledging medical research presentations, clinical excellence, and urology innovation.
            </p>
          </ScrollReveal>

          {/* Awards 4-Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {awardsData.map((award, index) => {
              const IconComp = award.icon;
              return (
                <ScrollReveal key={index} variant="scale-up" delay={index * 100} className="h-full">
                  <div
                    className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${award.bgIcon}`}
                        >
                          <IconComp size={22} />
                        </div>
                        <span className="text-xs font-extrabold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                          {award.year}
                        </span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#103F7C] transition-colors mb-2">
                        {award.title}
                      </h3>

                      <p className="text-xs font-semibold text-[#103F7C] mb-3">
                        {award.organization}
                      </p>

                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </div>

      {/* ================= 5. CTA BANNER SECTION ================= */}
      <ScrollReveal variant="fade-up" delay={200} className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              <span>Expert Urology Consultation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Schedule Your Appointment Today</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Get expert guidance, accurate diagnosis &amp; modern laser care from Dr. Vinish Kumar Singh.</p>
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
      </ScrollReveal>

    </section>
  );
}