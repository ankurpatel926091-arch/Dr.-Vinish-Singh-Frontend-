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
  Award,
} from "lucide-react";
import PageHero from "../../components/PageHero";

// Image Import
import kidneyStoneImg from "../../assets/Male Urology/Kidney Stone Surgery.png";

const treatments = [
  {
    title: "RIRS (Retrograde Intrarenal Surgery)",
    subtitle: "Advanced Holmium Laser Technology",
    desc: "Flexible endoscopic laser procedure that reaches inside the kidney to dust stones without any skin cuts, incisions, or scars.",
    highlights: ["100% No Skin Cut", "Fine Laser Stone Dusting", "Same Day / 24h Recovery"],
    tag: "Painless & Scarless",
    bgIcon: "bg-blue-50 text-[#103F7C]",
    borderAccent: "border-t-4 border-t-[#103F7C]",
  },
  {
    title: "URSL (Ureteroscopic Lithotripsy)",
    subtitle: "Laser Removal for Ureteric Stones",
    desc: "Precision laser fragmentation for stones stuck in the ureter tube, restoring normal urine flow and stopping acute severe pain.",
    highlights: ["Instant Pain Relief", "No Abdominal Scars", "Quick 30-Min Procedure"],
    tag: "Immediate Relief",
    bgIcon: "bg-orange-50 text-orange-600",
    borderAccent: "border-t-4 border-t-orange-500",
  },
  {
    title: "Mini-PCNL (Keyhole Laser Surgery)",
    subtitle: "For Large & Multiple Kidney Stones",
    desc: "Minimally invasive keyhole technique (pencil-thin entry) for large stones (>1.5 cm) providing complete stone extraction.",
    highlights: ["Keyhole Precision (<5mm)", "High Success Rate", "Ideal for Large Stones"],
    tag: "Keyhole Precision",
    bgIcon: "bg-blue-50 text-[#103F7C]",
    borderAccent: "border-t-4 border-t-[#103F7C]",
  },
];

const symptoms = [
  {
    title: "Severe Flank & Back Pain",
    desc: "Sharp, stabbing pain in the side or lower back that comes in intense waves.",
  },
  {
    title: "Painful Urination & Hematuria",
    desc: "Burning sensation during urination or reddish/brownish tint in urine.",
  },
  {
    title: "Nausea & Sudden Vomiting",
    desc: "Persistent stomach distress caused by nerve connections to the kidney.",
  },
  {
    title: "Frequent Urge & Low Volume",
    desc: "Constant feeling of needing to urinate but producing only small amounts.",
  },
];

const laserBenefits = [
  {
    icon: Zap,
    title: "Zero Skin Cuts",
    desc: "Flexible scope passes through natural urine route with no external incisions.",
  },
  {
    icon: Clock,
    title: "24-Hour Discharge",
    desc: "Most patients return home within 24 hours of laser procedure.",
  },
  {
    icon: ShieldCheck,
    title: "Minimal Pain & Bleeding",
    desc: "Precision laser vaporizes stone tissue with virtually no blood loss.",
  },
  {
    icon: BadgeCheck,
    title: "99% Stone Clearance",
    desc: "Dusting technique breaks stones into fine sand that flushes out naturally.",
  },
];

export default function KidneyStone() {
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
        title="Advanced Kidney Stone Treatment"
        subTitle="Painless Laser RIRS, URSL & PCNL"
        description="State-of-the-art endoscopic laser stone dusting with zero skin cuts, minimal hospital stay, and 15+ years of surgical expertise by Dr. Vinish Kumar Singh."
      />

      {/* ================= 0. VISUAL CLINICAL FEATURE SHOWCASE ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <div className="bg-gradient-to-r from-white via-blue-50/60 to-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center gap-8">
          {/* Left Text Box */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Award size={14} className="text-orange-500" />
              <span>ADVANCED ENDOUROLOGY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Laser Kidney Stone Dusting (RIRS &amp; URSL)
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Using state-of-the-art Holmium Laser fiber passed through a flexible kidney scope, stones are pulverized into fine sand-like dust with zero external cuts and rapid 24-hour recovery.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-5">
              <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">100% No Skin Cut</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Instant Pain Relief</span>
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
                src={kidneyStoneImg}
                alt="Kidney Stone Surgery Visual"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#103F7C] text-white text-xs font-bold shadow-md border border-white/20">
                  Kidney Stone Surgery
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
            <span>MINIMALLY INVASIVE SURGERY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Advanced Laser Procedures for Kidney Stones
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
            Modern, evidence-based surgical solutions tailored to exact stone size, location, and hardness.
          </p>
        </div>

        {/* 3-Column Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((item, idx) => (
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
                  <span>Inquire Procedure</span>
                  <ChevronRight size={14} />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 2. WHY CHOOSE LASER SURGERY (4 BENEFITS) ================= */}
      <div className="bg-white py-14 lg:py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100/70 text-orange-700 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Zap size={13} className="text-orange-500" />
              <span>TECHNOLOGY ADVANTAGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Laser Surgery is Superior to Open Surgery
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Comparing painless laser stone dusting with traditional surgical methods.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {laserBenefits.map((b, i) => {
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

      {/* ================= 3. SYMPTOMS & DIAGNOSTIC CARD ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Symptoms Checklist (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-extrabold uppercase tracking-wider mb-3">
              <AlertTriangle size={13} />
              <span>WARNING SIGNS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
              Common Symptoms of Kidney Stones
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-normal">
              If you experience any of the following warning signs, timely diagnostic evaluation (USG / CT KUB Scan) helps prevent severe kidney damage:
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

          {/* Right Column: Diagnostic Glass Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#103F7C] via-blue-900 to-[#103F7C] text-white rounded-3xl p-7 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-300 bg-white/10 px-3 py-1 rounded-full border border-white/15 inline-block mb-3">
                ACCURATE DIAGNOSIS
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold mb-2 leading-snug">
                Comprehensive Stone Evaluation
              </h3>

              <p className="text-xs text-blue-100 leading-relaxed font-normal mb-5">
                Dr. Vinish conducts precise diagnostic evaluation including USG KUB, NCCT KUB scan, and urine routine to pinpoint exact stone size &amp; location.
              </p>

              <div className="space-y-2.5 text-xs font-medium mb-6">
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/15">
                  <Activity size={16} className="text-orange-400 shrink-0" />
                  <span>Non-Contrast CT KUB Imaging</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/15">
                  <HeartPulse size={16} className="text-orange-400 shrink-0" />
                  <span>Metabolic Stone Risk Profile</span>
                </div>
              </div>

              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102"
              >
                <Calendar size={16} />
                <span>Schedule Evaluation</span>
              </NavLink>
            </div>
          </div>

        </div>
      </div>

      {/* ================= 4. CTA BANNER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Facing Kidney Stone Pain?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Get expert guidance &amp; painless laser treatment from Dr. Vinish Kumar Singh in Lucknow.</p>
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
              <span>Kidney Stone Surgery Visual</span>
            </h4>
          </div>

          {/* Centered Image */}
          <div
            className="relative max-w-4xl max-h-[82vh] w-full flex items-center justify-center overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={kidneyStoneImg}
              alt="Kidney Stone Surgery Visual"
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