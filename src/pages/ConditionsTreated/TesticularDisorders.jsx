import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Prostate.png";

export default function TesticularDisorders() {
  return (
    <ConditionPage
      title="Testicular & Scrotal Disorder Care"
      subTitle="Comprehensive Evaluation for Testicular Swelling & Pain"
      description="Advanced clinical diagnosis, ultrasound Doppler workup, and microsurgical care for epididymitis, orchitis, testicular torsion, and benign masses by Dr. Vinish Kumar Singh."
      category="Andrological Conditions"
      heroBg={heroImg}
      overviewTitle="Expert Care for Testicular Health & Fertility"
      overviewText="Testicular disorders encompass a range of acute and chronic conditions affecting male reproductive health—including testicular pain, swelling, epididymo-orchitis, spermatoceles, testicular atrophy, and emergency testicular torsion. Prompt evaluation by Dr. Vinish Kumar Singh preserves testicular tissue, hormonal output, and male fertility."
      treatmentCards={[
        {
          title: "High-Resolution Scrotal Doppler",
          desc: "Immediate ultrasound assessment of blood flow, tissue viability, and anatomical lesions.",
        },
        {
          title: "Targeted Medical & Antibiotic Protocol",
          desc: "Specific antimicrobial and anti-inflammatory therapy for acute epididymitis and infection.",
        },
      ]}
      highlights={[
        "Immediate emergency evaluation for acute testicular pain",
        "Preserves testosterone production & sperm quality",
        "Expert microsurgical expertise by Senior Andrologist",
      ]}
      detailedTreatments={[
        {
          title: "Spermatocelectomy",
          desc: "Precision surgical excision of benign epididymal fluid cysts causing persistent swelling.",
          tag: "Daycare Surgery",
        },
        {
          title: "Emergency Orchiopexy for Torsion",
          desc: "Urgent surgical untwisting and fixation of rotated testicle to restore blood supply within golden hours.",
          tag: "Emergency Procedure",
        },
        {
          title: "Microsurgical Spermatic Cord Repair",
          desc: "Delicate microsurgical techniques for nerve release and chronic pain relief.",
          tag: "Microsurgery",
        },
      ]}
      symptoms={[
        {
          title: "Sudden Severe Testicular Pain",
          desc: "Sharp, excruciating pain in the testicle requiring immediate medical attention.",
        },
        {
          title: "Scrotal Redness & Heat",
          desc: "Swollen, tender scrotum accompanied by fever or chills.",
        },
        {
          title: "Palpable Lump or Mass",
          desc: "Hard or soft mass felt on the testicle or epididymis tube.",
        },
        {
          title: "Testicular Shrinkage / Softening",
          desc: "Noticeable decrease in testicular size or firmness over time.",
        },
      ]}
    />
  );
}
