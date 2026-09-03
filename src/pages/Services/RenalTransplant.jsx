import React from "react";
import { NavLink } from "react-router-dom";
import {
  RefreshCw,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Clock,
  Heart,
  UserCheck,
  MapPin,
} from "lucide-react";
import PageHero from "../../components/PageHero";
import CategoryMenuCard from "../../components/CategoryMenuCard";
import { conditionsMenuCategories } from "../../data/conditionsMenuData";

const transplantPhases = [
  {
    phase: "Phase 1",
    title: "Donor & Recipient Pre-Transplant Evaluation",
    desc: "Rigorous HLA tissue typing, blood group cross-matching, cardiac & pulmonary fitness screening, and legal clearance guidance.",
  },
  {
    phase: "Phase 2",
    title: "Vascular Access & Pre-Surgical Optimization",
    desc: "AV fistula maintenance, pre-op dialysis stabilization, blood pressure control, and infection screening.",
  },
  {
    phase: "Phase 3",
    title: "Renal Transplant Surgical Expertise",
    desc: "Precise surgical vascular anastomosis, ureteroneocystostomy, and immediate intra-operative graft function evaluation.",
  },
  {
    phase: "Phase 4",
    title: "Post-Transplant Graft Surveillance & Care",
    desc: "ICU monitoring, fluid balance tracking, serum creatinine surveillance, and early rejection biomarker checks.",
  },
  {
    phase: "Phase 5",
    title: "Long-term Immunosuppression Management",
    desc: "Tailored Tacrolimus / Mycophenolate therapeutic drug monitoring to prevent organ rejection while minimizing side effects.",
  },
  {
    phase: "Phase 6",
    title: "Routine Follow-up & Infection Prevention",
    desc: "Ongoing outpatient monitoring, BK virus / CMV prophylaxis, dietary guidance, and long-term graft protection.",
  },
];

export default function RenalTransplantService() {
  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      <PageHero
        title="KIDNEY TRANSPLANT EVALUATION & POST-OP CARE"
        subTitle="Renal Transplant Services"
        description="Comprehensive donor & recipient pre-transplant workup, immunological compatibility assessment, surgical planning, and long-term graft protection."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider mb-3">
                <RefreshCw size={14} className="text-emerald-600" />
                <span>Specialty Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Life-Changing Renal Transplant Expertise
              </h2>

              <p className="mt-4 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Renal Transplantation (Kidney Transplant) is the definitive life-restoring treatment for end-stage renal disease (ESRD). A successful transplant restores normal kidney function, frees patients from chronic dialysis, and dramatically improves life expectancy and quality of life.
              </p>

              <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                With extensive training at the <strong>Institute of Nephro-Urology (INU), Bangalore</strong>, <strong>Dr. Vinish Kumar Singh</strong> brings expert surgical evaluation, donor-recipient compatibility assessment, and post-transplant immunosuppression protocols to Lucknow.
              </p>
            </div>

            {/* Transplant Protocol Phases Grid */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <ShieldCheck size={20} className="text-emerald-600" />
                <span>Comprehensive Transplant Care Pathway</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {transplantPhases.map((tp, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:bg-white transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                        {tp.phase}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors mb-1.5">
                      {tp.title}
                    </h4>

                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {tp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Graft Protection Banner */}
            <div className="bg-gradient-to-r from-emerald-700 via-teal-800 to-emerald-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <Heart size={24} className="text-emerald-200" />
                <h3 className="text-xl font-extrabold">Dedicated Long-term Graft Survival</h3>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 font-normal leading-relaxed">
                Successful transplantation requires lifelong vigilance. Our dedicated post-transplant follow-up protocols focus on precise drug level monitoring, preventing acute rejection episodes, and maintaining optimal graft health for decades.
              </p>
            </div>

          </div>

          {/* Sidebar CTA & Category Navigation (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Category Navigation Menu Card */}
            <CategoryMenuCard
              title={conditionsMenuCategories[2].title}
              icon={conditionsMenuCategories[2].icon}
              iconBg={conditionsMenuCategories[2].iconBg}
              items={conditionsMenuCategories[2].items}
              activeLabel="Kidney Failure Requiring Transplant"
            />
            
            {/* OPD Timings Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-4">
              <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2 border-b border-slate-100 pb-3">
                <Clock size={18} className="text-orange-500" />
                <span>Consultation Timings</span>
              </h3>

              {/* Morning Centre */}
              <div className="bg-orange-50/70 p-3.5 rounded-2xl border border-orange-200/80">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-600">Morning OPD</span>
                <h4 className="font-bold text-slate-900 text-xs mt-0.5">
                  <a
                    href="https://www.google.com/maps?q=Rudraksh+IVF+And+Urology+Centre+Lucknow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-orange-600 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Rudraksh IVF &amp; Urology Centre</span>
                    <MapPin size={12} className="text-orange-500 shrink-0 inline" />
                  </a>
                </h4>
                <p className="text-[11px] text-slate-500 font-normal mt-0.5">10:00 AM – 03:00 PM (Sharda Nagar)</p>
                <a href="tel:8960068307" className="font-extrabold text-xs text-orange-600 hover:underline block mt-2">
                  Call: +91 89600 68307
                </a>
              </div>

              {/* Evening Centre */}
              <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200/80">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#103F7C]">Evening OPD</span>
                <h4 className="font-bold text-slate-900 text-xs mt-0.5">
                  <a
                    href="https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-[#103F7C] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Dr. Shilpi Maternity &amp; Urology</span>
                    <MapPin size={12} className="text-[#103F7C] shrink-0 inline" />
                  </a>
                </h4>
                <p className="text-[11px] text-slate-500 font-normal mt-0.5">03:00 PM – 07:00 PM (Ring Road)</p>
                <a href="tel:8604891955" className="font-extrabold text-xs text-[#103F7C] hover:underline block mt-2">
                  Call: +91 86048 91955
                </a>
              </div>
            </div>

            {/* Quick Action Button Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Calendar size={22} />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">Book Transplant Evaluation</h4>
              <p className="text-xs text-slate-500 font-normal">
                Schedule a detailed pre-transplant donor/recipient evaluation or post-op consultation with Dr. Vinish.
              </p>
              <NavLink
                to="/#book-appointment"
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
