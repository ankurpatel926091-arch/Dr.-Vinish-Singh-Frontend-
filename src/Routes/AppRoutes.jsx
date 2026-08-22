import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PageLoader from "../components/LoadingFallback/PageLoader";
import BlogSection from "../components/BlogSection/BlogSection";

// Lazy Loaded Route Components for Performance Optimization
const Home = lazy(() => import("../pages/Home"));
const DrVinish = lazy(() => import("../pages/DrVinish"));
const Qualifications = lazy(() => import("../pages/Qualifications"));
const AwardsRecognition = lazy(() => import("../pages/AwardsRecognition"));
const Blogs = lazy(() => import("../components/BlogSection/BlogSection"));
const OurHospitals = lazy(() => import("../pages/OurHospitals"));
const Contact = lazy(() => import("../pages/Contact"));
const BookAppointment = lazy(() => import("../components/Contact/BookAppointment"));
const BookAppointmentPage = lazy(() => import("../pages/BookAppointmentPage"));
const Gallery = lazy(() => import("../Gallery/Gallery"));
const KidneyStone = lazy(() => import("../pages/ConditionsTreated/KidneyStone"));
const Prostate = lazy(() => import("../pages/ConditionsTreated/Prostate"));
const BladderStone = lazy(() => import("../pages/ConditionsTreated/BladderStone"));
const MaleInfertility = lazy(() => import("../pages/Andrology/MaleInfertility"));
const ErectileDysfunction = lazy(() => import("../pages/Andrology/ErectileDysfunction"));
const Hypogonadism = lazy(() => import("../pages/MaleUrology/Hypogonadism"));
const Varicocele = lazy(() => import("../pages/MaleUrology/Varicocele"));
const PeyroniesDisease = lazy(() => import("../pages/MaleUrology/PeyroniesDisease"));
const LossOfLibido = lazy(() => import("../pages/MaleUrology/LossOfLibido"));
const Impotency = lazy(() => import("../pages/MaleUrology/Impotency"));
const PenileCurvature = lazy(() => import("../pages/MaleUrology/PenileCurvature"));
const FemaleUTI = lazy(() => import("../pages/FemaleUrology/UTI"));
const FemaleIncontinence = lazy(() => import("../pages/FemaleUrology/UrinaryIncontinence"));
const FemaleOveractiveBladder = lazy(() => import("../pages/FemaleUrology/OveractiveBladder"));
const FemaleCystocele = lazy(() => import("../pages/FemaleUrology/Cystocele"));
const FemaleVoidingDifficulties = lazy(() => import("../pages/FemaleUrology/VoidingDifficulties"));
const FemaleNocturia = lazy(() => import("../pages/FemaleUrology/Nocturia"));
const FemaleVesicovaginalFistula = lazy(() => import("../pages/FemaleUrology/VesicovaginalFistula"));

// Additional Condition Pages
const UrethralStricture = lazy(() => import("../pages/ConditionsTreated/UrethralStricture"));
const Hematuria = lazy(() => import("../pages/ConditionsTreated/Hematuria"));
const Hydrocele = lazy(() => import("../pages/ConditionsTreated/Hydrocele"));
const TesticularDisorders = lazy(() => import("../pages/ConditionsTreated/TesticularDisorders"));
const ChronicTesticularPain = lazy(() => import("../pages/ConditionsTreated/ChronicTesticularPain"));
const KidneyTransplantEval = lazy(() => import("../pages/ConditionsTreated/KidneyTransplantEval"));
const LivingDonorTransplant = lazy(() => import("../pages/ConditionsTreated/LivingDonorTransplant"));
const DeceasedDonorTransplant = lazy(() => import("../pages/ConditionsTreated/DeceasedDonorTransplant"));
const PostTransplantCare = lazy(() => import("../pages/ConditionsTreated/PostTransplantCare"));

// Andrology Pages
const PrematureEjaculation = lazy(() => import("../pages/Andrology/PrematureEjaculation"));

// Paediatric Urology Pages
const UndescendedTestis = lazy(() => import("../pages/PaediatricUrology/UndescendedTestis"));
const Phimosis = lazy(() => import("../pages/PaediatricUrology/Phimosis"));
const Hypospadias = lazy(() => import("../pages/PaediatricUrology/Hypospadias"));
const PaediatricHydrocele = lazy(() => import("../pages/PaediatricUrology/PaediatricHydrocele"));
const PaediatricUrinaryProblems = lazy(() => import("../pages/PaediatricUrology/PaediatricUrinaryProblems"));

// Urological Cancer Pages
const ProstateCancer = lazy(() => import("../pages/Cancers/ProstateCancer"));
const KidneyCancer = lazy(() => import("../pages/Cancers/KidneyCancer"));
const BladderCancer = lazy(() => import("../pages/Cancers/BladderCancer"));
const TesticularCancer = lazy(() => import("../pages/Cancers/TesticularCancer"));

// Core 4 Services Pages
const UrologyService = lazy(() => import("../pages/Services/Urology"));
const AndrologyService = lazy(() => import("../pages/Services/Andrology"));
const NephrologyService = lazy(() => import("../pages/Services/Nephrology"));
const RenalTransplantService = lazy(() => import("../pages/Services/RenalTransplant"));
const BlogDetail = lazy(() => import("../pages/BlogDetail"));

