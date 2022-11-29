import React from "react";
import GuideCards from "./GuideCards";

export default function Guide() {
  return (
    <section className="w-full lg:px-20 px-5 py-20 text-center lg:text-left">
      <h1 className="text-mainPink text-[2rem] font-bold italic">
        Let’s Guide You Into The Community
      </h1>

      <p className="text-white my-5">
        The whole process of purchasing Ethereum, Minting, and Viewing your
        minted NFT might be confusing to you. We are hear to guide you. Simply
        watch the videos below to learn.
      </p>

      <div className="w-full grid md:grid-cols-2 gap-10 my-20">
        <GuideCards title={"Getting Started With Metamask"} link={"/"} />
        <GuideCards title={"How To Buy Ethereum"} link={"/"} />
        <GuideCards title={"How To Mint An NFT"} link={"/"} />
        <GuideCards title={"Navigating Secondary Market"} link={"/"} />
      </div>
    </section>
  );
}
