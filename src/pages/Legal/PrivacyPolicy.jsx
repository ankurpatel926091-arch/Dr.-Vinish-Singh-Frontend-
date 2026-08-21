import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  Hospital,
  Clock,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import PageHero from "../../components/PageHero";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import bannerImg from "../../assets/banner.png";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Privacy Policy | Dr. Vinish Kumar Singh Urology Clinic Lucknow";
  }, []);

  return (
    <section className="bg-slate-50/70 min-h-screen font-sans text-slate-800 pb-16">
      {/* Hero Header Banner */}
      <PageHero
        title="Privacy Policy"
        subTitle="Patient Data Protection & Confidentiality Commitment"
        description="Learn how Dr. Vinish Kumar Singh Urology Clinic collects, protects, and handles your personal contact details and medical consultation requests with strict confidentiality."
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
            <span className="text-slate-800 font-bold">Privacy Policy</span>
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
          
          {/* Main Legal Content (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Top Commitment Banner */}
            <ScrollReveal variant="fade-up" className="bg-gradient-to-r from-[#103F7C] to-blue-900 rounded-3xl p-6 sm:p-8 text-white shadow-md border border-blue-800/60 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-black uppercase tracking-wider mb-2">
                    <Sparkles size={12} className="text-orange-400" />
                    <span>Strict Medical Confidentiality</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    Your Health &amp; Contact Privacy Matters To Us
                  </h2>
                  <p className="text-xs sm:text-sm text-blue-100 font-normal mt-2 leading-relaxed">
                    At Dr. Vinish Kumar Singh Urology Clinic, we respect your privacy and are committed to protecting all personal, contact, and health information shared during website interactions or OPD consultation bookings.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 1: Information We Collect */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <Eye size={18} />
                </div>
                <h3>1. Information We Collect</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                When you visit our website or use our OPD appointment scheduling form, we may collect the following details provided voluntarily by you:
              </p>

              <ul className="space-y-3 pt-1">
                {[
                  "Personal Identifiers: Full name, phone number, and optional email address.",
                  "OPD Booking Preferences: Preferred hospital centre (Rudraksh IVF & Urology Centre or Dr. Shilpi Maternity & Urology Centre), preferred date, and clinical specialty/condition.",
                  "Health & Symptom Queries: Optional brief messages or symptoms provided in appointment forms to help our medical staff prepare for your consultation.",
                  "Technical Logs: Standard browser details, device type, and IP address collected automatically for website optimization and security monitoring.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Section 2: How We Use Your Information */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <FileText size={18} />
                </div>
                <h3>2. How We Use Your Information</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                The information you provide is strictly used for clinical administration, patient communication, and delivering optimal urological care:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  {
                    title: "OPD Scheduling",
                    desc: "To process appointment requests and confirm your consultation slot.",
                  },
                  {
                    title: "Direct Callback",
                    desc: "To allow clinic staff to call back and provide guidance on OPD timings.",
                  },
                  {
                    title: "Medical Follow-Ups",
                    desc: "To send post-operative instructions or test result reminders.",
                  },
                  {
                    title: "Service Quality",
                    desc: "To improve patient care standards across our Lucknow hospital centres.",
                  },
                ].map((box, bIdx) => (
                  <div key={bIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm text-[#103F7C]">
                      {box.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {box.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Section 3: Data Protection & Confidentiality */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Lock size={18} />
                </div>
                <h3>3. Confidentiality &amp; Security Standards</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  We enforce strict technical and organizational safeguards to prevent unauthorized access, alteration, or disclosure of patient records:
                </p>
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 text-emerald-900 text-xs sm:text-sm font-medium space-y-2">
                  <p className="font-bold flex items-center gap-2 text-emerald-800">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    <span>No Third-Party Data Selling</span>
                  </p>
                  <p className="text-emerald-800/90 text-xs leading-relaxed">
                    We DO NOT sell, rent, trade, or commercialize your personal or medical information to third-party marketing companies, advertisers, or external databases under any circumstances.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 4: Patient Rights & Contact */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <UserCheck size={18} />
                </div>
                <h3>4. Your Rights &amp; Privacy Queries</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Patients have the right to request review, update, or deletion of their contact details stored in our clinic appointment log. If you have questions regarding this Privacy Policy or wish to modify your stored contact information, please contact our clinic team.
              </p>
            </ScrollReveal>

          </div>

          {/* Sidebar Column (1 Col) */}
          <div className="space-y-6">
            
            {/* Quick Contact & Helpline Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-5 sticky top-24">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base leading-tight">
                    Privacy Inquiries
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

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                    Official Email
                  </span>
                  <a href="mailto:info@urosurgeondrvinish.com" className="font-bold text-orange-600 hover:underline text-xs truncate block">
                    info@urosurgeondrvinish.com
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

            {/* Additional Legal Links Card */}
            <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-md space-y-3">
              <h4 className="font-extrabold text-sm text-orange-400 flex items-center gap-2">
                <FileText size={16} />
                <span>Legal &amp; Policy Pages</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <Link to="/privacy-policy" className="text-orange-400 font-bold hover:underline flex items-center gap-1.5">
                    <ChevronRight size={13} />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:text-white transition-colors flex items-center gap-1.5">
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
