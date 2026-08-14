import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Kidney Stone.png";

export default function DeceasedDonorTransplant() {
  return (
    <ConditionPage
      title="Deceased Donor (Cadaveric) Kidney Transplant"
      subTitle="Emergency Organ Retrieval & Recipient Transplant Surgery"
      description="24x7 emergency cadaveric kidney transplant surgery and organ perfusion preservation led by Senior Transplant Surgeon Dr. Vinish Kumar Singh."
      category="Renal Transplant"
      heroBg={heroImg}
      overviewTitle="Life-Saving Deceased Donor Renal Transplantation"
      overviewText="Deceased donor (cadaveric) kidney transplantation offers hope for End-Stage Renal Disease patients who do not have a living family donor. Dr. Vinish Kumar Singh oversees organ retrieval, machine perfusion, cold ischemia optimization, and emergency implantation surgery when a deceased donor organ becomes available."
      treatmentCards={[
        {
          title: "Organ Retrieval & Perfusion",
          desc: "Cold organ preservation and pulsatile perfusion to maintain graft viability during transport.",
        },
        {
          title: "Emergency Recipient Implantation",
          desc: "Round-the-clock emergency surgical vascular and ureteric reconstruction upon organ call.",
        },
      ]}
      highlights={[
        "Life-saving transplant option for patients without living donors",
        "24x7 emergency surgical team availability",
        "Advanced delayed graft function (DGF) protocol",
      ]}
      detailedTreatments={[
        {
          title: "Organ Compatibility Allocation",
          desc: "Matching organ donor ABO and HLA profiles through official organ retrieval registries.",
          tag: "Organ Registry",
        },
        {
          title: "Cold Ischemia Optimization",
          desc: "Minimizing storage time and applying anti-oxidant flushing for rapid graft recovery.",
          tag: "Organ Preservation",
        },
        {
          title: "Induction Immunotherapy",
          desc: "Using anti-thymocyte globulin (ATG) or basiliximab for high-risk cadaveric graft recipients.",
          tag: "Immunosuppression",
        },
      ]}
      symptoms={[
        {
          title: "No Eligible Family Donor",
          desc: "Absence of a compatible living donor within the patient's immediate family.",
        },
        {
          title: "Registered on Organ Waiting List",
          desc: "Active listing on state/national deceased donor kidney transplant waiting registries.",
        },
        {
          title: "Long-Term Dialysis Dependency",
          desc: "Patients undergoing maintenance dialysis awaiting cadaver organ notification.",
        },
        {
          title: "Need for Emergency Readiness",
          desc: "Requiring pre-transplant fitness and immediate medical availability for organ call.",
        },
      ]}
    />
  );
}
