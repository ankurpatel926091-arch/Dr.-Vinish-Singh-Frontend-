import React from "react";
import ConditionPage from "../../components/ConditionPage";
import conditionImg from "../../assets/FemaleUrology/voiding_difficulties.jpg";
import voidingBanner from "../../assets/FemaleUrology/VoidingDifficulties.png";

export default function VoidingDifficulties() {
  return (
    <ConditionPage
      title="Voiding Difficulties"
      subTitle="Specialized Urodynamics & Bladder Outlet Relief"
      description="Detailed video urodynamics, pelvic floor biofeedback, and urethral dilation for female urinary straining, slow stream, and retention by Senior Urologist Dr. Vinish Kumar Singh."
      category="Female Urology Guide"
      heroBg={voidingBanner}
      image={conditionImg}
      overviewTitle="Restore Normal Urinary Flow & Emptying"
      overviewText="Female voiding dysfunction includes symptoms such as urinary hesitancy, straining, weak stream, or feeling that the bladder hasn't emptied completely. Dr. Vinish Kumar Singh utilizes advanced Uroflowmetry, post-void residual scans, and video urodynamics to differentiate bladder muscle weakness (underactivity) from urethral obstruction."
      treatmentCards={[
        {
          title: "Computerized Uroflowmetry & PVR Scan",
          desc: "Precision flow rate graphing and post-void residual ultrasound measurement of trapped urine.",
        },
        {
          title: "Outpatient Gentle Urethral Dilation",
          desc: "Endoscopic expansion of narrow urethral passages restoring effortless urinary flow.",
        },
      ]}
      highlights={[
        "Prevents chronic urinary retention & secondary kidney strain",
        "Provides smooth, comfortable, and complete bladder emptying",
        "Accurate urodynamic diagnostic pinpointing exact muscle/nerve causes",
      ]}
      detailedTreatments={[
        {
          title: "Comprehensive Multichannel Urodynamic Study",
          desc: "Simultaneous measurement of detrusor muscle pressure and flow rate.",
          tag: "Gold Standard Urodynamics",
        },
        {
          title: "Pelvic Floor Biofeedback & Relaxation Therapy",
          desc: "Neuromuscular re-training for dysfunctional pelvic floor voiding spasms.",
          tag: "Re-Training Care",
        },
        {
          title: "Bladder Neck Incision / Urethrolysis",
          desc: "Minimally invasive release of previous sling tightness or anatomical obstruction.",
          tag: "Surgical Release",
        },
      ]}
      symptoms={[
        {
          title: "Urinary Hesitancy & Straining",
          desc: "Waiting a long time for the urine stream to begin or needing to push hard.",
        },
        {
          title: "Weak, Slow or Interrupted Stream",
          desc: "Urine flowing in a thin trickle or starting and stopping repeatedly.",
        },
        {
          title: "Incomplete Bladder Emptying Feeling",
          desc: "Sensation of residual urine trapped in the bladder after voiding.",
        },
        {
          title: "Recurrent Infections & Retention",
          desc: "Trapped urine leading to frequent bladder infections or sudden retention.",
        },
      ]}
      faqs={[
        {
          q: "What causes voiding difficulties in women?",
          a: "Causes include pelvic floor muscle spasms (dyssynergia), previous incontinence sling tightness, urethral strictures, neurogenic bladder, or bladder prolapsed obstruction.",
        },
        {
          q: "Is a Uroflowmetry test painful?",
          a: "No. Uroflowmetry is a completely non-invasive, painless test where you simply urinate into a specialized funnel-equipped commode connected to a computer transducer.",
        },
        {
          q: "What happens if voiding difficulties are left untreated?",
          a: "Untreated voiding dysfunction can lead to recurrent urinary infections, bladder wall thickening, bladder decompensation, and back-pressure strain on the kidneys.",
        },
      ]}
    />
  );
}
