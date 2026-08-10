import Hero from "../components/Hero/Hero";
import Slider from "../components/Hero/Slider";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import PatientJourney from "../components/PatientJourney/PatientJourney";
import Testimonials from "../components/Testimonials/Testimonials";
import HomeGallery from "../components/HomeGallery/HomeGallery";
import FaqSection from "../components/Faq/FaqSection";
import Contact from "../components/Contact/Contact";
import InstagramFeed from "../components/Instagram/InstagramFeed";
import BlogSection from "../components/BlogSection/BlogSection";

export default function Home() {
  return (
    <>
      <Slider />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <PatientJourney />
      <Testimonials />
      <HomeGallery />
      <InstagramFeed />
      <FaqSection />
      <BlogSection />
      <Contact isHomePage={true} />
    </>
  );
}