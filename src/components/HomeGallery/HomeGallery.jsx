import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

import img1 from "../../assets/images/Img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";
import img4 from "../../assets/images/img13.png";
import img5 from "../../assets/images/img5.jpeg";
import img7 from "../../assets/images/img6.jpeg";

const galleryPhotos = [
  {
    id: 1,
    title: "Dr. Vinish Kumar Singh & Patient Care",
    category: "Doctor Care",
    image: img1,
  },
  {
    id: 2,
    title: "Advanced Laser Endourology OT Setup",
    category: "Surgical Suite",
    image: img2,
  },
  {
    id: 3,
    title: "Modern Operation Theatre Facilities",
    category: "OT Facilities",
    image: img3,
  },
  {
    id: 4,
    title: "OPD Patient Consultation Room",
    category: "Clinic OPD",
    image: img4,
  },
  {
    id: 5,
    title: "Minimally Invasive Laser Equipment",
    category: "Laser Surgery",
    image: img5,
  },
  {
    id: 6,
    title: "Reception & Comfortable Patient Lounge",
    category: "Patient Lounge",
    image: img7,
  },
];

export default function HomeGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setZoomLevel(1);
    setRotation(0);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextPhoto = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1));
      setZoomLevel(1);
      setRotation(0);
    },
    []
  );

  const prevPhoto = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
      setZoomLevel(1);
      setRotation(0);
    },
    []
  );

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

  // Keyboard Arrow Keys Navigation & Escape to Close
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevPhoto();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextPhoto();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, prevPhoto, nextPhoto, closeLightbox]);

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-slate-50/70 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100/70 text-[#103F7C] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-orange-500" />
            <span>OUR GALLERY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103F7C] tracking-tight leading-tight">
            Visual Tour Of Our Center
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Take a look at our modern facility, active campaigns, medical operations, and happy recovery milestones.
          </p>
        </ScrollReveal>

        {/* 6 Photos Grid (3x2 Grid Matching Reference Image 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 sm:mb-8">
          {galleryPhotos.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              variant="scale-up"
              delay={idx * 100}
              className="h-full"
            >
              <div
                onClick={() => openLightbox(idx)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
              >
                {/* Photo Box */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-white text-xs font-bold flex items-center gap-1.5">
                      <Maximize2 size={14} className="text-orange-400" />
                      <span>Expand Photo</span>
                    </span>
                    <span className="text-[10px] font-bold text-orange-300 uppercase tracking-wider bg-black/50 px-2.5 py-1 rounded-full border border-white/20">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View Full Gallery CTA Button */}
        <ScrollReveal variant="fade-up" delay={250} className="text-center">
          <NavLink
            to="/gallery"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>View Full Gallery</span>
            <ArrowRight size={16} />
          </NavLink>
        </ScrollReveal>

      </div>

      {/* ================= LIGHTBOX OVERLAY MODAL (Matching Reference Image 2) ================= */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Control Bar (Zoom In, Zoom Out, Rotate, Close) */}
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 flex items-center gap-1.5 sm:gap-2 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 text-white">
            <button
              type="button"
              onClick={handleZoomIn}
              title="Zoom In"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ZoomIn size={15} />
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              title="Zoom Out"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ZoomOut size={15} />
            </button>
            <button
              type="button"
              onClick={handleRotate}
              title="Rotate"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <RotateCw size={14} />
            </button>
            <div className="w-px h-5 bg-white/20 mx-0.5" />
            <button
              type="button"
              onClick={closeLightbox}
              title="Close"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl hover:bg-red-500/80 flex items-center justify-center transition-colors"
            >
              <X size={17} />
            </button>
          </div>

          {/* Left Navigation Arrow */}
          <button
            type="button"
            onClick={prevPhoto}
            aria-label="Previous Photo"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 hover:bg-orange-500 text-white flex items-center justify-center transition-all duration-300 border border-white/15 z-50 shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={nextPhoto}
            aria-label="Next Photo"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 hover:bg-orange-500 text-white flex items-center justify-center transition-all duration-300 border border-white/15 z-50 shadow-lg"
          >
            <ChevronRight size={20} />
          </button>

          {/* Modal Centered Image Display */}
          <div
            className="relative w-full max-w-[577px] max-h-[75vh] sm:max-h-[85vh] flex items-center justify-center overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryPhotos[selectedIndex].image}
              alt={galleryPhotos[selectedIndex].title}
              className="w-auto h-auto max-w-full max-h-[75vh] sm:max-h-[85vh] object-contain object-center rounded-2xl shadow-2xl transition-transform duration-300 ease-out"
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

