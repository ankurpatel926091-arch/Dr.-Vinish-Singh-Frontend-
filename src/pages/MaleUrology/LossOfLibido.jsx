import React from "react";
import ConditionPage from "../../components/ConditionPage";
import hypogonadismBanner from "../../assets/Male Urology/Hypogonadism.png";

export default function LossOfLibido() {
  return (
    <ConditionPage
      title="Loss of Libido & Male Hormonal Rejuvenation"
      subTitle="Endocrine Profiling & Testosterone Optimization"
      description="Comprehensive pituitary, thyroid, prolactin, and bio-identical testosterone therapy for low sex drive by Andrologist Dr. Vinish Kumar Singh."
      category="Male Urology"
      heroBg={hypogonadismBanner}
      overviewTitle="Restoring Natural Male Sex Drive & Vitality"
      overviewText="Loss of libido (diminished sexual desire) is a key symptom of male hormonal imbalance, hyperprolactinemia, thyroid dysfunction, or chronic stress. Senior Urologist Dr. Vinish Kumar Singh conducts complete endocrine blood screening to pinpoint the exact hormonal deficit and provides bio-identical hormone restoration for long-term health."
      treatmentCards={[
        {
          title: "Comprehensive Male Endocrine Panel",
          desc: "Targeted lab analysis of total & free testosterone, LH, FSH, prolactin, thyroid, and SHBG.",
        },
        {
          title: "Bio-Identical Testosterone & Lifestyle Care",
          desc: "Tailored hormone replacement therapy, prolactin reduction, and metabolic wellness optimization.",
        },
      ]}
      highlights={[
        "Restores natural sexual desire, energy & mood",
        "Targeted correction of low testosterone & elevated prolactin",
        "Comprehensive cardiac and metabolic health monitoring",
      ]}
      detailedTreatments={[
        {
          title: "Testosterone Replacement Therapy (TRT)",
          desc: "Controlled administration of bio-identical testosterone restoring youthful hormonal balance.",
          tag: "Hormone Therapy",
        },
        {
          title: "Hyperprolactinemia Treatment",
          desc: "Dopamine agonist therapy to lower elevated prolactin levels suppressing male libido.",
          tag: "Targeted Care",
        },
        {
          title: "Comprehensive Metabolic & Stress Rejuvenation",
          desc: "Integrated approach addressing sleep apnea, cortisol levels, and lifestyle factors.",
          tag: "Holistic Care",
        },
      ]}
      symptoms={[
        {
          title: "Complete Absence of Sexual Desire",
          desc: "Lack of interest or thoughts about sexual intimacy.",
        },
        {
          title: "Chronic Fatigue & Brain Fog",
          desc: "Low energy, weakness, and difficulty concentrating.",
        },
        {
          title: "Loss of Morning Erections",
          desc: "Absence of natural spontaneous erections during sleep or upon waking.",
        },
        {
          title: "Mood Swings & Irritability",
          desc: "Increased emotional stress and loss of motivation.",
        },
      ]}
    />
  );
}
