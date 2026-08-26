import React from "react";

export default function DoctorProfileCard() {
  return (
    <div className="bg-gradient-to-br from-blue-50/60 via-sky-50/30 to-slate-50/80 p-5 sm:p-6 rounded-2xl border border-blue-100/80 shadow-2xs w-full">
      <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-2 sm:space-y-2.5 font-normal text-left">
        <p>
          <strong className="font-bold text-slate-900">Dr. Vinish Kumar Singh</strong> is a distinguished{" "}
          <span className="font-semibold text-[#103F7C]">
            Consultant Urologist, Andrologist, and Renal Transplant Surgeon
          </span>{" "}
          in Lucknow, renowned for his expertise in advanced and complex urological care. He completed his{" "}
          <span className="font-semibold text-slate-900">M.B.B.S.</span> from{" "}
          <span className="font-medium text-slate-800">King George’s Medical University (KGMU), Lucknow</span>, followed by an{" "}
          <span className="font-semibold text-slate-900">M.S. in General Surgery</span> from{" "}
          <span className="font-medium text-slate-800">Government Medical College, Amritsar</span>, and an{" "}
          <span className="font-semibold text-slate-900">M.Ch. in Urology</span> from the{" "}
          <span className="font-medium text-slate-800">Institute of Nephro-Urology, Bengaluru</span>.
        </p>

        <p>
          With extensive <span className="font-medium text-slate-900">clinical, academic, and surgical experience</span>, Dr. Singh currently leads and manages two specialised healthcare facilities—
          <span className="font-semibold text-[#103F7C]">Rudraksh IVF &amp; Urology Centre</span> and{" "}
          <span className="font-semibold text-orange-600">Dr. Shilpi Maternity &amp; Urology Centre</span>—providing comprehensive treatment in urology, andrology, renal health, fertility, and maternity care.
        </p>

        <p>
          He also actively participates in national and international conferences, specialised workshops, and CME programmes to remain at the forefront of modern urological advancements.
        </p>

        <p>
          His expertise encompasses <span className="font-semibold text-slate-900">complex reconstructive urology</span>, including urethral reconstruction, artificial urinary sphincter implantation, bladder neck reconstruction, and buccal mucosa graft urethroplasty. He is highly proficient in <span className="font-semibold text-[#103F7C]">minimally invasive laser procedures</span> for kidney stones and prostate disorders, including <span className="font-semibold text-slate-900">RIRS, HoLEP, and PCNL</span>.
        </p>

        <p>
          His practice also extends to advanced <span className="font-semibold text-slate-900">paediatric urological procedures</span> such as pyeloplasty, ureteric reimplantation, and hypospadias repair. Combining advanced surgical precision with a compassionate approach, Dr. Singh is committed to delivering ethical, evidence-based, and patient-centred care for adults and children.
        </p>
      </div>
    </div>
  );
}
