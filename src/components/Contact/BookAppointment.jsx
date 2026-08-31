import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Sun,
  Moon,
  Calendar,
  Maximize2,
  X,
  Info,
  FileText,
  ShieldCheck,
  Award,
  Lock,
} from "lucide-react";
import PageHero from "../PageHero";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import { fetchPublicClinics } from "../../api/clinicApi";

import hospitalBuildingImg from "../../assets/OurHospital/1.jpg";
import shilpiBuildingImg from "../../assets/OurHospital/2.jpg";

const defaultHospitalLocations = {
  morning: {
    id: "morning",
    tag: "Morning OPD",
    badgeLabel: "MORNING CONSULTATION CENTRE",
    title: "Rudraksh IVF & Urology Centre",
    timing: "10:00 AM – 03:00 PM",
    phone: "+91 89600 68307",
    address: "1/795, Ratan Khand, Sharda Nagar, Lucknow",
    image: hospitalBuildingImg,
    mapUrl: "https://maps.app.goo.gl/jbynbpoL5PcKca4Z9",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.428!2d80.9242723!3d26.7803631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff149cec4b2d%3A0xe680ad74dd601b3b!2sDr.%20Vinish%20Singh%20%7C%20Rudraksh%20IVF%20%26%20Urology%20Centre!5e0!3m2!1sen!2sin",
  },
  evening: {
    id: "evening",
    tag: "Evening OPD",
    badgeLabel: "EVENING CONSULTATION CENTRE",
    title: "Dr. Shilpi Maternity & Urology Centre",
    timing: "03:00 PM – 07:00 PM",
    phone: "+91 86048 91955",
    address: "596Pb/1114/03, Ring Rd, Pakkabag, Lucknow",
    image: shilpiBuildingImg,
    mapUrl: "https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.200!2d80.8609337!3d26.8566859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff2d7be105cf%3A0x87c6db827648df8!2sDr.%20Shilpi%20Maternity%20%26%20Urology%20Centre!5e0!3m2!1sen!2sin",
  },
};