// Legal Pages
const PrivacyPolicy = lazy(() => import("../pages/Legal/PrivacyPolicy"));
const TermsOfService = lazy(() => import("../pages/Legal/TermsOfService"));

const pageTitles = {
  "/": "Best Urologist in Lucknow | Dr. Vinish Kumar Singh | Laser Urology Specialist",
  "/about/dr-vinish-kumar-singh": "Dr. Vinish Kumar Singh | Senior Consultant Urologist Lucknow",
  "/about/our-hospitals": "Hospital Locations & OPD Timings | Dr. Vinish Kumar Singh",
  "/about/qualifications": "Academic Qualifications & Degrees | Dr. Vinish Kumar Singh",
  "/about/awards-recognition": "Awards & Professional Recognition | Dr. Vinish Kumar Singh",
  "/about/experience": "15+ Years Clinical & Surgical Experience | Dr. Vinish Kumar Singh",
  "/contact": "Contact Us & Clinic Locations | Dr. Vinish Kumar Singh",
  "/book-appointment": "Book Appointment | Dr. Vinish Kumar Singh",
  "/gallery": "Photo & Video Gallery | Dr. Vinish Kumar Singh Clinic",
  "/privacy-policy": "Privacy Policy | Dr. Vinish Kumar Singh Urology Clinic Lucknow",
  "/terms-of-service": "Terms of Service | Dr. Vinish Kumar Singh Urology Clinic Lucknow",

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
};

export default function AppRoutes() {
  const location = useLocation();

  // Dynamic Browser Tab SEO Titles & Scroll To Top or #book-appointment on route change
  useEffect(() => {
    if (location.hash === "#book-appointment" || location.hash === "#select-hospital") {
      setTimeout(() => {
        const el = document.getElementById("book-appointment");
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 350);
    } else {
      window.scrollTo(0, 0);
    }
    const currentTitle =
      pageTitles[location.pathname] ||
      "Dr. Vinish Kumar Singh | Senior Urologist & Transplant Surgeon Lucknow";
    document.title = currentTitle;
  }, [location.pathname, location.hash]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/dr-vinish-kumar-singh" element={<DrVinish />} />
        <Route path="/about/our-hospitals" element={<OurHospitals />} />
        <Route path="/about/qualifications" element={<Qualifications />} />
        <Route path="/about/awards-recognition" element={<AwardsRecognition />} />
        <Route path="/Blogs" element={<BlogSection />} />
        <Route path="/BookAppointment" element={<BookAppointmentPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/select-hospital" element={<BookAppointment />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* Core 4 Services Pages */}
        <Route path="/services/urology" element={<UrologyService />} />
        <Route path="/services/andrology" element={<AndrologyService />} />
        <Route path="/services/nephrology" element={<NephrologyService />} />
        <Route path="/services/renal-transplant" element={<RenalTransplantService />} />

        {/* Conditions Treated Routes */}
        <Route path="/conditions/kidney-stone" element={<KidneyStone />} />
        <Route path="/conditions/prostate" element={<Prostate />} />
        <Route path="/conditions/bladder-stone" element={<BladderStone />} />
        <Route path="/conditions/urethral-stricture" element={<UrethralStricture />} />
        <Route path="/conditions/hematuria" element={<Hematuria />} />
        <Route path="/conditions/hydrocele" element={<Hydrocele />} />
        <Route path="/conditions/testicular-disorders" element={<TesticularDisorders />} />
        <Route path="/conditions/chronic-testicular-pain" element={<ChronicTesticularPain />} />
        <Route path="/conditions/kidney-transplant-eval" element={<KidneyTransplantEval />} />
        <Route path="/conditions/living-donor-transplant" element={<LivingDonorTransplant />} />
        <Route path="/conditions/deceased-donor-transplant" element={<DeceasedDonorTransplant />} />
        <Route path="/conditions/post-transplant-care" element={<PostTransplantCare />} />

        {/* Andrology Routes */}
        <Route path="/andrology/male-infertility" element={<MaleInfertility />} />
        <Route path="/andrology/erectile-dysfunction" element={<ErectileDysfunction />} />
        <Route path="/andrology/premature-ejaculation" element={<PrematureEjaculation />} />

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

        {/* Paediatric Urology Routes */}
        <Route path="/paediatric/undescended-testis" element={<UndescendedTestis />} />
        <Route path="/paediatric/phimosis" element={<Phimosis />} />
        <Route path="/paediatric/hypospadias" element={<Hypospadias />} />
        <Route path="/paediatric/hydrocele" element={<PaediatricHydrocele />} />
        <Route path="/paediatric/urinary-problems" element={<PaediatricUrinaryProblems />} />

        {/* Urological Cancer Routes */}
        <Route path="/cancers/prostate-cancer" element={<ProstateCancer />} />
        <Route path="/cancers/kidney-cancer" element={<KidneyCancer />} />
        <Route path="/cancers/bladder-cancer" element={<BladderCancer />} />
        <Route path="/cancers/testicular-cancer" element={<TesticularCancer />} />
      </Routes>
    </Suspense>
  );
}