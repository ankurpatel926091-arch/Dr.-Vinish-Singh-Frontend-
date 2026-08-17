import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Kidney Stone.png";
import urethralImg from "../../assets/images/urethral_stricture.jpg";

export default function Hematuria() {
  return (
    <ConditionPage
      title="Blood in Urine (Hematuria) Evaluation & Care"
      subTitle="Comprehensive Diagnostic Workup & Targeted Therapy"
      description="Expert evaluation of visible (gross) or microscopic blood in urine using painless cystoscopy, CT urography, and lab diagnostics by Dr. Vinish Kumar Singh."
      category="Urological Conditions"
      heroBg={heroImg}
      image={urethralImg}
      overviewTitle="Prompt Investigation for Urinary Bleeding"
      overviewText="Hematuria is the presence of red blood cells in urine. It can range from bright red or cola-colored urine (gross hematuria) to invisible blood detected only during routine urine tests (microscopic hematuria). Early clinical evaluation by Dr. Vinish Kumar Singh pinpoints the exact cause—whether kidney stones, urinary tract infections, enlarged prostate, or bladder lesions."
      treatmentCards={[
        {
          title: "Flexible Diagnostic Cystoscopy",
          desc: "Painless high-definition endoscopic view of the bladder lining to rule out bleeding sources.",
        },
        {
          title: "Multiphasic CT Urography",
          desc: "Advanced imaging evaluation of kidneys, ureters, and urinary bladder anatomy.",
        },
      ]}
      highlights={[
        "Accurate root-cause diagnosis of urinary bleeding",
        "Painless flexible camera examination under local anesthesia",
        "Comprehensive treatment plan tailored to patient health",
      ]}
      detailedTreatments={[
        {
          title: "Infection & Inflammation Management",
          desc: "Targeted culture-specific antibiotics for severe urinary tract and kidney infections.",
          tag: "Medical Therapy",
        },
        {
          title: "Endoscopic Stone & Lesion Removal",
          desc: "Minimally invasive laser removal of bleeding kidney/bladder stones or mucosal growths.",
          tag: "Laser Procedure",
        },
        {
          title: "Prostate Bleeding Control",
          desc: "HolEP or TURP surgery for fragile bleeding prostatic blood vessels in enlarged BPH.",
          tag: "Surgical Solution",
        },
      ]}
      symptoms={[
        {
          title: "Red, Pink or Brownish Urine",
          desc: "Noticeable change in urine color ranging from light pink to dark tea/cola shade.",
        },
        {
          title: "Passing Blood Clots",
          desc: "Small stringy or rounded blood clots during urination causing severe sharp pain.",
        },
        {
          title: "Painful Urination with Fever",
          desc: "Burning sensation during voiding accompanied by back pain or high chills.",
        },
        {
          title: "Silent Unexplained Hematuria",
          desc: "Blood in urine without any pain, requiring urgent urological examination.",
        },
      ]}
    />
  );
}
