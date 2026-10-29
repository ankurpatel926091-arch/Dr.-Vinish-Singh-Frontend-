import React, { useState, useEffect, useCallback, useRef } from "react";
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

const hospitalServicesMap = {
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

const timeSlotsMap = {
  morning: [
    "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM",
    "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
    "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM",
    "01:00 PM", "01:15 PM", "01:30 PM", "01:45 PM",
    "02:00 PM", "02:15 PM", "02:30 PM", "02:45 PM",
    "03:00 PM",
  ],
  evening: [
    "03:00 PM", "03:15 PM", "03:30 PM", "03:45 PM",
    "04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM",
    "05:00 PM", "05:15 PM", "05:30 PM", "05:45 PM",
    "06:00 PM", "06:15 PM", "06:30 PM", "06:45 PM",
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

const getTomorrowDateString = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getPhoneNumbers = (phone = "") =>
  phone.split(/[;,]/).map((number) => number.trim()).filter(Boolean);

const getNextDayDateString = (dateStr) => {
  if (!dateStr) return getTomorrowDateString();
  try {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      d.setDate(d.getDate() + 1);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
  } catch (e) {}
  return getTomorrowDateString();
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

  const dateInputRef = useRef(null);

  const handleOpenDatePicker = () => {
    try {
      if (dateInputRef.current && typeof dateInputRef.current.showPicker === "function") {
        dateInputRef.current.showPicker();
      } else if (dateInputRef.current) {
        dateInputRef.current.focus();
      }
    } catch (err) {}
  };

  const [clinicsList, setClinicsList] = useState([]);
  const [clinicsLoading, setClinicsLoading] = useState(true);
  const [clinicsError, setClinicsError] = useState("");
  const hospitalParam = searchParams.get("hospital");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    clinic: "",
    service: hospitalServicesMap.morning[0],
    preferredDate: "",
    preferredTime: "",
    consultationType: "First Visit",
    message: "",
  });

  const loadClinics = useCallback(async () => {
    setClinicsLoading(true);
    setClinicsError("");
    try {
      const data = await fetchPublicClinics();
      setClinicsList(data);

      const paramLower = (hospitalParam || "").toLowerCase();
      let targetClinic = data.find((clinic) => String(clinic._id || clinic.id) === hospitalParam) || data[0];

      if (targetClinic && targetClinic === data[0] && paramLower === "evening") {
        targetClinic = data.find(c => (c.tag || c.type || c.clinicId || "").toLowerCase().includes("evening") || (c.name && c.name.includes("Shilpi"))) || data[0];
      } else if (targetClinic && targetClinic === data[0] && paramLower === "morning") {
        targetClinic = data.find(c => (c.tag || c.type || c.clinicId || "").toLowerCase().includes("morning") || (c.name && c.name.includes("Rudraksh"))) || data[0];
      }

      if (targetClinic) {
        const targetId = targetClinic._id || targetClinic.id;
        setFormData(prev => ({
          ...prev,
          clinic: prev.clinic || targetId
        }));
      }
    } catch (error) {
      setClinicsList([]);
      setClinicsError(error instanceof Error ? error.message : "Unable to load clinic details.");
    } finally {
      setClinicsLoading(false);
    }
  }, [hospitalParam]);

  useEffect(() => {
    loadClinics();
  }, [loadClinics]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [lastSubmittedPhone, setLastSubmittedPhone] = useState("");
  const [lastSubmittedEmail, setLastSubmittedEmail] = useState("");
  const [emailSentStatus, setEmailSentStatus] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const todayStr = getTodayDateString();

  // Find current selected clinic object
  const activeClinic = clinicsList.find(c => String(c._id || c.id) === String(formData.clinic)) || clinicsList[0] || null;
  const activeClinicPhoneNumbers = getPhoneNumbers(activeClinic?.phone);

  const activeClinicType = (activeClinic?.tag || activeClinic?.type || activeClinic?.clinicId || "").toLowerCase();
  const isEveningSelected = activeClinicType.includes("evening") || (activeClinic?.name && activeClinic.name.includes("Shilpi"));
  const activeServices = isEveningSelected ? hospitalServicesMap.evening : hospitalServicesMap.morning;
  const activeTimeSlots = isEveningSelected ? timeSlotsMap.evening : timeSlotsMap.morning;

  // State for tracking Admin Confirmed appointments to disable slots
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [slotAvailabilityError, setSlotAvailabilityError] = useState("");
  const [slotAvailabilityLoading, setSlotAvailabilityLoading] = useState(true);

  const loadConfirmedAppointments = useCallback(async () => {
    setSlotAvailabilityLoading(true);
    setSlotAvailabilityError("");
    const getApiUrls = () => {
      const urls = [];
      const hostname = typeof window !== "undefined" ? window.location.hostname : "";
      if (hostname === "localhost" || hostname === "127.0.0.1") {
        urls.push(`http://${hostname}:5000/api`);
      }
      if (import.meta.env.VITE_API_BASE_URL) {
        urls.push(import.meta.env.VITE_API_BASE_URL);
      }
      urls.push("https://dr-vinish-backend.onrender.com/api");
      return Array.from(new Set(urls));
    };

    const apiUrls = getApiUrls();
    const errors = [];

    for (const baseUrl of apiUrls) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      try {
        const res = await fetch(`${baseUrl}/appointments/public/confirmed-slots`, {
          signal: controller.signal,
        });
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) {
            setConfirmedAppointments(json.data);
            setSlotAvailabilityError("");
            setSlotAvailabilityLoading(false);
            return;
          }
          errors.push(`${baseUrl} returned an invalid confirmed-slots response`);
        } else {
          errors.push(`${baseUrl} returned ${res.status}`);
        }
      } catch (error) {
        errors.push(`${baseUrl}: ${error instanceof Error ? error.message : String(error)}`);
      } finally {
        clearTimeout(timeoutId);
      }
    }

    setConfirmedAppointments([]);
    setSlotAvailabilityLoading(false);
    throw new Error(`Unable to load appointment availability. ${errors.join("; ")}`);
  }, []);

  useEffect(() => {
    loadConfirmedAppointments().catch((error) => {
      setSlotAvailabilityError(error instanceof Error ? error.message : "Unable to load appointment availability.");
      setSlotAvailabilityLoading(false);
    });
  }, [loadConfirmedAppointments]);

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

  const isSameClinic = (aptClinic, currentClinicId) => {
    if (!aptClinic || !currentClinicId) return true;

    if (typeof aptClinic === "object" && aptClinic._id) {
      if (String(aptClinic._id) === String(currentClinicId)) return true;
    }

    if (typeof aptClinic === "string") {
      if (aptClinic === String(currentClinicId)) return true;
      const c1 = aptClinic.toLowerCase();
      const clinicType = (activeClinic?.tag || activeClinic?.type || activeClinic?.clinicId || "").toLowerCase();
      const isEveningSelected = clinicType.includes("evening");
      const isAptEvening = c1.includes("shilpi") || c1.includes("evening");
      return isAptEvening === isEveningSelected;
    }

    return false;
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
    (slotTime, targetDate) => {
      const selectedDate = targetDate !== undefined ? targetDate : formData.preferredDate;
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
    (slotTime, targetDate) => {
      if (!confirmedAppointments || confirmedAppointments.length === 0) return false;

      const selectedDate = targetDate !== undefined ? targetDate : formData.preferredDate;
      const selectedClinicId = formData.clinic;

      return confirmedAppointments.some((apt) => {
        const st = (apt.status || "").toLowerCase();
        const isCancelled = st === "cancelled" || st === "canceled" || st === "rejected";
        if (isCancelled) return false;

        const dateMatch = isSameDate(apt.date, selectedDate);
        const clinicMatch = isSameClinic(apt.clinic || apt.centre || apt.hospital, selectedClinicId);

        const aptTimeStr = String(apt.time || "").trim().toLowerCase();
        const slotTimeStr = String(slotTime || "").trim().toLowerCase();
        return dateMatch && clinicMatch && aptTimeStr === slotTimeStr;
      });
    },
    [confirmedAppointments, formData.preferredDate, formData.clinic]
  );

  const isSlotDisabled = useCallback(
    (slotTime, targetDate) => {
      return isPastSlot(slotTime, targetDate) || isBookedSlot(slotTime, targetDate);
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
    if (name === "name" && value && !/^[a-zA-Z\s.'-]*$/.test(value)) {
      return;
    }
    if (name === "phone" && value && !/^[0-9\s\-\+\(\)]*$/.test(value)) {
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const findNextAvailableDate = useCallback(
    (startDateStr) => {
      let curr = startDateStr || getTodayDateString();
      for (let i = 0; i < 30; i++) {
        const hasOpenSlot = activeTimeSlots.some((slot) => !isSlotDisabled(slot, curr));
        if (hasOpenSlot) {
          return curr;
        }
        curr = getNextDayDateString(curr);
      }
      return getNextDayDateString(startDateStr || getTodayDateString());
    },
    [activeTimeSlots, isSlotDisabled]
  );

  useEffect(() => {
    const checkDate = formData.preferredDate || getTodayDateString();

    if (activeTimeSlots.length > 0) {
      const allSlotsDisabled = activeTimeSlots.every((slot) => isSlotDisabled(slot, checkDate));

      if (allSlotsDisabled) {
        const nextDate = findNextAvailableDate(checkDate);
        if (nextDate !== formData.preferredDate) {
          setFormData((prev) => ({ ...prev, preferredDate: nextDate }));
        }
      } else if (!formData.preferredDate) {
        setFormData((prev) => ({ ...prev, preferredDate: checkDate }));
      }
    }
  }, [
    formData.preferredDate,
    formData.clinic,
    activeTimeSlots,
    isSlotDisabled,
    findNextAvailableDate,
  ]);

  useEffect(() => {
    if (formData.preferredDate && formData.consultationType) {
      if (!formData.preferredTime || isSlotDisabled(formData.preferredTime)) {
        const available = activeTimeSlots.find((s) => !isSlotDisabled(s));
        if (available) {
          setFormData((prev) => ({ ...prev, preferredTime: available }));
        }
      }
    } else if (formData.preferredTime) {
      setFormData((prev) => ({ ...prev, preferredTime: "" }));
    }
  }, [formData.preferredDate, formData.consultationType, formData.clinic, confirmedAppointments, isSlotDisabled, activeTimeSlots]);

  useEffect(() => {
    if (!activeServices.includes(formData.service)) {
      setFormData((prev) => ({ ...prev, service: activeServices[0] }));
    }
    if (formData.preferredTime && !activeTimeSlots.includes(formData.preferredTime)) {
      setFormData((prev) => ({ ...prev, preferredTime: "" }));
    }
  }, [formData.clinic, isEveningSelected]);

  const handleNextFromStep1 = (e) => {
    e.preventDefault();
    if (!formData.clinic) {
      setErrorMessage("Please select a clinic centre.");
      return;
    }
    setErrorMessage("");
    setCurrentStep(2);
  };

  const handleNextFromStep2 = (e) => {
    e.preventDefault();
    if (slotAvailabilityLoading || slotAvailabilityError) {
      setErrorMessage("Appointment availability is not confirmed yet. Please try again later.");
      return;
    }
    if (!formData.preferredDate) {
      setErrorMessage("Please select an appointment date.");
      return;
    }
    if (!formData.consultationType) {
      setErrorMessage("Please select consultation type (First Visit or Follow-up).");
      return;
    }
    if (!formData.preferredTime) {
      setErrorMessage("Please select an available time slot.");
      return;
    }
    setErrorMessage("");
    setCurrentStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (slotAvailabilityLoading || slotAvailabilityError) {
      setErrorMessage("Appointment availability is not confirmed yet. Please try again later.");
      return;
    }

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
        if (hostname === "localhost" || hostname === "127.0.0.1") {
          urls.push(`http://${hostname}:5000/api`);
        }
        if (import.meta.env.VITE_API_BASE_URL) {
          urls.push(import.meta.env.VITE_API_BASE_URL);
        }
        urls.push("https://dr-vinish-backend.onrender.com/api");
        return Array.from(new Set(urls));
      };

      const apiUrls = getApiUrls();
      let savedToBackend = false;
      let isEmailDispatched = false;
      const formattedAptDate = formatDateFormatted(formData.preferredDate);
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
              name: formData.name.trim(),
              phone: formData.phone.trim(),
              email: submittedUserEmail,
              clinic: formData.clinic,
              problem: formData.service || "General Urology Consultation",
              date: formattedAptDate,
              time: formData.preferredTime || "10:00 AM",
              consultationType: formData.consultationType || "First Visit",
              message: formData.message ? formData.message.trim() : "",
            }),
          });
          clearTimeout(timeoutId);

          if (res.ok) {
            savedToBackend = true;
            isEmailDispatched = true;
            break;
          }
        } catch (err) {}
      }

      if (!savedToBackend) {
        setErrorMessage("Server is unreachable right now. Please check your connection and try again later.");
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
        clinic: formData.clinic,
        service: activeServices[0],
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

  if (clinicsLoading || !activeClinic) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 text-center">
        <p role={clinicsError ? "alert" : undefined} className={clinicsError ? "text-sm text-red-700" : "text-sm text-slate-500"}>
          {clinicsLoading ? "Loading clinic details..." : clinicsError || "No clinic locations are currently available."}
        </p>
      </div>
    );
  }

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

        {(slotAvailabilityLoading || slotAvailabilityError) && (
          <div role="alert" className="max-w-3xl mx-auto mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {slotAvailabilityLoading
              ? "Checking appointment availability..."
              : "Appointment availability could not be loaded. Booking is unavailable until the server can confirm open slots."}
          </div>
        )}

        {/* Main Appointment Card */}
        <ScrollReveal variant="fade-up">
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl max-w-full">
            
            {/* Card Content & Form */}
            <div className={`p-4 sm:p-8 lg:p-10 ${submitted ? "pb-2 sm:pb-3 lg:pb-3" : ""}`}>

              {/* Step Progress Bar */}
              {!submitted && (
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6 sm:pb-6 sm:mb-8 px-1 sm:px-4">
                  {/* Step 1: Hospital */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className={`flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm cursor-pointer transition-all ${
                      currentStep === 1
                        ? "text-[#0f2a4a] font-black"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-extrabold transition-all shrink-0 ${
                        currentStep === 1
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm"
                          : currentStep > 1
                          ? "bg-[#103F7C] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {currentStep > 1 ? "✓" : "1"}
                    </span>
                    <span className="text-[11px] sm:text-sm">Hospital</span>
                  </button>

                  <div
                    className={`flex-1 h-0.5 mx-1.5 sm:mx-4 transition-all min-w-[12px] ${
                      currentStep > 1 ? "bg-orange-500" : "bg-slate-200"
                    }`}
                  />

                  {/* Step 2: Speciality */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className={`flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm cursor-pointer transition-all ${
                      currentStep === 2
                        ? "text-[#0f2a4a] font-black"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-extrabold transition-all shrink-0 ${
                        currentStep === 2
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm"
                          : currentStep > 2
                          ? "bg-[#103F7C] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {currentStep > 2 ? "✓" : "2"}
                    </span>
                    <span className="text-[11px] sm:text-sm">Speciality</span>
                  </button>

                  <div
                    className={`flex-1 h-0.5 mx-1.5 sm:mx-4 transition-all min-w-[12px] ${
                      currentStep > 2 ? "bg-orange-500" : "bg-slate-200"
                    }`}
                  />

                  {/* Step 3: Details */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className={`flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm cursor-pointer transition-all ${
                      currentStep === 3
                        ? "text-[#0f2a4a] font-black"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-extrabold transition-all shrink-0 ${
                        currentStep === 3
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      3
                    </span>
                    <span className="text-[11px] sm:text-sm">Details</span>
                  </button>
                </div>
              )}

              {/* Dynamic Selected Hospital Info Banner (Shows on Step 2 & 3) */}
              {!submitted && currentStep > 1 && activeClinic && (
                <div className="bg-gradient-to-r from-blue-50/80 via-slate-50 to-orange-50/40 border border-blue-100 rounded-2xl p-3.5 sm:p-5 mb-6 shadow-xs animate-fadeIn">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#103F7C]/10 text-[#103F7C] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider mb-1">
                        <Hospital size={12} />
                        <span>{activeClinic.badgeLabel || activeClinic.tag}</span>
                      </div>
                      <h3 className="text-sm sm:text-lg font-extrabold text-[#0f2a4a] leading-tight">
                        {activeClinic.name}
                      </h3>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span>⏰ <strong>Hours:</strong> {activeClinic.timings || activeClinic.timing}</span>
                        {activeClinic.phone && (
                          <span className="inline-flex flex-wrap items-center gap-x-1">
                            📞 <strong>Helpline:</strong>
                            {activeClinicPhoneNumbers.map((phone) => (
                              <a
                                key={phone}
                                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                                className="text-orange-600 font-extrabold hover:underline"
                              >
                                {phone}
                              </a>
                            ))}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="w-full sm:w-auto text-center px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-[#0f2a4a] text-xs font-bold hover:bg-slate-50 hover:border-orange-400 transition-all cursor-pointer shadow-2xs shrink-0"
                    >
                      Change Centre
                    </button>
                  </div>
                </div>
              )}
              
              {/* Success Notification Alert */}
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-8 text-center mt-4 mb-2 animate-fadeIn">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <CheckCircle2 size={32} className="sm:w-9 sm:h-9" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0f2a4a] mb-2">
                    Appointment Request Submitted!
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed mb-3">
                    Thank you! Our clinic receptionist will contact you at{" "}
                    <span className="font-extrabold text-[#0f2a4a]">{lastSubmittedPhone}</span> shortly to confirm your appointment.
                  </p>

                  {lastSubmittedEmail && (
                    <div className="bg-white border border-emerald-200 rounded-xl p-3 max-w-md mx-auto mb-6 text-xs text-emerald-800 font-semibold flex items-center justify-center gap-2 shadow-2xs">
                      <span>📩 Confirmation Email sent to:</span>
                      <span className="font-extrabold underline text-[#103F7C] break-all">{lastSubmittedEmail}</span>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs sm:text-sm font-bold shadow-md hover:from-orange-600 hover:to-orange-700 transition-all cursor-pointer text-center"
                    >
                      Submit Another Request
                    </button>
                    <Link
                      to="/"
                      className="px-6 py-3 rounded-full bg-slate-100 text-[#0f2a4a] text-xs sm:text-sm font-bold hover:bg-slate-200 transition-all text-center"
                    >
                      Return to Homepage
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-center gap-3 text-rose-700 text-xs sm:text-sm font-semibold">
                      <AlertCircle size={18} className="shrink-0 text-rose-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* STEP 1: SELECT HOSPITAL CLINIC CENTRE */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <label className="block text-xs sm:text-base font-extrabold uppercase tracking-wider text-[#0f2a4a] mb-2.5">
                          Select Hospital Clinic Centre
                        </label>
                        
                        {/* Requirement 13: Standard & Dynamic Clinic Select Dropdown */}
                        <div className="relative">
                          <select
                            name="clinic"
                            value={formData.clinic}
                            onChange={(e) => {
                              const selectedId = e.target.value;
                              setFormData(prev => ({ ...prev, clinic: selectedId }));
                            }}
                            className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-[#0f2a4a] text-sm sm:text-base font-bold focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all shadow-xs cursor-pointer appearance-none"
                          >
                            {clinicsList.map((c) => (
                              <option key={c._id || c.id} value={c._id || c.id}>
                                {c.name} {c.timings ? `(${c.timings})` : c.timing ? `(${c.timing})` : ''}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                        </div>

                        {/* Location Quick Maps Buttons */}
                        <div className="mt-3.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 text-xs font-semibold">
                          {clinicsList.map((c) => (
                            <a
                              key={c._id || c.id}
                              href={c.mapUrl || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-orange-50/80 hover:bg-orange-100 text-orange-700 font-bold border border-orange-200/70 transition-all text-xs text-center"
                            >
                              <MapPin size={13} className="text-orange-500 shrink-0" />
                              <span>{c.name} (Map)</span>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Step 1 Next Button */}
                      <div className="pt-2 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNextFromStep1}
                          className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
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
                      <div>
                        <label className="block text-xs sm:text-base font-extrabold uppercase tracking-wider text-[#0f2a4a] mb-2.5">
                          Select Speciality / Treatment
                        </label>
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-[#0f2a4a] text-sm sm:text-base font-bold focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all shadow-xs cursor-pointer appearance-none"
                          >
                            {activeServices.map((srv, i) => (
                              <option key={i} value={srv}>
                                {srv}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                        <div>
                          <label
                            onClick={handleOpenDatePicker}
                            className="block text-xs sm:text-base font-extrabold uppercase tracking-wider text-[#0f2a4a] mb-2 flex items-center gap-1.5 cursor-pointer select-none"
                          >
                            <Calendar size={16} className="text-orange-500" />
                            <span>Select Date</span>
                          </label>
                          <div className="relative cursor-pointer" onClick={handleOpenDatePicker}>
                            <input
                              ref={dateInputRef}
                              type="date"
                              min={todayStr}
                              value={formData.preferredDate}
                              onClick={handleOpenDatePicker}
                              onChange={(e) =>
                                setFormData({ ...formData, preferredDate: e.target.value })
                              }
                              className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border border-slate-200 bg-white text-[#0f2a4a] text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all shadow-xs cursor-pointer"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs sm:text-base font-extrabold uppercase tracking-wider text-[#0f2a4a] mb-2">
                            Consultation Type
                          </label>
                          <div className="flex items-center justify-around sm:justify-start gap-4 min-h-[50px] bg-slate-50/70 border border-slate-200/80 rounded-2xl px-4 py-2">
                            <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm font-extrabold text-[#0f2a4a] group">
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

                            <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm font-extrabold text-[#0f2a4a] group">
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

                      {formData.preferredDate && formData.consultationType && (
                        <div className="space-y-3 animate-fadeIn">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <label className="block text-xs sm:text-base font-extrabold uppercase tracking-wider text-[#0f2a4a] flex items-center gap-1.5">
                              <Clock size={16} className="text-orange-500" />
                              <span>Available Time Slots</span>
                            </label>
                            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                              15-Min Slots • {activeClinic.timings || activeClinic.timing}
                            </span>
                          </div>

                          <div
                            data-lenis-prevent="true"
                            data-lenis-prevent-touch="true"
                            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 max-h-60 sm:max-h-none overflow-y-auto sm:overflow-visible custom-scrollbar p-2 border border-slate-200/80 rounded-2xl bg-slate-50/40"
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
                                  className={`py-2 px-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1 border min-h-[44px] ${
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
                                      <span className="text-xs sm:text-sm">{slot}</span>
                                    </>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      <div className="pt-4 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <ArrowLeft size={18} />
                          <span>Back</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleNextFromStep2}
                          className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
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
                      <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-4 sm:p-5 space-y-2 text-xs sm:text-sm text-slate-600">
                        <div className="flex items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                          <span className="font-semibold text-slate-500">Selected Clinic:</span>
                          <span className="font-extrabold text-[#0f2a4a] text-right truncate max-w-[60%]">{activeClinic.name}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                          <span className="font-semibold text-slate-500">Speciality / Treatment:</span>
                          <span className="font-extrabold text-[#0f2a4a] text-right truncate max-w-[60%]">{formData.service}</span>
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

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
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
                            className={`w-full px-4 py-3.5 rounded-2xl border text-base sm:text-sm font-semibold text-[#0f2a4a] focus:outline-none transition-all ${
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
                            className={`w-full px-4 py-3.5 rounded-2xl border text-base sm:text-sm font-semibold text-[#0f2a4a] focus:outline-none transition-all ${
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

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f2a4a]">
                              Gmail ID / Email Address
                            </label>
                            <span className="text-[9px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
                              Instant Email Alert
                            </span>
                          </div>
                          <input
                            type="email"
                            name="email"
                            placeholder="e.g. user@gmail.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3.5 rounded-2xl border text-base sm:text-sm font-semibold text-[#0f2a4a] focus:outline-none transition-all ${
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
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-base sm:text-sm font-medium text-[#0f2a4a] focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all resize-none"
                        />
                      </div>

                      <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <ArrowLeft size={18} />
                          <span>Back</span>
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-98 shrink-0"
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

            <div className="bg-slate-50/70 border-t border-slate-100 py-3.5 px-4 sm:px-6 text-center text-xs sm:text-sm font-semibold text-slate-600">
              Need help for {activeClinic.name}? Call us at{" "}
              {activeClinic.phone && (
                activeClinicPhoneNumbers.map((phone) => (
                  <React.Fragment key={phone}>
                    <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="text-orange-600 font-bold hover:underline">
                      {phone}
                    </a>{" "}
                  </React.Fragment>
                ))
              )}
            </div>

          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
