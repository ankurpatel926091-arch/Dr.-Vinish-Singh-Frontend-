import React from "react";
import ConditionPage from "../../components/ConditionPage";
import maleInfertilityBanner from "../../assets/Male Urology/Male Infertility.png";

export default function MaleInfertility() {
  return (
    <ConditionPage
      title="Male Infertility & Micro-TESE Treatment"
      subTitle="Microsurgical Sperm Extraction & Advanced Fertility Care"
      description="Microscopic testicular sperm extraction (Micro-TESE), microscopic varicocelectomy, hormone optimization, and semen analysis by Senior Andrologist Dr. Vinish Kumar Singh."
      category="Andrological Conditions"
      heroBg={maleInfertilityBanner}
      overviewTitle="Advanced Microsurgical Solutions for Male Fertility"
      overviewText="Male factor infertility contributes to over 50% of couple conception difficulties. Conditions such as Azoospermia (zero sperm count), Oligozoospermia (low sperm count), Asthenozoospermia (low motility), and Varicocele are effectively diagnosed and treated by Dr. Vinish Kumar Singh using high-magnification microsurgical Micro-TESE and varicocelectomy."
      treatmentCards={[
        {
          title: "Micro-TESE (Microscopic Sperm Extraction)",
          desc: "High-magnification 20x operating microscope extraction of viable sperm from testicular tissue for IVF/ICSI.",
        },
        {
          title: "Microscopic Varicocelectomy",
          desc: "Gold-standard microsurgical ligation of dilated scrotal veins to restore sperm count, motility, and DNA quality.",
        },
      ]}
      highlights={[
        "High sperm retrieval success rate in Non-Obstructive Azoospermia",
        "20x operating microscope precision preserves testicular vessels",
        "Comprehensive semen analysis & hormone optimization",
      ]}
      detailedTreatments={[
        {
          title: "Micro-TESE for Azoospermia",
          desc: "Targeted microscopic identification of active sperm-producing tubules in severe zero sperm cases.",
          tag: "20x Microscopic Tech",
        },
        {
          title: "Microscopic Subinguinal Varicocelectomy",
          desc: "Ligation of internal spermatic veins with preservation of testicular artery and lymphatic channels.",
          tag: "Gold Standard Repair",
        },
        {
          title: "Hormonal Spermatogenesis Optimization",
          desc: "Gonadotropin and antioxidant therapy to boost natural sperm production and DNA integrity.",
          tag: "Medical Therapy",
        },
      ]}
      symptoms={[
        {
          title: "Inability to Conceive After 12 Months",
          desc: "Couples experiencing difficulty conceiving despite regular unprotected intercourse.",
        },
        {
          title: "Abnormal Semen Report (Zero or Low Sperm)",
          desc: "Lab reports showing low sperm count, poor motility, or abnormal sperm morphology.",
        },
        {
          title: "Scrotal Vein Swelling (Varicocele)",
          desc: "Bag-of-worms feeling or dull ache in the scrotum impairing sperm quality.",
        },
        {
          title: "Hormonal Imbalance or Testicular Smallness",
          desc: "Low serum testosterone levels or small, soft testicles affecting fertility.",
        },
      ]}
    />
  );
}
