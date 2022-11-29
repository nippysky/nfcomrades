import React from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

export default function GuideCards({ title, link }) {
  return (
    <Link href={link}>
      <div className="w-full bg-mainGrey p-10 flex flex-row justify-center items-center hover:bg-mainBG hover:border hover:border-mainGreen font-semibold text-mainGreen">
        <p>{title}</p>
        <span className="text-mainGreen relative left-5">
          <FaYoutube size={22} />
        </span>
      </div>
    </Link>
  );
}
