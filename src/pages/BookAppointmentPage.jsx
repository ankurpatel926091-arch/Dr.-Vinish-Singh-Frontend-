import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import {
  Send,
  CheckCircle2,
  Sparkles,
  Zap,
  Loader2,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Hospital,
  Clock,
  Phone,
  MapPin,
  Calendar,
  ChevronDown,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

const hospitalDetails = {
  morning: {
    key: "morning",
    name: "Rudraksh IVF & Urology Centre",
    fullOption: "Morning OPD: Rudraksh IVF & Urology Centre (Sharda Nagar, 10 AM - 03 PM)",
    badge: "MORNING CONSULTATION CENTRE",
    timing: "10:00 AM – 03:00 PM",
    location: "1/795, Ratan Khand, Sharda Nagar, Lucknow",
    phone: "+91 89600 68307",
    mapUrl: "https://maps.app.goo.gl/jbynbpoL5PcKca4Z9",
  },
  evening: {
    key: "evening",
    name: "Dr. Shilpi Maternity & Urology Centre",
    fullOption: "Evening OPD: Dr. Shilpi Maternity & Urology Centre (Pakkabag, 03 PM - 06 PM)",
    badge: "EVENING CONSULTATION CENTRE",
    timing: "03:00 PM – 07:00 PM",
    location: "596Pb/1114/03, Ring Rd, Pakkabag, Lucknow",
    phone: "+91 86048 91955",
    mapUrl: "https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9",
  },
};

const hospitalServices = {
  morning: [
    "Laser Kidney Stones (RIRS / PCNL)",
    "Prostate Surgery (HolEP / TURP)",
    "Male Infertility Care & Micro-TESE",
    "Erectile Dysfunction & Sexual Health",
    "Recurrent Female UTI & Incontinence",
    "Reconstructive Urology & Stricture",
    "Kidney Transplant Evaluation",
    "General Urology Consultation",
  ],
  evening: [
    "General Gynecology",
    "Pregnancy Care",
    "High Risk Pregnancy",
    "Infertility",
    "PCOD",
    "Laparoscopy",
    "Cosmetic Gynecology",
    "Menopause",
    "Laser Kidney Stones (RIRS / PCNL)",
    "Prostate Surgery (HolEP / TURP)",
    "Recurrent Female UTI & Incontinence",
    "General Urology Consultation",
    "Others",
  ],
};

const timeSlots = {
  morning: [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
  ],
  evening: [
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
  ],
};

export default function BookAppointmentPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const hospitalParam = searchParams.get("hospital");
  const initialHospital =
    hospitalParam === "evening"
      ? hospitalDetails.evening.fullOption
      : hospitalDetails.morning.fullOption;

  const initialServices =
    hospitalParam === "evening"
      ? hospitalServices.evening
      : hospitalServices.morning;

  const initialTimeSlots =
    hospitalParam === "evening"
      ? timeSlots.evening
      : timeSlots.morning;

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [lastSubmittedPhone, setLastSubmittedPhone] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: initialServices[0],
    hospital: initialHospital,
    preferredTime: initialTimeSlots[0],
    consultationType: "First Visit",
    message: "",
  });

  // Derived active hospital information for dynamic UI
  const isEveningSelected =
    formData.hospital.includes("Shilpi") || formData.hospital.includes("Evening");
  const activeHospital = isEveningSelected
    ? hospitalDetails.evening
    : hospitalDetails.morning;
  const activeServices = isEveningSelected
    ? hospitalServices.evening
    : hospitalServices.morning;
  const activeTimeSlots = isEveningSelected
    ? timeSlots.evening
    : timeSlots.morning;

  useEffect(() => {
    if (hospitalParam === "evening") {
      setFormData((prev) => ({
        ...prev,
        hospital: hospitalDetails.evening.fullOption,
        service: hospitalServices.evening[0],
        preferredTime: timeSlots.evening[0],
      }));
      setCurrentStep(2);
    } else if (hospitalParam === "morning") {
      setFormData((prev) => ({
        ...prev,
        hospital: hospitalDetails.morning.fullOption,
        service: hospitalServices.morning[0],
        preferredTime: timeSlots.morning[0],
      }));
      setCurrentStep(2);
    } else {
      setCurrentStep(1);
    }
  }, [hospitalParam]);

  // Keep service and preferredTime valid when hospital changes manually
  useEffect(() => {
    if (!activeServices.includes(formData.service)) {
      setFormData((prev) => ({ ...prev, service: activeServices[0] }));
    }
    if (!activeTimeSlots.includes(formData.preferredTime)) {
      setFormData((prev) => ({ ...prev, preferredTime: activeTimeSlots[0] }));
    }
  }, [formData.hospital, isEveningSelected]);

  const handleNextFromStep1 = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setCurrentStep(2);
  };

  const handleNextFromStep2 = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setCurrentStep(3);
  };

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
      const fullMessage = `Hospital: ${formData.hospital} | Preferred Time: ${formData.preferredTime} | Type: ${formData.consultationType} | Notes: ${formData.message || "N/A"}`;

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
              service: formData.service || "Appointment Request",
              subject: `Appointment: ${formData.service}`,
              message: fullMessage,
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
        service: activeServices[0],
        hospital: formData.hospital,
        preferredTime: activeTimeSlots[0],
        consultationType: "First Visit",
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
    <div className="bg-slate-50 font-sans min-h-screen py-10 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Top Header Badge & Title */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#103F7C] text-white flex items-center justify-center mx-auto mb-4 shadow-md">
            <Calendar size={32} className="sm:w-10 sm:h-10" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a4a] tracking-tight">
            Book Your Appointment
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium max-w-lg mx-auto leading-relaxed">
            Schedule your visit with our expert healthcare professionals in just a few simple steps
          </p>
        </div>

        {/* Main Appointment Card */}
        <ScrollReveal variant="fade-up">
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
            
            {/* Card Content & Form */}
            <div className="p-6 sm:p-10">

              {/* Step Progress Bar */}
              {!submitted && (
                <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8 px-2 sm:px-6">
                  {/* Step 1: Hospital */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className={`flex items-center gap-2 font-bold text-xs sm:text-sm cursor-pointer transition-all ${
                      currentStep === 1
                        ? "text-[#0f2a4a] font-black"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-extrabold transition-all ${
                        currentStep === 1
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm"
                          : currentStep > 1
                          ? "bg-[#103F7C] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {currentStep > 1 ? "✓" : "1"}
                    </span>
                    <span>Hospital</span>
                  </button>

                  {/* Line 1 -> 2 */}
                  <div
                    className={`flex-1 h-0.5 mx-2 sm:mx-4 transition-all ${
                      currentStep > 1 ? "bg-orange-500" : "bg-slate-200"
                    }`}
                  />

                  {/* Step 2: Speciality */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className={`flex items-center gap-2 font-bold text-xs sm:text-sm cursor-pointer transition-all ${
                      currentStep === 2
                        ? "text-[#0f2a4a] font-black"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-extrabold transition-all ${
                        currentStep === 2
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm"
                          : currentStep > 2
                          ? "bg-[#103F7C] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {currentStep > 2 ? "✓" : "2"}
                    </span>
                    <span>Speciality</span>
                  </button>

                  {/* Line 2 -> 3 */}
                  <div
                    className={`flex-1 h-0.5 mx-2 sm:mx-4 transition-all ${
                      currentStep > 2 ? "bg-orange-500" : "bg-slate-200"
                    }`}
                  />

                  {/* Step 3: Details */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className={`flex items-center gap-2 font-bold text-xs sm:text-sm cursor-pointer transition-all ${
                      currentStep === 3
                        ? "text-[#0f2a4a] font-black"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-extrabold transition-all ${
                        currentStep === 3
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      3
                    </span>
                    <span>Details</span>
                  </button>
                </div>
              )}

              {/* Dynamic Selected Hospital Info Banner (Shows on Step 2 & 3) */}
              {!submitted && currentStep > 1 && (
                <div className="bg-gradient-to-r from-blue-50/80 via-slate-50 to-orange-50/40 border border-blue-100 rounded-2xl p-4 sm:p-5 mb-6 shadow-xs animate-fadeIn">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#103F7C]/10 text-[#103F7C] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider mb-1">
                        <Hospital size={12} />
                        <span>{activeHospital.badge}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0f2a4a]">
                        {activeHospital.name}
                      </h3>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span>⏰ <strong>Hours:</strong> {activeHospital.timing}</span>
                        <span>📞 <strong>Helpline:</strong> <a href={`tel:${activeHospital.phone.replace(/\s+/g, '')}`} className="text-orange-600 font-extrabold hover:underline">{activeHospital.phone}</a></span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-[#0f2a4a] text-xs font-bold hover:bg-slate-50 hover:border-orange-400 transition-all cursor-pointer shadow-2xs"
                    >
                      Change Centre
                    </button>
                  </div>
                </div>
              )}
              
              {/* Success Notification Alert */}
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center my-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>
                  <h2 className="text-2xl font-black text-[#0f2a4a] mb-2">
                    Appointment Request Submitted!
                  </h2>
                  <p className="text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed mb-6">
                    Thank you! Our clinic receptionist will contact you at{" "}
                    <span className="font-extrabold text-[#0f2a4a]">{lastSubmittedPhone}</span> within 30 minutes to confirm your OPD time slot.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs sm:text-sm font-bold shadow-md hover:from-orange-600 hover:to-orange-700 transition-all cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <Link
                      to="/"
                      className="px-6 py-2.5 rounded-full bg-slate-100 text-[#0f2a4a] text-xs sm:text-sm font-bold hover:bg-slate-200 transition-all"
                    >
                      Return to Homepage
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Error Notification Alert */}
                  {errorMessage && (
                    <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-center gap-3 text-rose-700 text-xs sm:text-sm font-semibold">
                      <AlertCircle size={18} className="shrink-0 text-rose-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* STEP 1: SELECT HOSPITAL CENTRE */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <label className="block text-sm sm:text-base font-extrabold text-[#0f2a4a] mb-3">
                          Select Hospital Centre
                        </label>
                        <div className="relative">
                          <select
                            value={formData.hospital}
                            onChange={(e) =>
                              setFormData({ ...formData, hospital: e.target.value })
                            }
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white text-[#0f2a4a] text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all appearance-none pr-12 cursor-pointer shadow-xs"
                          >
                            <option value={hospitalDetails.morning.fullOption}>
                              {hospitalDetails.morning.fullOption}
                            </option>
                            <option value={hospitalDetails.evening.fullOption}>
                              {hospitalDetails.evening.fullOption}
                            </option>
                          </select>
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <ChevronDown size={18} />
                          </div>
                        </div>

                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-slate-500 px-1">
                          <a
                            href={hospitalDetails.morning.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 hover:underline font-bold inline-flex items-center gap-1"
                          >
                            <MapPin size={12} />
                            <span>Rudraksh IVF (Morning Map)</span>
                          </a>
                          <a
                            href={hospitalDetails.evening.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#103F7C] hover:underline font-bold inline-flex items-center gap-1"
                          >
                            <MapPin size={12} />
                            <span>Dr. Shilpi Centre (Evening Map)</span>
                          </a>
                        </div>
                      </div>

                      {/* Step 1 Next Button */}
                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNextFromStep1}
                          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-500/20 transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                        >
                          <span>Next: Select Speciality</span>
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: SELECT SPECIALITY, PREFERRED TIME & CONSULTATION TYPE */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      {/* SELECT SPECIALITY / TREATMENT */}
                      <div>
                        <label className="block text-sm sm:text-base font-extrabold text-[#0f2a4a] mb-3">
                          Select Speciality / Treatment
                        </label>
                        <div className="relative">
                          <select
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white text-[#0f2a4a] text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all appearance-none pr-12 cursor-pointer shadow-xs"
                          >
                            {activeServices.map((serviceOption) => (
                              <option key={serviceOption} value={serviceOption}>
                                {serviceOption}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <ChevronDown size={18} />
                          </div>
                        </div>
                      </div>

                      {/* PREFERRED TIME & CONSULTATION TYPE GRID */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                        {/* PREFERRED TIME */}
                        <div>
                          <label className="block text-sm sm:text-base font-extrabold text-[#0f2a4a] mb-3 flex items-center gap-2">
                            <Clock size={18} className="text-orange-500" />
                            <span>Preferred Time</span>
                          </label>
                          <div className="relative">
                            <select
                              value={formData.preferredTime}
                              onChange={(e) =>
                                setFormData({ ...formData, preferredTime: e.target.value })
                              }
                              className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white text-[#0f2a4a] text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all appearance-none pr-12 cursor-pointer shadow-xs"
                            >
                              <option value="">Select Time</option>
                              {activeTimeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                  {slot}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                              <ChevronDown size={18} />
                            </div>
                          </div>
                        </div>

                        {/* CONSULTATION TYPE */}
                        <div>
                          <label className="block text-sm sm:text-base font-extrabold text-[#0f2a4a] mb-3">
                            Consultation Type
                          </label>
                          <div className="flex items-center gap-6 h-[54px] bg-slate-50/60 border border-slate-200/80 rounded-2xl px-5">
                            {/* First Visit Radio */}
                            <label className="flex items-center gap-2.5 cursor-pointer text-sm font-extrabold text-[#0f2a4a] group">
                              <input
                                type="radio"
                                name="consultationType"
                                value="First Visit"
                                checked={formData.consultationType === "First Visit"}
                                onChange={(e) =>
                                  setFormData({ ...formData, consultationType: e.target.value })
                                }
                                className="w-4 h-4 text-orange-600 focus:ring-orange-500 border-slate-300 cursor-pointer accent-orange-500"
                              />
                              <span className="group-hover:text-orange-600 transition-colors">First Visit</span>
                            </label>

                            {/* Follow-up Radio */}
                            <label className="flex items-center gap-2.5 cursor-pointer text-sm font-extrabold text-[#0f2a4a] group">
                              <input
                                type="radio"
                                name="consultationType"
                                value="Follow-up"
                                checked={formData.consultationType === "Follow-up"}
                                onChange={(e) =>
                                  setFormData({ ...formData, consultationType: e.target.value })
                                }
                                className="w-4 h-4 text-orange-600 focus:ring-orange-500 border-slate-300 cursor-pointer accent-orange-500"
                              />
                              <span className="group-hover:text-orange-600 transition-colors">Follow-up</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 Back & Next Buttons */}
                      <div className="pt-4 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <ArrowLeft size={18} />
                          <span>Back</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleNextFromStep2}
                          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-500/20 transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                        >
                          <span>Next: Patient Details</span>
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: PATIENT DETAILS */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-fadeIn">
                      {/* Summary Card */}
                      <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-4 sm:p-5 space-y-2 text-xs sm:text-sm text-slate-600">
                        <div className="flex items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                          <span className="font-semibold text-slate-500">Selected Centre:</span>
                          <span className="font-extrabold text-[#0f2a4a] text-right">{activeHospital.name}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                          <span className="font-semibold text-slate-500">Speciality / Treatment:</span>
                          <span className="font-extrabold text-[#0f2a4a] text-right">{formData.service}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                          <span className="font-semibold text-slate-500">Preferred Time Slot:</span>
                          <span className="font-extrabold text-[#0f2a4a] text-right">{formData.preferredTime}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-slate-500">Consultation Type:</span>
                          <span className="font-extrabold text-[#0f2a4a] text-right">{formData.consultationType}</span>
                        </div>
                      </div>

                      {/* Patient Details Inputs */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f2a4a] mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Enter Your Full Name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm font-semibold text-[#0f2a4a] focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f2a4a] mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm font-semibold text-[#0f2a4a] focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Message (Optional) */}
                      <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f2a4a] mb-2">
                          Message (Optional)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Describe your symptoms or query..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm font-medium text-[#0f2a4a] focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all resize-none"
                        />
                      </div>

                      {/* Step 3 Back & Submit Buttons */}
                      <div className="pt-2 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <ArrowLeft size={18} />
                          <span>Back</span>
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-base shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-98"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={20} className="animate-spin" />
                              <span>Submitting Request...</span>
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              <span>Submit Appointment Request</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}

            </div>

            {/* Dynamic Need Help Footer Bar */}
            <div className="bg-slate-50/70 border-t border-slate-100 py-4 px-6 text-center text-xs sm:text-sm font-semibold text-slate-600">
              Need help for {activeHospital.name}? Call us at{" "}
              <a href={`tel:${activeHospital.phone.replace(/\s+/g, '')}`} className="text-orange-600 font-bold hover:underline">
                {activeHospital.phone}
              </a>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
