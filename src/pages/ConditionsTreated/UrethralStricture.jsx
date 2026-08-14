import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Kidney Stone.png";

export default function UrethralStricture() {
  return (
    <ConditionPage
      title="Urethral Stricture Repair & Urethroplasty"
      subTitle="Advanced Endoscopic & Reconstructive Urethral Surgery"
      description="Minimally invasive VIU (Visual Internal Urethrotomy) and buccal mucosa graft urethroplasty for urethral narrowing and slow urine stream by Dr. Vinish Kumar Singh."
      category="Urological Conditions"
      heroBg={heroImg}
      overviewTitle="Restoring Normal Urinary Flow & Comfort"
      overviewText="Urethral stricture is a narrowing of the urinary passage caused by scar tissue from prior trauma, infection, or catheterization. Patients experience painful straining, weak stream, and urinary retention. Dr. Vinish Kumar Singh performs precise endoscopic laser urethrotomy and reconstructive urethroplasty to permanently restore normal urine passage."
      treatmentCards={[
        {
          title: "Visual Internal Urethrotomy (VIU)",
          desc: "Endoscopic cold knife or laser incision of short strictures without external skin cuts.",
        },
        {
          title: "Buccal Mucosa Graft Urethroplasty",
          desc: "Gold-standard reconstructive repair using inner cheek graft for long or complex strictures.",
        },
      ]}
      highlights={[
        "Eliminates painful urinary straining & weak stream",
        "Durable long-term success rate with low recurrence",
        "Expert reconstructive surgery by Senior Urologist",
      ]}
      detailedTreatments={[
        {
          title: "Optical Internal Urethrotomy (OIU)",
          desc: "Daycare endoscopic procedure for primary short strictures providing immediate urine stream restoration.",
          tag: "Daycare Procedure",
        },
        {
          title: "Anastomotic Urethroplasty",
          desc: "Excision of bulbar or traumatic strictures with direct end-to-end primary reconstruction.",
          tag: "Reconstructive Repair",
        },
        {
          title: "Augmentation Graft Urethroplasty",
          desc: "Sub-epithelial mucosal graft patch placement for complex, recurrent, or long segment strictures.",
          tag: "Gold Standard",
        },
      ]}
      symptoms={[
        {
          title: "Weak & Sprayed Urine Stream",
          desc: "Noticeable reduction in urine pressure and force during voiding.",
        },
        {
          title: "Painful Straining & Dribbling",
          desc: "Needing to push hard to urinate followed by persistent post-void dribbling.",
        },
        {
          title: "Recurrent UTIs & Urine Retention",
          desc: "Stagnant urine leading to frequent bladder infections and sudden inability to pass urine.",
        },
        {
          title: "Sense of Incomplete Emptying",
          desc: "Feeling that the bladder is still full even after finishing urination.",
        },
      ]}
    />
  );
}
