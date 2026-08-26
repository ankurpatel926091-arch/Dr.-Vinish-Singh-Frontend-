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
  Microscope,
  FileCheck,
  UserCheck,
  MapPin,
  Check,
  Activity,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import doctorImage from "../assets/doctor.jpg";
import headerBannerBg from "../assets/About/About .png";
import PageHero from "../components/PageHero";
import DoctorProfileCard from "../components/DoctorProfileCard/DoctorProfileCard";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

// Academic Qualification Data (Extracted directly from dr-vinish-singh.aspx)
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

// Work Experience Data (Extracted directly from dr-vinish-singh.aspx)
const workExperienceData = [
  {
    institution: "TSM Medical College & Hospital, Lucknow",
    designation: "Associate Professor in Urology",
    duration: "2017 - Present",
    type: "Academic & Clinical",
  },
  {
    institution: "SKD Kanpur Road & Ajanta Hospital Alambagh, Lucknow",
    designation: "Consultant Urologist & Transplant Surgeon",
    duration: "Present",
    type: "Clinical Care",
  },
  {
    institution: "Department of Urology, Institute of Nephro-urology, Bangalore",
    designation: "Worked as Post Graduate student (M.Ch Urology)",
    duration: "3rd year / 3 Years Residency",
    type: "Super Speciality Training",
  },
  {
    institution: "Department of General Surgery, Eras Medical College, Lucknow",
    designation: "Senior Resident",
    duration: "1 year 6 months",
    type: "Resident Teaching",
  },
  {
    institution: "Department of General surgery, Govt Medical College, Amritsar.",
    designation: "Junior Resident I, II & III",
    duration: "3 Years Residency",
    type: "PG Residency",
  },
  {
    institution: "G.M. & ASSOCIATED Hospital Lucknow and U.H.M Hospital, Kanpur",
    designation: "Intern",
    duration: "1 year",
    type: "Rotatory Internship",
  },
];

// Curricular Activities Data (Detailed Sections from dr-vinish-singh.aspx)
const curricularActivities = [
  {
    category: "SCHOOL LEVEL",
    items: [
      "Passed High School examination in 1997 conducted by CBSE board with Ist Division (70%).",
      "Passed Intermediate examination in 1999 conducted by CBSE board with Ist Division (70%) with HONOURS, with distinction in Biology.",
    ],
  },
  {
    category: "UNDERGRADUATION INCLUDING ROTATORY INTERNSHIP",
    items: [
      "Joined King George Medical University, Lucknow (U.P.) through U.P. combined pre medical test in 2002.",
      "Passed all examinations (theory, practical, viva voce) in first attempt with good merit in all subjects.",
      "Obtained Honour in Biochemistry during M.B.B.S.",
    ],
  },
  {
    category: "POSTGRADUATION",
    items: [
      "Qualifying ALL INDIA Pre P.G. and joined M.S. (Gen Surgery) at Govt Medical College, Amritsar in May 2009.",
      "Experienced huge workload in terms of emergencies, OPD and admitted patients and gained vast variety of surgical experience.",
    ],
  },
  {
    category: "TEACHING & RESIDENCY Mentorship",
    items: [
      "Actively participated in Undergraduate and Postgraduate Teaching Programmes during the 3 years Postgraduate Training, which included Bedside Patient Teaching, Clinical Examination, Practical Demonstration, Case Presentation and Seminar Presentation.",
      "Worked as senior resident after postgraduation for 1 year and 6 months in Eras Medical College, Lucknow and involved in the teaching & training of U.G/ P.G students of Department.",
    ],
  },
];

// Thesis & Research Work Data (Authentic Data from dr-vinish-singh.aspx)
const thesisWork = [
  {
    title: "M.S. General Surgery Thesis",
    topic: "EVALUATION OF 100 CASES OF LUMP BREAST WITH RESPECT TO HIGH RISK FACTORS, CLINICAL EXAMINATION AND FINE NEEDLE ASPIRATION CYTOLOGY",
    institution: "Govt. Medical College, Amritsar",
  },
];

const publishedCaseReports = [
  {
    title: "SEPTATE GALL BLADDER: A Case Report",
    journal: "Journal of Evolution of Medical and Dental Sciences (JEMDS)",
    citation: "DOI: 10.14260/jemds/2014/1986",
  },
  {
    title: "CONGENITAL RIGHT HYDROURETER: A CASE REPORT",
    journal: "SELSI Newsletter (Society of Endoscopic & Laparoscopic Surgeons of India)",
    citation: "Case Reports Nov 2012, No 1, Vol 7",
  },
  {
    title: "Tuberculous Stricture of Urethra: Case Reports",
    journal: "SELSI Newsletter (Society of Endoscopic & Laparoscopic Surgeons of India)",
    citation: "Case Reports Nov 2013, No 1, Vol 9",
  },
];

