import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Hospital,
  Sun,
  Moon,
  ExternalLink,
  Zap,
  Calendar,
  Maximize2,
  X,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PageHero from "../PageHero";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

import hospitalBuildingImg from "../../assets/OurHospital/1.jpg";
import shilpiBuildingImg from "../../assets/OurHospital/2.jpg";

const socialAccounts = [
  {
    name: "Facebook",
    handle: "vinishingh",
    icon: FaFacebookF,
    url: "https://www.facebook.com/vinishingh",
    bgColor: "bg-[#1877F2]",
  },
  {
    name: "Instagram",
    handle: "@drvinishurosurgeon",
    icon: FaInstagram,
    url: "https://www.instagram.com/drvinishurosurgeon/",
    bgColor: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
  },
  {
    name: "LinkedIn",
    handle: "Dr Vinish Singh",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/106467207/admin/dashboard/",
    bgColor: "bg-[#0A66C2]",
  },
  {
    name: "YouTube",
    handle: "@drvinishinghurosurgeon",
    icon: FaYoutube,
    url: "https://www.youtube.com/@drvinishinghurosurgeon",
    bgColor: "bg-[#FF0000]",
  },
  {
    name: "Twitter / X",
    handle: "@dr_vinish",
    icon: FaXTwitter,
    url: "https://x.com/dr_vinish",
    bgColor: "bg-[#000000]",
  },
];

