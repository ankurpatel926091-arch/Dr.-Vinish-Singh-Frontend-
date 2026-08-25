import React from "react";
import { NavLink } from "react-router-dom";
import {
  Stethoscope,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Zap,
  Clock,
  Building2,
  MapPin,
} from "lucide-react";
import PageHero from "../../components/PageHero";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import CategoryMenuCard from "../../components/CategoryMenuCard";
import { conditionsMenuCategories } from "../../data/conditionsMenuData";

const urologyProcedures = [
  {
    title: "Laser RIRS (Retrograde Intrarenal Surgery)",
    desc: "Flexible ureteroscopy using Holmium laser fiber to dust kidney stones without any skin cuts or stitches.",
  },
  {
    title: "HolEP (Holmium Laser Prostate Enucleation)",
    desc: "Gold-standard laser surgery for severe BPH / enlarged prostate, restoring normal urine flow rapidly.",
  },
  {
    title: "Laser PCNL & Mini-PCNL",
    desc: "Keyhole laser technique for removing large or staghorn kidney stones with minimal hospital stay.",
  },
  {
    title: "Laser URSL (Ureteroscopic Lithotripsy)",
    desc: "Precise endoscopic laser fragmentation of ureteric stones for immediate blockage relief.",
  },
  {
    title: "Bladder Stone & TURBT Care",
    desc: "Endoscopic resection and laser breakdown of bladder calculi and urinary bladder lesions.",
  },
  {
    title: "Reconstructive Urology & Pyeloplasty",
    desc: "Surgical repair for UPJ obstruction, stricture urethra, and congenital urinary tract anomalies.",
  },
];

export default function UrologyService() {
  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      <PageHero
        title="ADVANCED LASER & ENDOUROLOGY CARE"
        subTitle="Urology Services"
        description="Comprehensive diagnostic & stitchless laser surgical care for kidney stones, enlarged prostate (BPH), bladder care, and reconstructive urology."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Card */}
            <ScrollReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#103F7C] text-xs font-bold uppercase tracking-wider mb-3">
                <Stethoscope size={14} className="text-orange-500" />
                <span>Specialty Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                State-of-the-Art Laser Urology in Lucknow
              </h2>

              <p className="mt-4 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Urology is a specialized branch of medicine focusing on the surgical and medical conditions of the male and female urinary tract system (kidneys, ureters, bladder, urethra) and male reproductive organs.
              </p>

              <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Under the expertise of <strong>Dr. Vinish Kumar Singh</strong> (M.Ch Urology, INU Bangalore), patients receive cutting-edge <strong>painless, stitchless laser surgeries</strong> that eliminate external incisions, reduce bleeding risk, and ensure recovery within 24–48 hours.
              </p>
            </ScrollReveal>

            {/* Key Procedures Grid */}
            <ScrollReveal variant="fade-up" delay={100} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <Zap size={20} className="text-orange-500" />
                <span>Specialized Surgical Procedures</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {urologyProcedures.map((proc, idx) => (
                  <ScrollReveal key={idx} variant="scale-up" delay={idx * 60}>
                    <div
                      className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all duration-300 group h-full"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                        <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-[#103F7C] transition-colors">
                          {proc.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">
                        {proc.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            {/* Patient Benefits Grid */}
            <ScrollReveal variant="fade-up" delay={200} className="bg-gradient-to-r from-[#103F7C] to-blue-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
              <h3 className="text-xl font-extrabold mb-4">Why Choose Laser Urology Care?</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-orange-300 mb-1">Stitchless &amp; Painless</h4>
                  <p className="text-blue-100 font-normal">Endoscopic laser fibers enter via natural passages with zero cuts.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-orange-300 mb-1">24-Hour Discharge</h4>
                  <p className="text-blue-100 font-normal">Faster recovery timeline allowing patients to return home quickly.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-orange-300 mb-1">High Success Rate</h4>
                  <p className="text-blue-100 font-normal">Over 5,000+ successful laser stone &amp; prostate procedures executed.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Sidebar CTA & Category Navigation (4 Cols) */}
          <ScrollReveal variant="slide-left" delay={150} className="lg:col-span-4 space-y-6">
            
            {/* Category Navigation Menu Card */}
            <CategoryMenuCard
              title={conditionsMenuCategories[0].title}
              icon={conditionsMenuCategories[0].icon}
              iconBg={conditionsMenuCategories[0].iconBg}
              items={conditionsMenuCategories[0].items}
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
                    href="https://maps.app.goo.gl/jbynbpoL5PcKca4Z9"
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
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto">
                <Calendar size={22} />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">Book Your Urology Consultation</h4>
              <p className="text-xs text-slate-500 font-normal">
                Direct consultation for kidney stone, prostate, or urinary issues with Dr. Vinish Kumar Singh.
              </p>
              <NavLink
                to="/#book-appointment"
                className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all hover:scale-102"
              >
                <span>Schedule Appointment</span>
                <ArrowRight size={14} />
              </NavLink>
            </div>

          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

