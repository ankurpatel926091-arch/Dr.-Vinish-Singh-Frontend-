import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/FemaleUrology/CystoceleProlapse.png";

export default function Hypospadias() {
  return (
    <ConditionPage
      title="Hypospadias Reconstructive Surgery"
      subTitle="Single-Stage & Two-Stage Paediatric Urethroplasty"
      description="Precision reconstructive surgery to position the urethral opening at the tip of the penis and correct penile curvature by Dr. Vinish Kumar Singh."
      category="Paediatric Urological Conditions"
      heroBg={heroImg}
      overviewTitle="Expert Reconstructive Repair for Hypospadias"
      overviewText="Hypospadias is a congenital condition where the urinary meatus (opening) is located on the underside of the penis rather than at the tip, often accompanied by downward penile curvature (chordee). Dr. Vinish Kumar Singh performs delicate micro-reconstructive surgery (Snodgrass TIP urethroplasty) to create a straight penis and normal voiding stream."
      treatmentCards={[
        {
          title: "Snodgrass (TIP) Urethroplasty",
          desc: "Single-stage tubularized incised plate repair for distal and mid-penile hypospadias.",
        },
        {
          title: "Bracka Two-Stage Graft Repair",
          desc: "Inner cheek or preputial graft reconstruction for severe proximal and perineal hypospadias.",
        },
      ]}
      highlights={[
        "Restores normal forward urine stream and penile alignment",
        "High cosmetic and functional success rate",
        "Expert paediatric plastic & reconstructive care",
      ]}
      detailedTreatments={[
        {
          title: "Orthoplasty (Chordee Correction)",
          desc: "Complete surgical release of ventral fibrous tissue to straighten the penile shaft.",
          tag: "Penile Alignment",
        },
        {
          title: "Glanuloplasty & Meatoplasty",
          desc: "Recreating a natural conical glans shape and slit-like vertical urinary opening.",
          tag: "Cosmetic Repair",
        },
        {
          title: "Foreskin Reconstruction / Circumcision",
          desc: "Surgical tailoring of dorsal hood foreskin into natural anatomical coverage.",
          tag: "Reconstructive Care",
        },
      ]}
      symptoms={[
        {
          title: "Urinary Opening on Underside",
          desc: "Urethral meatus situated below the glans, shaft, or scrotum.",
        },
        {
          title: "Downward Penile Curvature (Chordee)",
          desc: "Penis bending downwards during erections or voiding.",
        },
        {
          title: "Sprayed Downward Urine Stream",
          desc: "Child needing to sit down to urinate to avoid spraying clothes.",
        },
        {
          title: "Dorsal Hood Foreskin Appearance",
          desc: "Foreskin looking like an incomplete apron over the top of the penis.",
        },
      ]}
    />
  );
}
