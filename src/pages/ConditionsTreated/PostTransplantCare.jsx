import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Kidney Stone.png";

export default function PostTransplantCare() {
  return (
    <ConditionPage
      title="Post-Transplant Urological Complications"
      subTitle="Specialized Management of Graft Urological Issues"
      description="Expert evaluation and reconstructive surgery for transplant ureteric strictures, urine leaks, lymphoceles, and stone disease by Dr. Vinish Kumar Singh."
      category="Renal Transplant"
      heroBg={heroImg}
      overviewTitle="Protecting Transplanted Kidney Graft Function"
      overviewText="Urological complications after kidney transplantation—such as transplant ureteric stricture, urinary leak, lymphocele fluid collection, or stones in the graft—can threaten kidney function if not managed promptly. Dr. Vinish Kumar Singh specializes in minimally invasive endourological and reconstructive techniques to preserve graft longevity."
      treatmentCards={[
        {
          title: "Endoscopic DJ Stenting & Dilation",
          desc: "Endoscopic balloon dilation and DJ stent placement for narrowed transplant ureters.",
        },
        {
          title: "Laparoscopic Lymphocele Fenestration",
          desc: "Keyhole drainage of fluid collections compressing graft renal blood vessels.",
        },
      ]}
      highlights={[
        "Safeguards kidney graft function & urinary drainage",
        "Minimally invasive endoscopic solutions without open re-operation",
        "Comprehensive long-term transplant urology care",
      ]}
      detailedTreatments={[
        {
          title: "Transplant Pyeloplasty & Re-implantation",
          desc: "Surgical reconstruction for persistent severe transplant ureteric strictures.",
          tag: "Reconstructive Repair",
        },
        {
          title: "Graft Laser Lithotripsy",
          desc: "Flexible endoscopic laser dusting for stones developing inside the transplanted kidney.",
          tag: "Laser Stone Care",
        },
        {
          title: "Percutaneous Nephrostomy (PCN)",
          desc: "Immediate relief of graft urinary obstruction under ultrasound and fluoroscopy guidance.",
          tag: "Graft Protection",
        },
      ]}
      symptoms={[
        {
          title: "Unexplained Rise in Creatinine",
          desc: "Sudden increase in blood creatinine levels in a kidney transplant recipient.",
        },
        {
          title: "Reduced Graft Urine Output",
          desc: "Noticeable drop in daily urine volume passed from the transplant kidney.",
        },
        {
          title: "Pain or Swelling Over Graft Site",
          desc: "Tenderness, fullness, or fluid accumulation near the lower abdomen transplant incision.",
        },
        {
          title: "Fever & Opportunistic UTIs",
          desc: "Recurrent urinary tract infections in immunosuppressed transplant patients.",
        },
      ]}
    />
  );
}