const conferencePresentations = [
  {
    year: "2003",
    event: "International Conference On 'Role of Free Radicals And Antioxidants in Health & Disease', KGMC, Lucknow",
    highlight: "Presented paper and Won First Prize",
  },
  {
    year: "2011",
    event: "ASICON 2011, Cochin",
    highlight: "Presented paper on 'ISOLATED SPLENIC METASTASIS IN CASE OF CARCINOMA BREAST'",
  },
  {
    year: "2014",
    event: "Karnataka Urology Society Conference, Bangalore",
    highlight: "Attended state urology conference",
  },
  {
    year: "2014",
    event: "Urology Update 2014, Bangalore",
    highlight: "Attended clinical urology update",
  },
  {
    year: "2015",
    event: "Workshop on UDS & ESWL, Institute of Nephrourology, Bangalore",
    highlight: "Attended specialized endourology workshop",
  },
  {
    year: "2015",
    event: "BOE (USI) Consensus and Controversies in Paediatric Urology, Bangalore",
    highlight: "Attended Board of Education paediatric urology symposium",
  },
  {
    year: "2015",
    event: "T.S. Jairam Workshop, Institute of Nephrourology, Bangalore",
    highlight: "Attended surgical masterclass",
  },
  {
    year: "2016",
    event: "USICON 2016, Hyderabad",
    highlight: "Presented paper on 'FUNCTIONAL OUTCOME OF PARTIAL PENECTOMY'",
  },
  {
    year: "2016",
    event: "AUA USI Board Review Course 2016, Hyderabad",
    highlight: "Attended American Urology Association Board Review course",
  },
  {
    year: "2015-16",
    event: "Board of Education (BOE) Activities by USI",
    highlight: "Attended all BOE educational activities in 2015 & 2016",
  },
  {
    year: "2016",
    event: "SZUICON 2016, Pondicherry",
    highlight: "Presented poster on 'SQUAMOUS CELL CARCINOMA OF URETHRA'",
  },
  {
    year: "2016",
    event: "KUACON 2016, Goa",
    highlight: "Presented prize paper on 'CLINICOPATHOLOGICAL OUTCOME OF CARCINOMA PENIS'",
  },
  {
    year: "2016",
    event: "T.S. Jairam Workshop at Kempegowda Institute of Medical Sciences, Bangalore",
    highlight: "Attended advanced operative workshop",
  },
  {
    year: "2016",
    event: "Bangalore Urological Association Meetings",
    highlight: "Presented paper on 'MANAGEMENT OPTION FOR ORTHOTROPIC NEOBLADDER LITHIASIS'",
  },
  {
    year: "2017",
    event: "USICON 2017, Mumbai",
    highlight: "Presented poster on 'THE EFFECT OF HYALURONIC ACID IN PREVENTING RECURRENCE OF URETHRAL STRICTURE AFTER ENDOSCOPIC INTERNAL URETHROTOMY'",
  },
  {
    year: "2017",
    event: "American Urology Association (AUA) 2017 Selection",
    highlight: "Selected for American Urology Association 2017 by USI as Resident Trainee",
  },
];

// Memberships Data (All 6 from dr-vinish-singh.aspx)
const membershipsData = [
  { name: "Society of Endoscopic & Laparoscopic Surgeons of India (SELSI)", type: "Life Member" },
  { name: "Urology Society of India (USI)", type: "Life Member" },
  { name: "South Zone Urology Society of India (SZUSI)", type: "Life Member" },
  { name: "Karnataka Urology Association", type: "Member" },
  { name: "Bangalore Urological Society", type: "Member" },
  { name: "American Urology Association (AUA)", type: "International Trainee Member" },
];

// Personal Skills Data
const personalSkills = [
  "Team worker with patience, humour and good communication skills.",
  "Friendly, motivating and respect for the hierarchy.",
  "Deep commitment to patient empathy and human-centered healing.",
];

// References Data
const referencesData = [
  {
    name: "Prof. Keshavamurthy R.",
    title: "Professor and Head, Department of Urology",
    institution: "Institute of Nephro-Urology (INU), Bangalore",
  },
  {
    name: "Prof. Shivalingaiah M.",
    title: "Professor, Department of Urology",
    institution: "Institute of Nephro-Urology (INU), Bangalore",
  },
];

