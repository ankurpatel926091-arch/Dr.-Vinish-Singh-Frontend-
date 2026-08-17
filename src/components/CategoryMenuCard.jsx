import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function CategoryMenuCard({
  title,
  icon: Icon,
  iconBg = "bg-blue-50 text-blue-600 border border-blue-100",
  items = [],
  onItemClick,
  activeLabel,
  className = "",
  compact = false,
}) {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`bg-slate-50/80 rounded-3xl p-3.5 sm:p-4 border border-slate-200/80 shadow-2xs flex flex-col font-sans transition-all duration-300 ${className}`}
    >
      {/* Card Header */}
      {title && (
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200/70 min-h-[40px]">
          <h4 className="font-extrabold text-[#103F7C] text-[13.5px] sm:text-[14.5px] xl:text-[15px] tracking-tight leading-snug">
            {title}
          </h4>
          {Icon && (
            <div
              className={`w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}
            >
              <Icon size={compact ? 13 : 15} />
            </div>
          )}
        </div>
      )}

      {/* Menu Items List */}
      <div className="space-y-1 flex-1">
        {items.map((sub, sIdx) => {
          const SubIcon = sub.icon;
          const isExplicitActive =
            activeLabel && activeLabel.toLowerCase() === sub.label.toLowerCase();

          return (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: sIdx * 0.025, ease: "easeOut" }}
              whileHover={{ scale: 1.015, x: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <NavLink
                to={sub.href}
                onClick={onItemClick}
                className={({ isActive }) => {
                  const active = isActive || isExplicitActive || location.pathname === sub.href;
                  return `group/item flex items-center justify-between gap-2.5 ${
                    compact ? "p-1.5" : "p-2 sm:p-2.5"
                  } rounded-xl sm:rounded-2xl transition-all duration-200 border ${
                    active
                      ? "bg-white text-[#103F7C] font-black shadow-xs border-blue-300/90 ring-1 ring-blue-500/10 scale-[1.01]"
                      : "bg-transparent hover:bg-white hover:shadow-2xs border-transparent hover:border-slate-200/80 text-slate-800 hover:text-[#103F7C]"
                  }`;
                }}
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  {SubIcon && (
                    <div
                      className={`w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-110 ${
                        sub.iconBg || "bg-blue-50 text-[#103F7C]"
                      }`}
                    >
                      <SubIcon size={compact ? 12 : 14} />
                    </div>
                  )}
                  <span className="text-[12px] sm:text-[12.5px] xl:text-[13px] font-bold leading-snug break-words flex-1 min-w-0 pr-1">
                    {sub.label}
                  </span>
                </div>

                <ChevronRight
                  size={compact ? 12 : 14}
                  className="text-slate-300 group-hover/item:text-orange-500 transition-colors shrink-0 group-hover/item:translate-x-1"
                />
              </NavLink>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
