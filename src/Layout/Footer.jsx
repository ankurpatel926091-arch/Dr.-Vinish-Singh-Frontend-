import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaChevronRight,
  FaHospital,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import codeCrafterLogo from "../assets/CLogoFooter.png";
import logo from "../assets/logo.png";

const NAVY_DARK = "#072348";
const ORANGE = "#F5821F";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Dr. Vinish", path: "/about/dr-vinish-kumar-singh" },
  { name: "Our Hospitals", path: "/about/our-hospitals" },
  { name: "Qualifications", path: "/about/qualifications" },
  { name: "Experience", path: "/about/experience" },
  { name: "Photo Gallery", path: "/gallery" },
  { name: "Contact & Appointments", path: "/contact" },
];

const conditions = [
  { name: "Laser Kidney Stone (RIRS)", path: "/conditions/kidney-stone" },
  { name: "Prostate Surgery (HolEP)", path: "/conditions/prostate" },
  { name: "Painless PCNL & URSL", path: "/conditions/kidney-stone" },
  { name: "Bladder Stone Surgery", path: "/conditions/bladder-stone" },
  { name: "Male Infertility Care", path: "/andrology/male-infertility" },
  { name: "Erectile Dysfunction", path: "/andrology/erectile-dysfunction" },
  { name: "Recurrent Female UTI", path: "/female/uti" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: NAVY_DARK }} className="text-white relative z-10 font-sans border-t border-blue-900/60">
      {/* Top Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        
        {/* Equal Flex Distribution Across All 4 Columns (Left to Right Even Gaps) */}
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between items-start gap-8 lg:gap-6">
          
          {/* ================= COL 1: DOCTOR BRANDING & PROFILE ================= */}
          <div className="w-full sm:w-[48%] lg:w-[24%] flex flex-col items-start shrink-0">
            <Link to="/" className="inline-flex items-center gap-3 mb-3 group">
              <img
                src={logo}
                alt="Dr. Vinish Kumar Singh Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="leading-tight">
                <p className="text-base sm:text-lg font-bold tracking-tight text-white">
                  DR. VINISH KUMAR SINGH
                </p>
                <p
                  className="text-[10px] uppercase tracking-[2.5px] font-bold mt-0.5"
                  style={{ color: ORANGE }}
                >
                  Senior Urologist &amp; Transplant Surgeon
                </p>
              </div>
            </Link>

            <div className="h-0.5 w-8 bg-orange-500 rounded-full mb-3" />

            <p className="text-xs text-blue-100/80 leading-relaxed font-normal mb-5 max-w-[260px]">
              Providing expert diagnosis and advanced laser surgical care for urology, endourology, and kidney transplant care across 2 specialized hospital centres in Lucknow.
            </p>

            {/* Social Links Bar */}
            <div className="flex items-center gap-2.5">
              {[
                {
                  icon: FaFacebookF,
                  label: "Facebook",
                  href: "https://www.facebook.com/drvinishsinghurosurgeon/",
                },
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/drvinishurosurgeon/?hl=en",
                },
                {
                  icon: FaYoutube,
                  label: "YouTube",
                  href: "https://www.youtube.com/@drvinishinghurosurgeon/",
                },
              ].map((item, i) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#F5821F] text-white border border-white/10 transition-all duration-300 hover:scale-110 shadow-xs"
                  >
                    <IconComp size={13} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= COL 2: QUICK LINKS ================= */}
          <div className="w-full sm:w-[48%] lg:w-[22%] shrink-0 lg:pl-6">
            <h3
              className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-2"
              style={{ color: ORANGE }}
            >
              Quick Links
            </h3>
            <div className="h-0.5 w-8 bg-orange-500 rounded-full mb-4" />

            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-xs sm:text-sm text-blue-100/80 hover:text-white transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <FaChevronRight
                      size={10}
                      className="text-orange-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0"
                    />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COL 3: TREATMENTS OFFERED ================= */}
          <div className="w-full sm:w-[48%] lg:w-[23%] shrink-0">
            <h3
              className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-2"
              style={{ color: ORANGE }}
            >
              Treatments Offered
            </h3>
            <div className="h-0.5 w-8 bg-orange-500 rounded-full mb-4" />

            <ul className="space-y-2.5">
              {conditions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-xs sm:text-sm text-blue-100/80 hover:text-white transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <FaChevronRight
                      size={10}
                      className="text-orange-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0"
                    />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COL 4: HOSPITAL CENTRES ================= */}
          <div className="w-full sm:w-[48%] lg:w-[28%] shrink-0">
            <h3
              className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-2"
              style={{ color: ORANGE }}
            >
              Hospital Centres
            </h3>
            <div className="h-0.5 w-8 bg-orange-500 rounded-full mb-4" />

            <div className="space-y-3.5 text-xs">
              {/* 1. Morning Centre Card */}
              <div className="bg-[#0a2f5c]/70 hover:bg-[#0a2f5c] p-3.5 rounded-2xl border border-blue-400/20 transition-all duration-300 shadow-xs">
                <div className="flex items-center justify-between gap-1 text-orange-400 font-bold mb-1">
                  <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                    <FaHospital size={11} />
                    <span>Morning OPD</span>
                  </span>
                  <span className="text-[10px] bg-orange-500/20 px-2 py-0.5 rounded-full border border-orange-400/30 text-orange-300 font-semibold">
                    10 AM - 01 PM
                  </span>
                </div>

                <h4 className="font-extrabold text-white text-xs mt-1">
                  Rudraksh IVF &amp; Urology Centre
                </h4>

                <p className="text-[11px] text-blue-100/75 mt-1 leading-relaxed">
                  1/795, Ratan Khand, Sharda Nagar, Lucknow
                </p>

                <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-white/10 pt-2">
                  <a
                    href="tel:8960068307"
                    className="font-bold text-orange-400 hover:underline flex items-center gap-1.5 text-xs"
                  >
                    <FaPhoneAlt size={10} />
                    <span>+91 89600 68307</span>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/jbynbpoL5PcKca4Z9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-orange-500 text-blue-100 hover:text-white text-[10px] font-bold flex items-center gap-1 transition-all"
                  >
                    <FaMapMarkerAlt size={9} />
                    <span>Directions</span>
                  </a>
                </div>
              </div>

              {/* 2. Evening Centre Card */}
              <div className="bg-[#0a2f5c]/70 hover:bg-[#0a2f5c] p-3.5 rounded-2xl border border-blue-400/20 transition-all duration-300 shadow-xs">
                <div className="flex items-center justify-between gap-1 text-blue-300 font-bold mb-1">
                  <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                    <FaHospital size={11} />
                    <span>Evening OPD</span>
                  </span>
                  <span className="text-[10px] bg-blue-500/20 px-2 py-0.5 rounded-full border border-blue-400/30 text-blue-200 font-semibold">
                    03 PM - 06 PM
                  </span>
                </div>

                <h4 className="font-extrabold text-white text-xs mt-1">
                  Dr. Shilpi Maternity &amp; Urology
                </h4>

                <p className="text-[11px] text-blue-100/75 mt-1 leading-relaxed">
                  596Pb/1114/03, Ring Rd, Pakkabag, Lucknow
                </p>

                <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-white/10 pt-2">
                  <a
                    href="tel:8604891955"
                    className="font-bold text-orange-400 hover:underline flex items-center gap-1.5 text-xs"
                  >
                    <FaPhoneAlt size={10} />
                    <span>+91 86048 91955</span>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-orange-500 text-blue-100 hover:text-white text-[10px] font-bold flex items-center gap-1 transition-all"
                  >
                    <FaMapMarkerAlt size={9} />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#03152d] py-4 px-4 text-white text-xs font-medium border-t border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-center text-blue-100/80">
          <span>Copyright © {year} Dr. Vinish Kumar Singh Clinic</span>
          <span className="text-white/40 font-bold px-1">|</span>
          <span>All Rights Reserved</span>
          <span className="text-white/40 font-bold px-1">|</span>
          <span className="inline-flex items-center gap-2">
            <span>Design &amp; Developed by</span>
            <a
              href="https://codecrafter.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-90 transition-opacity"
            >
              <img
                src={codeCrafterLogo}
                alt="CodeCrafter Web Solutions"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}