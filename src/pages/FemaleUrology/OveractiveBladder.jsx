import React from "react";
import ConditionPage from "../../components/ConditionPage";
import conditionImg from "../../assets/FemaleUrology/overactive_bladder.jpg";
import oabBanner from "../../assets/FemaleUrology/OveractiveBladder.png";

export default function OveractiveBladder() {
  return (
    <ConditionPage
      title="Overactive Bladder"
      subTitle="Specialized Urgency & Bladder Neuromodulation Care"
      description="Advanced anticholinergic therapy, intravesical Botox injections, and sacral nerve neuromodulation for female overactive bladder by Senior Urologist Dr. Vinish Kumar Singh."
      category="Female Urology Guide"
      heroBg={oabBanner}
      image={conditionImg}
      overviewTitle="Calm Sudden Urgency & Night Urination"
      overviewText="Overactive Bladder (OAB) causes sudden, uncontrollable urges to urinate, frequent daytime voiding (>8 times/day), and waking up multiple times at night (nocturia). Dr. Vinish Kumar Singh offers comprehensive multi-modal care ranging from targeted bladder re-training and modern beta-3 agonists to intravesical Botox therapy."
      treatmentCards={[
        {
          title: "Intravesical Bladder Botox Injections",
          desc: "Endoscopic 15-minute daycare procedure relaxing overactive detrusor muscle spasms for 6-9 months.",
        },
        {
          title: "Modern Selective Beta-3 Agonist Therapy",
          desc: "Next-generation oral bladder relaxants with zero dry mouth or cognitive side effects.",
        },
      ]}
      highlights={[
        "Eliminates sudden urinary panic & urge leakage episodes",
        "Dramatically improves night sleep quality by reducing nocturia",
        "Minimally invasive daycare procedures with rapid relief",
      ]}
      detailedTreatments={[
        {
          title: "Intravesical OnabotulinumtoxinA (Botox)",
          desc: "Endoscopic cystoscopic micro-injections directly into the detrusor muscle wall.",
          tag: "Daycare Procedure",
        },
        {
          title: "Percutaneous Tibial Nerve Stimulation (PTNS)",
          desc: "Non-surgical office neuromodulation recalibrating sacral bladder nerve signals.",
          tag: "Non-Invasive Care",
        },
        {
          title: "Comprehensive Urodynamic Study (UDS)",
          desc: "Computerized pressure-flow mapping identifying involuntary detrusor overactivity.",
          tag: "Diagnostic Workup",
        },
      ]}
      symptoms={[
        {
          title: "Sudden Uncontrollable Urgency",
          desc: "Feeling a sudden, intense need to pass urine that cannot be delayed.",
        },
        {
          title: "Frequent Daytime Voiding (>8 Times)",
          desc: "Needing to visit the restroom constantly throughout the day.",
        },
        {
          title: "Waking Up Multiple Times at Night",
          desc: "Interrupted sleep due to persistent night bladder fullness.",
        },
        {
          title: "Urge Incontinence (Leakage Before Restroom)",
          desc: "Accidental urine leakage occurring right after feeling a sudden urge.",
        },
      ]}
      faqs={[
        {
          q: "How long do Bladder Botox injections last for OAB?",
          a: "Intravesical Botox injections typically provide complete bladder stability and urgency relief for 6 to 9 months, after which a repeat session can be performed.",
        },
        {
          q: "Is Overactive Bladder a normal part of aging?",
          a: "No. While OAB is more common in mature adults, it is a medical condition caused by nerve signals or muscle spasms and is highly treatable.",
        },
        {
          q: "What lifestyle changes help manage OAB?",
          a: "Reducing bladder irritants (caffeine, alcohol, artificial sweeteners), practicing timed voiding, and performing pelvic floor muscle exercises help reduce urgency.",
        },
      ]}
    />
  );
}
