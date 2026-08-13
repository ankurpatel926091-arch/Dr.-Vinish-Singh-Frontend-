import React, { useState, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Sparkles,
  Zap,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Stethoscope,
  Activity,
  ChevronRight,
  AlertTriangle,
  BadgeCheck,
  HeartPulse,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Building2,
  Award,
} from "lucide-react";
import PageHero from "../../components/PageHero";

// Image Import
import prostateImg from "../../assets/Male Urology/Prostate Surgery.png";

const prostateTreatments = [
  {
    title: "Laser HolEP Surgery",
    subtitle: "Gold Standard BPH Treatment",
    desc: "Advanced Holmium Laser Enucleation of the Prostate providing complete tissue vaporisation with minimal bleeding & fast urine flow recovery.",
    highlights: ["Minimal Bleeding", "Complete Gland Enucleation", "Short Catheter Time"],
    tag: "Laser Gold Standard",
    bgIcon: "bg-blue-50 text-[#103F7C]",
    borderAccent: "border-t-4 border-t-[#103F7C]",
  },
  {
    title: "TURP (Transurethral Resection)",
    subtitle: "Endoscopic Procedure",
    desc: "Proven endoscopic surgical treatment to remove excess prostate tissue obstructing the urethra and relieve urinary retention.",
    highlights: ["Endoscopic Entry", "Proven Clinical Results", "Rapid Flow Improvement"],
    tag: "Minimally Invasive",
    bgIcon: "bg-orange-50 text-orange-600",
    borderAccent: "border-t-4 border-t-orange-500",
  },
  {
    title: "Prostatitis & Medical BPH Therapy",
    subtitle: "Non-Surgical Care",
    desc: "Targeted medical management, alpha-blocker therapy, and inflammation care for acute or chronic prostate swelling.",
    highlights: ["Personalised Medication", "Uroflowmetry Monitoring", "Prostate Cancer Screening"],
    tag: "Medical Management",
    bgIcon: "bg-blue-50 text-[#103F7C]",
    borderAccent: "border-t-4 border-t-[#103F7C]",
  },
];

const symptoms = [
  {
    title: "Weak or Interrupted Stream",
    desc: "Slow urine flow with hesitation or strain required to start urination.",
  },
  {
    title: "Frequent Urination at Night",
    desc: "Waking up multiple times during the night (Nocturia) to pass urine.",
  },
  {
    title: "Incomplete Bladder Emptying",
    desc: "Sensation of fullness in the bladder even immediately after urinating.",
  },
  {
    title: "Sudden Urgency & Dribbling",
    desc: "Sudden uncontrollable urge or post-urination dribbling of urine.",
  },
];

const holepBenefits = [
  {
    icon: Zap,
    title: "Painless Laser Precision",
    desc: "Holmium laser cuts and seals blood vessels simultaneously.",
  },
  {
    icon: ShieldCheck,
    title: "Safe for High-Risk Patients",
    desc: "Ideal even for elderly patients on cardiac blood thinners.",
  },
  {
    icon: Clock,
    title: "24-48h Hospital Stay",
    desc: "Catheter is removed quickly, allowing early discharge.",
  },
  {
    icon: BadgeCheck,
    title: "Zero Recurrence Risk",
    desc: "Complete enucleation prevents regrowth of prostate tissue.",
  },
];

