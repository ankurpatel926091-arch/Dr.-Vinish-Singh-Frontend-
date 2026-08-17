import React from "react";
import ConditionPage from "../../components/ConditionPage";
import conditionImg from "../../assets/FemaleUrology/vvf_repair.jpg";
import vvfBanner from "../../assets/FemaleUrology/VVFFistulaRepair.png";

export default function VesicovaginalFistula() {
  return (
    <ConditionPage
      title="VVF Fistula Repair"
      subTitle="Advanced Reconstructive Urology & Fistula Closure"
      description="Laparoscopic and transvaginal fistulectomy with vascularized tissue interposition for continuous urinary leakage post-obstetric or gynecological surgery by Senior Urologist Dr. Vinish Kumar Singh."
      category="Female Urology Guide"
      heroBg={vvfBanner}
      image={conditionImg}
      overviewTitle="Definitive Surgical Closure of Urinary Fistula"
      overviewText="A Vesicovaginal Fistula (VVF) is an abnormal passage between the bladder and vagina, causing continuous day-and-night urinary leakage. Dr. Vinish Kumar Singh specializes in reconstructive VVF repair using layered tension-free closures and tissue interposition flaps (Martius fat pad or omental flap) for complete healing."
      treatmentCards={[
        {
          title: "Layered Transvaginal / Laparoscopic Fistulectomy",
          desc: "Complete excision of fistula scar tract followed by separate multi-layer anatomical closure of bladder mucosa and vaginal wall.",
        },
        {
          title: "Vascularized Tissue Interposition Flap",
          desc: "Insertion of a Martius labial fat pad or peritoneal flap between bladder and vagina to prevent recurrence.",
        },
      ]}
      highlights={[
        "Completely eliminates continuous day & night involuntary urine leakage",
        "High surgical success rate even in recurrent or complex post-hysterectomy cases",
        "Expert reconstructive surgery with vascularized tissue interposition",
      ]}
      detailedTreatments={[
        {
          title: "Transvaginal VVF Repair (Latzko Technique)",
          desc: "Minimally invasive vaginal approach for low supratrigonal or trigonal bladder fistulas.",
          tag: "Transvaginal Repair",
        },
        {
          title: "Laparoscopic / Robotic Transabdominal VVF Repair",
          desc: "Keyhole abdominal approach for high vault or complex recurrent fistulas.",
          tag: "Keyhole Surgery",
        },
        {
          title: "Martius Labial Fat Pad Graft",
          desc: "Harvesting healthy vascularized fibro-fatty tissue layer to reinforce fistula repair site.",
          tag: "Flap Interposition",
        },
      ]}
      symptoms={[
        {
          title: "Continuous Day & Night Urine Leakage",
          desc: "Constant uncontrolled urine escape through the vagina regardless of bladder fullness.",
        },
        {
          title: "Normal Urination Diminished or Absent",
          desc: "Loss of normal desire or ability to void through the urethra.",
        },
        {
          title: "Vaginal Irritation & Skin Excoriation",
          desc: "Severe redness, burning sensation, and soreness around vaginal tissue due to wetness.",
        },
        {
          title: "Recurrent Pelvic Infections & Odor",
          desc: "Ammoniacal urine odor and frequent secondary pelvic mucosal inflammation.",
        },
      ]}
      faqs={[
        {
          q: "What causes a Vesicovaginal Fistula (VVF)?",
          a: "VVF most commonly occurs as an accidental injury during abdominal/vaginal hysterectomy, prolonged obstructed labor, or pelvic radiation therapy.",
        },
        {
          q: "When is the best time to undergo VVF repair surgery?",
          a: "Surgical repair is typically performed after 6 to 12 weeks of tissue recovery following the initial injury to ensure healthy, uninflamed tissue margins for optimal healing.",
        },
        {
          q: "Is catheter drainage required after VVF repair?",
          a: "Yes. A urinary catheter is kept in place for 10 to 14 days post-operatively to keep the bladder completely decompressed and allow watertight tissue healing.",
        },
      ]}
    />
  );
}
