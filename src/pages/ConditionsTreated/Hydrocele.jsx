import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Prostate.png";

export default function Hydrocele() {
  return (
    <ConditionPage
      title="Hydrocele Surgery & Painless Hydrocelectomy"
      subTitle="Minimally Invasive Scrotal Swelling Repair"
      description="Painless daycare hydrocelectomy surgery for fluid accumulation around the testicle by Senior Urologist Dr. Vinish Kumar Singh."
      category="Andrological Conditions"
      heroBg={heroImg}
      overviewTitle="Painless Removal of Scrotal Fluid Swelling"
      overviewText="A hydrocele is a painless, fluid-filled sac around one or both testicles, causing noticeable scrotal enlargement, heaviness, and discomfort while walking or sitting. Dr. Vinish Kumar Singh performs precise, minimal-incision hydrocelectomy to excise the fluid sac, providing permanent relief with zero chance of fluid re-accumulation."
      treatmentCards={[
        {
          title: "Minimal Incision Hydrocelectomy",
          desc: "Small cosmetic incision to drain fluid and turn the sac sac inside out (Jaboulay / Lord's technique).",
        },
        {
          title: "Same-Day Daycare Procedure",
          desc: "Quick 30-minute surgery performed under regional anesthesia with discharge on the same day.",
        },
      ]}
      highlights={[
        "Permanent cure with 0% fluid recurrence",
        "Painless daycare surgery with rapid 48-hour recovery",
        "Preserves testicular anatomy and fertility",
      ]}
      detailedTreatments={[
        {
          title: "Lord's Plication Technique",
          desc: "Suitable for thin-walled small-to-medium hydroceles with minimal tissue disruption and quick healing.",
          tag: "Minimally Invasive",
        },
        {
          title: "Jaboulay's Eversion Repair",
          desc: "Gold standard for large or chronic thick-walled hydroceles ensuring complete sac removal.",
          tag: "Gold Standard",
        },
        {
          title: "Reconstructive Scrotal Care",
          desc: "Cosmetic wound closure with dissolvable sutures leaving no visible scars.",
          tag: "Cosmetic Finish",
        },
      ]}
      symptoms={[
        {
          title: "Painless Scrotal Enlargement",
          desc: "Smooth, balloon-like swelling in one or both sides of the scrotum.",
        },
        {
          title: "Heaviness & Dragging Sensation",
          desc: "Discomfort or dragging feeling in the groin while standing or exercising.",
        },
        {
          title: "Increased Size End of Day",
          desc: "Swelling becoming more pronounced after prolonged standing or physical work.",
        },
        {
          title: "Difficulty Wearing Clothes",
          desc: "Tight clothing causing skin friction and discomfort due to enlarged scrotal volume.",
        },
      ]}
    />
  );
}
