import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import DrVinish from "../pages/DrVinish";
import Qualifications from "../pages/Qualifications";
import AwardsRecognition from "../pages/AwardsRecognition";
import Experience from "../pages/Experience";
import OurHospitals from "../pages/OurHospitals";
import Contact from "../components/Contact/Contact";
import Gallery from "../Gallery/Gallery";
import KidneyStone from "../pages/ConditionsTreated/KidneyStone";
import Prostate from "../pages/ConditionsTreated/Prostate";
import BladderStone from "../pages/ConditionsTreated/BladderStone";
import MaleInfertility from "../pages/Andrology/MaleInfertility";
import ErectileDysfunction from "../pages/Andrology/ErectileDysfunction";
import Hypogonadism from "../pages/MaleUrology/Hypogonadism";
import Varicocele from "../pages/MaleUrology/Varicocele";
import PeyroniesDisease from "../pages/MaleUrology/PeyroniesDisease";
import LossOfLibido from "../pages/MaleUrology/LossOfLibido";
import Impotency from "../pages/MaleUrology/Impotency";
import PenileCurvature from "../pages/MaleUrology/PenileCurvature";
import FemaleUTI from "../pages/FemaleUrology/UTI";
import FemaleIncontinence from "../pages/FemaleUrology/UrinaryIncontinence";
import FemaleOveractiveBladder from "../pages/FemaleUrology/OveractiveBladder";
import FemaleCystocele from "../pages/FemaleUrology/Cystocele";
import FemaleVoidingDifficulties from "../pages/FemaleUrology/VoidingDifficulties";
import FemaleNocturia from "../pages/FemaleUrology/Nocturia";
import FemaleVesicovaginalFistula from "../pages/FemaleUrology/VesicovaginalFistula";

// Core 4 Services Pages
import UrologyService from "../pages/Services/Urology";
import AndrologyService from "../pages/Services/Andrology";
import NephrologyService from "../pages/Services/Nephrology";
import RenalTransplantService from "../pages/Services/RenalTransplant";

const pageTitles = {
  "/": "Best Urologist in Lucknow | Dr. Vinish Kumar Singh | Laser Urology Specialist",
  "/about/dr-vinish-kumar-singh": "Dr. Vinish Kumar Singh | Senior Consultant Urologist Lucknow",
  "/about/our-hospitals": "Hospital Locations & OPD Timings | Dr. Vinish Kumar Singh",
  "/about/qualifications": "Academic Qualifications & Degrees | Dr. Vinish Kumar Singh",
  "/about/awards-recognition": "Awards & Professional Recognition | Dr. Vinish Kumar Singh",
  "/about/experience": "15+ Years Clinical & Surgical Experience | Dr. Vinish Kumar Singh",
  "/contact": "Book Appointment & Contact Clinic | Dr. Vinish Kumar Singh",
  "/gallery": "Photo & Video Gallery | Dr. Vinish Kumar Singh Clinic",

  // Core 4 Services Pages SEO Titles
  "/services/urology": "Advanced Laser Urology Services | Dr. Vinish Kumar Singh",
  "/services/andrology": "Andrology & Male Sexual Health Services | Dr. Vinish Kumar Singh",
  "/services/nephrology": "Clinical Nephrology & Kidney Care | Dr. Vinish Kumar Singh",
  "/services/renal-transplant": "Renal Transplant Evaluation & Post-Op Care | Dr. Vinish Kumar Singh",

  // Conditions & Treatments
  "/conditions/kidney-stone": "Laser Kidney Stone Surgery (RIRS / PCNL) | Dr. Vinish Kumar Singh",
  "/conditions/prostate": "Enlarged Prostate Laser Surgery (HolEP) | Dr. Vinish Kumar Singh",
  "/conditions/bladder-stone": "Painless Bladder Stone Surgery | Dr. Vinish Kumar Singh",
  "/andrology/male-infertility": "Male Infertility & Micro-TESE Treatment | Dr. Vinish Kumar Singh",
  "/andrology/erectile-dysfunction": "Erectile Dysfunction Treatment | Dr. Vinish Kumar Singh",

  // Male Urology
  "/male/prostate": "Enlarged Prostate Laser Surgery (HolEP) | Dr. Vinish Kumar Singh",
  "/male/kidney": "Laser Kidney Stone Surgery (RIRS / PCNL) | Dr. Vinish Kumar Singh",
  "/male/hypogonadism": "Low Testosterone & Hypogonadism Care | Dr. Vinish Kumar Singh",
  "/male/varicocele": "Microscopic Varicocele Surgery | Dr. Vinish Kumar Singh",
  "/male/erectile-dysfunction": "Erectile Dysfunction Treatment | Dr. Vinish Kumar Singh",
  "/male/peyronies-disease": "Peyronie's Disease Treatment | Dr. Vinish Kumar Singh",
  "/male/loss-of-libido": "Male Hormonal & Libido Care | Dr. Vinish Kumar Singh",
  "/male/impotency": "Impotency & Male Sexual Wellness | Dr. Vinish Kumar Singh",
  "/male/male-infertility": "Male Infertility & Micro-TESE Care | Dr. Vinish Kumar Singh",
  "/male/penile-curvature": "Penile Curvature Correction | Dr. Vinish Kumar Singh",

  // Female Urology
  "/female/uti": "Recurrent Female UTI & Bladder Care | Dr. Vinish Kumar Singh",
  "/female/incontinence": "Female Urinary Incontinence Therapy | Dr. Vinish Kumar Singh",
  "/female/overactive-bladder": "Overactive Bladder (OAB) Treatment | Dr. Vinish Kumar Singh",
  "/female/cystocele": "Bladder Prolapse (Cystocele) Surgery | Dr. Vinish Kumar Singh",
  "/female/voiding-difficulties": "Female Voiding Dysfunction Care | Dr. Vinish Kumar Singh",
  "/female/nocturia": "Nocturia & Frequent Night Urination Care | Dr. Vinish Kumar Singh",
  "/female/vvf-repair": "Vesicovaginal Fistula (VVF) Repair | Dr. Vinish Kumar Singh",
};

