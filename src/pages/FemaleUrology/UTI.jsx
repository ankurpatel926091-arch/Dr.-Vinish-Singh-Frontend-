import React from "react";
import ConditionPage from "../../components/ConditionPage";
import conditionImg from "../../assets/FemaleUrology/uti.jpg";
import utiBanner from "../../assets/FemaleUrology/RecurrentUTI.png";

export default function UTI() {
  return (
    <ConditionPage
      title="Recurrent UTI Care"
      subTitle="Specialized Female Urinary Tract Infection Management"
      description="Comprehensive diagnostic evaluation, preventive antimicrobial protocols, and advanced bladder instillation therapy by Senior Urologist Dr. Vinish Kumar Singh."
      category="Female Urology Guide"
      heroBg={utiBanner}
      image={conditionImg}
      overviewTitle="Evidence-Based Relief From Frequent UTIs"
      overviewText="Recurrent urinary tract infections (UTIs) in women require targeted evaluation beyond standard antibiotics. Dr. Vinish Kumar Singh conducts specialized urine culture profiling, ultrasound post-void residual scans, and intravesical bladder GAG-layer protective therapies to break the cycle of infection permanently."
      treatmentCards={[
        {
          title: "Diagnostic Microbial & Anatomical Profiling",
          desc: "Targeted urine culture sensitivity, pelvic ultrasound, and post-void residual volume evaluation.",
        },
        {
          title: "Intravesical Bladder GAG-Layer Therapy",
          desc: "Protective mucosal instillation restoring bladder barrier function to prevent bacterial adhesion.",
        },
      ]}
      highlights={[
        "Prevents frequent infection relapses with targeted non-antibiotic care",
        "Protects bladder mucosal lining & restores long-term urinary immunity",
        "Complete diagnostic workup eliminating hidden urological causes",
      ]}
      detailedTreatments={[
        {
          title: "Low-Dose Targeted Antimicrobial Prophylaxis",
          desc: "Tailored antibiotic regimens for post-coital or recurrent UTI prevention.",
          tag: "Medical Protocol",
        },
        {
          title: "Hyaluronic Acid Bladder Instillation",
          desc: "Rebuilding damaged glycosaminoglycan (GAG) bladder coating to prevent chronic inflammation.",
          tag: "Bladder Repair",
        },
        {
          title: "Flexible Cystoscopy & Diagnostic Urodynamics",
          desc: "Painless camera examination ruling out urethral strictures, bladder diverticula, or stones.",
          tag: "Advanced Diagnostics",
        },
      ]}
      symptoms={[
        {
          title: "Persistent Burning Urination (Dysuria)",
          desc: "Sharp, painful burning sensation during or after passing urine.",
        },
        {
          title: "Frequent Urge to Urinate",
          desc: "Needing to urinate every 30-60 minutes with small volume output.",
        },
        {
          title: "Cloudy or Foul-Smelling Urine",
          desc: "Urinary turbidity, strong odor, or occasional blood tinged urine.",
        },
        {
          title: "Lower Abdominal & Pelvic Pressure",
          desc: "Aching pain above the pubic bone accompanied by chills or low grade fever.",
        },
      ]}
      faqs={[
        {
          q: "Why do UTIs recur so frequently in women?",
          a: "Female urethral anatomy is shorter and closer to bacterial sources. Hormonal changes, incomplete bladder emptying, and damaged bladder mucosal linings also contribute.",
        },
        {
          q: "What is bladder GAG-layer instillation therapy?",
          a: "It is a painless fluid instillation into the bladder that rebuilds its natural protective mucosal layer, preventing bacteria from attaching and causing recurrent infections.",
        },
        {
          q: "Are non-antibiotic treatments effective for preventing UTIs?",
          a: "Yes. D-Mannose, probiotics, hormonal topical estrogen, and urinary alkalinizers help reduce antibiotic dependency significantly.",
        },
      ]}
    />
  );
}
