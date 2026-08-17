import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/FemaleUrology/CystoceleProlapse.png";
import paediatricImg from "../../assets/images/paediatric_urology.jpg";

export default function UndescendedTestis() {
  return (
    <ConditionPage
      title="Undescended Testis (Cryptorchidism) Orchidopexy"
      subTitle="Gentle Paediatric Orchidopexy & Laparoscopic Surgery"
      description="Minimally invasive open or laparoscopic orchidopexy to bring undescended testicle into the scrotum by Paediatric Urologist Dr. Vinish Kumar Singh."
      category="Paediatric Urological Conditions"
      heroBg={heroImg}
      image={paediatricImg}
      overviewTitle="Early Surgical Correction for Paediatric Testicular Health"
      overviewText="Cryptorchidism (undescended testis) occurs when one or both testicles fail to descend into the scrotum before birth. Left untreated, high body temperature inside the abdomen damages sperm-producing cells and increases cancer risk. Dr. Vinish Kumar Singh performs delicate, child-friendly orchidopexy (at age 6-12 months) to move and secure the testicle safely."
      treatmentCards={[
        {
          title: "Palpable Orchidopexy",
          desc: "Small groin incision to mobilize the spermatic cord and fix the testicle in scrotal pouch.",
        },
        {
          title: "Diagnostic & Operative Laparoscopy",
          desc: "Keyhole evaluation and 2-stage Fowler-Stephens procedure for high abdominal unpalpable testis.",
        },
      ]}
      highlights={[
        "Preserves future fertility and testosterone production",
        "Daycare procedure with child-friendly pediatric anesthesia",
        "Cosmetic tiny skin crease incisions with fast recovery",
      ]}
      detailedTreatments={[
        {
          title: "Single-Stage Inguinal Orchidopexy",
          desc: "Standard daycare repair for palpable undescended testes located in the groin canal.",
          tag: "Daycare Repair",
        },
        {
          title: "Laparoscopic Fowler-Stephens Orchidopexy",
          desc: "Advanced two-stage keyhole surgery for high intra-abdominal testes near the kidney.",
          tag: "Laparoscopic Care",
        },
        {
          title: "Associated Inguinal Hernia Repair",
          desc: "Simultaneous closure of patent processus vaginalis to prevent groin hernia development.",
          tag: "Complete Care",
        },
      ]}
      symptoms={[
        {
          title: "Empty Scrotal Sac",
          desc: "Scrotum appearing small, flat, or asymmetric on one or both sides.",
        },
        {
          title: "Testis Not Felt on Examination",
          desc: "Inability to feel testicle in the scrotal pouch during warm bath or physical check.",
        },
        {
          title: "Retractile Testis (Moving Up & Down)",
          desc: "Testis pulling up into groin when cold or touched, needing specialist evaluation.",
        },
        {
          title: "Associated Groin Swelling",
          desc: "Groin lump appearing during crying or straining due to open hernia sac.",
        },
      ]}
    />
  );
}
