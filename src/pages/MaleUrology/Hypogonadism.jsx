import React from "react";
import ConditionPage from "../../components/ConditionPage";
import hypogonadismBanner from "../../assets/Male Urology/Hypogonadism.png";

export default function Hypogonadism() {
  return (
    <ConditionPage
      title="Low Testosterone & Hypogonadism TRT Care"
      subTitle="Evidence-Based Testosterone Replacement & Hormonal Balancing"
      description="Comprehensive serum hormone profiling, testosterone replacement therapy (TRT), gonadotropin induction, and metabolic wellness by Dr. Vinish Kumar Singh."
      category="Male Urology"
      heroBg={hypogonadismBanner}
      overviewTitle="Restoring Vitality, Energy & Hormonal Health"
      overviewText="Male hypogonadism (low testosterone / Low T) occurs when the testicles do not produce sufficient testosterone hormone, resulting in chronic fatigue, reduced sex drive, loss of muscle mass, depression, and erectile weakness. Senior Urologist Dr. Vinish Kumar Singh conducts complete pituitary-gonadal profiling and provides bio-identical Testosterone Replacement Therapy (TRT)."
      treatmentCards={[
        {
          title: "Bio-Identical Testosterone Therapy (TRT)",
          desc: "Customized intramuscular injections, transdermal gels, or subcutaneous implants to restore optimal hormone levels.",
        },
        {
          title: "HCG / HMG Spermatogenic Induction",
          desc: "Gonadotropin therapy to stimulate natural testicular testosterone and preserve sperm production for younger men.",
        },
      ]}
      highlights={[
        "Restores physical energy, muscle strength & libido",
        "Comprehensive cardiac, prostate & hematocrit safety monitoring",
        "Personalized bio-identical hormone replacement protocols",
      ]}
      detailedTreatments={[
        {
          title: "Testosterone Replacement Therapy (TRT)",
          desc: "Monitored administration of testosterone enanthate/cypionate maintaining physiological peak levels.",
          tag: "Hormone Therapy",
        },
        {
          title: "hCG Testicular Stimulation",
          desc: "Preserves endogenous testicular size and fertility while increasing serum testosterone levels.",
          tag: "Fertility Preserving",
        },
        {
          title: "Comprehensive Metabolic & Prostate Monitoring",
          desc: "Regular tracking of PSA, hematocrit, lipid profile, and liver enzymes for absolute patient safety.",
          tag: "Safety Protocol",
        },
      ]}
      symptoms={[
        {
          title: "Chronic Fatigue & Low Energy",
          desc: "Persistent physical exhaustion and lack of stamina despite adequate rest.",
        },
        {
          title: "Loss of Libido & Erectile Weakness",
          desc: "Diminished sexual desire, lack of morning erections, or weak erections.",
        },
        {
          title: "Decrease in Muscle Mass & Strength",
          desc: "Loss of lean muscle volume and increase in abdominal body fat.",
        },
        {
          title: "Mood Changes & Lack of Focus",
          desc: "Irritability, reduced concentration, or mild depressive mood.",
        },
      ]}
    />
  );
}
