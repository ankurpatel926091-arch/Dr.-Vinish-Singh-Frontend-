import React from "react";
import { Stethoscope } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-slate-50/60 font-sans">
      <div className="relative flex items-center justify-center mb-5">
        {/* Outer Pulsing Ring */}
        <div className="w-16 h-16 rounded-full border-4 border-blue-100 border-t-[#103F7C] animate-spin" />
        
        {/* Inner Pulsing Doctor Icon */}
        <div className="absolute w-10 h-10 rounded-full bg-[#103F7C] text-white flex items-center justify-center shadow-md animate-pulse">
          <Stethoscope size={20} className="text-orange-400" />
        </div>
      </div>

      <span className="font-extrabold text-sm sm:text-base text-[#103F7C] tracking-wide">
        Dr. Vinish Kumar Singh
      </span>
      <span className="text-xs text-slate-500 font-medium mt-1 animate-pulse">
        Loading Clinical &amp; Surgical Care...
      </span>
    </div>
  );
}
