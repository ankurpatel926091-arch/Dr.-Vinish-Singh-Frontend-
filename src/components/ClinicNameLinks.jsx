import React from "react";

const clinicPattern =
  /(Rudraksh IVF(?: & Urology Centre)?|Dr\. Shilpi Maternity & Urology(?: Centre)?)/gi;

const clinicMapUrls = {
  rudraksh: "https://www.google.com/maps?q=Rudraksh+IVF+And+Urology+Centre+Lucknow",
  shilpi: "https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9",
};

export default function ClinicNameLinks({ children, className = "text-inherit" }) {
  if (typeof children !== "string") {
    return children;
  }

  return children.split(clinicPattern).map((part, index) => {
    const isRudraksh = /^Rudraksh IVF/i.test(part);
    const isShilpi = /^Dr\. Shilpi Maternity/i.test(part);

    if (!isRudraksh && !isShilpi) {
      return part;
    }

    return (
      <a
        key={`${part}-${index}`}
        href={isRudraksh ? clinicMapUrls.rudraksh : clinicMapUrls.shilpi}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:underline`}
      >
        {part}
      </a>
    );
  });
}
