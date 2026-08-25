import React, { useState, useCallback, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import {
  Building2,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Copy,
  Check,
  CheckCircle2,
  Award,
  Activity,
  HeartPulse,
  Syringe,
  Microscope,
  Bed,
  Ambulance,
  Navigation,
} from "lucide-react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

// Image Imports
import hospitalBuildingImg from "../assets/OurHospital/1.jpg";
import shilpiBuildingImg from "../assets/OurHospital/2.jpg";
import ourHospitalsBanner from "../assets/About/OurHospitals.png";

// Facility Showcase Images
import opdRoomImg from "../assets/images/img13.png";
import receptionImg from "../assets/images/Img1.jpeg";
import laserTechImg from "../assets/images/img5.jpeg";
import otSuiteImg from "../assets/images/img10.jpg";
import vinishImg from "../assets/images/img12.png";

const hospitalData = [
  {
    id: "hosp-2",
    name: "Rudraksh IVF & Urology Centre",
    tagline: "Morning Consultation Centre",
    type: "Morning OPD",
    badgeColor: "bg-orange-50 text-orange-600 border-orange-200",
    headerGradient: "from-orange-500/10 via-amber-500/5 to-transparent",
    timing: "10:00 AM - 03:00 PM",
    phone: "+91 89600 68307",
    phoneRaw: "tel:8960068307",
    address:
      "1/795, Ratan Khand, Ruchi Khand 1, Sharda Nagar, Lucknow, Uttar Pradesh 226002",
    locality: "Sharda Nagar, Lucknow",
    mapUrl: "https://maps.app.goo.gl/jbynbpoL5PcKca4Z9",
    mapIframe:
      "https://maps.google.com/maps?q=26.792132,80.916962(Rudraksh+IVF+%26+Urology+Centre)&t=&z=16&ie=UTF8&iwloc=B&output=embed",
    image: hospitalBuildingImg,
    badgeText: "Main Building & IVF Desk",
    facilities: [
      "Advanced Laser Urology OPD",
      "Infertility & IVF Unit",
      "Ultrasound Guided Diagnostics",
      "Daycare Recovery Beds",
    ],
  },
  {
    id: "hosp-1",
    name: "Dr. Shilpi Maternity & Urology Centre",
    tagline: "Evening Consultation Centre",
    type: "Evening OPD",
    badgeColor: "bg-blue-50 text-[#103F7C] border-blue-200",
    headerGradient: "from-blue-600/10 via-sky-500/5 to-transparent",
    timing: "03:00 PM - 06:00 PM",
    phone: "+91 86048 91955",
    phoneRaw: "tel:8604891955",
    address:
      "596Pb/1114/03, Ring Rd, Pakkabag, Lalabagh, Kanpur, Lucknow, Uttar Pradesh 226017",
    locality: "Pakkabag, Ring Road, Lucknow",
    mapUrl: "https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9",
    mapIframe:
      "https://maps.google.com/maps?q=26.878567,80.893877(Dr.+Shilpi+Maternity+%26+Urology+Centre)&t=&z=16&ie=UTF8&iwloc=B&output=embed",
    image: shilpiBuildingImg || hospitalBuildingImg,
    badgeText: "Evening OPD Centre",
    facilities: [
      "Kidney Stone Consultation",
      "Laser Prostate OPD",
      "Female Urology Clinic",
      "Emergency Urinary Care",
    ],
  },
];

const facilityGallery = [
  {
    id: "fac-1",
    title: "Hospital Building Exterior",
    subtitle: "Rudraksh IVF & Urology Centre Facade",
    image: hospitalBuildingImg,
    category: "Building",
    objectPos: "object-top",
  },
  {
    id: "fac-2",
    title: "State-of-the-Art Operation Theatre",
    subtitle: "Modular Laser & Endourology OT",
    image: otSuiteImg,
    category: "Operation Theatre",
    objectPos: "object-top",
  },
  {
    id: "fac-3",
    title: "Modern Reception & Patient Lounge",
    subtitle: "Comfortable waiting area with digital support",
    image: receptionImg,
    category: "Lounge",
    objectPos: "object-[center_15%]",
  },
  {
    id: "fac-4",
    title: "Doctor OPD Consultation Suite",
    subtitle: "Hygienic private consultation chamber",
    image: opdRoomImg,
    category: "OPD Room",
    objectPos: "object-top",
  },
  {
    id: "fac-5",
    title: "Advanced Laser Surgery Setup",
    subtitle: "Precision HolEP & RIRS kidney stone equipment",
    image: laserTechImg,
    category: "Laser Tech",
    objectPos: "object-top",
  },
  {
    id: "fac-6",
    title: "Dr. Vinish Kumar Singh",
    subtitle: "Lead Urologist & Founder",
    image: vinishImg,
    category: "Doctor",
    objectPos: "object-top",
  },
];

const hospitalHighlights = [
  {
    icon: Stethoscope,
    title: "Expert Urologic Consultations",
    desc: "Laser stone removal, HolEP prostate care, kidney transplant & reconstructive urology.",
  },
  {
    icon: Clock,
    title: "Morning & Evening OPD",
    desc: "Convenient timing slots in Sharda Nagar (Morning) and Ring Road (Evening).",
  },
  {
    icon: ShieldCheck,
    title: "High Standard Care & Hygiene",
    desc: "NABH compliant modular operating theatre and patient recovery lounges.",
  },
  {
    icon: Phone,
    title: "24/7 Helpline & Care Support",
    desc: "Direct clinic contact numbers for appointment booking and emergency guidance.",
  },
];

export default function OurHospitals() {
  const [activeTab, setActiveTab] = useState("All");
  const [copiedId, setCopiedId] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState("");
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleCopyAddress = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const openLightbox = (image, title) => {
    setLightboxImage(image);
    setLightboxTitle(title);
    setZoomLevel(1);
    setRotation(0);
  };

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
    setLightboxTitle("");
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
    if (!lightboxImage) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, closeLightbox]);

  const filteredHospitals = useMemo(() => {
    return hospitalData.filter((hosp) => {
      if (activeTab === "All") return true;
      return hosp.type === activeTab;
    });
  }, [activeTab]);

  return (
    <section className="bg-slate-50/70 min-h-screen font-sans pb-16">
      {/* Hero Banner Header */}
      <PageHero
        title="Consultation Centres & Infrastructure"
        subTitle="Our Hospital Locations"
        description="Visit Dr. Vinish Kumar Singh at our specialized urology centres in Lucknow for expert consultations, advanced laser treatments & transplant care."
        bgImage={ourHospitalsBanner}
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
        
        {/* Section Intro */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#103F7C] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/60 shadow-xs">
            <Building2 size={15} className="text-orange-500 animate-pulse" />
            <span>2 Convenient Healthcare Centres in Lucknow</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hospital Centres, Building Photos &amp; Timings
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Choose your preferred hospital location below to view center photos, clinic OPD timings, address directions, or book your direct consultation.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 mt-6">
            {["All", "Morning OPD", "Evening OPD"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#103F7C] text-white shadow-md shadow-blue-900/20 scale-105"
                    : "bg-white text-slate-600 hover:text-[#103F7C] hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab === "All" && "🏥 All Hospitals & Clinics"}
                {tab === "Morning OPD" && "🌅 Morning OPD (Sharda Nagar)"}
                {tab === "Evening OPD" && "🌆 Evening OPD (Ring Road)"}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* 2 Hospital Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {filteredHospitals.map((hosp, idx) => (
            <ScrollReveal
              key={hosp.id}
              variant="scale-up"
              delay={idx * 150}
              className="h-full"
            >
              <div
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full"
              >
                <div>
                  {/* Hospital Photo Box - 100% Shadow-Free & Bright */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 group">
                    <img
                      src={hosp.image}
                      alt={hosp.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md border ${hosp.badgeColor}`}
                      >
                        <Clock size={13} />
                        <span>{hosp.tagline}</span>
                      </span>

                      <button
                        type="button"
                        onClick={() => openLightbox(hosp.image, hosp.name)}
                        className="px-3 py-1.5 rounded-xl bg-white/90 hover:bg-[#103F7C] hover:text-white text-slate-800 text-xs font-bold backdrop-blur-md border border-slate-200 flex items-center gap-1.5 transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
                      >
                        <Maximize2 size={13} />
                        <span>Full Photo</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8">
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#103F7C] transition-colors leading-snug mb-4">
                      <a
                        href={hosp.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-orange-600 inline-flex items-center gap-2 transition-colors"
                      >
                        <span>{hosp.name}</span>
                        <MapPin size={20} className="text-orange-500 shrink-0 inline" />
                      </a>
                    </h3>

                    {/* Info Cards: Timing, Phone, Address */}
                    <div className="space-y-3 mb-6 text-xs sm:text-sm text-slate-700">
                      {/* Timing */}
                      <div className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                        <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 shadow-xs">
                          <Clock size={18} />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            OPD Consultation Hours
                          </span>
                          <span className="font-extrabold text-slate-900 text-sm">
                            {hosp.timing}
                          </span>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                        <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#103F7C] flex items-center justify-center shrink-0 shadow-xs">
                          <Phone size={18} />
                        </div>
                        <div className="flex-1 flex items-center justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                              Appointments &amp; Helpline
                            </span>
                            <a
                              href={hosp.phoneRaw}
                              className="font-extrabold text-[#103F7C] hover:underline text-sm"
                            >
                              {hosp.phone}
                            </a>
                          </div>
                          <a
                            href={hosp.phoneRaw}
                            className="px-3.5 py-1.5 rounded-full bg-[#103F7C] hover:bg-blue-900 text-white text-xs font-bold transition-all shadow-xs shrink-0 flex items-center gap-1"
                          >
                            <Phone size={12} />
                            <span>Call</span>
                          </a>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <MapPin size={18} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                              Full Hospital Address
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopyAddress(hosp.id, hosp.address)}
                              className="text-[11px] font-bold text-[#103F7C] hover:text-orange-600 flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              {copiedId === hosp.id ? (
                                <>
                                  <Check size={12} className="text-emerald-600" />
                                  <span className="text-emerald-600">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy size={12} />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                          <p className="text-xs text-slate-700 font-medium leading-relaxed mt-1">
                            {hosp.address}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Facility Tags */}
                    <div className="mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Key Services &amp; Facilities:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {hosp.facilities.map((fac, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50/80 text-[#103F7C] text-[11px] font-semibold border border-blue-100"
                          >
                            <CheckCircle2 size={11} className="text-emerald-600" />
                            <span>{fac}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Embedded Map Box */}
                    <div className="w-full h-44 rounded-2xl overflow-hidden border border-slate-200 mb-2 bg-slate-100 relative group/map">
                      <iframe
                        title={hosp.name}
                        src={hosp.mapIframe}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <a
                    href={hosp.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-slate-300 hover:border-[#103F7C] text-[#103F7C] hover:bg-[#103F7C] hover:text-white font-bold text-xs transition-all duration-300"
                  >
                    <Navigation size={14} />
                    <span>Get Directions</span>
                  </a>

                  <NavLink
                    to="/#book-appointment"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs shadow-xs transition-all duration-300 hover:scale-102"
                  >
                    <Calendar size={14} />
                    <span>Book Appointment</span>
                  </NavLink>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Hospital Facilities & Infrastructure Showcase Gallery (100% Shadow-Free & Bright) */}
        <ScrollReveal variant="fade-up" className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              <span>World-Class Medical Care Infrastructure</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Hospital Facilities &amp; Clinical Care Suite
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Take a visual tour of our modern laser operation theater, patient lounges, and specialized OPD consultation chambers in Lucknow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityGallery.map((fac, idx) => (
              <ScrollReveal key={fac.id} variant="scale-up" delay={idx * 100}>
                <div
                  onClick={() => openLightbox(fac.image, fac.title)}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full"
                >
                  {/* Pure Bright Photo Box - NO BLACK GRADIENT OR SHADOW OVERLAY */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      loading="lazy"
                      className={`w-full h-full object-cover ${fac.objectPos || "object-top"} transition-transform duration-700 group-hover:scale-105`}
                    />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold text-[#103F7C] uppercase tracking-wider border border-slate-200 shadow-sm">
                        {fac.category}
                      </span>
                    </div>
                  </div>

                  {/* Clean White Card Footer with Dark Legible Text */}
                  <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-[#103F7C] transition-colors leading-snug truncate">
                        {fac.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 font-medium truncate">
                        {fac.subtitle}
                      </p>
                    </div>

                    <div className="shrink-0 w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all shadow-2xs">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Why Patients Choose Our Hospitals Highlights Grid */}
        <ScrollReveal variant="fade-up" delay={200} className="mt-14 rounded-3xl bg-gradient-to-r from-[#103F7C] via-blue-900 to-[#103F7C] text-white p-8 sm:p-12 shadow-lg">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-extrabold">Comprehensive Urologic Care in Lucknow</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">Dedicated to patient comfort, laser surgery precision, and ethical medical standards.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hospitalHighlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center mb-3 shadow-md">
                    <IconComp size={20} />
                  </div>
                  <h4 className="font-bold text-sm text-white">{item.title}</h4>
                  <p className="text-xs text-blue-100 mt-1.5 leading-relaxed text-justify">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Direct Emergency Call Strip */}
          <div className="mt-10 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-400/40 flex items-center justify-center shrink-0">
                <Phone size={22} className="text-orange-300 animate-bounce" />
              </div>
              <div>
                <h4 className="font-bold text-base">Need Immediate OPD Consultation?</h4>
                <p className="text-xs text-blue-100">Call our Lucknow clinic helpline to confirm daily timing or emergency slots.</p>
              </div>
            </div>

            <a
              href="tel:8960068307"
              className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-lg transition-transform hover:scale-105 shrink-0 flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Call Helpline: +91 89600 68307</span>
            </a>
          </div>
        </ScrollReveal>

      </div>

      {/* LIGHTBOX OVERLAY MODAL */}
      {lightboxImage && (
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
              className="w-9 h-9 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
            >
              <ZoomIn size={18} />
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              title="Zoom Out"
              className="w-9 h-9 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
            >
              <ZoomOut size={18} />
            </button>
            <button
              type="button"
              onClick={handleRotate}
              title="Rotate"
              className="w-9 h-9 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
            >
              <RotateCw size={17} />
            </button>
            <div className="w-px h-5 bg-white/20 mx-1" />
            <button
              type="button"
              onClick={closeLightbox}
              title="Close (Esc)"
              className="w-9 h-9 rounded-xl bg-red-600/80 hover:bg-red-600 flex items-center justify-center transition-colors text-white cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Title Banner */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 text-white shadow-lg">
            <h4 className="text-xs sm:text-sm font-bold flex items-center gap-2">
              <Building2 size={16} className="text-orange-400" />
              <span>{lightboxTitle}</span>
            </h4>
          </div>

          {/* Centered Image */}
          <div
            className="relative max-w-4xl max-h-[82vh] w-full flex items-center justify-center overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt={lightboxTitle}
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
