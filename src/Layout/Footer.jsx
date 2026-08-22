import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaChevronRight,
  FaHospital,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
  { name: "Blogs", path: "/blogs" },
  { name: "Photo Gallery", path: "/gallery" },
  { name: "Contact ", path: "/contact" },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 sm:pt-9 sm:pb-7">
        
        {/* Equal Flex Distribution Across All 4 Columns (Left to Right Even Gaps) */}
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between items-start gap-6 lg:gap-5">
          
          {/* ================= COL 1: DOCTOR BRANDING & PROFILE ================= */}
          <div className="w-full sm:w-[48%] lg:w-[24%] flex flex-col items-start shrink-0">
            <Link to="/" className="inline-block mb-3 group">
              <div className="bg-white px-4 py-2 rounded-2xl border border-white/20 shadow-md transition-transform duration-300 group-hover:scale-105 inline-block">
                <img
                  src={logo}
                  alt="Dr. Vinish Kumar Singh Logo"
                  className="h-12 sm:h-16 w-auto object-contain max-w-[220px] sm:max-w-[250px]"
                />
              </div>
            </Link>

            <div className="h-0.5 w-8 bg-orange-500 rounded-full mb-2.5" />

            <p className="text-xs sm:text-sm text-blue-100/85 leading-relaxed font-medium mb-4 max-w-[270px]">
              Providing expert diagnosis and advanced laser surgical care for urology, endourology, and kidney transplant care across 2 specialized hospital centres in Lucknow.
            </p>

            {/* Social Links Bar */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                {
                  icon: FaFacebookF,
                  label: "Facebook",
                  href: "https://www.facebook.com/vinishingh",
                },
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/drvinishurosurgeon/",
                },
                {
                  icon: FaLinkedinIn,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/106467207/admin/dashboard/",
                },
                {
                  icon: FaYoutube,
                  label: "YouTube",
                  href: "https://www.youtube.com/@drvinishinghurosurgeon",
                },
                {
                  icon: FaXTwitter,
                  label: "Twitter",
                  href: "https://x.com/dr_vinish",
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
                    title={item.label}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#F5821F] text-white border border-white/15 transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <IconComp size={19} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= COL 2: QUICK LINKS ================= */}
          <div className="w-full sm:w-[48%] lg:w-[22%] shrink-0 lg:pl-4">
            <h3
              className="text-sm sm:text-base font-extrabold uppercase tracking-wider mb-1.5"
              style={{ color: ORANGE }}
            >
              Quick Links
            </h3>
            <div className="h-0.5 w-8 bg-orange-500 rounded-full mb-2.5" />

            <ul className="space-y-1.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm sm:text-base text-blue-100/90 hover:text-white transition-all duration-200 inline-flex items-center gap-1.5 font-medium group"
                  >
                    <FaChevronRight
                      size={11}
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
              className="text-sm sm:text-base font-extrabold uppercase tracking-wider mb-1.5"
              style={{ color: ORANGE }}
            >
              Treatments Offered
            </h3>
            <div className="h-0.5 w-8 bg-orange-500 rounded-full mb-2.5" />

            <ul className="space-y-1.5">
              {conditions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm sm:text-base text-blue-100/90 hover:text-white transition-all duration-200 inline-flex items-center gap-1.5 font-medium group"
                  >
                    <FaChevronRight
                      size={11}
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
              className="text-sm sm:text-base font-extrabold uppercase tracking-wider mb-1.5"
              style={{ color: ORANGE }}
            >
              Hospital Centres
            </h3>
            <div className="h-0.5 w-8 bg-orange-500 rounded-full mb-2.5" />

            <div className="space-y-3 text-xs sm:text-sm">
              {/* 1. Morning Centre Card */}
              <div className="bg-[#0a2f5c]/70 hover:bg-[#0a2f5c] p-3.5 sm:p-4 rounded-2xl border border-blue-400/20 transition-all duration-300 shadow-xs">
                <div className="flex items-center justify-between gap-1 text-orange-400 font-bold mb-1.5">
                  <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider">
                    <FaHospital size={12} />
                    <span>Morning OPD</span>
                  </span>
                  <span className="text-xs bg-orange-500/20 px-2.5 py-0.5 rounded-full border border-orange-400/30 text-orange-300 font-bold">
                    10 AM - 01 PM
                  </span>
                </div>

                <h4 className="font-extrabold text-white text-sm sm:text-base mt-1.5">
                  <a
                    href="https://maps.app.goo.gl/jbynbpoL5PcKca4Z9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-orange-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    Rudraksh IVF &amp; Urology Centre
                    <FaMapMarkerAlt size={14} className="text-orange-400 shrink-0" />
                  </a>
                </h4>

                <p className="text-xs sm:text-sm text-blue-100/90 mt-1 leading-relaxed font-normal">
                  1/795, Ratan Khand, Sharda Nagar, Lucknow
                </p>

                <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/10 pt-2.5">
                  <a
                    href="tel:8960068307"
                    className="font-bold text-orange-400 hover:underline flex items-center gap-1.5 text-xs sm:text-sm"
                  >
                    <FaPhoneAlt size={12} />
                    <span>+91 89600 68307</span>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/jbynbpoL5PcKca4Z9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-orange-500 text-blue-100 hover:text-white text-xs font-bold flex items-center gap-1 transition-all"
                  >
                    <FaMapMarkerAlt size={11} />
                    <span>Directions</span>
                  </a>
                </div>
              </div>

              {/* 2. Evening Centre Card */}
              <div className="bg-[#0a2f5c]/70 hover:bg-[#0a2f5c] p-3.5 sm:p-4 rounded-2xl border border-blue-400/20 transition-all duration-300 shadow-xs">
                <div className="flex items-center justify-between gap-1 text-blue-300 font-bold mb-1.5">
                  <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider">
                    <FaHospital size={12} />
                    <span>Evening OPD</span>
                  </span>
                  <span className="text-xs bg-blue-500/20 px-2.5 py-0.5 rounded-full border border-blue-400/30 text-blue-200 font-bold">
                    03 PM - 06 PM
                  </span>
                </div>

                <h4 className="font-extrabold text-white text-sm sm:text-base mt-1.5">
                  <a
                    href="https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Dr. Shilpi Maternity &amp; Urology</span>
                    <FaMapMarkerAlt size={13} className="text-blue-300 shrink-0" />
                  </a>
                </h4>

                <p className="text-xs sm:text-sm text-blue-100/90 mt-1 leading-relaxed font-normal">
                  596Pb/1114/03, Ring Rd, Pakkabag, Lucknow
                </p>

                <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/10 pt-2.5">
                  <a
                    href="tel:8604891955"
                    className="font-bold text-orange-400 hover:underline flex items-center gap-1.5 text-xs sm:text-sm"
                  >
                    <FaPhoneAlt size={12} />
                    <span>+91 86048 91955</span>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-orange-500 text-blue-100 hover:text-white text-xs font-bold flex items-center gap-1 transition-all"
                  >
                    <FaMapMarkerAlt size={11} />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#03152d] py-3.5 sm:py-4 px-4 sm:px-6 lg:px-6 text-white text-xs sm:text-sm font-medium border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-blue-100/90">
          
          {/* Left: Copyright */}
          <div className="text-center md:text-left text-xs sm:text-sm text-slate-200 font-medium">
            <span>© {year} Dr. Vinish Kumar Singh Clinic. All rights reserved.</span>
          </div>

          {/* Center: Design & Developed by CodeCrafter */}
          <div className="flex items-center justify-center gap-2.5">
            <span className="text-slate-200 font-medium text-xs sm:text-sm">Design &amp; Developed by</span>
            <a
              href="https://codecrafter.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-90 transition-opacity"
            >
              <img
                src={codeCrafterLogo}
                alt="CodeCrafter Web Solutions"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </a>
          </div>

          {/* Right: Privacy Policy & Terms of Service */}
          <div className="flex items-center justify-center md:justify-end gap-3 text-xs sm:text-sm font-semibold text-slate-200">
            <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30 font-bold">|</span>
            <Link to="/terms-of-service" className="hover:text-orange-400 transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}