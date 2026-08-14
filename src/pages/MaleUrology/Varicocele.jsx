import React from "react";
import ConditionPage from "../../components/ConditionPage";
import maleInfertilityBanner from "../../assets/Male Urology/Male Infertility.png";

export default function Varicocele() {
  return (
    <ConditionPage
      title="Microscopic Varicocelectomy & Varicocele Repair"
      subTitle="Gold-Standard Microsurgery for Testicular Pain & Male Fertility"
      description="Gold-standard subinguinal microscopic varicocelectomy to eliminate testicular pain, improve sperm count/motility, and boost testosterone by Dr. Vinish Kumar Singh."
      category="Male Urology"
      heroBg={maleInfertilityBanner}
      overviewTitle="Painless Microsurgical Correction for Varicocele"
      overviewText="Varicocele is an enlargement of the veins inside the scrotum (similar to varicose veins in legs) that causes overheating of the testicles, leading to testicular ache, heavy dragging discomfort, low sperm count, and decreased testosterone output. Dr. Vinish Kumar Singh performs gold-standard microscopic subinguinal varicocelectomy with a 20x operating microscope."
      treatmentCards={[
        {
          title: "Microscopic Subinguinal Varicocelectomy",
          desc: "Precision operating microscope ligation of abnormal veins while preserving testicular arteries and lymphatic channels.",
        },
        {
          title: "Laparoscopic Bilateral Varicocele Repair",
          desc: "Keyhole laparoscopic ligation ideal for simultaneous bilateral varicocele correction with rapid recovery.",
        },
      ]}
      highlights={[
        "Gold-standard 20x operating microscope precision",
        "Lowest recurrence rate (<1%) & zero hydrocele risk",
        "Eliminates testicular pain & restores sperm parameters",
      ]}
      detailedTreatments={[
        {
          title: "Subinguinal Microsurgical Ligation",
          desc: "Microscopic isolation and tying of enlarged internal spermatic veins with 100% preservation of testicular blood supply.",
          tag: "Gold Standard",
        },
        {
          title: "Laparoscopic Palomo Varicocelectomy",
          desc: "Minimally invasive keyhole entry for high ligation of spermatic veins in bilateral cases.",
          tag: "Keyhole Procedure",
        },
        {
          title: "Sperm Quality & Testosterone Restoration",
          desc: "Post-operative tracking of semen parameters showing significant boost in count, motility, and hormonal vitality.",
          tag: "Fertility Boost",
        },
      ]}
      symptoms={[
        {
          title: "Dull Aching Scrotal Pain",
          desc: "Dragging heaviness or ache in scrotum that worsens after standing or exercising.",
        },
        {
          title: "Visible 'Bag of Worms' Veins",
          desc: "Noticeable swollen or twisted veins felt above the testicle.",
        },
        {
          title: "Low Sperm Count or Motility",
          desc: "Abnormal semen analysis parameters causing couple conception delays.",
        },
        {
          title: "Testicular Shrinkage (Atrophy)",
          desc: "Affected testicle appearing smaller or softer than normal.",
        },
      ]}
    />
  );
}
