import React from "react";
import ConditionPage from "../../components/ConditionPage";
import heroImg from "../../assets/FemaleUrology/CystoceleProlapse.png";

export default function PaediatricHydrocele() {
  return (
    <ConditionPage
      title="Paediatric Hydrocele & Hernia Repair"
      subTitle="Daycare High Ligation Surgery for Children"
      description="Painless high ligation repair of communicating hydrocele and congenital hernia in infants and young boys by Paediatric Urologist Dr. Vinish Kumar Singh."
      category="Paediatric Urological Conditions"
      heroBg={heroImg}
      overviewTitle="Gentle Surgical Correction for Child Hydrocele"
      overviewText="Paediatric hydrocele is a fluid collection in the scrotum caused by a persistent open communication (patent processus vaginalis) between the abdominal cavity and scrotum. Unlike adult hydrocele, child hydrocele often fluctuates in size. Dr. Vinish Kumar Singh performs delicate high ligation daycare surgery—closing the communication sac with zero risk of recurrence."
      treatmentCards={[
        {
          title: "Daycare High Ligation Procedure",
          desc: "Tiny groin crease incision to locate and seal the open abdominal communication channel.",
        },
        {
          title: "Simultaneous Hernia Sac Closure",
          desc: "Closing patent processus vaginalis before bowel loops can slide down into the scrotum.",
        },
      ]}
      highlights={[
        "Permanent cure with 0% fluid recurrence",
        "Painless daycare procedure with 24-hour home return",
        "Tiny hidden skin crease incision that fades completely",
      ]}
      detailedTreatments={[
        {
          title: "Inguinal Herniotomy / High Ligation",
          desc: "Gentle ligation of fluid sac at internal ring level preserving testicular blood vessels.",
          tag: "Daycare Surgery",
        },
        {
          title: "Laparoscopic High Ligation",
          desc: "Keyhole closure of open processus vaginalis suitable for bilateral child hydroceles.",
          tag: "Laparoscopic Option",
        },
        {
          title: "Cord Hydrocele Excision",
          desc: "Targeted removal of encysted fluid sacs located along the spermatic cord canal.",
          tag: "Precision Repair",
        },
      ]}
      symptoms={[
        {
          title: "Fluctuating Scrotal Swelling",
          desc: "Swelling larger in evening after playing and smaller upon waking in morning.",
        },
        {
          title: "Painless Groin / Scrotal Soft Lump",
          desc: "Soft fluid mass in the scrotum that transilluminates under light test.",
        },
        {
          title: "Swelling Increases When Crying",
          desc: "Lump expanding during coughing, straining, or crying spells.",
        },
        {
          title: "Bilateral Groin Fullness",
          desc: "Visible bulge present on both right and left sides of the child's groin.",
        },
      ]}
    />
  );
}
