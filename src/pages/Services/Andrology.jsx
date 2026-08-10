import React from "react";
import { NavLink } from "react-router-dom";
import {
  Activity,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Heart,
  Clock,
  UserCheck,
} from "lucide-react";
import PageHero from "../../components/PageHero";

const andrologyTreatments = [
  {
    title: "Male Infertility Evaluation & Micro-TESE",
    desc: "Comprehensive semen analysis, hormonal workup, micro-dissection TESE for azoospermia, and ICSI coordination.",
  },
  {
    title: "Erectile Dysfunction (ED) & Vascular Therapy",
    desc: "Diagnostic Doppler ultrasound, penile rehabilitation, medical therapy, and surgical solutions for erectile health.",
  },
  {
    title: "Microscopic Varicocelectomy",
    desc: "Gold-standard micro-surgical ligation of dilated scrotal veins to improve sperm count and motility.",
  },
  {
    title: "Hypogonadism & Testosterone Replacement (TRT)",
    desc: "Clinical management of low testosterone, fatigue, muscle weakness, and hormonal restoration protocols.",
  },
  {
    title: "Peyronie's Disease & Penile Curvature",
    desc: "Plaque therapy, traction protocols, and surgical correction for painful curvature during erection.",
  },
  {
    title: "Premature Ejaculation & Wellness Counseling",
    desc: "Confidential medical evaluation, behavioral therapy, and modern pharmacological treatments for couples.",
  },
];

export default function AndrologyService() {
  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      <PageHero
        title="MALE SEXUAL HEALTH & REPRODUCTIVE CARE"
        subTitle="Andrology Services"
        description="Confidential, evidence-based diagnostic and surgical care for male infertility, erectile dysfunction, varicocele, and hormonal health."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-200/60 text-xs font-bold uppercase tracking-wider mb-3">
                <Activity size={14} className="text-orange-500" />
                <span>Specialty Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Compassionate &amp; Confidential Andrology Care
              </h2>

              <p className="mt-4 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Andrology is the medical specialty dedicated to male reproductive health, hormonal balance, sexual function, and male factor infertility. Many couples facing conception delays discover that male factor concerns account for nearly 40-50% of reproductive challenges.
              </p>

              <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Dr. Vinish Kumar Singh offers a <strong>strictly confidential, empathetic environment</strong> backed by modern diagnostic tools, hormonal therapy, and advanced microsurgery (Micro-TESE &amp; Micro-Varicocelectomy) in Lucknow.
              </p>
            </div>

            {/* Key Treatments Grid */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <Heart size={20} className="text-orange-500" />
                <span>Specialized Andrological Treatments</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {andrologyTreatments.map((treat, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 hover:border-orange-300 hover:bg-white transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">
                        {treat.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {treat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Confidentiality Commitment Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <UserCheck size={24} className="text-white" />
                <h3 className="text-xl font-extrabold">100% Patient Privacy &amp; Confidentiality</h3>
              </div>
              <p className="text-xs sm:text-sm text-orange-50 font-normal leading-relaxed">
                We understand that discussing sexual health and fertility concerns requires complete privacy. All consultations, clinical tests, and reports are handled with strict doctor-patient confidentiality.
              </p>
            </div>

          </div>

          {/* Sidebar CTA & OPD Schedule (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* OPD Timings Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-4">
              <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2 border-b border-slate-100 pb-3">
                <Clock size={18} className="text-orange-500" />
                <span>Consultation Timings</span>
              </h3>

              {/* Morning Centre */}
              <div className="bg-orange-50/70 p-3.5 rounded-2xl border border-orange-200/80">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-600">Morning OPD</span>
                <h4 className="font-bold text-slate-900 text-xs mt-0.5">Rudraksh IVF &amp; Urology Centre</h4>
                <p className="text-[11px] text-slate-500 font-normal mt-0.5">10:00 AM – 01:00 PM (Sharda Nagar)</p>
                <a href="tel:8960068307" className="font-extrabold text-xs text-orange-600 hover:underline block mt-2">
                  Call: +91 89600 68307
                </a>
              </div>

              {/* Evening Centre */}
              <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200/80">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#103F7C]">Evening OPD</span>
                <h4 className="font-bold text-slate-900 text-xs mt-0.5">Dr. Shilpi Maternity &amp; Urology</h4>
                <p className="text-[11px] text-slate-500 font-normal mt-0.5">03:00 PM – 06:00 PM (Ring Road)</p>
                <a href="tel:8604891955" className="font-extrabold text-xs text-[#103F7C] hover:underline block mt-2">
                  Call: +91 86048 91955
                </a>
              </div>
            </div>

            {/* Quick Action Button Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto">
                <Calendar size={22} />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">Book Confidential Consultation</h4>
              <p className="text-xs text-slate-500 font-normal">
                Private consultation for male fertility, hormonal care, or erectile health with Dr. Vinish Kumar Singh.
              </p>
              <NavLink
                to="/contact"
                className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all hover:scale-102"
              >
                <span>Schedule Appointment</span>
                <ArrowRight size={14} />
              </NavLink>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
