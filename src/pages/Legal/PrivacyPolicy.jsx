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
  Sparkles,
  ArrowLeft,
  Stethoscope,
  AlertTriangle,
  Share2,
  MessageSquare,
  Cookie,
  Clock,
  Baby,
  RefreshCw,
  Scale,
  MapPin,
  AlertCircle,
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
        description="Learn how Dr. Vinish Kumar Singh, Rudraksh IVF & Urology Centre, and Dr. Shilpi Maternity & Urology Centre collect, use, store, and protect information submitted through this website."
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
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-black uppercase tracking-wider">
                      <Sparkles size={12} className="text-orange-400" />
                      <span>Strict Data Confidentiality</span>
                    </div>
                    <span className="text-[11px] font-semibold text-blue-200/90 bg-white/10 px-2.5 py-0.5 rounded-full">
                      Last Updated: 25 August 2026
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    Your Privacy Matters To Us
                  </h2>
                  <p className="text-xs sm:text-sm text-blue-100 font-normal mt-2 leading-relaxed">
                    This Privacy Policy explains how Dr. Vinish Kumar Singh, Rudraksh IVF &amp; Urology Centre, and Dr. Shilpi Maternity &amp; Urology Centre (“we”, “our”, or “us”) collect, use, store, and protect information submitted through this website.
                  </p>
                  <p className="text-xs text-orange-200 font-medium mt-3 pt-3 border-t border-blue-700/50">
                    By accessing this website or submitting your information, you acknowledge the practices described in this Privacy Policy.
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
                We may collect the following information when you use our website:
              </p>

              <ul className="space-y-2.5 pt-1">
                {[
                  "Name, mobile number, email address, and city",
                  "Preferred centre, service, doctor, or appointment date",
                  "Health concerns or information voluntarily entered in forms",
                  "Medical reports or documents voluntarily shared with us",
                  "Communications made through phone, email, WhatsApp, or website forms",
                  "Browser type, IP address, device information, and website-usage data",
                  "Cookie and analytics information, where enabled",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs font-medium flex items-start gap-2.5 mt-2">
                <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <span>Please avoid submitting unnecessary or highly sensitive medical information through general contact forms.</span>
              </div>
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
                Information collected through this website may be used to:
              </p>

              <ul className="space-y-2.5 pt-1">
                {[
                  "Process appointment and callback requests",
                  "Confirm OPD availability and consultation timings",
                  "Respond to enquiries and provide pre-visit assistance",
                  "Coordinate with the selected healthcare centre",
                  "Improve website functionality and user experience",
                  "Maintain communication and service records",
                  "Protect the website against misuse or security threats",
                  "Meet applicable legal, regulatory, or professional requirements",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-[#103F7C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-slate-500 font-medium italic pt-1">
                Your information will not be used for an unrelated purpose without appropriate notice or consent.
              </p>
            </ScrollReveal>

            {/* Section 3: Medical Information */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Stethoscope size={18} />
                </div>
                <h3>3. Medical Information</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  Information provided through this website does not by itself create a doctor–patient relationship and should not be treated as a medical diagnosis.
                </p>
                <p>
                  Any health information or reports submitted through the website will be used only to assist with consultation coordination, clinical review where appropriate, and related patient-care services.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-red-50 border-l-4 border-red-500 text-red-950 text-xs sm:text-sm space-y-1 mt-2">
                <div className="flex items-center gap-2 font-bold text-red-900">
                  <AlertTriangle size={17} className="text-red-600 shrink-0" />
                  <span>Medical Emergency Notice</span>
                </div>
                <p className="text-red-800 text-xs leading-relaxed">
                  This website is not intended for medical emergencies. In an emergency, please contact the nearest hospital or emergency service immediately.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 4: Consent */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <UserCheck size={18} />
                </div>
                <h3>4. Consent</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  By voluntarily submitting your information, you consent to its use for the specific purpose communicated at the time of collection, including appointment coordination and responding to your enquiry.
                </p>
                <p>
                  Where processing is based on consent, you may withdraw it by contacting us. Withdrawal will not affect processing already undertaken lawfully or information that must be retained under applicable law.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 5: Sharing of Information */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <Share2 size={18} />
                </div>
                <h3>5. Sharing of Information</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                We may share relevant information only when reasonably necessary with:
              </p>

              <ul className="space-y-2.5 pt-1">
                {[
                  "Dr. Vinish Kumar Singh and authorised medical personnel",
                  "Rudraksh IVF & Urology Centre",
                  "Dr. Shilpi Maternity & Urology Centre",
                  "Appointment and administrative coordination staff",
                  "Website hosting, communication, analytics, and technical service providers",
                  "Government, regulatory, judicial, or law-enforcement authorities when legally required",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 text-emerald-900 text-xs sm:text-sm font-medium space-y-1">
                <p className="font-bold flex items-center gap-2 text-emerald-800">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  <span>No Sale or Rental of Data</span>
                </p>
                <p className="text-emerald-800/90 text-xs leading-relaxed">
                  We do not sell or rent patients’ personal or medical information to third parties.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 6: WhatsApp and Third-Party Services */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <MessageSquare size={18} />
                </div>
                <h3>6. WhatsApp and Third-Party Services</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  If you contact us through WhatsApp, Google Maps, social media, or another external platform, your information will also be governed by that platform’s privacy policy.
                </p>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy, security, or content practices of external platforms.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 7: Cookies and Analytics */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Cookie size={18} />
                </div>
                <h3>7. Cookies and Analytics</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                The website may use essential cookies and analytics technologies to:
              </p>

              <ul className="space-y-2.5 pt-1">
                {[
                  "Enable core website functionality",
                  "Understand website traffic and visitor behaviour",
                  "Remember user preferences",
                  "Improve website performance and security",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-600 text-sm leading-relaxed pt-1">
                You may control non-essential cookies through the consent banner or browser settings. Disabling certain cookies may affect some website features.
              </p>
            </ScrollReveal>

            {/* Section 8: Data Security */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Lock size={18} />
                </div>
                <h3>8. Data Security</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  We use reasonable administrative, technical, and organisational safeguards to protect information from unauthorised access, alteration, loss, misuse, or disclosure.
                </p>
                <p className="text-xs text-slate-500 italic">
                  However, no internet-based transmission or storage system can be guaranteed to be completely secure.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 9: Data Retention */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <h3>9. Data Retention</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                We retain personal information only for as long as reasonably necessary to:
              </p>

              <ul className="space-y-2.5 pt-1">
                {[
                  "Fulfil the purpose for which it was collected",
                  "Coordinate consultations and patient services",
                  "Maintain legitimate clinical or administrative records",
                  "Resolve complaints or disputes",
                  "Comply with applicable legal and regulatory obligations",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-sky-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-600 text-sm leading-relaxed pt-1">
                Information that is no longer required will be securely deleted or anonymised where reasonably possible.
              </p>
            </ScrollReveal>

            {/* Section 10: Children’s Information */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                  <Baby size={18} />
                </div>
                <h3>10. Children’s Information</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                A parent or lawful guardian should submit information on behalf of a child below 18 years of age. By submitting a minor’s information, the person confirms that they are authorised to provide such information.
              </p>
            </ScrollReveal>

            {/* Section 11: Your Rights */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <UserCheck size={18} />
                </div>
                <h3>11. Your Rights</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Subject to applicable law, you may request to:
              </p>

              <ul className="space-y-2.5 pt-1">
                {[
                  "Access information held about you",
                  "Correct or update inaccurate information",
                  "Withdraw previously provided consent",
                  "Request deletion of information that is no longer required",
                  "Raise a complaint regarding the handling of your information",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-[#103F7C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-600 text-sm leading-relaxed pt-1">
                Some information may need to be retained where required for patient care, recordkeeping, legal compliance, or the establishment or defence of legal claims.
              </p>
            </ScrollReveal>

            {/* Section 12: Privacy Requests and Complaints */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <h3>12. Privacy Requests and Complaints</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                For questions, correction requests, consent withdrawal, or privacy-related complaints, contact:
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="font-extrabold text-[#103F7C] text-sm flex items-center gap-2">
                  <ShieldCheck size={18} className="text-orange-500" />
                  <span>Privacy and Patient Coordination Team</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="flex items-center gap-2.5">
                    <Mail size={15} className="text-orange-500 shrink-0" />
                    <span className="text-slate-500 font-medium">Email:</span>
                    <a href="mailto:info@urosurgeondrvinish.com" className="font-bold text-[#103F7C] hover:underline truncate">
                      info@urosurgeondrvinish.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <MapPin size={15} className="text-orange-500 shrink-0" />
                    <span className="text-slate-500 font-medium">Location:</span>
                    <span className="font-bold text-slate-800">Lucknow, Uttar Pradesh, India</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-orange-500 shrink-0" />
                    <span className="text-slate-500 font-medium">Rudraksh Centre:</span>
                    <a href="tel:8960068307" className="font-bold text-[#103F7C] hover:underline">
                      +91 89600 68307
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-orange-500 shrink-0" />
                    <span className="text-slate-500 font-medium">Dr. Shilpi Centre:</span>
                    <a href="tel:8604891955" className="font-bold text-[#103F7C] hover:underline">
                      +91 86048 91955
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 font-medium italic">
                We will review and respond to legitimate requests within a reasonable period.
              </p>
            </ScrollReveal>

            {/* Section 13: Changes to This Policy */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <RefreshCw size={18} />
                </div>
                <h3>13. Changes to This Policy</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                We may update this Privacy Policy to reflect changes in our services, technology, or legal requirements. The revised version will be published on this page with an updated revision date.
              </p>
            </ScrollReveal>

            {/* Section 14: Governing Law */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#103F7C]/10 text-[#103F7C] flex items-center justify-center shrink-0">
                  <Scale size={18} />
                </div>
                <h3>14. Governing Law</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                This Privacy Policy is governed by the applicable laws of India. Any dispute relating to this policy will be subject to the jurisdiction of the competent courts in Lucknow, Uttar Pradesh.
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
                    Rudraksh Centre Helpline
                  </span>
                  <a href="tel:8960068307" className="font-extrabold text-[#103F7C] hover:underline text-sm block">
                    +91 89600 68307
                  </a>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                    Dr. Shilpi Centre Helpline
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
