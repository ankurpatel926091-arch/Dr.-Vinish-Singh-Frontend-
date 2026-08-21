import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import CategoryMenuCard from "../components/CategoryMenuCard";
import {
  Menu,
  X,
  Phone,
  MapPin,
  ChevronDown,
  ChevronRight,
  UserCheck,
  GraduationCap,
  Award,
  Trophy,
  Activity,
  HeartPulse,
  ShieldAlert,
  Users,
  Sparkles,
  Scissors,
  Stethoscope,
  Thermometer,
  Droplets,
  Clock,
  Calendar,
  Building2,
  RefreshCw,
  Zap,
  TrendingDown,
  AlertCircle,
  ClipboardCheck,
  Baby,
  Target,
} from "lucide-react";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const closeAllMenus = () => {
    setMenuOpen(false);
    setActiveMobileDropdown(null);
    setHoveredNav(null);
  };

  const handleBookAppointmentClick = (e) => {
    e.preventDefault();
    closeAllMenus();
    if (location.pathname === "/") {
      const el = document.getElementById("book-appointment");
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/#book-appointment");
    }
  };



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close all submenus immediately on route change
  useEffect(() => {
    closeAllMenus();
  }, [location.pathname]);

  const toggleMobileDropdown = (label) => {
    setActiveMobileDropdown((prev) => (prev === label ? null : label));
  };

  // Navigation Data with Icons & Descriptions
  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      dropdown: true,
      children: [
        {
          label: "Dr. Vinish Kumar Singh",
          desc: "Senior Urologist & Transplant Surgeon",
          href: "/about/dr-vinish-kumar-singh",
          icon: UserCheck,
          iconBg: "bg-blue-50 text-[#103F7C]",
        },
        {
          label: "Our Hospitals",
          desc: "Clinics & Consultation Locations",
          href: "/about/our-hospitals",
          icon: Building2,
          iconBg: "bg-orange-50 text-orange-600",
        },
        {
          label: "Awards & Recognition",
          desc: "Honors, Accreditations & Media",
          href: "/about/awards-recognition",
          icon: Trophy,
          iconBg: "bg-blue-50 text-[#103F7C]",
        },
      ],
    },
    {
      label: "Treatements",
      dropdown: true,
      isMegaMenu: true,
      megaMenuColumns: [
        {
          title: "Urological Conditions",
          icon: Activity,
          iconBg: "bg-cyan-50 text-cyan-600 border border-cyan-100",
          items: [
            { label: "Kidney Stones", href: "/conditions/kidney-stone", icon: Stethoscope, iconBg: "bg-cyan-50 text-cyan-600" },
            { label: "Urinary Tract Infections (UTIs)", href: "/female/uti", icon: Thermometer, iconBg: "bg-blue-50 text-blue-600" },
            { label: "Enlarged Prostate (BPH)", href: "/conditions/prostate", icon: Activity, iconBg: "bg-orange-50 text-orange-600" },
            { label: "Prostate Disorders", href: "/male/prostate", icon: ShieldAlert, iconBg: "bg-indigo-50 text-indigo-600" },
            { label: "Urethral Stricture", href: "/conditions/urethral-stricture", icon: Scissors, iconBg: "bg-teal-50 text-teal-600" },
            { label: "Urinary Incontinence", href: "/female/incontinence", icon: Droplets, iconBg: "bg-sky-50 text-sky-600" },
            { label: "Overactive Bladder", href: "/female/overactive-bladder", icon: Zap, iconBg: "bg-amber-50 text-amber-600" },
            { label: "Bladder Disorders", href: "/conditions/bladder-stone", icon: Activity, iconBg: "bg-cyan-50 text-cyan-600" },
            { label: "Blood in Urine (Hematuria)", href: "/conditions/hematuria", icon: HeartPulse, iconBg: "bg-rose-50 text-rose-600" },
            { label: "Recurrent UTI", href: "/female/nocturia", icon: RefreshCw, iconBg: "bg-purple-50 text-purple-600" },
          ],
        },
        {
          title: "Andrological Conditions",
          icon: Users,
          iconBg: "bg-blue-50 text-blue-600 border border-blue-100",
          items: [
            { label: "Erectile Dysfunction", href: "/andrology/erectile-dysfunction", icon: Sparkles, iconBg: "bg-blue-50 text-blue-600" },
            { label: "Premature Ejaculation", href: "/andrology/premature-ejaculation", icon: Clock, iconBg: "bg-orange-50 text-orange-600" },
            { label: "Male Infertility", href: "/andrology/male-infertility", icon: Users, iconBg: "bg-indigo-50 text-indigo-600" },
            { label: "Varicocele", href: "/male/varicocele", icon: Activity, iconBg: "bg-cyan-50 text-cyan-600" },
            { label: "Hydrocele", href: "/conditions/hydrocele", icon: Droplets, iconBg: "bg-teal-50 text-teal-600" },
            { label: "Peyronie's Disease", href: "/male/peyronies-disease", icon: ShieldAlert, iconBg: "bg-rose-50 text-rose-600" },
            { label: "Low Testosterone", href: "/male/hypogonadism", icon: TrendingDown, iconBg: "bg-amber-50 text-amber-600" },
            { label: "Male Sexual Disorders", href: "/male/impotency", icon: HeartPulse, iconBg: "bg-blue-50 text-blue-600" },
            { label: "Testicular Disorders", href: "/conditions/testicular-disorders", icon: Stethoscope, iconBg: "bg-violet-50 text-violet-600" },
            { label: "Chronic Testicular Pain", href: "/conditions/chronic-testicular-pain", icon: AlertCircle, iconBg: "bg-orange-50 text-orange-600" },
          ],
        },
        {
          title: "Kidney & Renal Transplant Conditions",
          icon: HeartPulse,
          iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-100",
          items: [
            { label: "End-Stage Kidney Disease", href: "/services/nephrology", icon: ShieldAlert, iconBg: "bg-emerald-50 text-emerald-600" },
            { label: "Kidney Failure Requiring Transplant", href: "/services/renal-transplant", icon: Activity, iconBg: "bg-teal-50 text-teal-600" },
            { label: "Kidney Transplant Evaluation", href: "/conditions/kidney-transplant-eval", icon: ClipboardCheck, iconBg: "bg-blue-50 text-blue-600" },
            { label: "Living Donor Kidney Transplant", href: "/conditions/living-donor-transplant", icon: HeartPulse, iconBg: "bg-rose-50 text-rose-600" },
            { label: "Deceased Donor Kidney Transplant", href: "/conditions/deceased-donor-transplant", icon: Building2, iconBg: "bg-indigo-50 text-indigo-600" },
            { label: "Post-Transplant Urological Complications", href: "/conditions/post-transplant-care", icon: Stethoscope, iconBg: "bg-amber-50 text-amber-600" },
          ],
        },
        {
          title: "Paediatric Urological Conditions",
          icon: UserCheck,
          iconBg: "bg-teal-50 text-teal-600 border border-teal-100",
          items: [
            { label: "Undescended Testis", href: "/paediatric/undescended-testis", icon: Baby, iconBg: "bg-teal-50 text-teal-600" },
            { label: "Phimosis", href: "/paediatric/phimosis", icon: Scissors, iconBg: "bg-cyan-50 text-cyan-600" },
            { label: "Hypospadias", href: "/paediatric/hypospadias", icon: Stethoscope, iconBg: "bg-blue-50 text-blue-600" },
            { label: "Hydrocele", href: "/paediatric/hydrocele", icon: Droplets, iconBg: "bg-sky-50 text-sky-600" },
            { label: "Paediatric Urinary Problems", href: "/paediatric/urinary-problems", icon: Activity, iconBg: "bg-emerald-50 text-emerald-600" },
          ],
        },
        {
          title: "Urological Cancers",
          icon: ShieldAlert,
          iconBg: "bg-rose-50 text-rose-600 border border-rose-100",
          items: [
            { label: "Prostate Cancer", href: "/cancers/prostate-cancer", icon: ShieldAlert, iconBg: "bg-rose-50 text-rose-600" },
            { label: "Kidney Cancer", href: "/cancers/kidney-cancer", icon: Target, iconBg: "bg-red-50 text-red-600" },
            { label: "Bladder Cancer", href: "/cancers/bladder-cancer", icon: Activity, iconBg: "bg-pink-50 text-pink-600" },
            { label: "Testicular Cancer", href: "/cancers/testicular-cancer", icon: Stethoscope, iconBg: "bg-orange-50 text-orange-600" },
          ],
        },
      ],
    },
    {
      label: "Urology Guide",
      dropdown: true,
      isUrologyGuide: true,
      alignRight: true,
      guideColumns: [
        {
          title: "Male Urology Guide",
          icon: Users,
          iconBg: "bg-blue-50 text-[#103F7C] border border-blue-100",
          items: [
            { label: "Prostate Surgery", desc: "Minimally Invasive Holep/TURP", href: "/male/prostate", icon: Scissors, iconBg: "bg-[#103F7C] text-white" },
            { label: "Kidney Stone Surgery", desc: "URSL, RIRS & PCNL Solutions", href: "/male/kidney", icon: Stethoscope, iconBg: "bg-orange-50 text-orange-600" },
            { label: "Varicocele Repair Surgery", desc: "Microscopic Varicocelectomy", href: "/male/varicocele", icon: Activity, iconBg: "bg-blue-50 text-[#103F7C]" },
            { label: "Hypogonadism (Low T)", desc: "Hormonal & TRT Therapy", href: "/male/hypogonadism", icon: HeartPulse, iconBg: "bg-orange-50 text-orange-600" },
            { label: "Erectile Dysfunction", desc: "Advanced Shockwave & Penile Care", href: "/male/erectile-dysfunction", icon: Sparkles, iconBg: "bg-blue-50 text-[#103F7C]" },
            { label: "Peyronie's Disease", desc: "Plaque & Curvature Treatment", href: "/male/peyronies-disease", icon: ShieldAlert, iconBg: "bg-orange-50 text-orange-600" },
            { label: "Male Infertility", desc: "Micro-TESE & Sperm Quality Care", href: "/male/male-infertility", icon: Users, iconBg: "bg-blue-50 text-[#103F7C]" },
            { label: "Penile Curvature Repair", desc: "Congenital & Reconstructive Repair", href: "/male/penile-curvature", icon: Activity, iconBg: "bg-orange-50 text-orange-600" },
          ],
        },
        {
          title: "Female Urology Guide",
          icon: HeartPulse,
          iconBg: "bg-orange-50 text-orange-600 border border-orange-100",
          items: [
            { label: "Recurrent UTI Care", desc: "Recurrent Infection Management", href: "/female/uti", icon: Thermometer, iconBg: "bg-orange-50 text-orange-600" },
            { label: "Urinary Incontinence", desc: "TVT/TOT Sling & Reconstruction", href: "/female/incontinence", icon: Droplets, iconBg: "bg-blue-50 text-[#103F7C]" },
            { label: "Overactive Bladder", desc: "OAB Urgency & Bladder Therapy", href: "/female/overactive-bladder", icon: Activity, iconBg: "bg-orange-50 text-orange-600" },
            { label: "Cystocele & Prolapse", desc: "Pelvic Organ Repair Surgery", href: "/female/cystocele", icon: ShieldAlert, iconBg: "bg-blue-50 text-[#103F7C]" },
            { label: "Voiding Difficulties", desc: "Hesitancy & Flow Management", href: "/female/voiding-difficulties", icon: Clock, iconBg: "bg-orange-50 text-orange-600" },
            { label: "VVF Fistula Repair", desc: "Vesicovaginal Reconstruction", href: "/female/vvf-repair", icon: Stethoscope, iconBg: "bg-orange-50 text-orange-600" },
          ],
        },
      ],
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      {/* Top Banner / Contact Bar */}
      <div className="bg-[#103F7C] text-white py-1.5 text-xs font-medium border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-semibold">
              <Phone size={13} className="text-orange-400" />
              <span>+91 72759 81480</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock size={13} className="text-orange-400" />
              <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917275981480?text=Hello%20Dr.%20Vinish%20Kumar%20Singh%2C%20I%20would%20like%20to%20inquire%20about%20an%20OPD%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#25D366] via-[#20bd5a] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0e776a] text-white px-3 py-1 rounded-full text-[11px] font-extrabold shadow-sm hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 group border border-white/20"
            >
              <FaWhatsapp size={14} className="text-white group-hover:rotate-12 transition-transform duration-300 shrink-0" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "shadow-md py-2" : "py-3 border-b border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="flex items-center justify-between">
            {/* ================= Logo ================= */}
            <NavLink
              to="/"
              onClick={closeAllMenus}
              className="flex items-center gap-3 group outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className={`w-auto flex items-center transition-all duration-300 ${
                scrolled ? "h-11 sm:h-13 lg:h-14" : "h-12 sm:h-14 lg:h-16"
              }`}>
                <img
                  src={logo}
                  alt="Dr. Vinish Kumar Singh Logo"
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-102 max-h-full"
                />
              </div>
            </NavLink>

            {/* ================= Desktop Navigation ================= */}
            <nav className="nav-desktop-container items-center gap-0.5 lg:gap-1 xl:gap-1.5 2xl:gap-2.5">
              {navLinks.map((item) => {
                const isHovered = hoveredNav === item.label;

                return (
                  <div
                    key={item.label}
                    className={`${item.isMegaMenu ? "" : "relative"} flex items-center py-2`}
                    onMouseEnter={() => setHoveredNav(item.label)}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
                    {/* Normal Link */}
                    {!item.dropdown ? (
                      <NavLink
                        to={item.href}
                        onClick={closeAllMenus}
                        className={({ isActive }) =>
                          `inline-flex items-center justify-center px-1.5 lg:px-2.5 xl:px-3.5 2xl:px-4 py-2 text-[14px] lg:text-[15px] 2xl:text-[16px] font-bold whitespace-nowrap transition-all duration-200 rounded-lg outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 ${
                            isActive
                              ? "text-[#103F7C] bg-blue-50/80"
                              : "text-slate-700 hover:text-[#103F7C] hover:bg-slate-50"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ) : (
                      /* Dropdown Button */
                      <button
                        type="button"
                        onClick={() =>
                          setHoveredNav((prev) => (prev === item.label ? null : item.label))
                        }
                        className={`inline-flex items-center justify-center gap-1 px-1.5 lg:px-2.5 xl:px-3.5 2xl:px-4 py-2 text-[14px] lg:text-[15px] 2xl:text-[16px] font-bold rounded-lg whitespace-nowrap transition-all duration-200 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 cursor-pointer ${
                          isHovered
                            ? "text-[#103F7C] bg-slate-50"
                            : "text-slate-700 hover:text-[#103F7C] hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            isHovered ? "rotate-180 text-[#103F7C]" : "text-slate-500"
                          }`}
                        />
                      </button>
                    )}

                    {/* Dropdown Submenu Card */}
                    {item.dropdown && (
                      <div
                        className={`absolute top-full pt-2 transition-all duration-300 ease-out z-50 ${
                          isHovered
                            ? "opacity-100 visible translate-y-0 pointer-events-auto"
                            : "opacity-0 invisible translate-y-3 pointer-events-none"
                        } ${
                          item.isMegaMenu
                            ? "left-1/2 -translate-x-1/2 w-full max-w-7xl px-2 sm:px-4"
                            : item.isUrologyGuide
                            ? "left-1/2 -translate-x-1/2"
                            : item.alignRight
                            ? "right-0 left-auto"
                            : "left-1/2 -translate-x-1/2"
                        }`}
                      >
                        {item.isMegaMenu ? (
                          /* ================= 5-COLUMN MEGA MENU (Conditions Treated) ================= */
                          <div className="w-full rounded-3xl bg-white p-4 lg:p-5 shadow-[0_25px_60px_-15px_rgba(16,63,124,0.2)] border border-slate-200 ring-1 ring-slate-900/5">
                            {/* Top Accent Gradient Line */}
                            <div className="h-1.5 w-20 bg-gradient-to-r from-[#103F7C] via-blue-600 to-orange-500 rounded-full mb-3 ml-1" />

                            {/* 5-Column Grid Layout with Column Card Containers */}
                            <div className="grid grid-cols-5 gap-2.5 lg:gap-3">
                              {item.megaMenuColumns.map((col, cIdx) => (
                                <CategoryMenuCard
                                  key={cIdx}
                                  title={col.title}
                                  icon={col.icon}
                                  iconBg={col.iconBg}
                                  items={col.items}
                                  compact={true}
                                  onItemClick={closeAllMenus}
                                />
                              ))}
                            </div>
                          </div>
                        ) : item.isUrologyGuide ? (
                          /* ================= 2-COLUMN UROLOGY GUIDE MENU ================= */
                          <div className="w-[700px] lg:w-[780px] rounded-3xl bg-white p-4 lg:p-5 shadow-[0_25px_60px_-15px_rgba(16,63,124,0.2)] border border-slate-200 ring-1 ring-slate-900/5">
                            {/* Top Accent Line */}
                            <div className="h-1.5 w-20 bg-gradient-to-r from-[#103F7C] via-blue-600 to-orange-500 rounded-full mb-3 ml-1" />

                            {/* 2-Column Grid: Male Urology Guide & Female Urology Guide */}
                            <div className="grid grid-cols-2 gap-3.5">
                              {item.guideColumns.map((col, cIdx) => {
                                const ColIcon = col.icon;
                                return (
                                  <div key={cIdx} className="bg-slate-50/70 rounded-2xl p-3 border border-slate-200/70 flex flex-col space-y-2">
                                    {/* Column Header Card */}
                                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                                      <h4 className="font-extrabold text-[#103F7C] text-[13.5px] xl:text-[14px]">
                                        {col.title}
                                      </h4>
                                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border border-slate-200/60 ${col.iconBg}`}>
                                        <ColIcon size={14} />
                                      </div>
                                    </div>

                                    {/* Column List Items */}
                                    <div className="space-y-1">
                                      {col.items.map((sub, sIdx) => {
                                        const SubIcon = sub.icon;
                                        return (
                                          <NavLink
                                            key={sIdx}
                                            to={sub.href}
                                            onClick={closeAllMenus}
                                            className={({ isActive }) =>
                                              `group/item flex items-center gap-2.5 p-2 rounded-xl transition-all duration-200 ${
                                                isActive
                                                  ? "bg-white text-[#103F7C] font-semibold shadow-2xs border border-blue-200/80"
                                                  : "hover:bg-white hover:shadow-2xs border border-transparent hover:border-slate-200/80 text-slate-800 hover:text-[#103F7C]"
                                              }`
                                            }
                                          >
                                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-105 ${sub.iconBg}`}>
                                              <SubIcon size={14} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <div className="text-[12.5px] xl:text-[13px] font-bold text-slate-900 group-hover/item:text-[#103F7C] leading-tight truncate">
                                                {sub.label}
                                              </div>
                                              {sub.desc && (
                                                <div className="text-[10px] font-medium text-slate-500 group-hover/item:text-slate-600 leading-none mt-0.5 truncate">
                                                  {sub.desc}
                                                </div>
                                              )}
                                            </div>
                                            <ChevronRight size={13} className="text-slate-300 group-hover/item:text-orange-500 transition-colors shrink-0 group-hover/item:translate-x-0.5" />
                                          </NavLink>
                                        );
                                      })}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          /* Standard Dropdown Submenu */
                          <div
                            className={`rounded-2xl bg-white p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-slate-200/90 ring-1 ring-slate-900/10 ${
                              item.children && item.children.length > 5
                                ? "w-[580px] sm:w-[620px]"
                                : "w-[310px]"
                            }`}
                          >
                            {/* Gradient Accent Bar */}
                            <div className="h-1 w-12 bg-gradient-to-r from-[#103F7C] to-orange-500 rounded-full mb-2.5 ml-1" />

                            <div
                              className={`${
                                item.children && item.children.length > 5
                                  ? "grid grid-cols-2 gap-2"
                                  : "flex flex-col gap-1"
                              }`}
                            >
                              {item.children &&
                                item.children.map((child, childIndex) => {
                                  const IconComponent = child.icon;
                                  return (
                                    <motion.div
                                      key={child.label}
                                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                      animate={{ opacity: 1, y: 0, scale: 1 }}
                                      transition={{
                                        duration: 0.2,
                                        delay: childIndex * 0.03,
                                        ease: [0.16, 1, 0.3, 1],
                                      }}
                                      whileHover={{ scale: 1.02, x: 2 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <NavLink
                                        to={child.href}
                                        onClick={closeAllMenus}
                                        className={({ isActive }) =>
                                          `group/item flex items-center gap-2.5 p-2 rounded-xl transition-all duration-200 border ${
                                            isActive
                                              ? "bg-blue-50 text-[#103F7C] font-semibold border-blue-200/80 shadow-sm"
                                              : "bg-white hover:bg-blue-50/70 border-transparent hover:border-blue-100 text-slate-800 hover:text-[#103F7C]"
                                          }`
                                        }
                                      >
                                        {/* Icon Box */}
                                        <div
                                          className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:scale-105 ${child.iconBg}`}
                                        >
                                          <IconComponent size={17} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                          <div className="text-[13.5px] font-bold text-slate-900 group-hover/item:text-[#103F7C] leading-snug truncate">
                                            {child.label}
                                          </div>
                                          {child.desc && (
                                            <div className="text-[10.5px] font-medium text-slate-500 group-hover/item:text-slate-600 leading-tight mt-0.5 truncate">
                                              {child.desc}
                                            </div>
                                          )}
                                        </div>

                                        {/* Hover Arrow */}
                                        <ChevronRight
                                          size={14}
                                          className="text-slate-400 group-hover/item:text-orange-500 group-hover/item:translate-x-0.5 transition-all duration-200 flex-shrink-0"
                                        />
                                      </NavLink>
                                    </motion.div>
                                  );
                                })}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* ================= CTA Button ================= */}
            <div className="nav-desktop-container flex-shrink-0">
              <a
                href="/#book-appointment"
                onClick={handleBookAppointmentClick}
                className="flex items-center gap-2 px-3.5 lg:px-4 xl:px-5 py-2 lg:py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm lg:text-[14.5px] 2xl:text-base font-extrabold shadow-md hover:shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <Calendar size={16} />
                <span>Book Appointment</span>
              </a>
            </div>

            {/* ================= Mobile Toggle Button ================= */}
            <button
              type="button"
              className="nav-mobile-toggle p-2 rounded-xl text-slate-700 hover:text-[#103F7C] hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* ================= Mobile Menu Drawer ================= */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="nav-mobile-drawer overflow-hidden"
            >
              <div className="bg-slate-50/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-4 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl border border-slate-200/70 overflow-hidden shadow-sm"
                >
                  {/* Normal Link in Mobile */}
                  {!item.dropdown ? (
                    <NavLink
                      to={item.href}
                      onClick={closeAllMenus}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 text-[15px] font-semibold transition ${
                          isActive
                            ? "text-[#103F7C] bg-blue-50/60"
                            : "text-slate-800 hover:bg-slate-50"
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={16} className="text-slate-400" />
                    </NavLink>
                  ) : (
                    /* Dropdown Accordion Header */
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-[15px] font-semibold text-slate-800 hover:bg-slate-50 transition"
                      >
                        <span className="text-[#103F7C]">{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`text-slate-500 transition-transform duration-300 ${
                            activeMobileDropdown === item.label
                              ? "rotate-180 text-orange-500"
                              : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Items Card Container in Mobile */}
                      <AnimatePresence initial={false}>
                        {activeMobileDropdown === item.label && (
                          <motion.div
                            key="dropdown-content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                            className="overflow-hidden border-t border-slate-100 bg-slate-50/50 p-2"
                          >
                            {item.isMegaMenu ? (
                              <div className="flex flex-col gap-3 p-1">
                                {item.megaMenuColumns.map((col, cIdx) => (
                                  <CategoryMenuCard
                                    key={cIdx}
                                    title={col.title}
                                    icon={col.icon}
                                    iconBg={col.iconBg}
                                    items={col.items}
                                    onItemClick={closeAllMenus}
                                  />
                                ))}
                              </div>
                            ) : item.isUrologyGuide ? (
                              <div className="flex flex-col gap-3 p-1">
                                {item.guideColumns.map((col, cIdx) => {
                                  const ColIcon = col.icon;
                                  return (
                                    <div key={cIdx} className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs space-y-2">
                                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                                        <h5 className="font-extrabold text-[#103F7C] text-[13px]">
                                          {col.title}
                                        </h5>
                                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${col.iconBg}`}>
                                          <ColIcon size={13} />
                                        </div>
                                      </div>
                                      <div className="space-y-1.5">
                                        {col.items.map((sub, sIdx) => {
                                          const SubIcon = sub.icon;
                                          return (
                                            <NavLink
                                              key={sIdx}
                                              to={sub.href}
                                              onClick={closeAllMenus}
                                              className={({ isActive }) =>
                                                `flex items-center gap-2.5 p-2 rounded-lg transition ${
                                                  isActive
                                                    ? "bg-blue-100/70 text-[#103F7C] font-semibold"
                                                    : "bg-white hover:bg-slate-50 text-slate-700"
                                                }`
                                              }
                                            >
                                              <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${sub.iconBg}`}>
                                                <SubIcon size={14} />
                                              </div>
                                              <div className="flex-1 min-w-0">
                                                <div className="text-xs font-bold text-slate-800 truncate">{sub.label}</div>
                                              </div>
                                            </NavLink>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className="flex flex-col gap-1.5">
                                {item.children &&
                                  item.children.map((child) => {
                                    const IconComponent = child.icon;
                                    return (
                                      <NavLink
                                        key={child.label}
                                        to={child.href}
                                        onClick={closeAllMenus}
                                        className={({ isActive }) =>
                                          `flex items-center gap-3 p-2.5 rounded-xl transition ${
                                            isActive
                                              ? "bg-blue-100/70 text-[#103F7C] font-semibold"
                                              : "bg-[#fff] hover:bg-blue-50/60 text-slate-700"
                                          }`
                                        }
                                      >
                                        <div
                                          className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${child.iconBg}`}
                                        >
                                          <IconComponent size={17} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-[13.5px] font-semibold text-slate-800 leading-snug">
                                            {child.label}
                                          </div>
                                          {child.desc && (
                                            <div className="text-[10.5px] text-slate-500 truncate">
                                              {child.desc}
                                            </div>
                                          )}
                                        </div>
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-3 pb-2">
                <a
                  href="/#book-appointment"
                  onClick={handleBookAppointmentClick}
                  className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-md shadow-orange-500/20 active:scale-98 transition-all cursor-pointer"
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
      </div>
    </header>
  );
}