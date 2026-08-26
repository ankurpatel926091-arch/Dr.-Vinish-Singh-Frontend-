import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Stethoscope,
  Activity,
  ShieldCheck,
  Zap,
  Award,
  HeartPulse,
  Phone,
  Clock,
  MessageSquare,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  UserCheck,
  Building2,
  MapPin,
} from "lucide-react";
import PageHero from "./PageHero";
import CategoryMenuCard from "./CategoryMenuCard";
import ScrollReveal from "./ScrollReveal/ScrollReveal";
import { conditionsMenuCategories, femaleUrologyGuideCategory, maleUrologyGuideCategory } from "../data/conditionsMenuData";

export default function ConditionPage({
  title,
  subTitle,
  description,
  category = "Andrological Conditions",
  heroBg,
  image,
  overviewTitle,
  overviewText,
  treatmentCards = [],
  highlights = [],
  detailedTreatments = [],
  symptoms = [],
  faqs = [],
}) {
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [openFaq, setOpenFaq] = useState(null);

  const allCategoriesList = [...conditionsMenuCategories, femaleUrologyGuideCategory, maleUrologyGuideCategory];

  const activeCategoryObj =
    allCategoriesList.find(
      (c) =>
        c.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        selectedCategory.toLowerCase().includes(c.title.toLowerCase())
    ) || conditionsMenuCategories[1];

  // Default patient FAQs if none passed
  const defaultFaqs = [
    {
      q: `What is the expected recovery time for ${title}?`,
      a: `Most procedures conducted by Dr. Vinish Kumar Singh are minimally invasive or daycare-based, allowing patients to resume normal daily activities within 24 to 48 hours.`,
    },
    {
      q: `Is the treatment for ${title} painful?`,
      a: `No. Treatments utilize advanced laser technology and precision microsurgery under local or regional anesthesia for a smooth, painless clinical experience.`,
    },
    {
      q: "How can I book an OPD consultation?",
      a: "You can book directly by calling our clinic helpline at +91 72759 81480 or messaging us on WhatsApp for same-day appointment scheduling.",
    },
    {
      q: "Which hospitals does Dr. Vinish Kumar Singh consult at?",
      a: "Dr. Vinish Kumar Singh conducts regular morning and evening OPD consultations at Rudraksh IVF & Shilpi Maternity in Lucknow.",
    },
  ];

  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <section className="bg-slate-50/80 min-h-screen font-sans selection:bg-[#103F7C] selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Page Hero */}
      <PageHero
        title={title}
        subTitle={subTitle}
        description={description}
        bgImage={heroBg}
      />

      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200/80 py-2.5 px-4 sm:px-6 shadow-2xs w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap">
          <NavLink to="/" className="hover:text-[#103F7C] transition-colors">
            Home
          </NavLink>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <span className="text-slate-600">Conditions Treated</span>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <span className="text-slate-600">{category}</span>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <span className="text-[#103F7C] font-extrabold">{title}</span>
        </div>
      </div>

      {/* Top Clinical Highlights Bar */}
      <div className="bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#0c2e5a] text-white py-3.5 shadow-md border-b border-white/10 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center">
            <div className="bg-white/10 sm:bg-transparent rounded-2xl p-2.5 sm:p-0 flex flex-col items-center justify-center border border-white/10 sm:border-0 sm:border-r border-white/15">
              <span className="text-orange-400 font-black text-base sm:text-2xl">15+ Years</span>
              <span className="text-[10.5px] sm:text-sm text-blue-100 font-medium mt-0.5 leading-tight">Surgical Expertise</span>
            </div>
            <div className="bg-white/10 sm:bg-transparent rounded-2xl p-2.5 sm:p-0 flex flex-col items-center justify-center border border-white/10 sm:border-0 sm:border-r border-white/15">
              <span className="text-orange-400 font-black text-base sm:text-2xl">100%</span>
              <span className="text-[10.5px] sm:text-sm text-blue-100 font-medium mt-0.5 leading-tight">Confidential Care</span>
            </div>
            <div className="bg-white/10 sm:bg-transparent rounded-2xl p-2.5 sm:p-0 flex flex-col items-center justify-center border border-white/10 sm:border-0 sm:border-r border-white/15">
              <span className="text-orange-400 font-black text-base sm:text-2xl">Painless</span>
              <span className="text-[10.5px] sm:text-sm text-blue-100 font-medium mt-0.5 leading-tight">Laser &amp; Micro-Surgery</span>
            </div>
            <div className="bg-white/10 sm:bg-transparent rounded-2xl p-2.5 sm:p-0 flex flex-col items-center justify-center border border-white/10 sm:border-0">
              <span className="text-orange-400 font-black text-base sm:text-2xl">Same-Day</span>
              <span className="text-[10.5px] sm:text-sm text-blue-100 font-medium mt-0.5 leading-tight">Discharge Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Sticky Left Sidebar + Right Detailed Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 lg:py-16 w-full max-w-full overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full max-w-full">
          
          {/* Left Column: Sticky Image, Category Switcher & Doctor OPD Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5 sm:space-y-6 w-full max-w-full overflow-hidden">
            {/* Condition Illustration / Photo Container */}
            <ScrollReveal variant="fade-up">
              <div className="relative rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-[#103F7C]/15 via-blue-500/10 to-orange-500/15 shadow-xl w-full max-w-full overflow-hidden">
                <div className="bg-white rounded-[22px] overflow-hidden min-h-[200px] max-h-[350px] aspect-[4/3] sm:aspect-auto sm:h-[350px] relative group border border-slate-200/90 flex items-center justify-center p-2.5 sm:p-5 w-full max-w-full">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="w-full h-auto max-h-[330px] object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/80 via-white to-slate-100 text-[#103F7C] p-4 sm:p-6 text-center rounded-xl border border-slate-200/80">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#103F7C] text-white flex items-center justify-center mb-3 sm:mb-5 shadow-lg">
                        <Stethoscope size={30} className="text-orange-400 sm:w-10 sm:h-10" />
                      </div>
                      <h3 className="font-extrabold text-lg sm:text-2xl leading-snug">{title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed font-medium">
                        Specialized Clinical &amp; Surgical Care led by Senior Urologist Dr. Vinish Kumar Singh
                      </p>
                    </div>
                  )}
                  
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#103F7C]/95 backdrop-blur-md text-white text-[11px] sm:text-sm font-extrabold shadow-md border border-white/20">
                      <Stethoscope size={13} className="text-orange-400 sm:w-4 sm:h-4" />
                      <span>{category}</span>
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Category Selector Tabs */}
            <div className="bg-white rounded-2xl p-2 border border-slate-200/80 shadow-2xs flex items-center gap-1.5 overflow-x-auto no-scrollbar touch-pan-x py-2.5 w-full max-w-full">
              {conditionsMenuCategories.map((cat) => {
                const isSelected =
                  cat.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
                  selectedCategory.toLowerCase().includes(cat.title.toLowerCase());
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.title)}
                    className={`px-3 py-1.5 rounded-xl text-[11px] sm:text-[11.5px] font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                      isSelected
                        ? "bg-[#103F7C] text-white shadow-xs"
                        : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80"
                    }`}
                  >
                    {cat.title.replace("Conditions", "").replace("Urological", "").trim()}
                  </button>
                );
              })}
            </div>

            {/* Category Navigation Menu Card */}
            {activeCategoryObj && (
              <CategoryMenuCard
                title={activeCategoryObj.title}
                icon={activeCategoryObj.icon}
                iconBg={activeCategoryObj.iconBg}
                items={activeCategoryObj.items}
                activeLabel={title}
                className="w-full max-w-full overflow-hidden"
              />
            )}

            {/* Quick Doctor Consultation & OPD Card */}
            <ScrollReveal variant="scale-up">
              <div className="bg-gradient-to-br from-[#103F7C] via-blue-900 to-[#0a274c] text-white rounded-3xl p-4 sm:p-5 shadow-xl border border-blue-800/40 space-y-4 font-sans relative overflow-hidden w-full max-w-full">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 border-b border-blue-700/50 pb-3 relative z-10">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-orange-500 to-orange-600 text-white flex items-center justify-center font-black shadow-md shrink-0">
                    <Stethoscope size={20} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">Dr. Vinish Kumar Singh</h4>
                    <p className="text-[11px] sm:text-[11.5px] text-blue-200 font-medium">Senior Urologist &amp; Transplant Surgeon</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-blue-100 relative z-10">
                  <div className="flex items-start gap-2.5">
                    <Building2 size={15} className="text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <a
                        href="https://maps.app.goo.gl/jbynbpoL5PcKca4Z9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white hover:text-orange-400 hover:underline inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Rudraksh IVF &amp; Shilpi Maternity</span>
                        <MapPin size={12} className="text-orange-400 shrink-0 inline" />
                      </a>
                      <span className="text-[11px] text-blue-200 block">OPD Consultation Clinics in Lucknow</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock size={15} className="text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">OPD Schedule</span>
                      <span className="text-[11px] text-blue-200">Mon - Sat (10:00 AM - 6:00 PM)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone size={15} className="text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Direct Helpline</span>
                      <a href="tel:7275981480" className="text-orange-300 font-extrabold hover:underline">
                        +91 72759 81480
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2.5 relative z-10">
                  <NavLink
                    to="/#book-appointment"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs font-black shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Calendar size={14} />
                    <span>Book Consultation</span>
                  </NavLink>
                  <a
                    href="https://wa.me/917275981480?text=Hello%20Dr.%20Vinish%20Kumar%20Singh%2C%20I%20would%20like%20to%20inquire%20about%20an%20OPD%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md hover:scale-105"
                    title="WhatsApp Doctor"
                  >
                    <MessageSquare size={16} />
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Main Overview & Clinical Care */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 w-full max-w-full overflow-hidden">
            <ScrollReveal variant="fade-up" className="w-full space-y-4">
              {/* Feature Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-[#103F7C] text-xs font-extrabold uppercase tracking-wider">
                  <Sparkles size={13} className="text-orange-500" />
                  <span>EXPERT CLINICAL CARE</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 text-[11px] font-extrabold border border-orange-200">
                  <Zap size={12} />
                  <span>Painless Procedure</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-extrabold border border-emerald-200">
                  <ShieldCheck size={12} />
                  <span>100% Confidential</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.15]">
                {overviewTitle || (
                  <>
                    Advanced Medical &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#103F7C] to-orange-500">Surgical Solutions</span>
                  </>
                )}
              </h2>

              <p className="text-slate-700 text-sm sm:text-lg leading-relaxed font-normal">
                {overviewText || description}
              </p>
            </ScrollReveal>

            {/* Treatment Cards Grid */}
            {treatmentCards.length > 0 && (
              <div className="w-full space-y-3 pt-2">
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl flex items-center gap-2">
                  <Activity size={20} className="text-[#103F7C]" />
                  <span>Core Treatment Approaches</span>
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 w-full">
                  {treatmentCards.map((card, idx) => (
                    <ScrollReveal key={idx} variant="scale-up" delay={idx * 70}>
                      <div className="bg-white p-4.5 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-[#103F7C] transition-all hover:shadow-md h-full group">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold mb-3 transition-transform group-hover:scale-110 ${idx % 2 === 0 ? "bg-blue-50 text-[#103F7C]" : "bg-orange-50 text-orange-600"}`}>
                          {idx % 2 === 0 ? <Activity size={20} /> : <ShieldCheck size={20} />}
                        </div>
                        <h4 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-[#103F7C] transition-colors">{card.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-normal text-left">{card.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Surgical & Medical Protocols */}
            {detailedTreatments.length > 0 && (
              <div className="w-full space-y-3 pt-2">
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl flex items-center gap-2">
                  <Zap size={20} className="text-orange-500" />
                  <span>Advanced Treatment Protocols</span>
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  {detailedTreatments.map((item, idx) => (
                    <ScrollReveal key={idx} variant="fade-up" delay={idx * 60}>
                      <div className="relative bg-gradient-to-b from-white to-slate-50/70 p-4.5 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 h-full flex flex-col justify-between group overflow-hidden">
                        {/* Top Accent Gradient Pill Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-[#103F7C] opacity-80 group-hover:opacity-100 transition-opacity" />

                        <div>
                          <div className="w-10 h-10 rounded-xl bg-orange-100/70 text-orange-600 flex items-center justify-center font-bold mb-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white shadow-xs">
                            <Zap size={20} />
                          </div>
                          <h4 className="font-extrabold text-slate-900 text-base sm:text-[15px] leading-snug group-hover:text-[#103F7C] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed font-normal text-left">
                            {item.desc}
                          </p>
                        </div>

                        {item.tag && (
                          <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-200/70 flex items-center justify-between">
                            <span className="text-[11px] sm:text-xs font-bold text-[#103F7C] bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200/70">
                              {item.tag}
                            </span>
                            <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                              <CheckCircle2 size={15} />
                            </div>
                          </div>
                        )}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Clinical Highlights Checklist */}
            {highlights.length > 0 && (
              <div className="space-y-3 w-full pt-2">
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl flex items-center gap-2">
                  <Award size={20} className="text-orange-500" />
                  <span>Key Clinical Advantages</span>
                </h3>

                <div className="grid gap-2.5 w-full">
                  {highlights.map((item, idx) => (
                    <ScrollReveal key={idx} variant="fade-up" delay={idx * 50}>
                      <div className="flex items-center gap-3 text-xs sm:text-base font-bold text-slate-800 bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all">
                        <CheckCircle2 size={18} className="text-orange-500 shrink-0 sm:w-5 sm:h-5" />
                        <span>{item}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Right Column Bottom OPD Consultation Banner */}
            <div className="w-full pt-3">
              <div className="bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#0c2e5c] text-white rounded-3xl p-5 sm:p-6 shadow-xl border border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />
                <div className="space-y-1 relative z-10 text-center sm:text-left">
                  <h4 className="font-extrabold text-base sm:text-lg text-white">Ready for Expert Medical Consultation?</h4>
                  <p className="text-xs text-blue-100 font-medium">Direct OPD confirmation with Senior Urologist Dr. Vinish Kumar Singh.</p>
                </div>
                <NavLink
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black text-xs sm:text-sm shadow-md transition-all shrink-0 hover:scale-105 active:scale-95 relative z-10"
                >
                  <Calendar size={16} />
                  <span>Book Consultation</span>
                  <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Symptoms & Clinical Indicators Section */}
      {symptoms.length > 0 && (
        <ScrollReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
          <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-14 text-slate-900 shadow-xl border border-slate-200/90 relative overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#103F7C] via-blue-600 to-orange-500" />
            
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 text-orange-700 text-xs font-black uppercase tracking-wider border border-orange-200">
                  <HeartPulse size={15} className="text-orange-600" />
                  <span>WHEN TO CONSULT A DOCTOR</span>
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3 sm:mt-4 leading-tight">
                  Key Symptoms &amp; Clinical Indicators
                </h3>
                <p className="text-slate-600 text-xs sm:text-lg mt-2.5 sm:mt-3.5 leading-relaxed font-normal">
                  Early medical consultation prevents complications, reduces recovery time, and protects long-term health.
                </p>
                <div className="mt-5 sm:mt-8">
                  <NavLink
                    to="/#book-appointment"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#103F7C] hover:bg-blue-900 text-white font-extrabold text-xs sm:text-base shadow-lg transition-all hover:scale-102"
                  >
                    <Calendar size={16} className="sm:w-5 sm:h-5" />
                    <span>Schedule Appointment</span>
                    <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                  </NavLink>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
                {symptoms.map((sym, idx) => (
                  <ScrollReveal key={idx} variant="scale-up" delay={idx * 60}>
                    <div className="bg-slate-50 p-4.5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-orange-300 hover:bg-orange-50/40 transition-all duration-300 group h-full">
                      <div className="flex items-center gap-2.5 mb-2 text-[#103F7C] font-extrabold text-base sm:text-lg group-hover:text-orange-600 transition-colors">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold">
                          <HeartPulse size={16} className="sm:w-[18px] sm:h-[18px]" />
                        </div>
                        <span className="leading-snug">{sym.title}</span>
                      </div>
                      <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal mt-2 text-left">{sym.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Patient Frequently Asked Questions (FAQs) Accordion */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200/90 shadow-lg">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#103F7C] text-xs font-black uppercase tracking-wider border border-blue-100">
              <HelpCircle size={14} className="text-orange-500" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </span>
            <h3 className="text-xl sm:text-3xl font-black text-slate-900 mt-2 sm:mt-3">
              Patient Questions &amp; Expert Answers
            </h3>
            <p className="text-xs sm:text-base text-slate-600 mt-1.5 sm:mt-2 font-normal">
              Common queries regarding {title} answered by Senior Urologist Dr. Vinish Kumar Singh.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {displayFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-blue-50/50 border-blue-300 shadow-sm"
                      : "bg-slate-50/70 border-slate-200/80 hover:bg-slate-100/70"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-extrabold text-slate-900 text-xs sm:text-base cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5 sm:gap-3">
                      <HelpCircle size={16} className={`shrink-0 ${isOpen ? "text-orange-500" : "text-slate-400"}`} />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-orange-500" : "text-slate-400"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-blue-200/60 font-normal">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom CTA Banner */}
      <ScrollReveal variant="scale-up" className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-2 text-center">
        <div className="bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#0c2e5c] text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-900/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="text-center sm:text-left relative z-10">
            <h4 className="text-xl sm:text-3xl font-black text-white">Need Expert Medical Advice for {title}?</h4>
            <p className="text-xs sm:text-lg text-blue-100 mt-1.5 sm:mt-2 font-normal">Consult Senior Urologist &amp; Kidney Transplant Surgeon Dr. Vinish Kumar Singh in Lucknow.</p>
          </div>
          <NavLink
            to="/#book-appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-xs sm:text-base shadow-lg transition-all shrink-0 hover:scale-105 relative z-10"
          >
            <Calendar size={16} className="sm:w-5 sm:h-5" />
            <span>Book Appointment Now</span>
          </NavLink>
        </div>
      </ScrollReveal>
    </section>
  );
}
