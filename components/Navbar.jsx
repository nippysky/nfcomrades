import Image from "next/image";
import React from "react";
import Link from "next/link";
import { SiDiscord, SiTwitter } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

export default function Navbar() {
  return (
    <header className="w-full py-15 flex flex-row justify-between items-center">
      <nav>
        <Link href={"/"}>
          <Image
            src={"/NFComradeLogo.svg"}
            alt={"Logo"}
            width={100}
            height={20}
            priority
          />
        </Link>
      </nav>

      {/* Social Links */}
      <nav className="flex flex-row gap-10 text-white">
        <Link href={"/"}>
          <span className=" cursor-pointer hover:text-mainPink">
            <SiDiscord size={22} />
          </span>
        </Link>

        <Link href={"/"}>
          <span className="cursor-pointer hover:text-mainPink">
            <SiTwitter size={22} />
          </span>
        </Link>

        <Link href={"/"}>
          <span className="cursor-pointer hover:text-mainPink">
            <RiInstagramFill size={22} />
          </span>
        </Link>
      </nav>
    </header>
  );
}