export default function BookAppointment({ isHomePage = false }) {
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);
  const [hospitals, setHospitals] = useState(defaultHospitalLocations);

  const loadClinics = useCallback(async () => {
    try {
      const data = await fetchPublicClinics();
      if (Array.isArray(data) && data.length > 0) {
        const morningData = data.find(c => (c.tag && c.tag.toLowerCase().includes('morning')) || (c.name && c.name.includes('Rudraksh'))) || data[0];
        const eveningData = data.find(c => (c.tag && c.tag.toLowerCase().includes('evening')) || (c.name && c.name.includes('Shilpi'))) || data[1] || data[0];

        setHospitals({
          morning: {
            ...defaultHospitalLocations.morning,
            title: morningData.name || morningData.title || defaultHospitalLocations.morning.title,
            timing: morningData.timings || morningData.timing || defaultHospitalLocations.morning.timing,
            phone: morningData.phone || defaultHospitalLocations.morning.phone,
            address: morningData.address || defaultHospitalLocations.morning.address,
            image: morningData.image || defaultHospitalLocations.morning.image,
            mapUrl: morningData.mapUrl || defaultHospitalLocations.morning.mapUrl,
            embedUrl: morningData.embedUrl || defaultHospitalLocations.morning.embedUrl
          },
          evening: {
            ...defaultHospitalLocations.evening,
            title: eveningData.name || eveningData.title || defaultHospitalLocations.evening.title,
            timing: eveningData.timings || eveningData.timing || defaultHospitalLocations.evening.timing,
            phone: eveningData.phone || defaultHospitalLocations.evening.phone,
            address: eveningData.address || defaultHospitalLocations.evening.address,
            image: eveningData.image || defaultHospitalLocations.evening.image,
            mapUrl: eveningData.mapUrl || defaultHospitalLocations.evening.mapUrl,
            embedUrl: eveningData.embedUrl || defaultHospitalLocations.evening.embedUrl
          }
        });
      }
    } catch (err) {}
  }, []);

  useEffect(() => {
    loadClinics();
    window.addEventListener('storage', loadClinics);
    const interval = setInterval(loadClinics, 30000);
    return () => {
      window.removeEventListener('storage', loadClinics);
      clearInterval(interval);
    };
  }, [loadClinics]);

  const handleBookClick = (hospitalKey) => {
    navigate(`/book-appointment?hospital=${hospitalKey}`);
  };

  return (
    <section id="book-appointment" className="bg-slate-50 font-sans py-8 sm:py-14 scroll-mt-28 sm:scroll-mt-36">
      {/* Header Banner / Title */}
      {isHomePage ? (
        <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center px-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#103F7C] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-orange-500" />
            <span>APPOINTMENT REQUEST</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a4a] tracking-tight leading-tight">
           Book Your <span className="bg-gradient-to-r from-[#103F7C] to-orange-500 bg-clip-text text-transparent">Consultation</span>
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
            Choose your preferred healthcare centre and submit your details. Our team will contact you shortly to confirm your OPD appointment with Dr. Vinish Kumar Singh.
          </p>
        </ScrollReveal>
      ) : (
        <PageHero
          title="CLINIC LOCATIONS & CONSULTATION"
          subTitle="Contact & Appointment"
          description="Get in touch with Senior Urologist Dr. Vinish Kumar Singh across 2 specialized hospital centres in Lucknow for expert clinical consultation."
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= 2 HOSPITAL CARDS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* CARD 1: Rudraksh IVF & Urology Centre (Morning) */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group">
              {/* Image Box */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-100">
                {/* Top-Left Badge */}
                <div className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-amber-700 text-[10px] sm:text-[11px] font-extrabold flex items-center gap-1.5 shadow-sm uppercase tracking-wider border border-amber-200/60">
                  <Sun size={13} className="text-amber-500 fill-amber-400" />
                  <span>MORNING CONSULTATION CENTRE</span>
                </div>

                {/* Top-Right Full Photo Button */}
                <button
                  type="button"
                  onClick={() => setModalImage(hospitals.morning.image || hospitalBuildingImg)}
                  className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-slate-800 text-[11px] font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer border border-slate-200"
                >
                  <Maximize2 size={12} />
                  <span>Full Photo</span>
                </button>

                <img
                  src={hospitals.morning.image || hospitalBuildingImg}
                  alt={hospitals.morning.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f2a4a] leading-snug">
                    <a
                      href={hospitals.morning.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-orange-600 transition-colors inline-flex items-center gap-2"
                    >
                      <span>{hospitals.morning.title}</span>
                      <MapPin size={18} className="text-orange-500 shrink-0 inline" />
                    </a>
                  </h3>

                  {/* Minimalistic Info Stack */}
                  <div className="mt-4 space-y-2.5">
                    {/* OPD Hours Box */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-100/70 text-amber-600 flex items-center justify-center shrink-0">
                        <Clock size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                          OPD CONSULTATION HOURS
                        </p>
                        <p className="text-xs sm:text-sm font-extrabold text-[#0f2a4a]">
                          {hospitals.morning.timing}
                        </p>
                      </div>
                    </div>

                    {/* Helpline & Call Box */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-blue-100/70 text-[#103F7C] flex items-center justify-center shrink-0">
                          <Phone size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                            APPOINTMENTS &amp; HELPLINE
                          </p>
                          <a
                            href={`tel:${hospitals.morning.phone.replace(/\s+/g, '')}`}
                            className="text-xs sm:text-sm font-extrabold text-[#0f2a4a] hover:text-orange-600 transition-colors"
                          >
                            {hospitals.morning.phone}
                          </a>
                        </div>
                      </div>

                      <a
                        href={`tel:${hospitals.morning.phone.replace(/\s+/g, '')}`}
                        className="px-3.5 py-1.5 rounded-full bg-[#103F7C] hover:bg-blue-900 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-xs transition-all shrink-0"
                      >
                        <Phone size={12} />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>

                  {/* Embedded Google Map Location Frame */}
                  <div className="mt-3 w-full h-40 sm:h-44 rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-100 relative">
                    <iframe
                      title={`${hospitals.morning.title} Google Map Location`}
                      src={hospitals.morning.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  type="button"
                  onClick={() => handleBookClick("morning")}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
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
              <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-100">
                {/* Top-Left Badge */}
                <div className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-blue-800 text-[10px] sm:text-[11px] font-extrabold flex items-center gap-1.5 shadow-sm uppercase tracking-wider border border-blue-200/60">
                  <Moon size={13} className="text-blue-600 fill-blue-500" />
                  <span>EVENING CONSULTATION CENTRE</span>
                </div>

                {/* Top-Right Full Photo Button */}
                <button
                  type="button"
                  onClick={() => setModalImage(hospitals.evening.image || shilpiBuildingImg)}
                  className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-slate-800 text-[11px] font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer border border-slate-200"
                >
                  <Maximize2 size={12} />
                  <span>Full Photo</span>
                </button>

                <img
                  src={hospitals.evening.image || shilpiBuildingImg}
                  alt={hospitals.evening.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f2a4a] leading-snug">
                    <a
                      href={hospitals.evening.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-700 transition-colors inline-flex items-center gap-2"
                    >
                      <span>{hospitals.evening.title}</span>
                      <MapPin size={18} className="text-[#103F7C] shrink-0 inline" />
                    </a>
                  </h3>

                  {/* Minimalistic Info Stack */}
                  <div className="mt-4 space-y-2.5">
                    {/* OPD Hours Box */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-100/70 text-[#103F7C] flex items-center justify-center shrink-0">
                        <Clock size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                          OPD CONSULTATION HOURS
                        </p>
                        <p className="text-xs sm:text-sm font-extrabold text-[#0f2a4a]">
                          {hospitals.evening.timing}
                        </p>
                      </div>
                    </div>

                    {/* Helpline & Call Box */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-blue-100/70 text-[#103F7C] flex items-center justify-center shrink-0">
                          <Phone size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                            APPOINTMENTS &amp; HELPLINE
                          </p>
                          <a
                            href={`tel:${hospitals.evening.phone.replace(/\s+/g, '')}`}
                            className="text-xs sm:text-sm font-extrabold text-[#0f2a4a] hover:text-orange-600 transition-colors"
                          >
                            {hospitals.evening.phone}
                          </a>
                        </div>
                      </div>

                      <a
                        href={`tel:${hospitals.evening.phone.replace(/\s+/g, '')}`}
                        className="px-3.5 py-1.5 rounded-full bg-[#103F7C] hover:bg-blue-900 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-xs transition-all shrink-0"
                      >
                        <Phone size={12} />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>

                  {/* Embedded Google Map Location Frame */}
                  <div className="mt-3 w-full h-40 sm:h-44 rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-100 relative">
                    <iframe
                      title={`${hospitals.evening.title} Google Map Location`}
                      src={hospitals.evening.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  type="button"
                  onClick={() => handleBookClick("evening")}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ================= BEFORE BOOKING INFO BANNER ================= */}
        <ScrollReveal variant="fade-up" delay={250} className="mt-8 sm:mt-10">
          <div className="bg-gradient-to-r from-blue-50/90 via-blue-50/60 to-slate-50 border border-blue-100 rounded-3xl p-4 sm:p-5 flex items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#103F7C]/10 text-[#103F7C] flex items-center justify-center shrink-0">
                <Info size={22} />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-[#0f2a4a]">
                 Before Your Consultation
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-0.5">
                  Please bring your previous medical records, prescriptions, diagnostic reports, scan images, and a list of current medications for a detailed clinical evaluation.
                </p>
              </div>
            </div>

            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-blue-100/70 text-[#103F7C] items-center justify-center shrink-0">
              <FileText size={24} />
            </div>
          </div>
        </ScrollReveal>

        {/* ================= 4 TRUST BADGES GRID ================= */}
        <ScrollReveal variant="fade-up" delay={300} className="mt-5">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            
            {/* Badge 1: Trusted Centres */}
            <div className="flex items-start gap-3.5 pt-3 sm:pt-0 lg:px-3 first:pt-0 first:px-0">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100/80 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h5 className="text-sm font-extrabold text-[#0f2a4a]">
                  Specialised Care Centres
                </h5>
                <p className="text-xs text-slate-500 font-medium leading-normal mt-0.5">
                  Consult at two dedicated urology and healthcare centres in Lucknow.
                </p>
              </div>
            </div>

            {/* Badge 2: Flexible Timings */}
            <div className="flex items-start gap-3.5 pt-3 sm:pt-0 lg:px-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#103F7C] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs">
                <Clock size={22} />
              </div>
              <div>
                <h5 className="text-sm font-extrabold text-[#0f2a4a]">
                  Convenient OPD Scheduling
                </h5>
                <p className="text-xs text-slate-500 font-medium leading-normal mt-0.5">
                 Choose an available consultation slot according to your convenience.
                </p>
              </div>
            </div>

            {/* Badge 3: `Quick Appointment Confirmation` */}
            <div className="flex items-start gap-3.5 pt-3 sm:pt-0 lg:px-3">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100/80 flex items-center justify-center shrink-0 shadow-2xs">
                <Award size={22} />
              </div>
              <div>
                <h5 className="text-sm font-extrabold text-[#0f2a4a]">
                  Quick Appointment Confirmation
                </h5>
                <p className="text-xs text-slate-500 font-medium leading-normal mt-0.5">
                 Receive appointment confirmation directly from the centre’s coordination team.
                </p>
              </div>
            </div>

            {/* Badge 4: Secure & Private */}
            <div className="flex items-start gap-3.5 pt-3 sm:pt-0 lg:px-3">
              <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100/80 flex items-center justify-center shrink-0 shadow-2xs">
                <Lock size={22} />
              </div>
              <div>
                <h5 className="text-sm font-extrabold text-[#0f2a4a]">
                  Secure &amp; Confidential
                </h5>
                <p className="text-xs text-slate-500 font-medium leading-normal mt-0.5">
                  Your personal and medical information is handled securely and confidentially.
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>

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
    </section>
  );
}