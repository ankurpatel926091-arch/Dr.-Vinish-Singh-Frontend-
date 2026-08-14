import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Prostate.png";

export default function PrematureEjaculation() {
  return (
    <ConditionPage
      title="Premature Ejaculation (PE) Therapy & Wellness"
      subTitle="Confidential Male Sexual Health & Performance Care"
      description="Comprehensive clinical evaluation, medical therapy, behavioral conditioning, and topical treatments for climax control by Dr. Vinish Kumar Singh."
      category="Andrological Conditions"
      heroBg={heroImg}
      overviewTitle="Restoring Intimacy, Control & Confidence"
      overviewText="Premature Ejaculation (PE) occurs when a man climaxes faster than desired during intimacy, leading to distress and partner dissatisfaction. It is a highly treatable male health condition with both physiological and psychological components. Dr. Vinish Kumar Singh offers empathetic, evidence-based treatments tailored to individual needs."
      treatmentCards={[
        {
          title: "Pharmacotherapy & SSRI Therapy",
          desc: "Targeted prescription medications that safely delay climax signals and improve timing control.",
        },
        {
          title: "Desensitization & Behavioral Care",
          desc: "Specialized squeeze and stop-start techniques combined with topical nerve modulation.",
        },
      ]}
      highlights={[
        "100% confidential doctor consultation & evaluation",
        "Scientifically proven medical treatments with high success",
        "Restores relationship harmony & personal confidence",
      ]}
      detailedTreatments={[
        {
          title: "Medical Delay Therapy",
          desc: "FDA-approved fast-acting oral medications taken before intimacy to enhance endurance.",
          tag: "Medical Treatment",
        },
        {
          title: "Hormonal & Neuro-Sensitivity Workup",
          desc: "Evaluating thyroid, testosterone, and penile hypersensitivity for root-cause resolution.",
          tag: "Diagnostic Care",
        },
        {
          title: "Combined Andrology Protocol",
          desc: "Integrated management addressing both erectile strength and climax timing simultaneously.",
          tag: "Holistic Care",
        },
      ]}
      symptoms={[
        {
          title: "Climaxing Within 1 Minute",
          desc: "Inability to delay ejaculation for more than 60 seconds after penetration.",
        },
        {
          title: "Lack of Voluntary Control",
          desc: "Feeling unable to control or suppress climax during sexual activity.",
        },
        {
          title: "Personal Distress & Anxiety",
          desc: "Performance anxiety, stress, or avoidance of sexual intimacy.",
        },
        {
          title: "Secondary Erectile Weakness",
          desc: "Difficulty maintaining firmness due to anxiety over quick climax.",
        },
      ]}
    />
  );
}
