import React from "react";
import ConditionPage from "../../components/ConditionPage";
import peyronieBanner from "../../assets/Male Urology/PeyroniesDisease.png";

export default function PeyroniesDisease() {
  return (
    <ConditionPage
      title="Peyronie's Disease & Penile Curvature Correction"
      subTitle="Plaque Dissolution, Xiaflex & Reconstructive Penile Surgery"
      description="Advanced medical plaque therapy, intralesional injections, shockwave therapy, and penile plication / grafting surgery for curvature by Dr. Vinish Kumar Singh."
      category="Male Urology"
      heroBg={peyronieBanner}
      overviewTitle="Expert Clinical Care for Penile Plaque & Curvature"
      overviewText="Peyronie's disease is a condition where fibrous scar tissue (plaque) develops inside the penis, causing significant painful bending or curvature during erection, loss of girth/length, and intimacy difficulties. Senior Andrologist Dr. Vinish Kumar Singh provides comprehensive medical plaque therapy and precision surgical plication / plaque grafting."
      treatmentCards={[
        {
          title: "Intralesional Collagenase / Plaque Injections",
          desc: "Targeted injection of plaque-dissolving agents directly into scar tissue to reduce curvature non-surgically.",
        },
        {
          title: "Nesbit / 16-Dot Penile Plication Surgery",
          desc: "Precision surgical straightening of penile shaft for stable curvature restoring comfortable intercourse.",
        },
      ]}
      highlights={[
        "Restores straight penile alignment & comfortable intimacy",
        "Targeted non-surgical plaque dissolution therapy",
        "High surgical success with nerve & sensation preservation",
      ]}
      detailedTreatments={[
        {
          title: "16-Dot Penile Plication (Lue Technique)",
          desc: "Minimally invasive suture plication on the convex side to straighten penis with zero tissue excision.",
          tag: "Surgical Straightening",
        },
        {
          title: "Plaque Excision & Buccal Grafting",
          desc: "For severe curvature (>60 degrees) or shortening, plaque excision with patch graft placement.",
          tag: "Graft Reconstruction",
        },
        {
          title: "Combined Implant & Straightening",
          desc: "Simultaneous penile prosthesis implantation and manual modeling for patients with combined ED and Peyronie's.",
          tag: "Dual Solution",
        },
      ]}
      symptoms={[
        {
          title: "Painful Bending / Curvature During Erection",
          desc: "Upward, downward, or sideways curvature developing during erection.",
        },
        {
          title: "Palpable Hard Plaque / Scar Lump",
          desc: "Hard lump or band felt under the skin along penile shaft.",
        },
        {
          title: "Shortening or Hourglass Narrowing",
          desc: "Loss of penile length or narrowing ring along the shaft.",
        },
        {
          title: "Erectile Pain & Intimacy Difficulty",
          desc: "Painful erections making intercourse difficult or impossible.",
        },
      ]}
    />
  );
}
