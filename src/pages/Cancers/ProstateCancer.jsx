import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Prostate.png";
import cancerImg from "../../assets/images/urology_cancer.jpg";

export default function ProstateCancer() {
  return (
    <ConditionPage
      title="Prostate Cancer & Radical Prostatectomy"
      subTitle="Comprehensive Urological Oncology & Minimal Access Surgery"
      description="Advanced PSA screening, MRI-fusion prostate biopsy, nerve-sparing radical prostatectomy, and androgen deprivation therapy by Uro-Oncologist Dr. Vinish Kumar Singh."
      category="Urological Cancers"
      heroBg={heroImg}
      image={cancerImg}
      overviewTitle="Advanced Diagnosis & Surgical Oncology for Prostate Cancer"
      overviewText="Prostate cancer is one of the most common cancers in men, often developing silently without early symptoms. Elevated PSA levels or abnormal digital rectal exam require prompt specialist evaluation. Dr. Vinish Kumar Singh performs precision MRI-fusion transperineal biopsies and nerve-sparing radical prostatectomy to remove cancerous tissue while preserving urinary control and erectile function."
      treatmentCards={[
        {
          title: "Nerve-Sparing Radical Prostatectomy",
          desc: "Complete surgical removal of cancerous prostate gland while preserving urinary continence and erectile nerves.",
        },
        {
          title: "MRI-Fusion Transperineal Biopsy",
          desc: "High-precision targeted biopsy fusing multiparametric MRI with real-time ultrasound guidance.",
        },
      ]}
      highlights={[
        "Early stage cure through nerve-sparing radical surgery",
        "Preserves urinary continence & erectile nerve pathways",
        "Comprehensive multi-modality uro-oncology care",
      ]}
      detailedTreatments={[
        {
          title: "Laparoscopic Radical Prostatectomy",
          desc: "Keyhole radical excision of prostate and pelvic lymph nodes with 3D visualization.",
          tag: "Keyhole Surgery",
        },
        {
          title: "Androgen Deprivation Therapy (ADT)",
          desc: "Hormonal therapy blocking testosterone to control advanced or metastatic prostate disease.",
          tag: "Hormone Therapy",
        },
        {
          title: "Active Surveillance Protocol",
          desc: "Strict serial PSA and MRI monitoring for low-risk, slow-growing localized prostate tumors.",
          tag: "Surveillance Care",
        },
      ]}
      symptoms={[
        {
          title: "Elevated Blood PSA (>4 ng/mL)",
          desc: "High Prostate-Specific Antigen detected during routine blood checkup.",
        },
        {
          title: "Difficulty Urinating & Weak Stream",
          desc: "Hesitancy, weak flow, or frequent night urination similar to BPH.",
        },
        {
          title: "Blood in Urine or Semen",
          desc: "Reddish or pinkish tint in urine (hematuria) or ejaculatory fluid.",
        },
        {
          title: "Unexplained Bone or Pelvic Pain",
          desc: "Deep aching pain in lower back, hips, or pelvis in advanced stages.",
        },
      ]}
    />
  );
}
