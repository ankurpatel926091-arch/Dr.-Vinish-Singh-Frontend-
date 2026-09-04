import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import {
  Send,
  CheckCircle2,
  Check,
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

import { fetchPublicClinics } from "../api/clinicApi";

const defaultHospitalDetails = {
  morning: {
    key: "morning",
    name: "Rudraksh IVF & Urology Centre",
    fullOption: "Morning OPD: Rudraksh IVF & Urology Centre (Sharda Nagar, 10 AM - 03 PM)",
    badge: "MORNING CONSULTATION CENTRE",
    timing: "10:00 AM – 03:00 PM",
    location: "1/795, Ratan Khand, Sharda Nagar, Lucknow",
    phone: "+91 89600 68307",
    mapUrl: "https://www.google.com/maps?q=Rudraksh+IVF+And+Urology+Centre+Lucknow",
  },
  evening: {
    key: "evening",
    name: "Dr. Shilpi Maternity & Urology Centre",
    fullOption: "Evening OPD: Dr. Shilpi Maternity & Urology Centre (Pakkabag, 03 PM - 07 PM)",
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
    "Others",
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
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
    "12:00 PM",
    "12:15 PM",
    "12:30 PM",
    "12:45 PM",
    "01:00 PM",
    "01:15 PM",
    "01:30 PM",
    "01:45 PM",
    "02:00 PM",
    "02:15 PM",
    "02:30 PM",
    "02:45 PM",
    "03:00 PM",
  ],
  evening: [
    "03:00 PM",
    "03:15 PM",
    "03:30 PM",
    "03:45 PM",
    "04:00 PM",
    "04:15 PM",
    "04:30 PM",
    "04:45 PM",
    "05:00 PM",
    "05:15 PM",
    "05:30 PM",
    "05:45 PM",
    "06:00 PM",
    "06:15 PM",
    "06:30 PM",
    "06:45 PM",
    "07:00 PM",
  ],
};

const getTodayDateString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatDateFormatted = (dateStr) => {
  if (!dateStr) return "";
  try {
    const [y, m, d] = dateStr.split("-");
    const dateObj = new Date(y, m - 1, d);
    return dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch (e) {
    return dateStr;
  }
};

export default function BookAppointmentPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [hospitalsInfo, setHospitalsInfo] = useState(defaultHospitalDetails);

  const loadClinics = useCallback(async () => {
    try {
      const data = await fetchPublicClinics();
      if (Array.isArray(data) && data.length > 0) {
        const morningData =
          data.find(
            (c) =>
              (c.tag && c.tag.toLowerCase().includes("morning")) ||
              (c.name && c.name.includes("Rudraksh"))
          ) || data[0];
        const eveningData =
          data.find(
            (c) =>
              (c.tag && c.tag.toLowerCase().includes("evening")) ||
              (c.name && c.name.includes("Shilpi"))
          ) ||
          data[1] ||
          data[0];

        const morningName =
          morningData.name ||
          morningData.title ||
          defaultHospitalDetails.morning.name;
        const eveningName =
          eveningData.name ||
          eveningData.title ||
          defaultHospitalDetails.evening.name;
        const morningTiming =
          morningData.timings ||
          morningData.timing ||
          defaultHospitalDetails.morning.timing;
        const eveningTiming =
          eveningData.timings ||
          eveningData.timing ||
          defaultHospitalDetails.evening.timing;

        setHospitalsInfo({
          morning: {
            ...defaultHospitalDetails.morning,
            name: morningName,
            fullOption: `Morning OPD: ${morningName} (${morningTiming})`,
            timing: morningTiming,
            phone: morningData.phone || defaultHospitalDetails.morning.phone,
            location:
              morningData.address || defaultHospitalDetails.morning.location,
            mapUrl: morningData.mapUrl || defaultHospitalDetails.morning.mapUrl,
          },
          evening: {
            ...defaultHospitalDetails.evening,
            name: eveningName,
            fullOption: `Evening OPD: ${eveningName} (${eveningTiming})`,
            timing: eveningTiming,
            phone: eveningData.phone || defaultHospitalDetails.evening.phone,
            location:
              eveningData.address || defaultHospitalDetails.evening.location,
            mapUrl: eveningData.mapUrl || defaultHospitalDetails.evening.mapUrl,
          },
        });
      }
    } catch (err) {}
  }, []);

  useEffect(() => {
    loadClinics();
    window.addEventListener("storage", loadClinics);
    const interval = setInterval(loadClinics, 30000);
    return () => {
      window.removeEventListener("storage", loadClinics);
      clearInterval(interval);
    };
  }, [loadClinics]);

  const hospitalParam = searchParams.get("hospital");
  const initialHospital =
    hospitalParam === "evening"
      ? hospitalsInfo.evening.fullOption
      : hospitalsInfo.morning.fullOption;

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
  const [formErrors, setFormErrors] = useState({});
  const [lastSubmittedPhone, setLastSubmittedPhone] = useState("");
  const [lastSubmittedEmail, setLastSubmittedEmail] = useState("");
  const [emailSentStatus, setEmailSentStatus] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const todayStr = getTodayDateString();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialServices[0],
    hospital: initialHospital,
    preferredDate: todayStr,
    preferredTime: initialTimeSlots[0],
    consultationType: "First Visit",
    message: "",
  });

  // State for tracking Admin Confirmed appointments to disable slots
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);

  const loadConfirmedAppointments = useCallback(async () => {
    let combined = [];

    // 1. Read local storage
    try {
      const saved = localStorage.getItem("dr_vinish_appointments");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          combined = [...parsed];
        }
      }
    } catch (e) {}

    // 2. Fetch from backend API
    try {
      const publicApiUrl = import.meta.env.VITE_API_BASE_URL || "https://dr-vinish-backend.onrender.com/api";
      const res = await fetch(`${publicApiUrl}/appointments/public/confirmed-slots`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          json.data.forEach((item) => {
            const itemId = item._id || item.id;
            if (!combined.some((c) => String(c.id || c._id) === String(itemId))) {
              combined.push(item);
            }
          });
        }
      }
    } catch (e) {}

    const confirmedOnly = combined.filter(
      (apt) => (apt.status || "").toLowerCase() === "confirmed"
    );

    setConfirmedAppointments(confirmedOnly);
  }, []);

  useEffect(() => {
    loadConfirmedAppointments();
    window.addEventListener("storage", loadConfirmedAppointments);
    const interval = setInterval(loadConfirmedAppointments, 2000);
    return () => {
      window.removeEventListener("storage", loadConfirmedAppointments);
      clearInterval(interval);
    };
  }, [loadConfirmedAppointments]);

  // Normalize date string for consistent comparison
  const normalizeDateStr = (dStr) => {
    if (!dStr) return "";
    const str = String(dStr).trim();

    if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
      return str;
    }

    try {
      const d = new Date(str);
      if (!isNaN(d.getTime())) {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${y}-${m}-${day}`;
      }
    } catch (e) {}

    try {
      const cleanStr = str.replace(/-/g, " ");
      const parts = cleanStr.split(/\s+/);
      if (parts.length >= 3) {
        const day = parts[0].padStart(2, "0");
        const monthMap = {
          jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",
          jul: "07", aug: "08", sep: "09", sept: "09", oct: "10", nov: "11", dec: "12"
        };
        const monthKey = parts[1].toLowerCase().slice(0, 4);
        const month = monthMap[monthKey] || monthMap[monthKey.slice(0, 3)];
        const year = parts[2];
        if (day && month && year) {
          return `${year}-${month}-${day}`;
        }
      }
    } catch (e) {}

    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
  };

  const isSameDate = (d1, d2) => {
    if (!d1 || !d2) return false;
    return normalizeDateStr(d1) === normalizeDateStr(d2);
  };

  const isSameHospital = (aptCentre, currentHospital) => {
    if (!aptCentre || !currentHospital) return true;
    const c1 = String(aptCentre).toLowerCase();
    const c2 = String(currentHospital).toLowerCase();

    const isAptEvening = c1.includes("shilpi") || c1.includes("evening") || c1.includes("pakkabag");
    const isCurrentEvening = c2.includes("shilpi") || c2.includes("evening") || c2.includes("pakkabag");

    return isAptEvening === isCurrentEvening;
  };

  const parseTimeToMinutes = (timeStr) => {
    if (!timeStr) return -1;
    const match = String(timeStr).trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return -1;
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const modifier = match[3].toUpperCase();

    if (modifier === "PM" && hours < 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    return hours * 60 + minutes;
  };

  const isPastSlot = useCallback(
    (slotTime) => {
      const selectedDate = formData.preferredDate;
      if (!selectedDate || !isSameDate(selectedDate, getTodayDateString())) {
        return false;
      }
      const slotMin = parseTimeToMinutes(slotTime);
      if (slotMin === -1) return false;

      const now = new Date();
      const currentMin = now.getHours() * 60 + now.getMinutes();
      return slotMin <= currentMin;
    },
    [formData.preferredDate]
  );

  const isBookedSlot = useCallback(
    (slotTime) => {
      if (!confirmedAppointments || confirmedAppointments.length === 0) return false;

      const selectedDate = formData.preferredDate;
      const selectedHospital = formData.hospital;

      return confirmedAppointments.some((apt) => {
        const isConfirmed = (apt.status || "").toLowerCase() === "confirmed";
        if (!isConfirmed) return false;

        const dateMatch = isSameDate(apt.date, selectedDate);
        const hospitalMatch = isSameHospital(apt.centre || apt.hospital, selectedHospital);

        const aptTimeStr = String(apt.time || "").trim().toLowerCase();
        const slotTimeStr = String(slotTime || "").trim().toLowerCase();
        return dateMatch && hospitalMatch && aptTimeStr === slotTimeStr;
      });
    },
    [confirmedAppointments, formData.preferredDate, formData.hospital]
  );

  const isSlotDisabled = useCallback(
    (slotTime) => {
      return isPastSlot(slotTime) || isBookedSlot(slotTime);
    },
    [isPastSlot, isBookedSlot]
  );

  const validateField = (name, value) => {
    let error = "";
    if (name === "name") {
      const trimmed = value.trim();
      if (!trimmed) {
        error = "Name is required.";
      } else if (trimmed.length < 2) {
        error = "Name must be at least 2 characters long.";
      } else if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
        error = "Name should contain only letters and spaces.";
      }
    } else if (name === "phone") {
      const trimmed = value.trim();
      const cleaned = trimmed.replace(/[\s\-\+\(\)]/g, "");
      const digitsOnly =
        cleaned.startsWith("91") && cleaned.length === 12
          ? cleaned.slice(2)
          : cleaned.startsWith("0") && cleaned.length === 11
          ? cleaned.slice(1)
          : cleaned;

      if (!trimmed) {
        error = "Phone number is required.";
      } else if (!/^[6-9]\d{9}$/.test(digitsOnly)) {
        error = "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
      }
    } else if (name === "email") {
      const trimmed = value.trim();
      if (trimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        error = "Please enter a valid email address (e.g. example@gmail.com).";
      }
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Strictly prevent numbers and special characters from being typed in Name field
    if (name === "name" && value && !/^[a-zA-Z\s.'-]*$/.test(value)) {
      return;
    }
    // Strictly allow only numbers and phone symbols in Phone field
    if (name === "phone" && value && !/^[0-9\s\-\+\(\)]*$/.test(value)) {
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Derived active hospital information for dynamic UI
  const isEveningSelected =
    formData.hospital.includes("Shilpi") || formData.hospital.includes("Evening");
  const activeHospital = isEveningSelected
    ? hospitalsInfo.evening
    : hospitalsInfo.morning;
  const activeServices = isEveningSelected
    ? hospitalServices.evening
    : hospitalServices.morning;
  const activeTimeSlots = isEveningSelected
    ? timeSlots.evening
    : timeSlots.morning;

  // Auto switch preferred time if currently selected slot becomes disabled
  useEffect(() => {
    if (isSlotDisabled(formData.preferredTime)) {
      const available = activeTimeSlots.find((s) => !isSlotDisabled(s));
      if (available) {
        setFormData((prev) => ({ ...prev, preferredTime: available }));
      }
    }
  }, [formData.preferredDate, formData.hospital, confirmedAppointments, isSlotDisabled, activeTimeSlots]);

  // Sync initial hospital and step ONCE when hospitalParam is present in URL
  useEffect(() => {
    if (hospitalParam === "evening") {
      setFormData((prev) => ({
        ...prev,
        hospital: hospitalsInfo.evening.fullOption,
      }));
      setCurrentStep(2);
    } else if (hospitalParam === "morning") {
      setFormData((prev) => ({
        ...prev,
        hospital: hospitalsInfo.morning.fullOption,
      }));
      setCurrentStep(2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const nameErr = validateField("name", formData.name);
    const phoneErr = validateField("phone", formData.phone);

    if (nameErr || phoneErr) {
      setFormErrors({ name: nameErr, phone: phoneErr });
      setErrorMessage("Please correct the highlighted errors before submitting.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setFormErrors({});

    try {
      const getApiUrls = () => {
        const urls = [];
        const hostname = typeof window !== "undefined" ? window.location.hostname : "";
        if (import.meta.env.VITE_API_BASE_URL) {
          urls.push(import.meta.env.VITE_API_BASE_URL);
        }
        urls.push("https://dr-vinish-backend.onrender.com/api");
        if (hostname === "localhost" || hostname === "127.0.0.1") {
          urls.push(`http://${hostname}:5000/api`);
        }
        return Array.from(new Set(urls));
      };

      const apiUrls = getApiUrls();
      let savedToBackend = false;
      let isEmailDispatched = false;
      const formattedAptDate = formatDateFormatted(formData.preferredDate);
      const fullMessage = `Hospital: ${formData.hospital} | Date: ${formattedAptDate} | Preferred Time: ${formData.preferredTime} | Type: ${formData.consultationType} | Email: ${formData.email.trim() || "N/A"} | Notes: ${formData.message || "N/A"}`;
      const submittedUserEmail = formData.email ? formData.email.trim() : "";

      for (const baseUrl of apiUrls) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 15000);

          const res = await fetch(`${baseUrl}/appointments`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            signal: controller.signal,
            body: JSON.stringify({
              name: formData.name,
              phone: formData.phone,
              email: submittedUserEmail,
              centre: formData.hospital || "Rudraksh IVF & Urology Centre (Sharda Nagar)",
              problem: formData.service || "General Urology Consultation",
              date: formattedAptDate,
              time: formData.preferredTime || "10:00 AM",
              preferredTime: formData.preferredTime || "10:00 AM",
              consultationType: formData.consultationType || "First Visit",
              message: fullMessage,
            }),
          });
          clearTimeout(timeoutId);

          if (res.ok) {
            savedToBackend = true;
            isEmailDispatched = true;
            break;
          }
        } catch (err) {
          // Try next fallback URL
        }
      }

      // Save appointment record to localStorage for Admin Panel sync
      const newAptRecord = {
        id: Date.now(),
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: submittedUserEmail,
        consultationType: formData.consultationType || "First Visit",
        centre: formData.hospital || "Rudraksh IVF & Urology Centre (Sharda Nagar)",
        problem: formData.service || "General Urology Consultation",
        date: formattedAptDate || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        time: formData.preferredTime || "10:00 AM",
        message: formData.message ? formData.message.trim() : "Appointment booking request from website",
        status: "Pending"
      };

      try {
        const existingApts = JSON.parse(localStorage.getItem('dr_vinish_appointments') || '[]');
        localStorage.setItem('dr_vinish_appointments', JSON.stringify([newAptRecord, ...existingApts]));
        window.dispatchEvent(new Event('storage'));
      } catch (err) {
        console.warn('LocalStorage save appointment error:', err);
      }

      // Fallback email dispatch to notify-email endpoint if main POST didn't report email success
      if (!isEmailDispatched) {
        for (const baseUrl of apiUrls) {
          try {
            const notifyRes = await fetch(`${baseUrl}/appointments/notify-email`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                appointment: newAptRecord,
                status: "Pending"
              }),
            });
            if (notifyRes.ok) {
              const notifyData = await notifyRes.json();
              if (notifyData && notifyData.result && notifyData.result.success) {
                isEmailDispatched = true;
                savedToBackend = true;
                break;
              }
            }
          } catch (e) {}
        }
      }

      if (!savedToBackend) {
        setErrorMessage("Server is unreachable right now. Please check backend connection or call helpline +91 89600 68307 directly.");
        return;
      }

      setSubmitted(true);
      setLastSubmittedPhone(formData.phone);
      setLastSubmittedEmail(submittedUserEmail);
      setEmailSentStatus(isEmailDispatched || !!submittedUserEmail);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: activeServices[0],
        hospital: formData.hospital,
        preferredDate: todayStr,
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
    <div className="bg-slate-50 font-sans min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
                  <p className="text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed mb-3">
                    Thank you! Our clinic receptionist will contact you at{" "}
                    <span className="font-extrabold text-[#0f2a4a]">{lastSubmittedPhone}</span> within 30 minutes to confirm your OPD time slot.
                  </p>

                  {lastSubmittedEmail && (
                    <div className="bg-white border border-emerald-200 rounded-xl p-3 max-w-md mx-auto mb-6 text-xs text-emerald-800 font-semibold flex items-center justify-center gap-2 shadow-2xs">
                      <span>📩 Confirmation Email sent to:</span>
                      <span className="font-extrabold underline text-[#103F7C]">{lastSubmittedEmail}</span>
                    </div>
                  )}
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
                            <option value={hospitalsInfo.morning.fullOption}>
                              {hospitalsInfo.morning.fullOption}
                            </option>
                            <option value={hospitalsInfo.evening.fullOption}>
                              {hospitalsInfo.evening.fullOption}
                            </option>
                          </select>
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <ChevronDown size={18} />
                          </div>
                        </div>

                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-slate-500 px-1">
                          <a
                            href={hospitalsInfo.morning.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 hover:underline font-bold inline-flex items-center gap-1"
                          >
                            <MapPin size={12} />
                            <span>Rudraksh IVF (Morning Map)</span>
                          </a>
                          <a
                            href={hospitalsInfo.evening.mapUrl}
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

                  {/* STEP 2: SELECT SPECIALITY, DATE, TIME SLOTS & CONSULTATION TYPE */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      {/* 1. SELECT SPECIALITY / TREATMENT */}
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

                      {/* 2. SELECT DATE & CONSULTATION TYPE GRID */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                        {/* SELECT DATE */}
                        <div>
                          <label className="block text-sm sm:text-base font-extrabold text-[#0f2a4a] mb-3 flex items-center gap-2">
                            <Calendar size={18} className="text-orange-500" />
                            <span>Select Date</span>
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              min={todayStr}
                              value={formData.preferredDate}
                              onChange={(e) =>
                                setFormData({ ...formData, preferredDate: e.target.value })
                              }
                              className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-white text-[#0f2a4a] text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all shadow-xs cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* CONSULTATION TYPE */}
                        <div>
                          <label className="block text-sm sm:text-base font-extrabold text-[#0f2a4a] mb-3">
                            Consultation Type
                          </label>
                          <div className="flex items-center gap-6 h-[52px] bg-slate-50/60 border border-slate-200/80 rounded-2xl px-5">
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

                      {/* 3. AVAILABLE TIME SLOTS (15-Minute Grid Buttons) */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="block text-sm sm:text-base font-extrabold text-[#0f2a4a] flex items-center gap-2">
                            <Clock size={18} className="text-orange-500" />
                            <span>Available Time Slots</span>
                          </label>
                          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            15-Min Slots • {activeHospital.timing}
                          </span>
                        </div>

                        <div
                          {...(isMobile ? { "data-lenis-prevent": "true" } : {})}
                          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5 max-h-56 sm:max-h-none overflow-y-auto sm:overflow-visible custom-scrollbar p-2 border border-slate-200/80 rounded-2xl bg-slate-50/40"
                        >
                          {activeTimeSlots.map((slot) => {
                            const isSelected = formData.preferredTime === slot;
                            const isDisabled = isSlotDisabled(slot);
                            return (
                              <button
                                key={slot}
                                type="button"
                                disabled={isDisabled}
                                onClick={() =>
                                  !isDisabled && setFormData({ ...formData, preferredTime: slot })
                                }
                                title={isBookedSlot(slot) ? "This time slot is already booked & confirmed." : isPastSlot(slot) ? "This time slot has already passed for today." : `Select ${slot}`}
                                className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-1 border ${
                                  isDisabled
                                    ? "bg-slate-100/90 border-slate-200/90 cursor-not-allowed opacity-70 select-none shadow-none"
                                    : isSelected
                                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-600 shadow-md shadow-orange-500/25 scale-[1.02] cursor-pointer"
                                    : "bg-white text-[#0f2a4a] border-slate-200/90 hover:border-orange-300 hover:bg-orange-50/30 hover:text-orange-600 shadow-2xs cursor-pointer"
                                }`}
                              >
                                {isDisabled ? (
                                  <div className="flex flex-col items-center justify-center leading-tight text-center">
                                    <span className="line-through text-slate-500 font-bold text-xs">{slot}</span>
                                    <span className={`text-[9px] font-extrabold tracking-tight no-underline uppercase mt-0.5 ${isBookedSlot(slot) ? "text-rose-500 font-black" : "text-slate-400 font-extrabold"}`}>
                                      {isBookedSlot(slot) ? "Booked" : "Passed"}
                                    </span>
                                  </div>
                                ) : (
                                  <>
                                    {isSelected && <Check size={14} className="shrink-0 stroke-[3]" />}
                                    <span>{slot}</span>
                                  </>
                                )}
                              </button>
                            );
                          })}
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
                          <span className="font-semibold text-slate-500">Appointment Date:</span>
                          <span className="font-extrabold text-[#0f2a4a] text-right">{formatDateFormatted(formData.preferredDate)}</span>
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
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* Your Name */}
                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f2a4a] mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter Your Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-semibold text-[#0f2a4a] focus:outline-none transition-all ${
                              formErrors.name
                                ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-red-50/20"
                                : "border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                            }`}
                          />
                          {formErrors.name && (
                            <p className="text-[11px] font-bold text-red-500 mt-1.5 flex items-center gap-1">
                              <AlertCircle size={12} className="shrink-0" />
                              <span>{formErrors.name}</span>
                            </p>
                          )}
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f2a4a] mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            maxLength={15}
                            placeholder="Enter 10-Digit Mobile Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-semibold text-[#0f2a4a] focus:outline-none transition-all ${
                              formErrors.phone
                                ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-red-50/20"
                                : "border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                            }`}
                          />
                          {formErrors.phone && (
                            <p className="text-[11px] font-bold text-red-500 mt-1.5 flex items-center gap-1">
                              <AlertCircle size={12} className="shrink-0" />
                              <span>{formErrors.phone}</span>
                            </p>
                          )}
                        </div>

                        {/* Gmail ID / Email Address */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f2a4a]">
                              Gmail ID / Email Address
                            </label>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                              For Instant Email Alert
                            </span>
                          </div>
                          <input
                            type="email"
                            name="email"
                            placeholder="e.g. user@gmail.com (To receive instant confirmation email)"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-semibold text-[#0f2a4a] focus:outline-none transition-all ${
                              formErrors.email
                                ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-red-50/20"
                                : "border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                            }`}
                          />
                          {formErrors.email && (
                            <p className="text-[11px] font-bold text-red-500 mt-1.5 flex items-center gap-1">
                              <AlertCircle size={12} className="shrink-0" />
                              <span>{formErrors.email}</span>
                            </p>
                          )}
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
                          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-98 shrink-0"
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
