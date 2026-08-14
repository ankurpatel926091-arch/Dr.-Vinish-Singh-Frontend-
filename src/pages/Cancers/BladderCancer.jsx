import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/Condition Treated/Bladder Stone.png";

export default function BladderCancer() {
  return (
    <ConditionPage
      title="Bladder Cancer TURBT & Radical Cystectomy"
      subTitle="Endoscopic Resection, Intravesical BCG & Neo-Bladder Reconstruction"
      description="Transurethral resection of bladder tumor (TURBT), intravesical BCG immunotherapy, and radical cystectomy with continent orthotopic neobladder reconstruction by Dr. Vinish Kumar Singh."
      category="Urological Cancers"
      heroBg={heroImg}
      overviewTitle="Advanced Comprehensive Bladder Cancer Management"
      overviewText="Bladder cancer typically originates in the urothelial lining of the bladder, presenting most commonly as painless blood in urine. Early-stage superficial tumors are effectively treated with endoscopic TURBT laser resection and intravesical BCG. Muscle-invasive tumors are managed with radical cystectomy and orthotopic neobladder creation by Uro-Oncologist Dr. Vinish Kumar Singh."
      treatmentCards={[
        {
          title: "Endoscopic TURBT Tumor Resection",
          desc: "Stitchless transurethral laser resection of bladder tumors preserving natural bladder integrity.",
        },
        {
          title: "Radical Cystectomy & Orthotopic Neobladder",
          desc: "Complete removal of cancerous bladder with creation of a new intestine-derived bladder for normal voiding.",
        },
      ]}
      highlights={[
        "Early stage bladder preservation with TURBT & BCG",
        "Continent orthotopic neobladder reconstruction",
        "High-definition narrow band imaging (NBI) cystoscopy",
      ]}
      detailedTreatments={[
        {
          title: "Endoscopic Bipolar TURBT",
          desc: "Complete endoscopic resection of superficial bladder growths with base biopsy for staging.",
          tag: "Stitchless Daycare",
        },
        {
          title: "Intravesical BCG & Chemotherapy Instillation",
          desc: "Immunotherapy flush directly into the bladder preventing tumor recurrence and progression.",
          tag: "Recurrence Prevention",
        },
        {
          title: "Radical Cystectomy with Ileal Conduit / Neobladder",
          desc: "Curative surgical excision for invasive cancer with continent or conduit urinary diversion.",
          tag: "Curative Oncology",
        },
      ]}
      symptoms={[
        {
          title: "Painless Gross Hematuria",
          desc: "Passing bright red or dark brown blood in urine without pain.",
        },
        {
          title: "Urinary Frequency & Irritation",
          desc: "Sudden urgent need to urinate or burning pain during voiding.",
        },
        {
          title: "Passing Blood Clots",
          desc: "Small stringy clots in urine causing temporary flow blockage.",
        },
        {
          title: "Pelvic Discomfort & Weight Loss",
          desc: "Dull ache in lower abdomen or unexplained weight loss in advanced stages.",
        },
      ]}
    />
  );
}
