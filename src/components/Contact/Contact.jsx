import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Hospital,
  Sun,
  Moon,
  ExternalLink,
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
    title: "Rudraksh IVF & Urology Centre",
    timing: "10:00 AM – 01:00 PM (Mon – Sat)",
    phone: "+91 89600 68307",
    tel: "8960068307",
    address: "1/795, Ratan Khand, Ruchi Khand 1, Sharda Nagar, Lucknow",
    mapUrl: "https://maps.app.goo.gl/jbynbpoL5PcKca4Z9",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.503460831121!2d80.91696237626966!3d26.79213197672023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf954316719cd%3A0x6b81d77b8f99ab71!2sRudraksh%20IVF%20%26%20Urology%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    badgeBg: "bg-orange-500 text-white",
    tabActive: "bg-orange-500 text-white shadow-md border-orange-500",
  },
  evening: {
    id: "evening",
    tag: "Evening OPD",
    title: "Dr. Shilpi Maternity & Urology Centre",
    timing: "03:00 PM – 06:00 PM (Mon – Sat)",
    phone: "+91 86048 91955",
    tel: "8604891955",
    address: "596Pb/1114/03, Ring Rd, Pakkabag, Lalabagh, Lucknow",
    mapUrl: "https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.784407335606!2d80.89387667627263!3d26.878567176667954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd003e617d91%3A0xb5b736eb9fbb51a5!2sRing%20Rd%2C%20Pakkabag%2C%20Lalabagh%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    badgeBg: "bg-[#103F7C] text-white",
    tabActive: "bg-[#103F7C] text-white shadow-md border-[#103F7C]",
  },
};

