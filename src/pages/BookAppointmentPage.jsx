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
  Hospital,
  Clock,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "../config/web3forms";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

const hospitalOptions = {
  morning: "Morning OPD: Rudraksh IVF & Urology Centre (Sharda Nagar, 10 AM - 01 PM)",
  evening: "Evening OPD: Dr. Shilpi Maternity & Urology Centre (Pakkabag, 03 PM - 06 PM)",
};

export default function BookAppointmentPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const hospitalParam = searchParams.get("hospital");
  const initialHospital =
    hospitalParam === "evening"
      ? hospitalOptions.evening
      : hospitalOptions.morning;

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [lastSubmittedPhone, setLastSubmittedPhone] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Laser Kidney Stones (RIRS / PCNL)",
    hospital: initialHospital,
    message: "",
  });

  useEffect(() => {
    if (hospitalParam === "evening") {
      setFormData((prev) => ({ ...prev, hospital: hospitalOptions.evening }));
    } else if (hospitalParam === "morning") {
      setFormData((prev) => ({ ...prev, hospital: hospitalOptions.morning }));
    }
  }, [hospitalParam]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please fill in all required fields (*).");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Appointment Request - ${formData.name}`,
          from_name: "Dr. Vinish Singh Website",
          name: formData.name,
          phone: formData.phone,
          hospital: formData.hospital,
          service: formData.service,
          message: formData.message || "N/A",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setLastSubmittedPhone(formData.phone);
        setFormData({
          name: "",
          phone: "",
          service: "Laser Kidney Stones (RIRS / PCNL)",
          hospital: formData.hospital,
          message: "",
        });
      } else {
        setErrorMessage(
          data.message || "Failed to submit appointment request. Please try again."
        );
      }
    } catch (err) {
      setErrorMessage(
        "Network error occurred. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 font-sans min-h-screen pb-16">
      {/* Page Hero Header */}
      <PageHero
        title="BOOK YOUR CONSULTATION"
        subTitle="Direct OPD Confirmation"
        description="Fill in your contact details below to confirm your OPD appointment with Senior Urologist Dr. Vinish Kumar Singh in Lucknow."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">

        {/* Back Button Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/#book-appointment"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#103F7C] hover:border-[#103F7C] text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Change / Select Hospital</span>
          </Link>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#103F7C] text-xs font-extrabold uppercase tracking-wider">
            <Zap size={14} className="text-amber-500 fill-amber-400" />
            <span>Instant OPD Confirmation</span>
          </div>
        </div>

        {/* ================= REDESIGNED APPOINTMENT FORM CARD ================= */}
        <ScrollReveal variant="fade-up">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden">

            {/* Form Title & Subtitle */}
            <div className="mb-8 border-b border-slate-100 pb-6">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Book Appointment
              </h1>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 font-medium">
                Select your preferred hospital centre and submit your request for direct OPD confirmation.
              </p>
            </div>

            {/* Success Notification Alert */}
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center my-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <CheckCircle2 size={36} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">
                  Appointment Request Submitted!
                </h2>
                <p className="text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed mb-6">
                  Thank you! Our clinic receptionist will contact you at{" "}
                  <span className="font-extrabold text-slate-900">{lastSubmittedPhone}</span> within 30 minutes to confirm your OPD time slot.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#103F7C] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-blue-900 transition-all cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                  <Link
                    to="/"
                    className="px-6 py-2.5 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold hover:bg-slate-200 transition-all"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error Notification Alert */}
                {errorMessage && (
                  <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-center gap-3 text-rose-700 text-xs sm:text-sm font-semibold">
                    <AlertCircle size={18} className="shrink-0 text-rose-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Field Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103F7C]/30 focus:border-[#103F7C] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
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
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103F7C]/30 focus:border-[#103F7C] transition-all"
                    />
                  </div>
                </div>

                {/* Field Row 2: Preferred Hospital Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Hospital Centre *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.hospital}
                      onChange={(e) =>
                        setFormData({ ...formData, hospital: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103F7C]/30 focus:border-[#103F7C] transition-all appearance-none pr-10 cursor-pointer"
                    >
                      <option value={hospitalOptions.morning}>
                        🌅 Morning OPD: Rudraksh IVF &amp; Urology Centre (Sharda Nagar, 10 AM - 01 PM)
                      </option>
                      <option value={hospitalOptions.evening}>
                        🌆 Evening OPD: Dr. Shilpi Maternity &amp; Urology Centre (Pakkabag, 03 PM - 06 PM)
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Field Row 3: Speciality / Condition */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select Speciality / Condition
                  </label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103F7C]/30 focus:border-[#103F7C] transition-all appearance-none pr-10 cursor-pointer"
                    >
                      <option value="Laser Kidney Stones (RIRS / PCNL)">
                        Laser Kidney Stones (RIRS / PCNL)
                      </option>
                      <option value="Prostate Surgery (HolEP / TURP)">
                        Prostate Surgery (HolEP / TURP)
                      </option>
                      <option value="Male Infertility Care & Micro-TESE">
                        Male Infertility Care &amp; Micro-TESE
                      </option>
                      <option value="Erectile Dysfunction & Sexual Health">
                        Erectile Dysfunction &amp; Sexual Health
                      </option>
                      <option value="Recurrent Female UTI & Incontinence">
                        Recurrent Female UTI &amp; Incontinence
                      </option>
                      <option value="Reconstructive Urology & Stricture">
                        Reconstructive Urology &amp; Stricture
                      </option>
                      <option value="Kidney Transplant Evaluation">
                        Kidney Transplant Evaluation
                      </option>
                      <option value="General Urology Consultation">
                        General Urology Consultation
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Field Row 4: Message (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe symptoms or query..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103F7C]/30 focus:border-[#103F7C] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-base shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-98"
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
              </form>
            )}

          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