export default function DrVinishKumarSingh() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      {/* Hero Header Banner */}
      <PageHero
        title="Consultant Urologist & Transplant Surgeon"
        subTitle="Dr. Vinish Kumar Singh"
        // description="M.B.B.S. (KGMU), M.S. (General Surgery), FIAGES, M.Ch (Urology - INU Bangalore) | Associate Professor in TSM Medical College | 15+ Years Clinical Practice & 5000+ Laser Surgeries"
        bgImage={headerBannerBg}
      />

      {/* ================= 1. DOCTOR MAIN PROFILE SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column - Doctor Image Frame & Action Bar */}
          <ScrollReveal variant="scale-up" duration={800} className="lg:col-span-5 relative flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Glow Border */}
              <div className="relative rounded-[32px] p-2.5 bg-gradient-to-b from-[#103F7C]/20 via-blue-500/12 to-orange-500/20 shadow-2xl shadow-blue-900/10">
                <div className="bg-white rounded-[24px] overflow-hidden h-[480px] sm:h-[540px] relative group border border-slate-100">
                  <img
                    src={doctorImage}
                    alt="Dr. Vinish Kumar Singh - Senior Urologist"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061933]/95 via-[#0a274e]/30 to-transparent opacity-95" />

                  {/* Top Right Floating Verification Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[10.5px] font-extrabold tracking-wide backdrop-blur-md shadow-md border border-white/20">
                      <BadgeCheck size={13} />
                      <span>Verified Urosurgeon</span>
                    </span>
                  </div>

                  {/* Designation Tag & Info Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-white z-20">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[10.5px] font-extrabold uppercase tracking-wider mb-2 shadow-md">
                      <Stethoscope size={13} />
                      <span>Urology &amp; Transplant Specialist</span>
                    </div>

                    <h3 className="font-extrabold text-2xl sm:text-3xl leading-snug drop-shadow-md text-white">
                      Dr. Vinish Kumar Singh
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-blue-100 font-semibold mt-1 drop-shadow-xs">
                      M.B.B.S. (KGMU), M.S. (General Surgery), FIAGES, M.Ch (Urology - INU Bangalore) | Associate Professor in TSM Medical College
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Degree Badge (Top Left) */}
              <div className="absolute top-4 left-3 sm:top-6 sm:-left-6 bg-white/95 backdrop-blur-md shadow-xl border border-slate-200/90 rounded-2xl p-3 flex items-center gap-3 z-30 hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0 border border-blue-100">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-tight">
                    M.Ch Urology
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold">
                    INU, Bangalore (2017)
                  </p>
                </div>
              </div>

              {/* Action Box Under Photo Card */}
              <div className="mt-5 w-full bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm flex flex-col gap-4">
                {/* Action Buttons */}
                <div className="flex flex-col gap-2.5">
                  <NavLink
                    to="/#book-appointment"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-98"
                  >
                    <Calendar size={17} />
                    <span>Book a Consultation</span>
                    <ArrowRight size={16} />
                  </NavLink>

                  <a
                    href="tel:+917275981480"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 hover:border-[#103F7C] text-[#103F7C] hover:bg-[#103F7C] hover:text-white font-extrabold text-xs sm:text-sm bg-white shadow-2xs transition-all duration-300 hover:scale-[1.02] active:scale-98"
                  >
                    <Phone size={16} />
                    <span>Call +91 72759 81480</span>
                  </a>
                </div>

                {/* Divider & Social Icons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
                    Follow Doctor:
                  </span>
                  <div className="flex items-center gap-2">
                    {[
                      {
                        icon: FaFacebookF,
                        label: "Facebook",
                        href: "https://www.facebook.com/Dr-Vinish-Singh-Urosurgeon-101279232291311/",
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
                        href: "https://www.linkedin.com/in/dr-vinish-kumar-singh-5b236421b/",
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
                        href: "https://twitter.com/dr_vinish",
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
                          className={`w-8 h-8 rounded-full ${social.bg} text-white flex items-center justify-center shadow-xs transition-all duration-300 hover:scale-110`}
                        >
                          <Icon size={12} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column - Doctor Biography, Credentials & Quote */}
          <ScrollReveal variant="slide-left" delay={150} className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/70 text-[#103F7C] border border-blue-200/70 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles size={13} className="text-orange-500" />
              <span>EXPERTISE • EXPERIENCE • EXCELLENCE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Advanced Urological Care with {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#103F7C] via-blue-800 to-orange-500">
                Surgical Precision

              </span>
            </h1>

            {/* Quick Credentials Pills */}
            <div className="flex flex-wrap gap-2 mt-4 w-full">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-2xs">
                <GraduationCap size={14} className="text-[#103F7C]" />
                <span>KGMU &amp; INU Alumnus</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-2xs">
                <Briefcase size={14} className="text-orange-500" />
                <span> Specialised Urology Expertise</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-2xs">
                <Activity size={14} className="text-emerald-600" />
                <span>Advanced Laser Procedures</span>
              </span>
            </div>

            {/* Doctor Bio Profile Card */}
            <div className="mt-5 w-full">
              <DoctorProfileCard />
            </div>

          

            {/* Key Clinical Appointments Summary */}
            <div className="grid sm:grid-cols-2 gap-3.5 w-full">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0 font-bold border border-blue-100">
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">TSM Medical College</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Associate Professor (Since 2017)</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-orange-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 font-bold border border-orange-100">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">Ajanta &amp; SKD Hospital</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Consultant Urologist, Lucknow</p>
                </div>
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

      {/* ================= 3. INTERACTIVE CREDENTIALS TABS (EXPERIENCE, ACTIVITIES, THESIS, MEMBERSHIPS & SKILLS) ================= */}
      <div className="py-14 lg:py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/70 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <Briefcase size={14} className="text-orange-500" />
              <span>Professional Portfolio</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Work Experience, Research &amp; Credentials
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Detailed breakdown of clinical appointments, research publications, conference presentations, and society memberships.
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
              <span>MEMBERSHIPS &amp; SKILLS</span>
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
                            <div>
                              <span>{item.institution}</span>
                              <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{item.type}</span>
                            </div>
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
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <BookOpen className="text-orange-500" size={20} />
                <span>Details of Curricular Activities</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {curricularActivities.map((group, idx) => (
                  <div key={idx} className="bg-slate-50/90 p-5 rounded-2xl border border-slate-200/80 hover:border-orange-300 transition-colors">
                    <h4 className="font-extrabold text-[#103F7C] text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-[11px]">
                        0{idx + 1}
                      </span>
                      <span>{group.category}</span>
                    </h4>
                    <ul className="space-y-2">
                      {group.items.map((item, i) => (
                        <li key={i} className="text-xs text-slate-600 leading-relaxed font-normal flex items-start gap-2">
                          <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* TAB 3: THESIS & RESEARCH WORK */}
          {activeTab === "thesis" && (
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-8">
              {/* MS Thesis Section */}
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <FileText className="text-[#103F7C]" size={20} />
                  <span>Thesis &amp; Academic Research Work</span>
                </h3>
                {thesisWork.map((res, idx) => (
                  <div key={idx} className="bg-blue-50/60 p-5 rounded-2xl border border-blue-200/80">
                    <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">
                      {res.title}
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mt-1 leading-snug">
                      &ldquo;{res.topic}&rdquo;
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold mt-2 flex items-center gap-1.5">
                      <Building2 size={13} className="text-[#103F7C]" />
                      <span>{res.institution}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Published Case Reports */}
              <div>
                <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Microscope className="text-emerald-600" size={18} />
                  <span>Published Case Reports</span>
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {publishedCaseReports.map((pub, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 hover:bg-emerald-50/40 transition-colors">
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Case Report 0{idx + 1}
                      </span>
                      <h4 className="font-bold text-slate-900 text-xs mt-2 leading-tight">
                        {pub.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 font-medium mt-1">
                        {pub.journal}
                      </p>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">
                        {pub.citation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conference Presentations List */}
              <div>
                <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Award className="text-orange-500" size={18} />
                  <span>Conferences, Workshops &amp; Paper Presentations ({conferencePresentations.length} Symposiums)</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-3.5 max-h-[420px] overflow-y-auto pr-1 no-scrollbar">
                  {conferencePresentations.map((conf, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-blue-50/30 transition-colors flex items-start gap-3">
                      <span className="text-xs font-extrabold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200 shrink-0">
                        {conf.year}
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs leading-snug">{conf.event}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 font-medium">{conf.highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* TAB 4: MEMBERSHIPS, SKILLS & REFERENCES */}
          {activeTab === "memberships" && (
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-8">
              {/* Society Memberships */}
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Users className="text-emerald-600" size={20} />
                  <span>Membership of Medical Organizations</span>
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {membershipsData.map((mem, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                          <CheckCircle2 size={16} />
                        </div>
                        <span className="font-bold text-slate-900 text-xs">{mem.name}</span>
                      </div>
                      <span className="text-[9.5px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                        {mem.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Skills */}
              <div>
                <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <UserCheck className="text-[#103F7C]" size={18} />
                  <span>Personal Skills &amp; Caregiver Philosophy</span>
                </h3>
                <div className="space-y-2.5">
                  {personalSkills.map((skill, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-200/60 flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#103F7C] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-slate-700 font-semibold">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* References */}
              <div>
                <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <FileCheck className="text-orange-500" size={18} />
                  <span>Academic &amp; Surgical References</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {referencesData.map((ref, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <GraduationCap className="text-orange-500 shrink-0 mt-0.5" size={20} />
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{ref.name}</h4>
                        <p className="text-[11px] text-[#103F7C] font-semibold">{ref.title}</p>
                        <p className="text-[10px] text-slate-500 font-medium">{ref.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

        </div>
      </div>

      {/* ================= 4. CTA BANNER SECTION ================= */}
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
            to="/#book-appointment"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <Calendar size={16} />
            <span>Book a Consultation</span>
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </ScrollReveal>

    </section>
  );
}