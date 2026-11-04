import React from "react";
import { Hospital } from "lucide-react";

export default function ClinicLoader({
  message = "Loading clinic details",
  subMessage = "Fetching hospital schedules & OPD consultation hours...",
  compact = false,
}) {
  return (
    <div
      className={`col-span-full flex flex-col items-center justify-center bg-white rounded-3xl border border-slate-200/90 shadow-xs text-center w-full my-2 ${
        compact ? "py-8 px-4" : "py-12 px-6"
      }`}
    >
      {/* Animated Icon & Rings */}
      <div className="relative flex items-center justify-center mb-4">
        {/* Soft pulse glow backdrop */}
        <div className="absolute w-14 h-14 rounded-full bg-blue-100/70 animate-ping opacity-60" />

        {/* Dual-color spinning border */}
        <div className="w-12 h-12 rounded-full border-[3px] border-slate-100 border-t-[#103F7C] border-r-orange-500 animate-spin" />

        {/* Centered pulsing medical/hospital badge */}
        <div className="absolute w-8 h-8 rounded-full bg-[#103F7C] text-white flex items-center justify-center shadow-xs animate-pulse">
          <Hospital size={16} className="text-orange-400" />
        </div>
      </div>

      {/* Animated Text */}
      <div className="space-y-1">
        <h4 className="text-sm sm:text-base font-extrabold text-slate-800 tracking-tight flex items-center justify-center gap-1.5">
          <span>{message}</span>
          <span className="inline-flex gap-1 items-center ml-0.5">
            <span
              className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </span>
        </h4>
        {subMessage && (
          <p className="text-xs text-slate-500 font-medium max-w-sm">
            {subMessage}
          </p>
        )}
      </div>
    </div>
  );
}

