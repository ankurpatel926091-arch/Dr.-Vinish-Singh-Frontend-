import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function CustomSelect({
  options = [],
  value = "",
  onChange,
  placeholder = "Select an option",
  icon: IconComponent = null,
  className = "",
  error = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Normalize options array to standard object format { value, label, badge, subtext }
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt };
    }
    return opt;
  });

  // Find currently selected option
  const selectedOption = normalizedOptions.find((opt) => opt.value === value) || normalizedOptions[0];

  const handleSelect = (optionValue) => {
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full max-w-full ${className}`} ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full min-h-[52px] px-4 sm:px-5 py-3 rounded-2xl border bg-white text-[#0f2a4a] text-sm sm:text-base font-semibold shadow-xs flex items-center justify-between gap-2 overflow-hidden transition-all duration-200 cursor-pointer text-left ${
          isOpen
            ? "border-orange-500 ring-2 ring-orange-500/30"
            : error
            ? "border-rose-400 bg-rose-50/20"
            : "border-slate-200 hover:border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1 overflow-hidden">
          {IconComponent && (
            <IconComponent size={18} className="text-orange-500 shrink-0" />
          )}
          <span className="truncate block font-extrabold text-[#0f2a4a] text-sm sm:text-base">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <ChevronDown
          size={18}
          className={`text-slate-400 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-orange-500" : ""
          }`}
        />
      </button>

      {/* Dropdown Options Popover Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-2xl border border-slate-200/90 shadow-xl max-h-64 sm:max-h-72 overflow-y-auto custom-scrollbar p-1.5 space-y-1 w-full max-w-full animate-fadeIn"
        >
          {normalizedOptions.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.value)}
                className={`w-full px-3.5 py-3 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? "bg-orange-50 text-orange-600 font-extrabold border border-orange-200/70 shadow-2xs"
                    : "text-[#0f2a4a] hover:bg-slate-50 hover:text-orange-600 border border-transparent"
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-extrabold leading-snug break-words">
                    {opt.label}
                  </div>
                  {opt.subtext && (
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5 truncate">
                      {opt.subtext}
                    </div>
                  )}
                </div>

                {isSelected && (
                  <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
