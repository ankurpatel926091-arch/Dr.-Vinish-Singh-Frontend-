import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import {
  Sparkles,
  Maximize2,
  Play,
  X,
  Calendar,
  ArrowRight,
  Video,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

// Image Imports
import img1 from "../assets/images/Img1.jpeg";
import img2 from "../assets/images/img9.jpg";
import img3 from "../assets/images/img11.jpg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";
import img7 from "../assets/images/img7.jpeg";

// Video Paths
const vdo1 = "/src/assets/Videos/vdo1.mp4";
const vdo2 = "/src/assets/Videos/vdo2.mp4";
const vdo3 = "/src/assets/Videos/vdo3.mp4";
const vdo4 = "/src/assets/Videos/vdo4.mp4";
const vdo6 = "/src/assets/Videos/vdo6.mp4";
const vdo9 = "/src/assets/Videos/vdo9.mp4";

const categories = [
  "All",
  "Photos",
  "Videos",
  "Surgical Setup",
  "Doctor & Care",
  "Clinic Facilities",
];

const galleryItems = [
  // --- 6 FEATURED PHOTOS ---
  {
    id: "p1",
    type: "photo",
    title: "Dr. Vinish Kumar Singh - Senior Urologist",
    category: "Doctor & Care",
    media: img1,
    tag: "Doctor Profile",
  },
  {
    id: "p2",
    type: "photo",
    title: "Advanced Endourology OT Setup",
    category: "Surgical Setup",
    media: img2,
    tag: "Laser Tech",
  },
  {
    id: "p3",
    type: "photo",
    title: "State-of-the-Art Operation Theatre",
    category: "Surgical Setup",
    media: img3,
    tag: "OT Suite",
  },
  {
    id: "p4",
    type: "photo",
    title: "Patient OPD Consultation Room",
    category: "Clinic Facilities",
    media: img4,
    tag: "Clinic OPD",
  },
  {
    id: "p5",
    type: "photo",
    title: "Minimally Invasive Surgical Equipment",
    category: "Surgical Setup",
    media: img5,
    tag: "Laser Surgery",
  },
  {
    id: "p7",
    type: "photo",
    title: "Modern Reception & Patient Lounge",
    category: "Clinic Facilities",
    media: img7,
    tag: "Patient Lounge",
  },

  // --- 6 FEATURED VIDEOS ---
  {
    id: "v1",
    type: "video",
    title: "Laser RIRS Kidney Stone Procedure Demo",
    category: "Surgical Setup",
    media: vdo1,
    tag: "Laser RIRS Video",
  },
  {
    id: "v2",
    type: "video",
    title: "Dr. Vinish Patient Consultation Overview",
    category: "Doctor & Care",
    media: vdo2,
    tag: "OPD Insights",
  },
  {
    id: "v3",
    type: "video",
    title: "Advanced HolEP Prostate Surgery Insights",
    category: "Surgical Setup",
    media: vdo3,
    tag: "HolEP Surgery",
  },
  {
    id: "v4",
    type: "video",
    title: "Endoscopic Stone Dusting Technique",
    category: "Surgical Setup",
    media: vdo4,
    tag: "Endourology",
  },
  {
    id: "v6",
    type: "video",
    title: "Clinic Tour & OPD Facilities Alambagh",
    category: "Clinic Facilities",
    media: vdo6,
    tag: "Clinic Tour",
  },
  {
    id: "v9",
    type: "video",
    title: "Kidney Stone Prevention & Diet Advice",
    category: "Doctor & Care",
    media: vdo9,
    tag: "Health Advice",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Photos") return item.type === "photo";
    if (activeCategory === "Videos") return item.type === "video";
    return item.category === activeCategory;
  });

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setZoomLevel(1);
    setRotation(0);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    setZoomLevel(1);
    setRotation(0);
  }, []);

  const nextMedia = useCallback(
    (e) => {
      e?.stopPropagation();
      if (filteredItems.length === 0) return;
      setSelectedIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
      setZoomLevel(1);
      setRotation(0);
    },
    [filteredItems.length]
  );

  const prevMedia = useCallback(
    (e) => {
      e?.stopPropagation();
      if (filteredItems.length === 0) return;
      setSelectedIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
      setZoomLevel(1);
      setRotation(0);
    },
    [filteredItems.length]
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
        prevMedia();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextMedia();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, prevMedia, nextMedia, closeLightbox]);

  const handleCardMouseEnter = (e, type) => {
    if (type === "video") {
      const video = e.currentTarget.querySelector("video");
      if (video) {
        video.play().catch(() => {});
      }
    }
  };

  const handleCardMouseLeave = (e, type) => {
    if (type === "video") {
      const video = e.currentTarget.querySelector("video");
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  const currentMediaItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <section className="bg-slate-50/60 min-h-screen font-sans">
      
      {/* ================= HERO HEADER ================= */}
      <div className="relative bg-gradient-to-b from-[#103F7C] to-[#0d3364] text-white py-12 lg:py-16 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

        <ScrollReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/15 text-orange-300 text-[11px] font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            <span>Infrastructure &amp; Clinical Care</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Clinic Photo &amp; Video Gallery
          </h1>

          <p className="mt-2 text-blue-100 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
            Explore state-of-the-art laser urology equipment, modern surgical setup, patient care facilities, and procedure videos in Lucknow.
          </p>
        </ScrollReveal>
      </div>

      {/* ================= MAIN GALLERY SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        
        {/* Category Filter Tabs */}
        <ScrollReveal variant="fade-up" delay={100} className="flex items-center justify-center sm:justify-start flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setSelectedIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#103F7C] text-white shadow-md shadow-blue-900/20"
                  : "bg-white text-slate-600 hover:text-[#103F7C] hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {cat === "Photos" && <ImageIcon size={13} className="inline mr-1.5 -mt-0.5" />}
              {cat === "Videos" && <Video size={13} className="inline mr-1.5 -mt-0.5" />}
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              variant="scale-up"
              delay={idx * 80}
              className="h-full"
            >
              <div
                onClick={() => openLightbox(idx)}
                onMouseEnter={(e) => handleCardMouseEnter(e, item.type)}
                onMouseLeave={(e) => handleCardMouseLeave(e, item.type)}
                className="group cursor-pointer bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
              >
                {/* Media Display Box */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
                  {item.type === "photo" ? (
                    <img
                      src={item.media}
                      alt={item.title}
                      className="w-full h-full object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        src={item.media}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover object-[center_28%] opacity-85 group-hover:opacity-100 transition-all duration-300"
                      />
                      
                      {/* Hover Play Indicator Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-40">
                        <div className="w-14 h-14 rounded-full bg-orange-500/90 text-white flex items-center justify-center shadow-lg border-2 border-white/40">
                          <Play size={24} className="ml-1 fill-white" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Overlay gradient & tags - Hidden by default (no bottom shadow), visible on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 pointer-events-none">
                    <span className="text-white text-xs font-bold flex items-center gap-1.5">
                      {item.type === "photo" ? (
                        <>
                          <Maximize2 size={14} className="text-orange-400" />
                          <span>Expand Photo</span>
                        </>
                      ) : (
                        <>
                          <Video size={14} className="text-orange-400" />
                          <span>Hovering Plays Video</span>
                        </>
                      )}
                    </span>
                    <span className="text-[10px] font-bold text-orange-300 uppercase tracking-wider bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4 flex items-center justify-between gap-3 bg-white">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-[#103F7C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5 flex items-center gap-1">
                      {item.type === "video" ? <Video size={12} className="text-orange-500" /> : <ImageIcon size={12} className="text-blue-500" />}
                      <span>{item.category}</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* ================= LIGHTBOX OVERLAY MODAL ================= */}
      {currentMediaItem && (
        <div
          className="fixed inset-0 z-50 bg-[#12131e]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Floating Control Toolbar (Zoom In, Zoom Out, Rotate, Close) */}
          <div
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 text-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {currentMediaItem.type === "photo" && (
              <>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  title="Zoom In"
                  className="w-8 h-8 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <ZoomIn size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleZoomOut}
                  title="Zoom Out"
                  className="w-8 h-8 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <ZoomOut size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleRotate}
                  title="Rotate"
                  className="w-8 h-8 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <RotateCw size={15} />
                </button>
                <div className="w-px h-5 bg-white/20 mx-0.5" />
              </>
            )}

            <button
              type="button"
              onClick={closeLightbox}
              title="Close (Esc)"
              className="w-8 h-8 rounded-xl hover:bg-red-500/80 flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Left Navigation Arrow (Keyboard ArrowLeft) */}
          <button
            type="button"
            onClick={prevMedia}
            aria-label="Previous (Left Arrow)"
            title="Previous (Left Arrow Key)"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 hover:bg-orange-500 text-white flex items-center justify-center transition-all duration-300 border border-white/15 z-50 shadow-lg hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Navigation Arrow (Keyboard ArrowRight) */}
          <button
            type="button"
            onClick={nextMedia}
            aria-label="Next (Right Arrow)"
            title="Next (Right Arrow Key)"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 hover:bg-orange-500 text-white flex items-center justify-center transition-all duration-300 border border-white/15 z-50 shadow-lg hover:scale-110 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>

          {/* Modal Centered Media Container */}
          <div
            className="relative w-full max-w-[577px] max-h-[75vh] sm:max-h-[85vh] flex items-center justify-center overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {currentMediaItem.type === "photo" ? (
              <img
                src={currentMediaItem.media}
                alt={currentMediaItem.title}
                className="w-auto h-auto max-w-full max-h-[75vh] sm:max-h-[85vh] object-contain object-center rounded-2xl shadow-2xl transition-transform duration-300 ease-out"
                style={{
                  transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                }}
              />
            ) : (
              <video
                src={currentMediaItem.media}
                controls
                autoPlay
                className="w-auto h-auto max-w-full max-h-[75vh] sm:max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              />
            )}
          </div>
        </div>
      )}

      {/* Minimal CTA Banner */}
      <ScrollReveal variant="fade-up" delay={200} className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] to-blue-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Visit Our Clinic in Alambagh</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">Equipped with modern laser technology &amp; patient-focused medical care.</p>
          </div>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold shadow-md transition-transform hover:scale-105 active:scale-95 shrink-0"
          >
            <Calendar size={16} />
            <span>Book Appointment</span>
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </ScrollReveal>

    </section>
  );
}