export default function Prostate() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);

  const openLightbox = () => {
    setLightboxOpen(true);
    setZoomLevel(1);
    setRotation(0);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setZoomLevel(1);
    setRotation(0);
  }, []);

  const handleZoomIn = (e) => {
    e?.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e) => {
    e?.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleRotate = (e) => {
    e?.stopPropagation();
    setRotation((prev) => (prev + 90) % 360);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox]);

  return (
    <section className="bg-slate-50/70 min-h-screen font-sans">
      {/* Hero Header Banner */}
      <PageHero
        title="Prostate Care & Laser Surgery"
        subTitle="Gold Standard HolEP & TURP Procedures"
        description="Painless Holmium laser enucleation (HolEP) and endoscopic treatments for BPH & enlarged prostate by Senior Urologist Dr. Vinish Kumar Singh."
        bgImage={prostateImg}
      />

      {/* ================= 0. VISUAL CLINICAL FEATURE SHOWCASE ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <div className="bg-gradient-to-r from-white via-blue-50/60 to-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center gap-8">
          {/* Left Text Box */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Award size={14} className="text-orange-500" />
              <span>SPECIALIST LASER UROLOGY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Minimally Invasive Laser Prostate Surgery (HolEP)
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Holmium Laser Enucleation of the Prostate (HolEP) is the gold-standard procedure recommended for benign prostatic hyperplasia (BPH). It provides complete relief from urinary blockage with minimal hospital stay and zero recurrence.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-5">
              <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Gold Standard Procedure</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Instant Flow Improvement</span>
              </div>
            </div>
          </div>

          {/* Right Image Display Box with Lightbox Trigger */}
          <div className="lg:w-1/2 w-full">
            <div
              onClick={openLightbox}
              className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group cursor-pointer bg-slate-900 h-72 sm:h-80"
            >
              <img
                src={prostateImg}
                alt="Prostate Surgery Visual"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#103F7C] text-white text-xs font-bold shadow-md border border-white/20">
                  Prostate Surgery
                </span>
              </div>

              {/* Bottom Lightbox Trigger Pill */}
              <div className="absolute bottom-4 right-4 z-10">
                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-xl bg-black/60 hover:bg-orange-500 text-white text-xs font-bold backdrop-blur-md border border-white/30 flex items-center gap-1.5 transition-all shadow-lg hover:scale-105"
                >
                  <Maximize2 size={13} />
                  <span>Expand Photo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 1. CORE TREATMENTS OFFERED ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 text-[#103F7C] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-orange-500" />
            <span>SPECIALISED PROSTATE CARE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Advanced Laser &amp; Surgical Treatments
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
            Personalised medical therapy and minimally invasive laser surgery for immediate urine flow improvement.
          </p>
        </div>

        {/* 3-Column Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {prostateTreatments.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 ${item.borderAccent} shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.bgIcon}`}
                  >
                    <Stethoscope size={22} />
                  </div>
                  <span className="text-[10px] font-extrabold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-lg leading-snug group-hover:text-[#103F7C] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-[#103F7C] mb-3">
                  {item.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {item.desc}
                </p>

                {/* Highlights Checklist */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={14} className="text-orange-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-slate-50 hover:bg-[#103F7C] text-[#103F7C] hover:text-white border border-slate-200 text-xs font-bold transition-all duration-300"
                >
                  <span>Inquire Consultation</span>
                  <ChevronRight size={14} />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 2. WHY CHOOSE HolEP LASER ================= */}
      <div className="bg-white py-14 lg:py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100/70 text-orange-700 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Zap size={13} className="text-orange-500" />
              <span>LASER ADVANTAGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why HolEP Laser is the Gold Standard for BPH
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Key clinical benefits of Holmium Laser Enucleation over conventional prostate surgery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {holepBenefits.map((b, i) => {
              const IconComp = b.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center mb-3 border border-blue-200">
                    <IconComp size={20} />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-1">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= 3. SYMPTOMS & EVALUATION CARD ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Symptoms Checklist (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-extrabold uppercase tracking-wider mb-3">
              <AlertTriangle size={13} />
              <span>WARNING SIGNS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
              Symptoms of Enlarged Prostate (BPH)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-normal">
              If you experience difficulty in urination, early medical evaluation helps prevent acute urine blockage and kidney damage:
            </p>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {symptoms.map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 font-normal leading-normal pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Diagnostic & Uroflowmetry Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#103F7C] via-blue-900 to-[#103F7C] text-white rounded-3xl p-7 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-300 bg-white/10 px-3 py-1 rounded-full border border-white/15 inline-block mb-3">
                ADVANCED DIAGNOSTICS
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold mb-2 leading-snug">
                Prostate &amp; Flow Diagnostics
              </h3>

              <p className="text-xs text-blue-100 leading-relaxed font-normal mb-5">
                Dr. Vinish performs complete diagnostic screening including Uroflowmetry flow test, Serum PSA test, and USG Post-Void Residual (PVR) volume evaluation.
              </p>

              <div className="space-y-2.5 text-xs font-medium mb-6">
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/15">
                  <Activity size={16} className="text-orange-400 shrink-0" />
                  <span>Digital Uroflowmetry Rate Testing</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/15">
                  <HeartPulse size={16} className="text-orange-400 shrink-0" />
                  <span>Serum PSA Screening &amp; PVR Volume</span>
                </div>
              </div>

              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102"
              >
                <Calendar size={16} />
                <span>Schedule Prostate Check</span>
              </NavLink>
            </div>
          </div>

        </div>
      </div>

      {/* ================= 4. CTA BANNER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Trouble with Urination?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Consult Dr. Vinish Kumar Singh for expert diagnosis &amp; painless laser prostate care.</p>
          </div>
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <Calendar size={16} />
            <span>Book Appointment</span>
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>

      {/* LIGHTBOX OVERLAY MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#12131e]/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Controls Bar */}
          <div
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md p-2 rounded-2xl border border-white/15 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleZoomIn}
              title="Zoom In"
              className="w-9 h-9 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            >
              <ZoomIn size={18} />
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              title="Zoom Out"
              className="w-9 h-9 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            >
              <ZoomOut size={18} />
            </button>
            <button
              type="button"
              onClick={handleRotate}
              title="Rotate"
              className="w-9 h-9 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            >
              <RotateCw size={17} />
            </button>
            <div className="w-px h-5 bg-white/20 mx-1" />
            <button
              type="button"
              onClick={closeLightbox}
              title="Close (Esc)"
              className="w-9 h-9 rounded-xl bg-red-600/80 hover:bg-red-600 flex items-center justify-center transition-colors text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Title Banner */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 text-white shadow-lg">
            <h4 className="text-xs sm:text-sm font-bold flex items-center gap-2">
              <Stethoscope size={16} className="text-orange-400" />
              <span>Prostate Surgery Visual</span>
            </h4>
          </div>

          {/* Centered Image */}
          <div
            className="relative max-w-4xl max-h-[82vh] w-full flex items-center justify-center overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={prostateImg}
              alt="Prostate Surgery Visual"
              className="w-auto h-auto max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl transition-transform duration-300 ease-out"
              style={{
                transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
              }}
            />
          </div>
        </div>
      )}

    </section>
  );
}