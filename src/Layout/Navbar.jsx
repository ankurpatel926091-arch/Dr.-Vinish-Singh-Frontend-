import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
} from "lucide-react";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      label: "Conditions Treated",
      dropdown: true,
      children: [
        {
          label: "Kidney Stone",
          desc: "Advanced RIRS & Painless Laser PCNL",
          href: "/conditions/kidney-stone",
          icon: Activity,
          iconBg: "bg-blue-50 text-[#103F7C]",
        },
        {
          label: "Prostate",
          desc: "Laser HolEP & BPH Treatment",
          href: "/conditions/prostate",
          icon: HeartPulse,
          iconBg: "bg-orange-50 text-orange-600",
        },
        {
          label: "Bladder Stone",
          desc: "Endoscopic & Laser Removal",
          href: "/conditions/bladder-stone",
          icon: ShieldAlert,
          iconBg: "bg-blue-50 text-[#103F7C]",
        },
      ],
    },
    {
      label: "Andrology",
      dropdown: true,
      children: [
        {
          label: "Male Infertility",
          desc: "Micro-TESE & Comprehensive Care",
          href: "/andrology/male-infertility",
          icon: Users,
          iconBg: "bg-blue-50 text-[#103F7C]",
        },
        {
          label: "Erectile Dysfunction",
          desc: "Shockwave & Modern Therapy",
          href: "/andrology/erectile-dysfunction",
          icon: Sparkles,
          iconBg: "bg-orange-50 text-orange-600",
        },
      ],
    },
    {
      label: "Male Urology",
      dropdown: true,
      alignRight: true,
      children: [
        {
          label: "Prostate Surgery",
          desc: "Minimally Invasive Holep/TURP",
          href: "/male/prostate",
          icon: Scissors,
          iconBg: "bg-[#103F7C] text-white",
        },
        {
          label: "Kidney Stone Surgery",
          desc: "URSL, RIRS & PCNL Solutions",
          href: "/male/kidney",
          icon: Stethoscope,
          iconBg: "bg-orange-50 text-orange-600",
        },
        {
          label: "Varicocele Surgery",
          desc: "Microscopic Varicocelectomy",
          href: "/male/varicocele",
          icon: Activity,
          iconBg: "bg-blue-50 text-[#103F7C]",
        },
        {
          label: "Hypogonadism",
          desc: "Hormonal & TRT Therapy",
          href: "/male/hypogonadism",
          icon: HeartPulse,
          iconBg: "bg-orange-50 text-orange-600",
        },
        {
          label: "Erectile Dysfunction",
          desc: "Advanced Shockwave & Penile Care",
          href: "/male/erectile-dysfunction",
          icon: Sparkles,
          iconBg: "bg-blue-50 text-[#103F7C]",
        },
        {
          label: "Peyronie's Disease",
          desc: "Plaque & Curvature Treatment",
          href: "/male/peyronies-disease",
          icon: ShieldAlert,
          iconBg: "bg-orange-50 text-orange-600",
        },
        {
          label: "Male Infertility",
          desc: "Micro-TESE & Sperm Quality Care",
          href: "/male/male-infertility",
          icon: Users,
          iconBg: "bg-blue-50 text-[#103F7C]",
        },
        {
          label: "Penile Curvature",
          desc: "Congenital & Reconstructive Repair",
          href: "/male/penile-curvature",
          icon: Activity,
          iconBg: "bg-orange-50 text-orange-600",
        },
      ],
    },
    {
      label: "Female Urology",
      dropdown: true,
      alignRight: true,
      children: [
        {
          label: "Recurrent UTI",
          desc: "Recurrent Infection Management",
          href: "/female/uti",
          icon: Thermometer,
          iconBg: "bg-orange-50 text-orange-600",
        },
        {
          label: "Urinary Incontinence",
          desc: "TVT/TOT Sling & Reconstruction",
          href: "/female/incontinence",
          icon: Droplets,
          iconBg: "bg-blue-50 text-[#103F7C]",
        },
        {
          label: "Overactive Bladder",
          desc: "OAB Urgency & Bladder Therapy",
          href: "/female/overactive-bladder",
          icon: Activity,
          iconBg: "bg-orange-50 text-orange-600",
        },
        {
          label: "Cystocele & Prolapse",
          desc: "Pelvic Organ Repair Surgery",
          href: "/female/cystocele",
          icon: ShieldAlert,
          iconBg: "bg-blue-50 text-[#103F7C]",
        },
        {
          label: "Voiding Difficulties",
          desc: "Hesitancy & Flow Management",
          href: "/female/voiding-difficulties",
          icon: Clock,
          iconBg: "bg-orange-50 text-orange-600",
        },
        {
          label: "VVF Fistula Repair",
          desc: "Vesicovaginal Reconstruction",
          href: "/female/vvf-repair",
          icon: Stethoscope,
          iconBg: "bg-orange-50 text-orange-600",
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
    <>
      {/* ================= Permanent Fixed Header Container ================= */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
        {/* Main Navbar */}
        <header className="bg-white/98 backdrop-blur-md border-b border-slate-200/90 w-full py-1.5 sm:py-2">
          <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-3 lg:px-4">
            <div className="h-16 lg:h-18 flex items-center justify-between gap-3">
              {/* Logo Icon Only */}
              <NavLink
                to="/"
                className="flex items-center flex-shrink-0 group py-1"
                aria-label="Dr. Vinish Kumar Singh Home"
              >
                <img
                  src={logo}
                  alt="Dr. Vinish Kumar Singh Logo"
                  className="h-11 sm:h-13 lg:h-[54px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </NavLink>

              {/* ================= Desktop Navigation ================= */}
              <nav className="hidden xl:flex items-center gap-1 2xl:gap-2.5">
                {navLinks.map((item) => (
                  <div key={item.label} className="relative group/menu flex items-center py-2">
                    {/* Normal Link */}
                    {!item.dropdown ? (
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          `inline-flex items-center justify-center px-2.5 2xl:px-3.5 py-1.5 text-[13px] 2xl:text-[14px] font-semibold whitespace-nowrap transition-all duration-200 rounded-lg ${
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
                        className="inline-flex items-center justify-center gap-1 px-2.5 2xl:px-3.5 py-1.5 text-[13px] 2xl:text-[14px] font-semibold text-slate-700 hover:text-[#103F7C] hover:bg-slate-50 rounded-lg whitespace-nowrap transition-all duration-200"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={13}
                          className="group-hover/menu:rotate-180 transition-transform duration-300 text-slate-400 group-hover/menu:text-[#103F7C]"
                        />
                      </button>
                    )}

                    {/* Dropdown Submenu Card */}
                    {item.dropdown && (
                      <div
                        className={`absolute top-full pt-2 opacity-0 invisible translate-y-3 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 transition-all duration-300 ease-out z-50 pointer-events-none group-hover/menu:pointer-events-auto ${
                          item.alignRight ? "right-0 left-auto" : "left-0"
                        }`}
                      >
                        <div
                          className={`rounded-2xl bg-white p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-slate-200/90 ring-1 ring-slate-900/10 ${
                            item.children.length > 5
                              ? "w-[580px] sm:w-[620px]"
                              : "w-[310px]"
                          }`}
                        >
                          {/* Gradient Accent Bar */}
                          <div className="h-1 w-12 bg-gradient-to-r from-[#103F7C] to-orange-500 rounded-full mb-2.5 ml-1" />

                          <div
                            className={`${
                              item.children.length > 5
                                ? "grid grid-cols-2 gap-2"
                                : "flex flex-col gap-1"
                            }`}
                          >
                            {item.children.map((child) => {
                              const IconComponent = child.icon;
                              return (
                                <NavLink
                                  key={child.label}
                                  to={child.href}
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
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* ================= CTA Button ================= */}
              <div className="hidden xl:block flex-shrink-0">
                <NavLink
                  to="/contact"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs 2xl:text-sm font-semibold shadow-md hover:shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
                >
                  <Calendar size={15} />
                  <span>Book Appointment</span>
                </NavLink>
              </div>

              {/* ================= Mobile Toggle Button ================= */}
              <button
                type="button"
                className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-[#103F7C] hover:bg-slate-100 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* ================= Mobile Menu Drawer ================= */}
          <div
            className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
            }`}
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
                        onClick={() => setMenuOpen(false)}
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
                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            activeMobileDropdown === item.label
                              ? "max-h-[1000px] border-t border-slate-100 bg-slate-50/50 p-2"
                              : "max-h-0 p-0"
                          }`}
                        >
                          <div className="flex flex-col gap-1.5">
                            {item.children.map((child) => {
                              const IconComponent = child.icon;
                              return (
                                <NavLink
                                  key={child.label}
                                  to={child.href}
                                  onClick={() => setMenuOpen(false)}
                                  className={({ isActive }) =>
                                    `flex items-center gap-3 p-2.5 rounded-xl transition ${
                                      isActive
                                        ? "bg-blue-100/70 text-[#103F7C] font-semibold"
                                        : "bg-white hover:bg-blue-50/60 text-slate-700"
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
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="pt-3 pb-2">
                  <NavLink
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-md shadow-orange-500/20 active:scale-98 transition-all"
                  >
                    <Calendar size={18} />
                    <span>Book Appointment</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Page Content Layout Spacer (matching fixed navbar height) */}
      <div className="h-[72px] sm:h-[80px] lg:h-[84px] w-full shrink-0" />
    </>
  );
}