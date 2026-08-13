import React, { useState, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Stethoscope,
  ChevronRight,
  Activity,
  HeartPulse,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Award,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import PageHero from "../../components/PageHero";

// Image Import
import hypogonadismImg from "../../assets/Male Urology/Hypogonadism.png";

const conditionDetails = {
  title: "Hypogonadism Treatment",
  subTitle: "Hormonal Balance & Testosterone Therapy",
  description: "Comprehensive medical evaluation and hormone replacement therapy for low testosterone (hypogonadism) by Senior Urologist Dr. Vinish Kumar Singh.",
  treatments: [
    {
      title: "Testosterone Replacement Therapy (TRT)",
      subtitle: "Hormonal Restoration",
      desc: "Tailored TRT using injections, gels, or patches to restore physiological testosterone levels, energy, and muscle strength.",
      highlights: ["Supervised Dosage", "Regular Hormone Monitoring", "Symptom Relief"],
      tag: "Hormone Therapy",
      bgIcon: "bg-blue-50 text-[#103F7C]",
      borderAccent: "border-t-4 border-t-[#103F7C]",
    },
    {
      title: "Lifestyle & Metabolic Optimization",
      subtitle: "Holistic Health",
      desc: "Targeted weight management, exercise guidance, and metabolic therapy to boost natural hormone secretion.",
      highlights: ["Metabolic Assessment", "Nutritional Counseling", "Cardiovascular Safety"],
      tag: "Holistic Care",
      bgIcon: "bg-orange-50 text-orange-600",
      borderAccent: "border-t-4 border-t-orange-500",
    },
  ],
  symptoms: [
    { title: "Chronic Fatigue & Low Energy", desc: "Feeling constantly exhausted despite adequate sleep." },
    { title: "Decreased Muscle Mass", desc: "Loss of muscle strength and increased body fat." },
    { title: "Reduced Libido & ED", desc: "Noticeable drop in sex drive and erectile strength." },
    { title: "Mood Fluctuations", desc: "Irritability, low focus, or depressive feelings." },
  ]
};

export default function Hypogonadism() {
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
      <PageHero
        title={conditionDetails.title}
        subTitle={conditionDetails.subTitle}
        description={conditionDetails.description}
        bgImage={hypogonadismImg}
      />

      {/* ================= 0. VISUAL FEATURE SHOWCASE ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <div className="bg-gradient-to-r from-white via-blue-50/60 to-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center gap-8">
          {/* Left Text Box */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Award size={14} className="text-orange-500" />
              <span>HORMONAL &amp; MALE HEALTH</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Hypogonadism &amp; Testosterone Therapy (TRT)
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hypogonadism occurs when the body produces insufficient testosterone. Dr. Vinish Kumar Singh provides personalized medical diagnostics, serum testosterone profiling, and medically supervised hormone replacement.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-5">
              <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Supervised TRT Dosage</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Energy &amp; Vitality Recovery</span>
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
                src={hypogonadismImg}
                alt="Hypogonadism Care Visual"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#103F7C] text-white text-xs font-bold shadow-md border border-white/20">
                  Hypogonadism Care
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
            <span>MALE UROLOGY CARE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Care for Hypogonadism
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
            Accurate hormone profiling and customized therapy for men dealing with testosterone deficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {conditionDetails.treatments.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 ${item.borderAccent} shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.bgIcon}`}>
                    <Stethoscope size={22} />
                  </div>
                  <span className="text-[10px] font-extrabold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-lg leading-snug group-hover:text-[#103F7C] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-[#103F7C] mb-3">{item.subtitle}</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">{item.desc}</p>

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
                  <span>Book Consultation</span>
                  <ChevronRight size={14} />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 2. SYMPTOMS GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Common Symptoms of Low Testosterone</h3>
            <p className="text-xs text-slate-500 mt-1">If you experience persistent fatigue or reduced vitality, diagnostic testing is recommended.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {conditionDetails.symptoms.map((s, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                  <h4 className="font-bold text-slate-800 text-sm">{s.title}</h4>
                </div>
                <p className="text-xs text-slate-500 pl-6 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= 3. CTA BANNER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 pt-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Struggling with Low Energy or Testosterone?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Consult Dr. Vinish Kumar Singh for complete hormonal evaluation &amp; guidance.</p>
          </div>
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 shrink-0"
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
              <span>Hypogonadism Care Visual</span>
            </h4>
          </div>

          {/* Centered Image */}
          <div
            className="relative max-w-4xl max-h-[82vh] w-full flex items-center justify-center overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={hypogonadismImg}
              alt="Hypogonadism Care Visual"
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
