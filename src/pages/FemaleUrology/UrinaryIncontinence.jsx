import React from "react";
import ConditionPage from "../../components/ConditionPage";
import conditionImg from "../../assets/FemaleUrology/incontinence.jpg";
import incontinenceBanner from "../../assets/FemaleUrology/UrinaryIncontinence.png";

export default function UrinaryIncontinence() {
  return (
    <ConditionPage
      title="Urinary Incontinence"
      subTitle="Advanced TOT / TVT Sling & Laser Care"
      description="Comprehensive urodynamic evaluation, pelvic floor rehabilitation, and minimally invasive sling surgery (TOT/TVT) for female urine leakage by Senior Urologist Dr. Vinish Kumar Singh."
      category="Female Urology Guide"
      heroBg={incontinenceBanner}
      image={conditionImg}
      overviewTitle="Regain Bladder Control & Confidence"
      overviewText="Involuntary leakage of urine during coughing, laughing, or physical activity (Stress Urinary Incontinence) is a highly treatable medical condition. Dr. Vinish Kumar Singh provides state-of-the-art minimally invasive TVT (Tension-free Vaginal Tape) and TOT (Transobturator Tape) suburethral sling procedures with 95%+ success rates and rapid 24-hour recovery."
      treatmentCards={[
        {
          title: "TVT / TOT Suburethral Sling Surgery",
          desc: "Daycare keyhole suburethral tape placement providing immediate structural support to prevent urine leakage.",
        },
        {
          title: "Pelvic Floor Rehabilitation & Biofeedback",
          desc: "Targeted Kegel strengthening, bladder retraining, and non-surgical pelvic muscle conditioning.",
        },
      ]}
      highlights={[
        "Painless daycare procedure with 24-hour discharge",
        "Restores natural bladder sphincter support & leak-free lifestyle",
        "Over 95% long-term surgical success rate in women",
      ]}
      detailedTreatments={[
        {
          title: "Transobturator Tape (TOT) Sling",
          desc: "Minimally invasive mesh tape positioning via tiny skin crease incisions for stress urinary leakage.",
          tag: "Gold Standard",
        },
        {
          title: "Tension-Free Vaginal Tape (TVT)",
          desc: "Retropubic tape placement providing firm mid-urethral support for complex or severe incontinence.",
          tag: "Surgical Repair",
        },
        {
          title: "Intravesical Botox Therapy",
          desc: "Bladder wall injections to relax severe refractory urge incontinence and overactive bladder spasms.",
          tag: "Daycare Care",
        },
      ]}
      symptoms={[
        {
          title: "Leakage During Coughing or Sneezing",
          desc: "Sudden involuntary urine drops when laughing, exercising, or lifting heavy items.",
        },
        {
          title: "Sudden Overwhelming Urge to Urinate",
          desc: "Inability to hold urine long enough to reach the restroom safely.",
        },
        {
          title: "Frequent Night Voiding (Nocturia)",
          desc: "Waking up multiple times every night due to urgent bladder pressure.",
        },
        {
          title: "Continuous Urine Dribbling",
          desc: "Constant dampness or overflow incontinence requiring daily pads.",
        },
      ]}
      faqs={[
        {
          q: "Is TOT / TVT sling surgery permanent?",
          a: "Yes. Synthetic mesh slings provide durable, permanent support to the urethral sphincter with long-term success rates exceeding 95%.",
        },
        {
          q: "How long is the hospital stay for incontinence surgery?",
          a: "It is a daycare or 24-hour overnight procedure. Most female patients return home the next morning.",
        },
        {
          q: "Can non-surgical treatments cure mild urine leakage?",
          a: "Yes. Mild stress or urge incontinence responds well to pelvic floor physiotherapy, biofeedback, and medical bladder relaxants.",
        },
      ]}
    />
  );
}
