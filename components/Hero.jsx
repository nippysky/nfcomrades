import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { ConnectWallet } from "@thirdweb-dev/react";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Hero() {
  const [count, setCount] = useState(1);

  return (
    <section className="w-full min-h-screen px-20 py-2 bg-mainBG">
      <Navbar />

      <section className="flex flex-col h-screen justify-center w-full">
        <div className="flex flex-row justify-between items-center w-full gap-32">
          {/* Image */}
          <div className="w-1/2 flex flex-row justify-start">
            <Image
              src={"/nfcomrades_gif.gif"}
              alt={"comrades Gif"}
              width={400}
              height={400}
              priority
            />
          </div>

          {/* Descriptions and mint button */}
          <div className="w-1/2 flex-col items-end">
            <h1 className="text-mainPink text-[2rem] font-bold italic">
              Become A Member Of Our Community
            </h1>

            <h3 className="text-white font-normal text-[1.2rem] my-10 leading-8">
              The population quota is 5500 Comrades. Mint atleast 1 (One) and at
              most 3 (Three) Comrade to become a member of the community.
            </h3>

            {/* MINT & CONNECT BUTTON */}
            <div className="flex flex-row w-full gap-10">
              {/* count */}
              <div className="flex flex-row gap-10 w-1/2 justify-start">
                <div className="flex bg-mainGrey w-[50px] h-[50px] justify-center items-center text-[1.2rem]">
                  {count}
                </div>
                <div className="flex flex-row gap-5">
                  <button
                    className={`w-[50px] h-[50px] bg-mainGreen ${
                      count === 1 ? "hover:bg-mainGreen" : `hover:bg-mainPink`
                    } justify-center items-center text-[1.5rem]`}
                    onClick={() => {
                      if (count === 1) return;
                      setCount(count - 1);
                    }}
                  >
                    -
                  </button>
                  <button
                    className={`w-[50px] h-[50px] bg-mainGreen ${
                      count === 3 ? `hover:bg-mainGreen` : `hover:bg-mainPink`
                    } justify-center items-center text-[1.5rem]`}
                    onClick={() => {
                      if (count === 3) return;
                      setCount(count + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Connect and Mint Button */}
              <div className="w-1/2">
                <ConnectWallet accentColor="#22B573" colorMode="dark" />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="w-full flex flex-row justify-between items-center mt-20">
          {/* unclaimed comrades */}
          <div className="w-1/3 text-mainPink text-[1.1rem] font-semibold flex flex-row justify-center">
            <p>1590 / 5500 Unclaimed Comrades</p>
          </div>

          {/* contract address etherscan */}
          <div className="w-1/3 text-mainPink text-[1.1rem] font-semibold flex flex-row justify-center">
            <p>Smart Contract</p>
            <span className="relative left-2">
              <Link href={"/"}>
                <HiOutlineExternalLink color="#22B573" size={22} />
              </Link>
            </span>
          </div>

          {/* View all the comrades */}
          <div className="w-1/3 text-mainPink text-[1.1rem] font-semibold flex flex-row justify-center">
            <p>View Comrades</p>
            <span className="relative left-2">
              <Link href={"/"}>
                <HiOutlineExternalLink color="#22B573" size={22} />
              </Link>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
