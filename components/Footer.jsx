import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-row justify-between items-center px-20 mt-20">
      {/* Logo */}
      <div className="w-1/2 flex flex-row justify-start">
        <Link href={"/"}>
          <Image
            src={"/NFComradeLogo.svg"}
            alt={"Logo"}
            width={100}
            height={20}
            priority
          />
        </Link>
      </div>

      {/* terms  and conditions */}
      <div className="w-1/2 flex flex-row justify-end">
        <div className="flex flex-col">
          <p>© {currentYear} Panthart</p>

          <div className="text-mainPink font-semibold italic my-3">
            <Link href={"/"}>Terms And Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