const hospitalLocations = {
  morning: {
    id: "morning",
    tag: "Morning OPD",
    badgeLabel: "MORNING CONSULTATION CENTRE",
    title: "Rudraksh IVF & Urology Centre",
    timing: "10:00 AM – 01:00 PM",
    phone: "+91 89600 68307",
    address: "1/795, Ratan Khand, Sharda Nagar, Lucknow",
    image: hospitalBuildingImg,
    mapUrl: "https://maps.app.goo.gl/jbynbpoL5PcKca4Z9",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.503460831121!2d80.91696237626966!3d26.79213197672023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf954316719cd%3A0x6b81d77b8f99ab71!2sRudraksh%20IVF%20%26%20Urology%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  evening: {
    id: "evening",
    tag: "Evening OPD",
    badgeLabel: "EVENING CONSULTATION CENTRE",
    title: "Dr. Shilpi Maternity & Urology Centre",
    timing: "03:00 PM – 06:00 PM",
    phone: "+91 86048 91955",
    address: "596Pb/1114/03, Ring Rd, Pakkabag, Lucknow",
    image: shilpiBuildingImg,
    mapUrl: "https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.784407335606!2d80.89387667627263!3d26.878567176667954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd003e617d91%3A0xb5b736eb9fbb51a5!2sRing%20Rd%2C%20Pakkabag%2C%20Lalabagh%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
};

export default function BookAppointment({ isHomePage = false }) {
  const navigate = useNavigate();
  const [activeHospitalKey, setActiveHospitalKey] = useState("morning");
  const [modalImage, setModalImage] = useState(null);

  const handleBookClick = (hospitalKey) => {
    navigate(`/book-appointment?hospital=${hospitalKey}`);
  };

  const currentMapLocation = hospitalLocations[activeHospitalKey];

  return (
    <div id="book-appointment" className="bg-gradient-to-b from-slate-50/50 via-blue-50/20 to-slate-50/50 font-sans">
      {/* Header Banner / Title */}
      {isHomePage ? (
        <ScrollReveal variant="fade-up" className="pt-8 sm:pt-12 max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#103F7C] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-orange-500" />
            <span>DIRECT OPD CONFIRMATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Book <span className="bg-gradient-to-r from-[#103F7C] to-orange-500 bg-clip-text text-transparent">Appointment</span>
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
            Select your preferred hospital centre and submit your request for direct OPD confirmation.
          </p>

          
        </ScrollReveal>
      ) : (
        <PageHero
          title="CLINIC LOCATIONS & CONSULTATION"
          subTitle="Contact & Appointment"
          description="Get in touch with Senior Urologist Dr. Vinish Kumar Singh across 2 specialized hospital centres in Lucknow for expert clinical consultation."
        />
      )}

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isHomePage ? "py-6 sm:py-10" : "py-8 sm:py-12"}`}>

        {/* ================= 2 HOSPITAL CARDS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">

          {/* CARD 1: Rudraksh IVF & Urology Centre (Morning) */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group">
              {/* Image Box */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                {/* Top-Left Badge */}
                <div className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-amber-700 text-[10px] sm:text-[11px] font-extrabold flex items-center gap-1.5 shadow-sm uppercase tracking-wider border border-amber-200/60">
                  <Sun size={13} className="text-amber-500 fill-amber-400" />
                  <span>MORNING CONSULTATION CENTRE</span>
                </div>

                {/* Top-Right Full Photo Button */}
                <button
                  type="button"
                  onClick={() => setModalImage(hospitalBuildingImg)}
                  className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-slate-800 text-[11px] font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer border border-slate-200"
                >
                  <Maximize2 size={12} />
                  <span>Full Photo</span>
                </button>

                <img
                  src={hospitalBuildingImg}
                  alt="Rudraksh IVF & Urology Centre"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    Rudraksh IVF &amp; Urology Centre
                  </h3>

                  {/* OPD Hours Box */}
                  <div className="mt-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-100/70 text-amber-600 flex items-center justify-center shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        OPD CONSULTATION HOURS
                      </p>
                      <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                        10:00 AM – 01:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Helpline & Call Box */}
                  <div className="mt-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-100/70 text-[#103F7C] flex items-center justify-center shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                          APPOINTMENTS &amp; HELPLINE
                        </p>
                        <a
                          href="tel:8960068307"
                          className="text-xs sm:text-sm font-extrabold text-slate-900 hover:text-orange-500 transition-colors"
                        >
                          +91 89600 68307
                        </a>
                      </div>
                    </div>

                    <a
                      href="tel:8960068307"
                      className="px-4 py-2 rounded-full bg-[#103F7C] hover:bg-blue-900 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-xs transition-all shrink-0"
                    >
                      <Phone size={12} />
                      <span>Call</span>
                    </a>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  type="button"
                  onClick={() => handleBookClick("morning")}
                  className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD 2: Dr. Shilpi Maternity & Urology Centre (Evening) */}
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group">
              {/* Image Box */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                {/* Top-Left Badge */}
                <div className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-blue-800 text-[10px] sm:text-[11px] font-extrabold flex items-center gap-1.5 shadow-sm uppercase tracking-wider border border-blue-200/60">
                  <Moon size={13} className="text-blue-600 fill-blue-500" />
                  <span>EVENING CONSULTATION CENTRE</span>
                </div>

                {/* Top-Right Full Photo Button */}
                <button
                  type="button"
                  onClick={() => setModalImage(shilpiBuildingImg)}
                  className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-slate-800 text-[11px] font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer border border-slate-200"
                >
                  <Maximize2 size={12} />
                  <span>Full Photo</span>
                </button>

                <img
                  src={shilpiBuildingImg}
                  alt="Dr. Shilpi Maternity & Urology Centre"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    Dr. Shilpi Maternity &amp; Urology Centre
                  </h3>

                  {/* OPD Hours Box */}
                  <div className="mt-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-100/70 text-[#103F7C] flex items-center justify-center shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        OPD CONSULTATION HOURS
                      </p>
                      <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                        03:00 PM – 06:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Helpline & Call Box */}
                  <div className="mt-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-100/70 text-[#103F7C] flex items-center justify-center shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                          APPOINTMENTS &amp; HELPLINE
                        </p>
                        <a
                          href="tel:8604891955"
                          className="text-xs sm:text-sm font-extrabold text-slate-900 hover:text-orange-500 transition-colors"
                        >
                          +91 86048 91955
                        </a>
                      </div>
                    </div>

                    <a
                      href="tel:8604891955"
                      className="px-4 py-2 rounded-full bg-[#103F7C] hover:bg-blue-900 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-xs transition-all shrink-0"
                    >
                      <Phone size={12} />
                      <span>Call</span>
                    </a>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  type="button"
                  onClick={() => handleBookClick("evening")}
                  className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ================= 2-COLUMN GRID: MAP SWITCHER & SOCIAL CHANNELS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Hospital Switcher Tabs & Live Map (7 Cols) */}
          <ScrollReveal variant="fade-right" className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md flex-1 flex flex-col justify-between">
              
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Hospital size={14} className="text-orange-500" />
                    <span>CLINIC LOCATION MAP</span>
                  </span>

                  <span className="text-[11px] font-bold text-[#103F7C] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    2 Centres in Lucknow
                  </span>
                </div>

                {/* Hospital Selection Pills / Tabs */}
                <div className="grid grid-cols-2 gap-3 mb-5 p-1.5 bg-slate-100 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setActiveHospitalKey("morning")}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeHospitalKey === "morning"
                        ? "bg-white text-orange-600 shadow-sm border border-orange-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Sun size={15} className="text-amber-500" />
                    <span>Morning OPD</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveHospitalKey("evening")}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeHospitalKey === "evening"
                        ? "bg-white text-[#103F7C] shadow-sm border border-blue-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Moon size={15} className="text-blue-600" />
                    <span>Evening OPD</span>
                  </button>
                </div>

                {/* Selected Hospital Address Info */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-5">
                  <h4 className="font-black text-slate-900 text-base mb-1">
                    {currentMapLocation.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed flex items-start gap-1.5 mb-3">
                    <MapPin size={14} className="text-orange-500 shrink-0 mt-0.5" />
                    <span>{currentMapLocation.address}</span>
                  </p>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60">
                    <span className="font-extrabold text-slate-800">
                      📞 {currentMapLocation.phone}
                    </span>
                    <a
                      href={currentMapLocation.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#103F7C] hover:text-orange-600 font-extrabold inline-flex items-center gap-1"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Live Google Maps iFrame */}
              <div className="w-full h-56 sm:h-[230px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe
                  title={currentMapLocation.title}
                  src={currentMapLocation.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column: Social Media Links (5 Cols) */}
          <ScrollReveal variant="fade-left" className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md flex-1 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-orange-500" />
                    <span>CONNECT ON SOCIAL MEDIA</span>
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">Official Channels</span>
                </div>

                <p className="text-xs text-slate-600 font-medium mb-5">
                  Follow Dr. Vinish Kumar Singh on social media for regular urology tips, patient awareness videos &amp; clinic updates.
                </p>

                {/* Social Cards Grid */}
                <div className="space-y-3">
                  {socialAccounts.map((account) => {
                    const IconComponent = account.icon;
                    return (
                      <a
                        key={account.name}
                        href={account.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl ${account.bgColor} text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform`}>
                            <IconComponent size={16} />
                          </div>
                          <div>
                            <p className="text-xs font-black text-slate-900">{account.name}</p>
                            <p className="text-[11px] text-slate-500 font-medium">{account.handle}</p>
                          </div>
                        </div>

                        <ExternalLink size={14} className="text-slate-400 group-hover:text-orange-500 transition-colors mr-1" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Call & WhatsApp Action Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <a
                  href="tel:+918604891955"
                  className="flex-1 py-3 px-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <Phone size={14} />
                  <span>Call Reception</span>
                </a>
                <a
                  href="https://wa.me/917275981480?text=Hello%20Dr.%20Vinish%20Kumar%20Singh%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <MessageSquareIcon size={14} />
                  <span>WhatsApp Us</span>
                </a>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>

      {/* FULL PHOTO LIGHTBOX MODAL */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button
              type="button"
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X size={20} />
            </button>
            <img
              src={modalImage}
              alt="Hospital Full Building View"
              className="w-full h-full max-h-[80vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Helper icon component for WhatsApp Us button inside module
function MessageSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}