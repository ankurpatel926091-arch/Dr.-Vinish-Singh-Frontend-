import React from "react";
import ConditionPage from "../../components/ConditionPage";
import conditionImg from "../../assets/FemaleUrology/overactive_bladder.jpg";
import oabBanner from "../../assets/FemaleUrology/OveractiveBladder.png";

export default function Nocturia() {
  return (
    <ConditionPage
      title="Nocturia & Night Urination"
      subTitle="Nighttime Frequency Evaluation & Desmopressin Therapy"
      description="Frequency-volume chart profiling, nocturnal polyuria management, and medical therapy for night urination by Senior Urologist Dr. Vinish Kumar Singh."
      category="Female Urology Guide"
      heroBg={oabBanner}
      image={conditionImg}
      overviewTitle="Restful Sleep Without Interruption"
      overviewText="Nocturia—waking up 2 or more times per night specifically to pass urine—is a major cause of sleep fragmentation and daytime fatigue. Dr. Vinish Kumar Singh utilizes computerized 24-hour voiding diaries, nocturnal polyuria indices, and targeted vasopressin analog therapies to reduce night trips to 0-1."
      treatmentCards={[
        {
          title: "Frequency-Volume Chart & Voiding Diary",
          desc: "Comprehensive 24-hour voiding diary differentiating reduced nocturnal bladder capacity from nocturnal polyuria.",
        },
        {
          title: "Desmopressin & Targeted Antidiuretic Therapy",
          desc: "Low-dose bedtime vasopressin analogs reducing nighttime renal water excretion and urine volume.",
        },
      ]}
      highlights={[
        "Dramatically improves night sleep quality & eliminates daytime fatigue",
        "Reduces nighttime restroom trips down to 0-1 per night safely",
        "Targeted hormonal & fluid management tailored to patient health",
      ]}
      detailedTreatments={[
        {
          title: "Frequency-Volume Voiding Diary Analysis",
          desc: "Precision tracking of fluid intake, daytime output, and nighttime voided volumes.",
          tag: "Diagnostic Profiling",
        },
        {
          title: "Low-Dose Sublingual Desmopressin (Melt)",
          desc: "Targeted bedtime antidiuretic therapy reducing nocturnal urine production.",
          tag: "Targeted Medical Therapy",
        },
        {
          title: "Third-Space Fluid Shift Management",
          desc: "Daytime compression stockings and afternoon leg elevation preventing night fluid shift.",
          tag: "Fluid Management",
        },
      ]}
      symptoms={[
        {
          title: "Waking 2+ Times Every Night",
          desc: "Consistently waking up multiple times per night solely to pass urine.",
        },
        {
          title: "High Nighttime Urine Volume",
          desc: "Passing large, normal volumes of urine specifically during sleep hours.",
        },
        {
          title: "Daytime Exhaustion & Brain Fog",
          desc: "Severe daytime sleepiness and lack of concentration due to broken sleep cycles.",
        },
        {
          title: "Lower Limb Evening Swelling (Edema)",
          desc: "Fluid pooling in legs during day redistributing to kidneys upon lying down.",
        },
      ]}
      faqs={[
        {
          q: "What is the difference between Nocturia and Overactive Bladder?",
          a: "Nocturia refers specifically to waking up at night to pass urine due to excess night urine volume or reduced night bladder capacity. Overactive Bladder involves sudden urgency during both day and night.",
        },
        {
          q: "Is Desmopressin safe for treating nighttime urination?",
          a: "Yes. Low-dose bedtime Desmopressin is highly effective and safe when monitored with periodic serum sodium blood checks.",
        },
        {
          q: "What simple evening habits help reduce night urination?",
          a: "Restricting fluid intake 2-3 hours before bedtime, avoiding evening caffeine/alcohol, and elevating legs for 1-2 hours before sleep significantly reduce nocturia.",
        },
      ]}
    />
  );
}
