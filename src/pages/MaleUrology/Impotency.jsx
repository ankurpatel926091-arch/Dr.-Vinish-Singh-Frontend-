import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Male Urology/Erectile Dysfunction.png";

export default function Impotency() {
  return (
    <ConditionPage
      title="Impotency & Male Sexual Wellness Care"
      subTitle="Confidential Clinical Evaluation & Targeted Rejuvenation"
      description="Advanced clinical evaluation, penile color Doppler, PDE5 therapy, shockwave treatment, and penile prosthesis surgery for impotency by Dr. Vinish Kumar Singh."
      category="Male Urology"
      heroBg={heroImg}
      overviewTitle="Restoring Full Male Performance & Intimacy"
      overviewText="Impotency (severe or persistent inability to achieve or sustain an erection) affects men of all ages due to vascular, neurological, hormonal, or psychogenic factors. Senior Andrologist Dr. Vinish Kumar Singh conducts thorough vascular Doppler assessment and delivers tailored treatments—from non-invasive shockwave therapy to advanced 3-piece inflatable penile implants."
      treatmentCards={[
        {
          title: "Vascular Penile Color Doppler",
          desc: "Objective ultrasound mapping of cavernosal arterial inflow and venous leak detection.",
        },
        {
          title: "Intracavernosal & Inflatable Implant Care",
          desc: "Advanced medical vascular injections and permanent inflatable penile prosthesis implantation.",
        },
      ]}
      highlights={[
        "100% confidential private consultation environment",
        "Painless shockwave vascular rejuvenation",
        "Permanent surgical solution with penile implants",
      ]}
      detailedTreatments={[
        {
          title: "Low-Intensity Shockwave Rejuvenation",
          desc: "Non-invasive acoustic wave therapy promoting micro-vascular repair and natural erection firming.",
          tag: "Non-Invasive",
        },
        {
          title: "Multimodal Pharmacotherapy & TRT",
          desc: "Optimized PDE5 inhibitors combined with bio-identical testosterone replacement therapy.",
          tag: "Medical Protocol",
        },
        {
          title: "3-Piece Inflatable Penile Prosthesis",
          desc: "Surgical implant providing natural feel, rigidity, and flaccidity on demand with 99% satisfaction.",
          tag: "Permanent Solution",
        },
      ]}
      symptoms={[
        {
          title: "Complete Inability to Erect",
          desc: "Total loss of erectile rigidity during sexual attempts.",
        },
        {
          title: "Venous Leak (Erection Fading)",
          desc: "Erection collapsing rapidly upon penetration or position changes.",
        },
        {
          title: "Loss of Morning Erections",
          desc: "Absence of involuntary nocturnal or early morning erections.",
        },
        {
          title: "Severe Intimacy Distress",
          desc: "Emotional anxiety and relationship stress linked to performance failure.",
        },
      ]}
    />
  );
}
