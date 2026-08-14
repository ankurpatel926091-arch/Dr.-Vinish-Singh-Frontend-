import React from "react";
import ConditionPage from "../../components/ConditionPage";
import curvatureBanner from "../../assets/Male Urology/Penile Curvature.png";

export default function PenileCurvature() {
  return (
    <ConditionPage
      title="Penile Curvature Correction Surgery"
      subTitle="Congenital & Acquired Penile Bending Straightening"
      description="Micro-reconstructive surgical plication and tissue grafting to correct congenital penile curvature and acquired bending by Dr. Vinish Kumar Singh."
      category="Male Urology"
      heroBg={curvatureBanner}
      overviewTitle="Surgical Alignment for Natural Straightening"
      overviewText="Penile curvature can be congenital (present from birth due to asymmetrical tunic development) or acquired (secondary to trauma or Peyronie's disease). Significant curvature (>30 degrees) causes pain during erection and difficulty with intercourse. Dr. Vinish Kumar Singh performs precise reconstructive tunica plication to achieve a completely straight, natural penile alignment."
      treatmentCards={[
        {
          title: "16-Dot Penile Plication Surgery",
          desc: "Minimally invasive suture plication technique on the longer side to achieve perfect straightening.",
        },
        {
          title: "Nesbit Operation & Graft Reconstruction",
          desc: "Targeted tunica excision or tissue patch grafting for complex or severe penile bending.",
        },
      ]}
      highlights={[
        "Achieves 100% straight penile shaft during erection",
        "Preserves erectile nerve sensation & orgasmic sensation",
        "Daycare procedure with rapid recovery",
      ]}
      detailedTreatments={[
        {
          title: "Lue 16-Dot Plication",
          desc: "Suture plication under artificial erection testing ensuring exact mathematical straightening.",
          tag: "Plication Surgery",
        },
        {
          title: "Nesbit Tunica Excision",
          desc: "Excision of a small ellipse of tunica albuginea for severe congenital bending.",
          tag: "Surgical Straightening",
        },
        {
          title: "Chordee Release with Urethroplasty",
          desc: "Ventral tethering release for congenital chordee associated with hypospadias.",
          tag: "Reconstructive Repair",
        },
      ]}
      symptoms={[
        {
          title: "Noticeable Bending During Erection",
          desc: "Downward, sideways, or upward bend during erection.",
        },
        {
          title: "Pain During Intimacy",
          desc: "Discomfort felt by patient or partner during sexual intercourse.",
        },
        {
          title: "Difficulty with Penetration",
          desc: "Curvature preventing smooth vaginal penetration.",
        },
        {
          title: "Self-Consciousness & Anxiety",
          desc: "Emotional distress regarding penile cosmetic appearance.",
        },
      ]}
    />
  );
}
