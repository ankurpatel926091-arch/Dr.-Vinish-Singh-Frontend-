import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/FemaleUrology/CystoceleProlapse.png";

export default function Phimosis() {
  return (
    <ConditionPage
      title="Phimosis & Laser Circumcision Surgery"
      subTitle="Painless Stitchless Laser & ZSR Circumcision"
      description="Advanced stitchless laser circumcision and preputioplasty for tight non-retractable foreskin in children and adults by Dr. Vinish Kumar Singh."
      category="Paediatric Urological Conditions"
      heroBg={heroImg}
      overviewTitle="Painless Relief for Tight Foreskin & Infections"
      overviewText="Phimosis is a condition where the foreskin cannot be retracted behind the head of the penis, causing ballooning during urination, pain, and recurrent foreskin infections (balanoposthitis). Dr. Vinish Kumar Singh performs state-of-the-art laser circumcision and ZSR stapler circumcision—offering painless, bloodless daycare correction with zero stitches."
      treatmentCards={[
        {
          title: "Stitchless ZSR Stapler Circumcision",
          desc: "FDA-approved automated circumcision device giving uniform cosmetic cut with zero hand stitches.",
        },
        {
          title: "Laser Circumcision / Preputioplasty",
          desc: "Laser vaporization of tight fibrotic ring with minimal pain and rapid 48-hour healing.",
        },
      ]}
      highlights={[
        "100% Painless & Bloodless technique",
        "No hand stitches, no ugly scars, daycare procedure",
        "Prevents recurrent infections & painful urination",
      ]}
      detailedTreatments={[
        {
          title: "ZSR Aesthetic Circumcision",
          desc: "Quick 10-minute automated ring technique with cosmetic silicone ring drop within 7-10 days.",
          tag: "Stitchless & Fast",
        },
        {
          title: "Laser Preputioplasty",
          desc: "Foreskin-sparing laser release for mild phimosis preserving natural foreskin tissue.",
          tag: "Tissue Preserving",
        },
        {
          title: "Paraphimosis Emergency Release",
          desc: "Urgent reduction or dorsal slit for trapped retracted foreskin causing penile swelling.",
          tag: "Emergency Release",
        },
      ]}
      symptoms={[
        {
          title: "Inability to Retract Foreskin",
          desc: "Tight ring preventing smooth retraction over glans penis.",
        },
        {
          title: "Foreskin Ballooning While Urinating",
          desc: "Foreskin swelling up like a balloon during voiding stream.",
        },
        {
          title: "Recurrent Redness & Discharge",
          desc: "Frequent pain, itching, foul discharge, or bleeding at foreskin tip (balanitis).",
        },
        {
          title: "Painful Erections & Intercourse",
          desc: "Tearing or sharp pain during erections or intimacy due to tight tissue ring.",
        },
      ]}
    />
  );
}
