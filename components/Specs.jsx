import Image from "next/image";
import React from "react";

export default function Specs() {
  return (
    <section className="w-full lg:py-10 py-1">
      <div className="w-full flex animate-pulse">
        <Image
          src={"/ComradeSlide.png"}
          alt={"ComradeSlide"}
          width={1500}
          height={100}
          priority
          quality={100}
        />
      </div>

      <section className="w-full my-20 lg:px-20 px-5 text-center lg:text-left">
        <p>
          We are a community of 5, 500 unique Comrades. 5000 Comrades will be
          released first for public claim, after which the remaining 500
          Comrades will Join. The 500 Comrades that will join in later will
          individually cost 100x the price from that of the first 5000 Comrades.
        </p>

        <div className="w-full lg:flex lg:flex-row lg:gap-20 my-20 text-center lg:text-left">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-mainPink text-[2rem] font-bold italic">
              Specs And Traits
            </h1>

            <p className="my-5">
              Every Comrade is unique and programmatically generated from over
              various traits that is relatable to the African culture. Some
              tratits are rarer than others. The Comrades are stored as ERC-721
              tokens on the Ethereum blockchain.
            </p>
          </div>

          {/* Comrade Collage */}
          <div className="lg:w-1/2 w-full flex lg:flex-row lg:justify-end justify-center mt-10">
            <Image
              src={"/ComradeCollege.svg"}
              width={300}
              height={300}
              quality={100}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
