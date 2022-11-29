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
        <Link target="_blank" href={"https://discord.gg/uuvbs9DJ7H"}>
          <span className=" cursor-pointer hover:text-mainPink">
            <SiDiscord size={22} />
          </span>
        </Link>

        <Link target="_blank" href={"https://twitter.com/panth_art"}>
          <span className="cursor-pointer hover:text-mainPink">
            <SiTwitter size={22} />
          </span>
        </Link>

        <Link
          target="_blank"
          href={"https://www.instagram.com/panthart_official"}
        >
          <span className="cursor-pointer hover:text-mainPink">
            <RiInstagramFill size={22} />
          </span>
        </Link>
      </nav>
    </header>
  );
}