export default function Contact({ isHomePage = false }) {
  const [activeHospital, setActiveHospital] = useState("morning");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Kidney Stones",
    hospital: "Rudraksh IVF & Urology Centre (Sharda Nagar)",
    message: "",
  });

  const currentLocation = hospitalLocations[activeHospital];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        service: "Kidney Stones",
        hospital: "Rudraksh IVF & Urology Centre (Sharda Nagar)",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="bg-gradient-to-b from-transparent via-blue-50/20 to-transparent font-sans">
      {/* Header Choice: Section Header for Home Page vs PageHero for Standalone Page */}
      {isHomePage ? (
        <ScrollReveal variant="fade-up" className="pt-8 sm:pt-10 max-w-2xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#103F7C] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles size={13} className="text-orange-500" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Schedule Your{" "}
            <span className="bg-gradient-to-r from-[#103F7C] to-orange-500 bg-clip-text text-transparent">
              Consultation
            </span>
          </h2>

          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-normal">
            Select a hospital location below to view OPD timings, directions, and direct helpline numbers.
          </p>
        </ScrollReveal>
      ) : (
        <PageHero
          title="CLINIC LOCATIONS & CONSULTATION"
          subTitle="Contact & Appointment"
          description="Get in touch with Senior Urologist Dr. Vinish Kumar Singh across 2 specialized hospital centres in Lucknow for expert clinical consultation."
        />
      )}

      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isHomePage ? "py-8 sm:py-10" : "py-10 sm:py-14"}`}>

        {/* ================= 3 Contact Feature Cards arranged HORIZONTALLY ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Card 1: Morning OPD Helpline */}
          <ScrollReveal variant="scale-up" delay={100}>
            <div className="bg-white rounded-2xl p-5 shadow-2xs border border-slate-200/80 flex items-center gap-3.5 hover:shadow-md transition-all h-full">
              <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Morning OPD Helpline</p>
                <a
                  href="tel:8960068307"
                  className="text-sm font-extrabold text-slate-900 hover:text-orange-500 transition-colors"
                >
                  +91 89600 68307
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Evening OPD Helpline */}
          <ScrollReveal variant="scale-up" delay={200}>
            <div className="bg-white rounded-2xl p-5 shadow-2xs border border-slate-200/80 flex items-center gap-3.5 hover:shadow-md transition-all h-full">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#103F7C] flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Evening OPD Helpline</p>
                <a
                  href="tel:8604891955"
                  className="text-sm font-extrabold text-slate-900 hover:text-[#103F7C] transition-colors truncate block"
                >
                  +91 86048 91955
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Official Email */}
          <ScrollReveal variant="scale-up" delay={300}>
            <div className="bg-white rounded-2xl p-5 shadow-2xs border border-slate-200/80 flex items-center gap-3.5 hover:shadow-md transition-all h-full">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Inquiry</p>
                <a
                  href="mailto:info@urosurgeondrvinish.com"
                  className="text-xs sm:text-sm font-extrabold text-slate-900 hover:text-orange-500 transition-colors truncate block"
                >
                  info@urosurgeondrvinish.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ================= 2-Column Grid: Hospital Switcher Map & Form ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hospital Switcher Tabs & Live Map (5 Cols) */}
          <ScrollReveal variant="slide-right" delay={150} className="lg:col-span-5 space-y-4">
            
            {/* Interactive Hospital Selector Tabs */}
            <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveHospital("morning")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer ${
                  activeHospital === "morning"
                    ? hospitalLocations.morning.tabActive
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Sun size={15} className={activeHospital === "morning" ? "text-white" : "text-orange-500"} />
                <span>Morning OPD</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveHospital("evening")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer ${
                  activeHospital === "evening"
                    ? hospitalLocations.evening.tabActive
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Moon size={15} className={activeHospital === "evening" ? "text-white" : "text-blue-500"} />
                <span>Evening OPD</span>
              </button>
            </div>

            {/* Active Hospital Details Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${currentLocation.badgeBg}`}
                >
                  {currentLocation.tag}
                </span>
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                  <Clock size={13} className="text-orange-500" />
                  <span>{currentLocation.timing}</span>
                </span>
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug flex items-center gap-2">
                  <Hospital size={16} className="text-[#103F7C]" />
                  <span>{currentLocation.title}</span>
                </h3>
                <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed">
                  {currentLocation.address}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                <a
                  href={`tel:${currentLocation.tel}`}
                  className="font-extrabold text-orange-600 hover:underline flex items-center gap-1.5"
                >
                  <Phone size={13} />
                  <span>Call {currentLocation.phone}</span>
                </a>

                <a
                  href={currentLocation.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 text-[#103F7C] hover:bg-[#103F7C] hover:text-white font-bold text-[11px] transition-all"
                >
                  <MapPin size={12} />
                  <span>Google Maps</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

            {/* Map Container */}
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-200/80 overflow-hidden h-[260px] relative">
              <iframe
                title={currentLocation.title}
                src={currentLocation.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl w-full h-full"
              />
            </div>

            {/* Social Media Connections Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <Sparkles size={15} className="text-orange-500" />
                  <span>Connect on Social Media</span>
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Official Channels
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {socialAccounts.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/70 hover:border-blue-200 transition-all duration-200 group"
                    >
                      <div
                        className={`w-7 h-7 rounded-lg text-white flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-xs ${item.bgColor}`}
                      >
                        <IconComponent size={13} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-slate-800 group-hover:text-[#103F7C] truncate leading-tight">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-slate-500 truncate leading-tight mt-0.5">
                          {item.handle}
                        </p>
                      </div>
                      <ExternalLink
                        size={11}
                        className="text-slate-400 group-hover:text-orange-500 transition-colors shrink-0 mr-1"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

          </ScrollReveal>

          {/* Right Column: Appointment Form (7 Cols) */}
          <ScrollReveal variant="slide-left" delay={250} className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
            <h2 className="text-xl font-extrabold text-slate-900 mb-1">Book Appointment</h2>
            <p className="text-xs text-slate-500 mb-5 font-normal">
              Select your preferred hospital centre and submit your request for direct OPD confirmation.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-6 text-center">
                <CheckCircle2 size={32} className="text-emerald-600 mx-auto mb-2" />
                <h3 className="font-bold text-base">Appointment Request Submitted!</h3>
                <p className="text-xs text-emerald-700 mt-1">
                  Thank you! We will call you back shortly on <strong>{formData.phone}</strong> for OPD confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-[#103F7C] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-[#103F7C] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Preferred Hospital Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Preferred Hospital Centre *</label>
                  <select
                    value={formData.hospital}
                    onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-[#103F7C] focus:bg-white"
                  >
                    <option value="Rudraksh IVF & Urology Centre (Sharda Nagar)">
                      🌅 Morning OPD: Rudraksh IVF &amp; Urology Centre (Sharda Nagar, 10 AM - 01 PM)
                    </option>
                    <option value="Dr. Shilpi Maternity & Urology Centre (Ring Road)">
                      🌆 Evening OPD: Dr. Shilpi Maternity &amp; Urology Centre (Ring Road, 03 PM - 06 PM)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Select Speciality / Condition</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-[#103F7C] focus:bg-white"
                  >
                    <option value="Kidney Stones">Laser Kidney Stones (RIRS / PCNL)</option>
                    <option value="Prostate Care">Prostate Enlargement (HolEP Laser)</option>
                    <option value="UTI & Infection">Recurrent Female UTI &amp; Bladder Care</option>
                    <option value="Andrology">Male Infertility &amp; Erectile Dysfunction</option>
                    <option value="General Consultation">General Urology Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Message (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe symptoms or query..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-[#103F7C] focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm shadow-md active:scale-98 transition-all cursor-pointer"
                >
                  <Send size={16} />
                  <span>Submit Appointment Request</span>
                </button>
              </form>
            )}
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}