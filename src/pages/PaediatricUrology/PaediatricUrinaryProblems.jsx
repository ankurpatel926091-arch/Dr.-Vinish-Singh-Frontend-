import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/FemaleUrology/CystoceleProlapse.png";

export default function PaediatricUrinaryProblems() {
  return (
    <ConditionPage
      title="Paediatric Urology & Voiding Dysfunction"
      subTitle="Comprehensive Child Urinary & Kidney Health Care"
      description="Specialized evaluation for nocturnal enuresis (bedwetting), vesicoureteral reflux (VUR), PUJ obstruction, and child UTIs by Dr. Vinish Kumar Singh."
      category="Paediatric Urological Conditions"
      heroBg={heroImg}
      overviewTitle="Expert Care for Childhood Urinary Disorders"
      overviewText="Paediatric urological problems range from bedwetting (nocturnal enuresis) and daytime wetting accidents to structural anomalies like Pelviureteric Junction (PUJ) obstruction and Vesicoureteral Reflux (VUR). Dr. Vinish Kumar Singh provides child-friendly, evidence-based diagnostic evaluation and advanced reconstructive laparoscopic pyeloplasty."
      treatmentCards={[
        {
          title: "Laparoscopic / Robotic Pyeloplasty",
          desc: "Keyhole surgical correction of PUJ kidney blockage, restoring normal urine flow from kidney to bladder.",
        },
        {
          title: "VUR Deflux Endoscopic Injection",
          desc: "Stitchless daycare endoscopic gel injection to prevent urine backflow into kidneys.",
        },
      ]}
      highlights={[
        "Child-friendly diagnostic & non-invasive uroflowmetry",
        "Prevents permanent kidney scarring & recurring fever UTIs",
        "Comprehensive behavioral, medical & surgical care",
      ]}
      detailedTreatments={[
        {
          title: "Laparoscopic Anderson-Hynes Pyeloplasty",
          desc: "Gold-standard reconstructive repair for congenital pelviureteric junction obstruction.",
          tag: "Reconstructive Surgery",
        },
        {
          title: "Posterior Urethral Valve (PUV) Fulguration",
          desc: "Endoscopic laser incision of congenital bladder outlet membrane in newborn boys.",
          tag: "Endoscopic Procedure",
        },
        {
          title: "Bedwetting & Voiding Re-training",
          desc: "Tailored alarm therapy, bladder training, and medical management for nocturnal enuresis.",
          tag: "Behavioral & Medical",
        },
      ]}
      symptoms={[
        {
          title: "Nighttime Bedwetting Beyond Age 5",
          desc: "Involuntary urination during sleep past the expected toilet training age.",
        },
        {
          title: "High Fever UTIs with Chills",
          desc: "Unexplained high fever in infants or young children caused by kidney infection.",
        },
        {
          title: "Straining or Crying While Voiding",
          desc: "Child expressing discomfort or crying during urination.",
        },
        {
          title: "Kidney Swelling (Hydronephrosis) on Scan",
          desc: "Antenatal or routine ultrasound showing enlarged fluid-filled kidney.",
        },
      ]}
    />
  );
}
