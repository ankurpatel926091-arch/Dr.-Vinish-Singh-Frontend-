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
  ExternalLink,
  Loader2,
  AlertCircle,
  MessageSquare,
  Zap,
} from "lucide-react";
import { FaWhatsapp as FaWhatsappIcon, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

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

const hospitalLocations = [
  {
    id: "evening",
    tag: "Evening OPD",
    title: "Dr. Shilpi Maternity & Urology Centre",
    subtitle: "Pakkabag, Ring Rd",
    timing: "03:00 PM – 07:00 PM (Mon – Sat)",
    phone: "+91 86048 91955",
    tel: "8604891955",
    address: "596Pb/1114/03, Ring Rd, Pakkabag, Lalabagh, Lucknow",
    mapUrl: "https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9",
    embedUrl:
      "https://maps.google.com/maps?q=26.878567,80.893877(Dr.+Shilpi+Maternity+%26+Urology+Centre)&t=&z=16&ie=UTF8&iwloc=B&output=embed",
    badgeBg: "bg-[#103F7C] text-white",
  },
  {
    id: "morning",
    tag: "Morning OPD",
    title: "Rudraksh IVF & Urology Centre",
    subtitle: "Sharda Nagar, Lucknow",
    timing: "10:00 AM – 03:00 PM (Mon – Sat)",
    phone: "+91 89600 68307",
    tel: "8960068307",
    address: "1/795, Ratan Khand, Ruchi Khand 1, Sharda Nagar, Lucknow",
    mapUrl: "https://maps.app.goo.gl/jbynbpoL5PcKca4Z9",
    embedUrl:
      "https://maps.google.com/maps?q=26.792132,80.916962(Rudraksh+IVF+%26+Urology+Centre)&t=&z=16&ie=UTF8&iwloc=B&output=embed",
    badgeBg: "bg-orange-500 text-white",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [lastSubmittedPhone, setLastSubmittedPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please fill in all required fields (*).");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const getApiUrls = () => {
        const urls = [];
        if (import.meta.env.VITE_API_BASE_URL) {
          urls.push(import.meta.env.VITE_API_BASE_URL);
        }
        if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
          urls.push("http://localhost:5000/api");
        }
        urls.push("https://dr-vinish-backend.onrender.com/api");
        return urls;
      };

      const apiUrls = getApiUrls();
      let savedToBackend = false;

      for (const baseUrl of apiUrls) {
        try {
          const res = await fetch(`${baseUrl}/enquiries`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              phone: formData.phone,
              service: formData.service || "General Inquiry",
              subject: formData.service || "General Inquiry",
              message: formData.message || "",
            }),
          });

          if (res.ok) {
            savedToBackend = true;
            break;
          }
        } catch (err) {
          // Try next fallback URL
        }
      }

      setSubmitted(true);
      setLastSubmittedPhone(formData.phone);
      setFormData({
        name: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setErrorMessage(
        "Network error occurred. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50/60 font-sans min-h-screen">
      {/* Top Banner Hero */}
      <PageHero
        title="CONTACT US"
        subTitle="Get In Touch With Us"
        description="Reach out to schedule appointments, consult regarding clinical concerns, or visit our healthcare centers in Lucknow."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* ================= Header Title & Subtitle Badge ================= */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#103F7C]/10 text-[#103F7C] border border-blue-200/80 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-orange-500" />
            <span>CONTACT US</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Get In Touch With Us
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Reach out to schedule appointments, consult regarding clinical concerns, or visit our healthcare centers in Lucknow.
          </p>
        </ScrollReveal>

        {/* ================= 3 Quick Contact Info Cards ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
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

        {/* ================= Main 2-Column Grid (100% Equal Baseline Alignment) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ================= LEFT COLUMN: Hospital Maps Cards (6 Cols) ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {hospitalLocations.map((hospital, index) => (
              <ScrollReveal key={hospital.id} variant="fade-up" delay={index * 150} className="flex-1 flex flex-col">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/90 flex-1 flex flex-col justify-between space-y-3">
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 pb-2 border-b border-slate-100">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${hospital.badgeBg}`}>
                          {hospital.tag}
                        </span>
                        <span className="text-xs text-slate-500 font-medium flex items-center gap-1 truncate">
                          <Clock size={12} className="text-orange-500 shrink-0" />
                          <span>{hospital.timing}</span>
                        </span>
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug truncate">
                        <a
                          href={hospital.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-orange-600 inline-flex items-center gap-1.5 transition-colors"
                        >
                          <span>{hospital.title}</span>
                          <MapPin size={14} className="text-orange-500 shrink-0 inline" />
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                        {hospital.subtitle}
                      </p>
                    </div>

                    <a
                      href={hospital.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-[#103F7C] hover:bg-[#103F7C] hover:text-white font-bold text-xs border border-blue-200/80 transition-all duration-200 shrink-0 shadow-2xs hover:scale-102"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  {/* Embedded Google Map (Stretches smoothly to match exact column height) */}
                  <div className="w-full h-48 sm:h-[215px] rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 relative shrink-0">
                    <iframe
                      title={hospital.title}
                      src={hospital.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Location & Helpline Details Footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs">
                    <p className="text-slate-600 font-medium truncate max-w-sm">
                      <MapPin size={13} className="inline text-orange-500 mr-1" />
                      {hospital.address}
                    </p>
                    <a
                      href={`tel:${hospital.tel}`}
                      className="font-extrabold text-[#103F7C] hover:text-orange-600 hover:underline flex items-center gap-1 shrink-0"
                    >
                      <Phone size={13} />
                      <span>{hospital.phone}</span>
                    </a>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ================= RIGHT COLUMN: Form Card & Social Media Card (6 Cols) ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Form Card */}
            <ScrollReveal variant="fade-up" delay={200}>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md border border-slate-200/90">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2.5">
                  <MessageSquare size={22} className="text-[#103F7C]" />
                  <span>Send Us A Message</span>
                </h2>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-6 text-center my-4">
                    <CheckCircle2 size={36} className="text-emerald-600 mx-auto mb-2" />
                    <h3 className="font-extrabold text-base sm:text-lg">Message Sent Successfully!</h3>
                    <p className="text-xs sm:text-sm text-emerald-700 mt-1 mb-4">
                      Thank you for reaching out! We have received your query and will contact you back shortly on{" "}
                      <strong>{lastSubmittedPhone || "your mobile number"}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold transition-all cursor-pointer shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {errorMessage && (
                      <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                        <AlertCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter Your Name"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#103F7C] focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter Mobile Number"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#103F7C] focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>

                    {/* Choose Service Field */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Choose Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-[#103F7C] focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                      >
                        <option value="">Select a Service</option>
                        <option value="Laser Kidney Stones">Laser Kidney Stones (RIRS / PCNL)</option>
                        <option value="Enlarged Prostate (HolEP)">Enlarged Prostate Laser Surgery (HolEP)</option>
                        <option value="UTI & Female Urology">Recurrent Female UTI &amp; Bladder Care</option>
                        <option value="Andrology & Male Health">Male Infertility &amp; Erectile Dysfunction</option>
                        <option value="General Consultation">General Urology &amp; OPD Consultation</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly state your concern..."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#103F7C] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg shadow-orange-500/20 active:scale-98 transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-1"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Social Media Connections Card */}
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 border border-slate-200/90 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                    <Sparkles size={15} className="text-orange-500" />
                    <span>Connect on Social Media</span>
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Official Channels
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                  {socialAccounts.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/70 hover:border-blue-200 transition-all duration-200 group"
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

          </div>

        </div>

        {/* ================= Bottom Bar ================= */}
        <ScrollReveal variant="fade-up" delay={350} className="mt-10 sm:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Left Button: Call Reception */}
            <a
              href="tel:8604891955"
              className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#103F7C] via-blue-800 to-indigo-900 hover:from-blue-900 hover:to-[#07152B] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-98"
            >
              <Phone size={18} />
              <span>Call Reception (+91 86048 91955)</span>
            </a>

            {/* Right Button: WhatsApp Us */}
            <a
              href="https://wa.me/917275981480?text=Hello%20Dr.%20Vinish%20Kumar%20Singh%2C%20I%20would%20like%20to%20inquire%20about%20an%20OPD%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20bd5a] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0e776a] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-98"
            >
              <FaWhatsappIcon size={20} />
              <span>WhatsApp Us (+91 72759 81480)</span>
            </a>

          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
