import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Prostate.png";

export default function TesticularCancer() {
  return (
    <ConditionPage
      title="Testicular Cancer & High Inguinal Orchiectomy"
      subTitle="Urological Surgical Oncology & Testicular Prosthesis"
      description="High inguinal orchiectomy, tumor marker monitoring (AFP, hCG, LDH), retroperitoneal lymph node dissection (RPLND), and cosmetic testicular prosthesis by Dr. Vinish Kumar Singh."
      category="Urological Cancers"
      heroBg={heroImg}
      overviewTitle="High Cure-Rate Urological Oncology for Testicular Cancer"
      overviewText="Testicular cancer primarily affects young and middle-aged men (ages 15-45). With early detection and specialized surgical oncology care, testicular cancer has one of the highest cure rates (>95%) of any solid tumor. Dr. Vinish Kumar Singh performs precise high inguinal orchiectomy, tumor marker tracking, and cosmetic silicone prosthesis placement."
      treatmentCards={[
        {
          title: "High Inguinal Orchiectomy",
          desc: "Gold-standard surgical removal of affected testicle through groin incision preserving scrotal barrier.",
        },
        {
          title: "Cosmetic Silicone Testicular Prosthesis",
          desc: "Simultaneous or delayed implant placement restoring natural scrotal weight, symmetry, and confidence.",
        },
      ]}
      highlights={[
        "Over 95% overall cure rate with timely treatment",
        "Cosmetic testicular prosthesis placement",
        "Preserves fertility through sperm banking guidance",
      ]}
      detailedTreatments={[
        {
          title: "High Inguinal Radical Orchiectomy",
          desc: "Early vascular ligation via groin approach preventing tumor cell dissemination.",
          tag: "Gold Standard Surgery",
        },
        {
          title: "Retroperitoneal Lymph Node Dissection (RPLND)",
          desc: "Laparoscopic or open nerve-sparing excision of retroperitoneal lymph nodes for non-seminoma tumors.",
          tag: "Nerve-Sparing RPLND",
        },
        {
          title: "Multi-Modality Oncology Protocol",
          desc: "Integrated coordination with medical oncology for adjuvant BEP chemotherapy when indicated.",
          tag: "Integrated Oncology",
        },
      ]}
      symptoms={[
        {
          title: "Painless Hard Testicular Nodules",
          desc: "Firm, painless lump or hardness felt on the surface of the testicle.",
        },
        {
          title: "Scrotal Heaviness & Dull Ache",
          desc: "Sensation of drag or heaviness in the scrotum or lower abdomen.",
        },
        {
          title: "Sudden Fluid Collection in Scrotum",
          desc: "Sudden buildup of fluid around the testicle.",
        },
        {
          title: "Breast Tenderness or Enlargement",
          desc: "Gynecomastia caused by elevated beta-hCG hormone production.",
        },
      ]}
    />
  );
}
