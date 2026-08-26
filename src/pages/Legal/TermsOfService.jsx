import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  Hospital,
  Sparkles,
  ArrowLeft,
  Scale,
  Stethoscope,
  AlertTriangle,
  Calendar,
  CreditCard,
  RefreshCw,
  ShieldCheck,
  Activity,
  UserCheck,
  Camera,
  ExternalLink,
  Lock,
  Server,
  FileEdit,
  MapPin,
  HelpCircle,
  Info,
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
        description="Please review the terms and conditions governing website navigation, OPD appointment requests, clinical disclaimers, and online patient services for Dr. Vinish Kumar Singh."
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
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-black uppercase tracking-wider">
                      <Sparkles size={12} className="text-orange-400" />
                      <span>Clinical Terms &amp; Medical Disclaimer</span>
                    </div>
                    <span className="text-[11px] font-semibold text-blue-200/90 bg-white/10 px-2.5 py-0.5 rounded-full">
                      Last Updated: 25 August 2026
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    Terms &amp; Conditions of Website Usage
                  </h2>
                  <p className="text-xs sm:text-sm text-blue-100 font-normal mt-2 leading-relaxed">
                    Welcome to the official website of Dr. Vinish Kumar Singh. These Terms of Service govern your access to and use of this website, its appointment-request facilities, contact forms, health information, and related online services.
                  </p>
                  <p className="text-xs text-orange-200 font-medium mt-3 pt-3 border-t border-blue-700/50">
                    By accessing or using this website, you agree to these terms. If you do not agree, please discontinue its use.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 1: About This Website */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <Info size={18} />
                </div>
                <h3>1. About This Website</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                This website provides general information about:
              </p>

              <ul className="space-y-2.5 pt-1">
                {[
                  "Dr. Vinish Kumar Singh",
                  "Urology, andrology, paediatric urology, and renal transplant care",
                  "Available treatments and surgical procedures",
                  "Rudraksh IVF & Urology Centre",
                  "Dr. Shilpi Maternity & Urology Centre",
                  "OPD timings and appointment options",
                  "General patient-awareness and educational content",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-slate-500 italic pt-1">
                Website information may be updated or modified without prior notice.
              </p>
            </ScrollReveal>

            {/* Section 2: Medical Disclaimer */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <Stethoscope size={18} />
                </div>
                <h3>2. Medical Disclaimer</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                The content available on this website is provided solely for general information and patient awareness. It does not constitute:
              </p>

              <ul className="space-y-2.5 pt-1">
                {[
                  "Medical advice, diagnosis, or a treatment recommendation",
                  "A substitute for an in-person clinical consultation",
                  "A guarantee that a particular procedure is suitable for every patient",
                  "Emergency medical assistance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-amber-50/60 p-3 rounded-2xl border border-amber-200/60 text-xs sm:text-sm text-amber-950">
                    <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-700 font-medium text-xs sm:text-sm leading-relaxed pt-1">
                A diagnosis or treatment plan can only be provided after appropriate clinical evaluation by a qualified medical professional.
              </p>
            </ScrollReveal>

            {/* Section 3: Medical Emergencies */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <AlertTriangle size={18} />
                </div>
                <h3>3. Medical Emergencies</h3>
              </div>

              <div className="p-4 rounded-2xl bg-red-50 border-l-4 border-red-500 text-red-950 text-xs sm:text-sm space-y-2">
                <p className="font-bold flex items-center gap-2 text-red-900">
                  <AlertTriangle size={17} className="text-red-600 shrink-0" />
                  <span>Not for Emergency Use</span>
                </p>
                <p className="text-red-900/90 leading-relaxed text-xs">
                  This website and its enquiry forms must not be used for medical emergencies.
                </p>
                <p className="text-red-900/90 leading-relaxed text-xs">
                  If you experience severe pain, inability to urinate, uncontrolled bleeding, loss of consciousness, breathing difficulty, high fever with urinary symptoms, or another urgent medical condition, immediately visit the nearest emergency department or contact local emergency services.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 4: Appointment Requests */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <Calendar size={18} />
                </div>
                <h3>4. Appointment Requests</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  Submitting an appointment form does not automatically confirm a consultation.
                </p>
                <p>
                  An appointment is confirmed only after the authorised coordination team communicates the confirmed date, time, and centre to you by phone, WhatsApp, email, or another approved channel.
                </p>
                <p className="text-xs text-slate-500 italic">
                  Appointment availability may change due to emergencies, surgical schedules, doctor availability, or operational requirements.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 5: Rescheduling and Cancellation */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <RefreshCw size={18} />
                </div>
                <h3>5. Rescheduling and Cancellation</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Patients should inform the relevant centre as early as possible if they wish to cancel or reschedule an appointment.
              </p>

              <p className="text-slate-700 font-semibold text-xs pt-1">
                We may reschedule or cancel an appointment due to:
              </p>

              <ul className="space-y-2 pt-0.5">
                {[
                  "Medical emergencies",
                  "Unavailability of the doctor",
                  "Changes in surgical or OPD schedules",
                  "Technical or administrative issues",
                  "Events beyond our reasonable control",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-purple-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-slate-500 font-medium italic pt-1">
                The coordination team will make reasonable efforts to provide an alternative appointment.
              </p>
            </ScrollReveal>

            {/* Section 6: Consultation and Treatment Charges */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CreditCard size={18} />
                </div>
                <h3>6. Consultation and Treatment Charges</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Any consultation fee, diagnostic charge, treatment estimate, or procedure cost communicated through the website or telephone is indicative unless confirmed by the relevant centre.
              </p>

              <p className="text-slate-700 font-semibold text-xs pt-1">
                Final charges may vary depending on:
              </p>

              <ul className="space-y-2 pt-0.5">
                {[
                  "Clinical findings and diagnosis",
                  "Investigations required",
                  "Treatment or surgical procedure selected",
                  "Hospitalisation and room category",
                  "Medicines, consumables, implants, or equipment",
                  "Insurance coverage and applicable taxes",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-slate-600 font-medium pt-1">
                Patients should confirm charges directly with the centre before receiving paid services.
              </p>
            </ScrollReveal>

            {/* Section 7: Payments and Refunds */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <CreditCard size={18} />
                </div>
                <h3>7. Payments and Refunds</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  Where online or advance payments are made, applicable payment, cancellation, and refund conditions will be communicated at the time of payment.
                </p>
                <p>
                  Payment gateway charges, already completed consultations, diagnostics, medicines, consumables, or services already provided may be non-refundable, subject to applicable law and the centre’s stated policy.
                </p>
                <p className="text-xs text-slate-500 italic">
                  Approved refunds may require a reasonable processing period.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 8: Insurance and Cashless Treatment */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <h3>8. Insurance and Cashless Treatment</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Insurance or cashless treatment is subject to:
              </p>

              <ul className="space-y-2.5 pt-1">
                {[
                  "The patient’s insurance policy and eligibility",
                  "Hospital empanelment status",
                  "Insurer or third-party administrator approval",
                  "Policy exclusions, limits, and documentation",
                  "Final authorisation by the insurance provider",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-slate-500 font-medium italic pt-1">
                Mention of insurance or cashless assistance does not guarantee claim approval.
              </p>
            </ScrollReveal>

            {/* Section 9: Treatment Outcomes */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Activity size={18} />
                </div>
                <h3>9. Treatment Outcomes</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  Medical and surgical outcomes vary between patients. They may depend on the diagnosis, age, overall health, condition severity, treatment compliance, and other clinical factors.
                </p>
                <p className="text-xs text-amber-900 font-medium bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200/80">
                  No information, testimonial, photograph, review, success rate, or patient story displayed on this website should be interpreted as a guarantee of identical results.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 10: User Responsibilities */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <UserCheck size={18} />
                </div>
                <h3>10. User Responsibilities</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                When using this website, you agree to:
              </p>

              <ul className="space-y-2.5 pt-1">
                {[
                  "Provide accurate and current information",
                  "Avoid impersonating another person",
                  "Submit a minor’s information only when legally authorised",
                  "Avoid uploading malicious files or harmful content",
                  "Not attempt to access restricted areas or disrupt website operation",
                  "Use the website only for lawful purposes",
                  "Not reproduce or misuse website content without authorisation",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Section 11: Intellectual Property */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <FileText size={18} />
                </div>
                <h3>11. Intellectual Property</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  Unless otherwise stated, the website’s text, design, graphics, branding, videos, photographs, layout, and original educational content belong to Dr. Vinish Kumar Singh or are used with appropriate permission.
                </p>
                <p>
                  You may view and share publicly available pages for personal, non-commercial purposes. You may not copy, reproduce, modify, republish, sell, or commercially exploit website content without prior written permission.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 12: Patient Photographs and Testimonials */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Camera size={18} />
                </div>
                <h3>12. Patient Photographs and Testimonials</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  Patient photographs, testimonials, treatment stories, or videos will be displayed only where appropriate permission has been obtained.
                </p>
                <p>
                  Such content is presented for general awareness and does not represent a promise or guarantee of treatment results.
                </p>
                <p className="text-xs text-slate-500 font-medium italic">
                  Users may not download, reproduce, or misuse patient-related content.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 13: Third-Party Platforms and Links */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <ExternalLink size={18} />
                </div>
                <h3>13. Third-Party Platforms and Links</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                The website may contain links to Google Maps, WhatsApp, social-media platforms, payment services, or other third-party websites.
              </p>

              <p className="text-slate-700 font-semibold text-xs pt-1">
                We do not control and are not responsible for their:
              </p>

              <ul className="space-y-2 pt-0.5">
                {[
                  "Availability or security",
                  "Content or accuracy",
                  "Privacy practices",
                  "Terms and policies",
                  "Technical failures",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-slate-500 italic pt-1">
                Use of an external platform is subject to that platform’s own terms.
              </p>
            </ScrollReveal>

            {/* Section 14: Privacy */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                  <Lock size={18} />
                </div>
                <h3>14. Privacy</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  Personal information submitted through this website will be handled in accordance with our <Link to="/privacy-policy" className="font-bold text-[#103F7C] hover:underline">Privacy Policy</Link> and applicable Indian law.
                </p>
                <p>
                  By submitting an enquiry or appointment request, you authorise our team to contact you for the purpose for which the information was provided.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 15: Website Availability */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Server size={18} />
                </div>
                <h3>15. Website Availability</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  We aim to keep the website accurate, secure, and accessible. However, uninterrupted or error-free availability is not guaranteed.
                </p>
                <p className="text-xs text-slate-500 italic">
                  The website may be temporarily unavailable due to maintenance, technical problems, security updates, or circumstances beyond our control.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 16: Limitation of Liability */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Scale size={18} />
                </div>
                <h3>16. Limitation of Liability</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                To the extent permitted by applicable law, we will not be responsible for loss arising solely from:
              </p>

              <ul className="space-y-2.5 pt-1">
                {[
                  "Reliance on general website information without medical consultation",
                  "Delayed or failed internet communications",
                  "Third-party websites or services",
                  "Unauthorised access caused by factors beyond reasonable control",
                  "Failure to seek timely emergency or professional medical care",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-slate-600 font-medium pt-1">
                Nothing in these terms excludes liability that cannot legally be excluded or limited.
              </p>
            </ScrollReveal>

            {/* Section 17: Changes to These Terms */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <FileEdit size={18} />
                </div>
                <h3>17. Changes to These Terms</h3>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  We may revise these Terms of Service when our website, services, or legal requirements change.
                </p>
                <p>
                  The updated terms will be posted on this page with a revised “Last Updated” date. Continued use of the website after an update constitutes acceptance of the revised terms.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 18: Governing Law and Jurisdiction */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#103F7C]/10 text-[#103F7C] flex items-center justify-center shrink-0">
                  <Scale size={18} />
                </div>
                <h3>18. Governing Law and Jurisdiction</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                These terms are governed by the laws of India. Subject to applicable dispute-resolution and consumer-protection requirements, disputes will fall under the jurisdiction of the competent courts in Lucknow, Uttar Pradesh.
              </p>
            </ScrollReveal>

            {/* Section 19: Contact Information */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-xl pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <h3>19. Contact Information</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                For appointments, website-related concerns, or questions regarding these terms, contact:
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="font-extrabold text-[#103F7C] text-sm flex items-center gap-2">
                  <ShieldCheck size={18} className="text-orange-500" />
                  <span>Dr. Vinish Kumar Singh – Patient Coordination Team</span>
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
