import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Kidney Stone.png";
import transplantImg from "../../assets/images/kidney_transplant.jpg";

export default function KidneyTransplantEval() {
  return (
    <ConditionPage
      title="Kidney Transplant Evaluation & Workup"
      subTitle="Pre-Transplant Clinical, Immunological & Vascular Workup"
      description="Comprehensive pre-transplant evaluation for patients with End-Stage Renal Disease (ESRD) by Senior Urologist & Transplant Surgeon Dr. Vinish Kumar Singh."
      category="Renal Transplant"
      heroBg={heroImg}
      image={transplantImg}
      overviewTitle="Thorough Preparation for Successful Renal Transplant"
      overviewText="Kidney transplant evaluation is a comprehensive diagnostic process to determine a patient's readiness for renal transplantation. Dr. Vinish Kumar Singh evaluates cardiac status, vascular anatomy, HLA tissue crossmatching, and lower urinary tract health to ensure optimal surgical success and long-term graft survival."
      treatmentCards={[
        {
          title: "HLA & Crossmatch Compatibility",
          desc: "Advanced tissue typing and donor-recipient compatibility testing to prevent rejection.",
        },
        {
          title: "Urological Lower Tract Assessment",
          desc: "Diagnostic cystoscopy and urodynamics to verify healthy bladder function prior to graft placement.",
        },
      ]}
      highlights={[
        "Complete multi-specialty pre-transplant clearance",
        "Optimizes post-transplant graft survival rate",
        "Expert guidance through government & hospital donor protocols",
      ]}
      detailedTreatments={[
        {
          title: "Recipient Vascular Mapping",
          desc: "CT angiography evaluation of iliac vessels to plan arterial and venous anastomoses.",
          tag: "Vascular Planning",
        },
        {
          title: "Immunological Risk Stratification",
          desc: "Donor-specific antibody screening and desensitization planning for high-risk recipients.",
          tag: "Immunology",
        },
        {
          title: "Bladder Augmentation / Reconstruction",
          desc: "Preparing dysfunctional neurogenic bladders prior to transplant to safeguard the new graft.",
          tag: "Reconstructive Care",
        },
      ]}
      symptoms={[
        {
          title: "End-Stage Renal Failure (ESRD)",
          desc: "eGFR <15 mL/min requiring maintenance hemodialysis or peritoneal dialysis.",
        },
        {
          title: "High Serum Creatinine & Urea",
          desc: "Elevated metabolic waste build-up causing fatigue, edema, and nausea.",
        },
        {
          title: "Dialysis Dependency",
          desc: "Patient seeking permanent freedom from recurring dialysis treatments.",
        },
        {
          title: "Fluid Overload & Uremic Symptoms",
          desc: "Swelling in legs, shortness of breath, and appetite loss due to kidney failure.",
        },
      ]}
    />
  );
}