export default function AppRoutes() {
  const location = useLocation();

  // Dynamic Browser Tab SEO Titles on route change
  useEffect(() => {
    const currentTitle =
      pageTitles[location.pathname] ||
      "Dr. Vinish Kumar Singh | Senior Urologist & Transplant Surgeon Lucknow";
    document.title = currentTitle;
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/dr-vinish-kumar-singh" element={<DrVinish />} />
      <Route path="/about/our-hospitals" element={<OurHospitals />} />
      <Route path="/about/qualifications" element={<Qualifications />} />
      <Route path="/about/awards-recognition" element={<AwardsRecognition />} />
      <Route path="/about/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />

      {/* Core 4 Services Pages */}
      <Route path="/services/urology" element={<UrologyService />} />
      <Route path="/services/andrology" element={<AndrologyService />} />
      <Route path="/services/nephrology" element={<NephrologyService />} />
      <Route path="/services/renal-transplant" element={<RenalTransplantService />} />

      <Route path="/conditions/kidney-stone" element={<KidneyStone />} />
      <Route path="/conditions/prostate" element={<Prostate />} />
      <Route path="/conditions/bladder-stone" element={<BladderStone />} />
      <Route path="/andrology/male-infertility" element={<MaleInfertility />} />
      <Route path="/andrology/erectile-dysfunction" element={<ErectileDysfunction />} />

      {/* Male Urology Routes */}
      <Route path="/male/prostate" element={<Prostate />} />
      <Route path="/male/kidney" element={<KidneyStone />} />
      <Route path="/male/hypogonadism" element={<Hypogonadism />} />
      <Route path="/male/varicocele" element={<Varicocele />} />
      <Route path="/male/erectile-dysfunction" element={<ErectileDysfunction />} />
      <Route path="/male/peyronies-disease" element={<PeyroniesDisease />} />
      <Route path="/male/loss-of-libido" element={<LossOfLibido />} />
      <Route path="/male/impotency" element={<Impotency />} />
      <Route path="/male/male-infertility" element={<MaleInfertility />} />
      <Route path="/male/penile-curvature" element={<PenileCurvature />} />

      {/* Female Urology Routes */}
      <Route path="/female/uti" element={<FemaleUTI />} />
      <Route path="/female/incontinence" element={<FemaleIncontinence />} />
      <Route path="/female/overactive-bladder" element={<FemaleOveractiveBladder />} />
      <Route path="/female/cystocele" element={<FemaleCystocele />} />
      <Route path="/female/voiding-difficulties" element={<FemaleVoidingDifficulties />} />
      <Route path="/female/nocturia" element={<FemaleNocturia />} />
      <Route path="/female/vvf-repair" element={<FemaleVesicovaginalFistula />} />
    </Routes>
  );
}