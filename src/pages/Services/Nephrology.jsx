import React from "react";
import { NavLink } from "react-router-dom";
import {
  HeartPulse,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Clock,
  Activity,
  MapPin,
} from "lucide-react";
import PageHero from "../../components/PageHero";
import CategoryMenuCard from "../../components/CategoryMenuCard";
import { conditionsMenuCategories } from "../../data/conditionsMenuData";

const nephrologyServices = [
  {
    title: "Chronic Kidney Disease (CKD) Management",
    desc: "Stage-by-stage clinical protocols to slow disease progression, preserve GFR, and prevent uremic complications.",
  },
  {
    title: "Diabetic & Hypertensive Nephropathy",
    desc: "Targeted glycemic and blood pressure management to prevent microvascular renal damage and proteinuria.",
  },
  {
    title: "Acute Kidney Injury (AKI) Care",
    desc: "Rapid diagnostic evaluation, electrolyte correction, and fluid management for reversible acute kidney failure.",
  },
  {
    title: "Glomerulonephritis & Nephrotic Syndrome",
    desc: "Immunosuppressive and supportive clinical protocols for protein leak and glomerular inflammation.",
  },
  {
    title: "Pre-Dialysis Planning & AV Fistula Guidance",
    desc: "Comprehensive renal replacement education, vascular access (AV Fistula) placement, and hemodialysis prep.",
  },
  {
    title: "Electrolyte & Fluid Balance Optimization",
    desc: "Precision clinical management of hyperkalemia, hyponatremia, metabolic acidosis, and fluid overload.",
  },
];

export default function NephrologyService() {
  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      <PageHero
        title="CLINICAL NEPHROLOGY & KIDNEY CARE"
        subTitle="Nephrology Services"
        description="Expert clinical evaluation, kidney function preservation, CKD management, diabetic nephropathy care, and dialysis preparation."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#103F7C] border border-blue-200/60 text-xs font-bold uppercase tracking-wider mb-3">
                <HeartPulse size={14} className="text-orange-500" />
                <span>Specialty Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Preserving Renal Function &amp; Kidney Health
              </h2>

              <p className="mt-4 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Nephrology is the medical specialty dedicated to the prevention, diagnosis, and non-surgical treatment of kidney diseases. Early detection of declining renal function is vital to prevent irreversible kidney damage.
              </p>

              <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                At our Lucknow clinical centers, patients receive <strong>integrated Uro-Nephrology care</strong> combining lifestyle intervention, pharmacological kidney protection, hypertension control, and dialysis coordination under Dr. Vinish Kumar Singh&apos;s guidance.
              </p>
            </div>

            {/* Key Clinical Services Grid */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <Activity size={20} className="text-orange-500" />
                <span>Core Nephrology Services</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {nephrologyServices.map((serv, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-[#103F7C] transition-colors">
                        {serv.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {serv.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrated Care Banner */}
            <div className="bg-gradient-to-r from-[#103F7C] to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
              <h3 className="text-xl font-extrabold mb-3">Holistic Uro-Nephrology Synergy</h3>
              <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
                By combining medical nephrology with advanced surgical urology under one roof, we provide seamless care for complex cases involving kidney stones with renal dysfunction, obstructed uropathy, and kidney failure.
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
              activeLabel="End-Stage Kidney Disease"
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
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#103F7C] flex items-center justify-center mx-auto">
                <Calendar size={22} />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">Schedule Kidney Evaluation</h4>
              <p className="text-xs text-slate-500 font-normal">
                Early kidney function screening, serum creatinine check, or CKD consultation with Dr. Vinish Kumar Singh.
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
