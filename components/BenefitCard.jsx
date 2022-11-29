import React from "react";

export default function BenefitCard({ title, desc }) {
  return (
    <div className="w-full bg-mainGrey p-5">
      <h3 className="text-mainGreen font-semibold">{title}</h3>
      <p className="mt-5 text-white font-light text-[0.85rem]">{desc}</p>
    </div>
  );
}
