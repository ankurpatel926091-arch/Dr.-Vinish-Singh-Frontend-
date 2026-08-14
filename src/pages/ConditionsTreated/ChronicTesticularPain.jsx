import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Prostate.png";

export default function ChronicTesticularPain() {
  return (
    <ConditionPage
      title="Chronic Testicular Pain (Orchialgia) Therapy"
      subTitle="Targeted Nerve Evaluation & Microsurgical Denervation"
      description="Specialized multidisciplinary care for persistent scrotal pain lasting over 3 months, including nerve blocks and microsurgical spermatic cord denervation by Dr. Vinish Kumar Singh."
      category="Andrological Conditions"
      heroBg={heroImg}
      overviewTitle="Relief for Long-Standing Testicular Discomfort"
      overviewText="Chronic testicular pain (chronic orchialgia) is continuous or intermittent discomfort in one or both testicles lasting for more than 3 months that significantly impacts daily life. Dr. Vinish Kumar Singh offers systematic diagnostic workup—identifying nerve entrapment, post-vasectomy pain, or varicocele—and provides advanced microsurgical solutions when conservative care fails."
      treatmentCards={[
        {
          title: "Spermatic Cord Nerve Block",
          desc: "Diagnostic local anesthetic injection to confirm nerve pathway involvement prior to surgery.",
        },
        {
          title: "Microsurgical Cord Denervation (MDSC)",
          desc: "Targeted division of microscopic pain nerve fibers while preserving testicular arteries and lymphatics.",
        },
      ]}
      highlights={[
        "Over 85% pain resolution rate with microsurgical denervation",
        "Preserves testicular blood supply and testosterone levels",
        "Personalized pain management protocol",
      ]}
      detailedTreatments={[
        {
          title: "Neuromodulation & Pharmacotherapy",
          desc: "Targeted nerve-stabilizing medications and anti-inflammatory therapy for neurogenic pain.",
          tag: "Conservative Care",
        },
        {
          title: "Post-Vasectomy Reversal / Excision",
          desc: "Targeted treatment for post-vasectomy pain syndrome caused by epididymal congestion.",
          tag: "Targeted Repair",
        },
        {
          title: "Microsurgical Denervation (MDSC)",
          desc: "Precision operating microscope procedure to sever pain fibers along the spermatic cord.",
          tag: "Advanced Surgery",
        },
      ]}
      symptoms={[
        {
          title: "Dull Aching Scrotal Pain",
          desc: "Constant or throbbing ache in the testicle or groin area.",
        },
        {
          title: "Pain Worsened by Sitting / Exercise",
          desc: "Aggravation of pain during prolonged sitting, lifting, or sexual activity.",
        },
        {
          title: "Pain Lasting >3 Months",
          desc: "Persistent discomfort unresponsive to basic antibiotics or pain killers.",
        },
        {
          title: "Radiation to Groin & Thigh",
          desc: "Pain shooting upwards into lower abdomen or down inner thigh.",
        },
      ]}
    />
  );
}
