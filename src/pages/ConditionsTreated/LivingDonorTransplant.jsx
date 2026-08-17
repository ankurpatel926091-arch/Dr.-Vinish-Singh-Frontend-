import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Kidney Stone.png";
import transplantImg from "../../assets/images/kidney_transplant.jpg";

export default function LivingDonorTransplant() {
  return (
    <ConditionPage
      title="Living Donor Kidney Transplant Surgery"
      subTitle="Laparoscopic Donor Nephrectomy & Recipient Implantation"
      description="Gold-standard living donor kidney transplantation utilizing keyhole laparoscopic donor nephrectomy for faster donor recovery by Dr. Vinish Kumar Singh."
      category="Renal Transplant"
      heroBg={heroImg}
      image={transplantImg}
      overviewTitle="Gold-Standard Living Related Renal Transplant"
      overviewText="Living donor kidney transplantation provides the best long-term outcomes and graft survival for patients with kidney failure. Dr. Vinish Kumar Singh performs laparoscopic keyhole donor nephrectomy—ensuring minimal pain and rapid 3-day recovery for the living donor—followed by precise vascular and ureteric reconstruction in the recipient."
      treatmentCards={[
        {
          title: "Laparoscopic Donor Nephrectomy",
          desc: "Keyhole surgery for living donor kidney retrieval with small incision, quick healing, and high donor safety.",
        },
        {
          title: "Precision Vascular Anastomosis",
          desc: "Micro-surgical connection of renal artery and vein to recipient iliac vessels for immediate urine output.",
        },
      ]}
      highlights={[
        "Highest graft survival rate (>95% at 5 years)",
        "Keyhole donor retrieval ensures fast donor discharge",
        "Immediate graft function with zero cold ischemia delay",
      ]}
      detailedTreatments={[
        {
          title: "Minimal Invasive Donor Retrieval",
          desc: "Advanced laparoscopic nephrectomy preserving donor renal function and cosmetic satisfaction.",
          tag: "Laparoscopic Surgery",
        },
        {
          title: "Modified Lich-Gregoir Ureteroneocystostomy",
          desc: "Anti-reflux ureteric reimplantation securing leak-free urinary drainage into recipient bladder.",
          tag: "Ureteric Repair",
        },
        {
          title: "Post-Operative Immunosuppression Management",
          desc: "Tailored tacrolimus, mycophenolate, and steroid protocol preventing organ rejection.",
          tag: "Graft Protection",
        },
      ]}
      symptoms={[
        {
          title: "Chronic Dialysis Fatigue",
          desc: "Exhaustion and dietary restrictions associated with long-term hemodialysis.",
        },
        {
          title: "Willing Related Family Donor",
          desc: "Having a healthy eligible family member (spouse, sibling, parent, child) ready to donate.",
        },
        {
          title: "Failing Vascular Access / AV Fistula",
          desc: "Complications or exhaustion of dialysis access sites in ESRD patients.",
        },
        {
          title: "Desire for Normal Life Quality",
          desc: "Seeking complete rehabilitation, employment, and physical vitality post-transplant.",
        },
      ]}
    />
  );
}
