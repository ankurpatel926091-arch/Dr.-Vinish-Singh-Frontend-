import React from "react";
import ConditionPage from "../../components/ConditionPage";
import conditionImg from "../../assets/FemaleUrology/cystocele.jpg";
import cystoceleBanner from "../../assets/FemaleUrology/CystoceleProlapse.png";

export default function Cystocele() {
  return (
    <ConditionPage
      title="Cystocele & Prolapse"
      subTitle="Specialized Bladder Prolapse Repair & Reconstruction"
      description="Comprehensive pelvic floor assessment, pessary management, and reconstructive vaginal wall repair surgery by Senior Urologist Dr. Vinish Kumar Singh."
      category="Female Urology Guide"
      heroBg={cystoceleBanner}
      image={conditionImg}
      overviewTitle="Anatomical Pelvic Restoration & Comfort"
      overviewText="Cystocele (dropped or prolapsed bladder) occurs when supportive pelvic floor fascia weakens, allowing the urinary bladder to bulge downward into the vagina. Dr. Vinish Kumar Singh offers conservative non-surgical ring pessary fittings as well as minimally invasive anterior colporrhaphy and mesh-augmented pelvic reconstructive surgeries."
      treatmentCards={[
        {
          title: "Anterior Colporrhaphy (Vaginal Wall Repair)",
          desc: "Surgical tightening of supportive fascial layers to elevate and hold the bladder in its natural position.",
        },
        {
          title: "Custom Silicone Ring Pessary Fitting",
          desc: "Non-surgical supportive device inserted into the vagina to hold up the prolapsed bladder comfortably.",
        },
      ]}
      highlights={[
        "Eliminates pelvic heaviness, pressure & vaginal bulge discomfort",
        "Restores complete bladder emptying & prevents urinary retention",
        "Daycare surgical repair with fast post-op rehabilitation",
      ]}
      detailedTreatments={[
        {
          title: "Anterior Vaginal Repair (Anterior Colporrhaphy)",
          desc: "Surgical plication of pubocervical fascia to restore bladder support.",
          tag: "Surgical Repair",
        },
        {
          title: "Sacrospinous Ligament Fixation",
          desc: "Anchoring apical vaginal vault prolapse to strong pelvic ligaments for high stage cystocele.",
          tag: "Apical Reconstruction",
        },
        {
          title: "Conservative Pessary Management",
          desc: "Custom fitting of removable medical silicone pessaries for non-surgical candidates.",
          tag: "Non-Surgical Care",
        },
      ]}
      symptoms={[
        {
          title: "Fullness or Bulge in Vagina",
          desc: "Feeling a noticeable soft tissue lump or protrusion near the vaginal opening.",
        },
        {
          title: "Heavy Pelvic Dragging Pain",
          desc: "Aching sensation in the lower abdomen or lower back that worsens at the end of the day.",
        },
        {
          title: "Incomplete Bladder Emptying",
          desc: "Feeling that urine remains in the bladder after voiding, requiring double voiding.",
        },
        {
          title: "Frequent UTIs & Straining",
          desc: "Stagnant urine trapped in prolapsed bladder causing recurring urinary infections.",
        },
      ]}
      faqs={[
        {
          q: "What causes a prolapsed bladder (Cystocele)?",
          a: "Childbirth strain, chronic coughing, heavy lifting, menopause-related tissue thinning, and constipation weaken pelvic floor support muscles.",
        },
        {
          q: "Is surgery necessary for all stages of cystocele?",
          a: "No. Grade 1 and 2 cystocele can be managed conservatively with pelvic floor exercises and silicone pessaries. Grade 3 and 4 benefit significantly from reconstructive surgery.",
        },
        {
          q: "How long is the recovery after cystocele repair surgery?",
          a: "Patients typically resume light daily activities within 1 to 2 weeks, with complete tissue healing achieved in 4 to 6 weeks.",
        },
      ]}
    />
  );
}
