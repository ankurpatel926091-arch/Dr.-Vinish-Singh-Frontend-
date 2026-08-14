import React from "react";
import ConditionPage from "../../components/ConditionPage";
import edBanner from "../../assets/Male Urology/Erectile Dysfunction.png";

export default function ErectileDysfunction() {
  return (
    <ConditionPage
      title="Erectile Dysfunction (ED) Shockwave & Modern Therapy"
      subTitle="Painless Vascular Rejuvenation & Confidential Male Healthcare"
      description="Non-invasive low-intensity shockwave therapy (Li-ESWT), penile vascular Doppler, testosterone replacement, and penile implant surgery by Senior Andrologist Dr. Vinish Kumar Singh."
      category="Andrological Conditions"
      heroBg={edBanner}
      overviewTitle="Restoring Natural Penile Blood Flow & Firmness"
      overviewText="Erectile Dysfunction (ED) is the inability to achieve or maintain an erection firm enough for satisfactory intimacy. It is primarily a vascular blood flow issue that responds exceptionally well to modern low-intensity shockwave therapy (Li-ESWT), medical optimization, and hormonal balancing. Dr. Vinish Kumar Singh offers compassionate, 100% confidential care."
      treatmentCards={[
        {
          title: "Low-Intensity Shockwave (Li-ESWT)",
          desc: "Painless acoustic soundwave therapy that stimulates new blood vessel formation (neovascularization) for natural erection improvement.",
        },
        {
          title: "Penile Doppler & Medical Optimization",
          desc: "Comprehensive vascular blood flow assessment, PDE5-inhibitor dose optimization, and testosterone replacement therapy (TRT).",
        },
      ]}
      highlights={[
        "100% Non-Invasive & Painless Shockwave Therapy",
        "100% Confidential Doctor Consultation",
        "Restores natural blood flow & intimacy confidence",
      ]}
      detailedTreatments={[
        {
          title: "Li-ESWT Acoustic Shockwave Rejuvenation",
          desc: "FDA-approved painless outpatient procedure inducing new micro-blood vessel growth in penile tissues.",
          tag: "Non-Invasive Therapy",
        },
        {
          title: "Penile Vascular Color Doppler & TRT",
          desc: "Diagnostic blood flow velocity mapping and hormonal optimization for long-term physiological recovery.",
          tag: "Vascular Diagnostics",
        },
        {
          title: "Penile Prosthesis Implant Surgery",
          desc: "Placement of malleable or 3-piece inflatable penile implants for permanent reliability when pills fail.",
          tag: "Permanent Solution",
        },
      ]}
      symptoms={[
        {
          title: "Difficulty Achieving Firm Erection",
          desc: "Inability to get an erection firm enough for penetration.",
        },
        {
          title: "Difficulty Maintaining Erection",
          desc: "Losing erection strength midway during intercourse.",
        },
        {
          title: "Reduced Sex Drive & Fatigue",
          desc: "Diminished desire or energy associated with low serum testosterone levels.",
        },
        {
          title: "Performance Anxiety & Stress",
          desc: "Apprehension and stress linked to prior incomplete erection attempts.",
        },
      ]}
    />
  );
}
