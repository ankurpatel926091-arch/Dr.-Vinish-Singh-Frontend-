import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Kidney Stone.png";

export default function KidneyCancer() {
  return (
    <ConditionPage
      title="Kidney Cancer & Radical / Partial Nephrectomy"
      subTitle="Nephron-Sparing Kidney Tumor Surgery"
      description="Laparoscopic partial nephrectomy (removing tumor while saving healthy kidney) and radical nephrectomy for renal cell carcinoma by Dr. Vinish Kumar Singh."
      category="Urological Cancers"
      heroBg={heroImg}
      overviewTitle="Sparing Healthy Kidney Tissue with Precision Surgery"
      overviewText="Kidney cancer (Renal Cell Carcinoma) is often discovered incidentally on ultrasound or CT scans done for unrelated reasons. When detected early, nephron-sparing partial nephrectomy allows complete surgical removal of the tumor while preserving the rest of the healthy kidney. Dr. Vinish Kumar Singh specializes in laparoscopic partial and radical nephrectomy."
      treatmentCards={[
        {
          title: "Laparoscopic Partial Nephrectomy",
          desc: "Keyhole tumor excision with real-time ultrasound guidance, preserving healthy kidney parenchyma.",
        },
        {
          title: "Laparoscopic Radical Nephrectomy",
          desc: "Complete keyhole removal of kidney and surrounding Gerota's fascia for large renal masses.",
        },
      ]}
      highlights={[
        "Nephron-sparing surgery saves healthy kidney function",
        "Keyhole laparoscopic approach with minimal blood loss",
        "High 5-year cure rate for localized renal tumors",
      ]}
      detailedTreatments={[
        {
          title: "Partial Nephrectomy (Nephron Sparing)",
          desc: "Gold standard for kidney tumors <4 cm, preserving long-term kidney function and avoiding dialysis risk.",
          tag: "Organ Preserving",
        },
        {
          title: "Radical Nephrectomy with Thrombus Excision",
          desc: "Advanced surgical removal of large kidney masses extending into the renal vein or inferior vena cava.",
          tag: "Complex Oncology",
        },
        {
          title: "Targeted Immunotherapy & TKI Therapy",
          desc: "Modern biological targeted molecular agents for advanced metastatic renal cell carcinoma.",
          tag: "Targeted Therapy",
        },
      ]}
      symptoms={[
        {
          title: "Painless Blood in Urine",
          desc: "Gross hematuria without any accompanying pain or infection.",
        },
        {
          title: "Flank / Side Abdominal Mass",
          desc: "Palpable lump or fullness felt in the side of the abdomen or lower back.",
        },
        {
          title: "Persistent Side Pain",
          desc: "Continuous dull ache in the side between ribs and hip.",
        },
        {
          title: "Unexplained Weight Loss & Fever",
          desc: "Loss of appetite, night sweats, fatigue, or low red blood cell count (anemia).",
        },
      ]}
    />
  );
}
