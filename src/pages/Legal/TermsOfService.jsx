import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  Phone,
  Hospital,
  Sparkles,
  ArrowLeft,
  Scale,
  HelpCircle,
  Stethoscope,
} from "lucide-react";
import PageHero from "../../components/PageHero";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import bannerImg from "../../assets/banner.png";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Terms of Service | Dr. Vinish Kumar Singh Urology Clinic Lucknow";
  }, []);

  return (
    <section className="bg-slate-50/70 min-h-screen font-sans text-slate-800 pb-16">
      {/* Hero Header Banner */}
      <PageHero
        title="Terms of Service"
        subTitle="Website Use & Clinical Consultation Disclaimer"
        description="Please review the terms and conditions governing website navigation, OPD appointment requests, and clinical disclaimer for Dr. Vinish Kumar Singh Urology Clinic."
        bgImage={bannerImg}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
        
        {/* ================= BREADCRUMBS & BACK LINK ================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <Link to="/" className="hover:text-[#103F7C] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-orange-600 font-bold">Legal</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-800 font-bold">Terms of Service</span>
          </nav>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#103F7C] hover:text-blue-900 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs transition-all hover:shadow-sm"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Top Disclaimer Card */}
            <ScrollReveal variant="fade-up" className="bg-gradient-to-r from-[#103F7C] to-blue-900 rounded-3xl p-6 sm:p-8 text-white shadow-md border border-blue-800/60 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <Scale size={26} />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-black uppercase tracking-wider mb-2">
                    <Sparkles size={12} className="text-orange-400" />
                    <span>Clinical Terms &amp; Medical Disclaimer</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    Terms &amp; Conditions of Website Usage
                  </h2>
                  <p className="text-xs sm:text-sm text-blue-100 font-normal mt-2 leading-relaxed">
                    By accessing this website or submitting an OPD consultation booking request, you agree to comply with the terms and conditions outlined below.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 1: Medical Advice Disclaimer */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <Stethoscope size={18} />
                </div>
                <h3>1. Medical Information Disclaimer</h3>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/80 border-l-4 border-amber-500 text-slate-800 text-xs sm:text-sm font-medium space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <AlertCircle size={17} className="text-amber-600 shrink-0" />
                  <span>Educational Purpose Only</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-xs">
                  All articles, health guides, condition overviews (Kidney Stone, Prostate, Andrology, Female Urology), and medical information published on this website are provided strictly for general educational and informational awareness. They DO NOT constitute formal medical advice, diagnosis, or treatment plans.
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Always seek direct, in-person clinical evaluation by Senior Urologist Dr. Vinish Kumar Singh or a qualified healthcare professional regarding any specific urological condition or symptom.
              </p>
            </ScrollReveal>

            {/* Section 2: OPD Appointments & Scheduling */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <Hospital size={18} />
                </div>
                <h3>2. OPD Booking &amp; Confirmation Terms</h3>
              </div>

              <ul className="space-y-3 pt-1">
                {[
                  "Appointment Form Requests: Submitting the online appointment form acts as a request for consultation slot callback.",
                  "Slot Confirmation: Final OPD appointment confirmation is completed when our clinic receptionist contacts you on your provided phone number.",
                  <span key="timings">OPD Centre Timings: Morning OPD (10:00 AM - 01:00 PM) is conducted at <a href="https://maps.app.goo.gl/jbynbpoL5PcKca4Z9" target="_blank" rel="noopener noreferrer" className="font-bold text-orange-600 hover:underline">Rudraksh IVF &amp; Urology Centre</a> (Sharda Nagar), and Evening OPD (03:00 PM - 06:00 PM) is conducted at <a href="https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9" target="_blank" rel="noopener noreferrer" className="font-bold text-[#103F7C] hover:underline">Dr. Shilpi Maternity &amp; Urology Centre</a> (Ring Road).</span>,
                  "Emergency Cases: For acute urological emergencies (such as acute urinary retention or unbearable stone colic pain), please call our direct helpline immediately or visit the emergency department rather than relying solely on online forms.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Section 3: Intellectual Property Rights */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <FileText size={18} />
                </div>
                <h3>3. Intellectual Property Rights</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                All original medical content, articles, branding graphics, logos, patient educational material, and visual layouts published on this website are the intellectual property of Dr. Vinish Kumar Singh. Unauthorized copying, reproduction, or redistribution for commercial purposes without explicit prior written consent is strictly prohibited.
              </p>
            </ScrollReveal>

            {/* Section 4: Governing Law & Jurisdiction */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <Scale size={18} />
                </div>
                <h3>4. Governing Law &amp; Legal Jurisdiction</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India. Any legal proceedings or disputes arising from website use or clinical services shall be subject to the exclusive jurisdiction of the competent courts in Lucknow, Uttar Pradesh.
              </p>
            </ScrollReveal>

          </div>

          {/* Sidebar Column (1 Col) */}
          <div className="space-y-6">
            
            {/* Direct Helpline Widget */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-5 sticky top-24">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base leading-tight">
                    OPD Assistance
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Dr. Vinish Kumar Singh Clinic
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                    Morning OPD Helpline
                  </span>
                  <a href="tel:8960068307" className="font-extrabold text-[#103F7C] hover:underline text-sm block">
                    +91 89600 68307
                  </a>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                    Evening OPD Helpline
                  </span>
                  <a href="tel:8604891955" className="font-extrabold text-[#103F7C] hover:underline text-sm block">
                    +91 86048 91955
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Link
                  to="/#book-appointment"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <Hospital size={15} />
                  <span>Book OPD Appointment</span>
                </Link>
              </div>
            </div>

            {/* Legal Navigation Card */}
            <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-md space-y-3">
              <h4 className="font-extrabold text-sm text-orange-400 flex items-center gap-2">
                <FileText size={16} />
                <span>Legal &amp; Policy Pages</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <Link to="/privacy-policy" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-orange-400 font-bold hover:underline flex items-center gap-1.5">
                    <ChevronRight size={13} />
                    <span>Terms of Service</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
