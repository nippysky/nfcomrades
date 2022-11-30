import React from "react";
import BenefitCard from "./BenefitCard";

export default function Benefits() {
  return (
    <section className="w-full my-20 lg:px-20 px-5">
      <h1 className="text-[2rem] text-mainPink font-bold italic text-center lg:text-left">
        Some Benefits You Get As A Member
      </h1>

      <div className="my-10 grid w-full lg:grid-cols-3 md:grid-cols-2 gap-10">
        <BenefitCard
          title={"Exposure"}
          desc={
            "Community members will not only benefit from activities and in house projects concerned with only Panthart. Collaborations and parternships we invole in will be of added utility to the Comrades."
          }
        />

        <BenefitCard
          title={"Freebies"}
          desc={
            "Occasionally, from time to time, Panthart will give out freebies to Comrades. These freebies can take any form. Giveaways, airdrops, insights, education , etc."
          }
        />

        <BenefitCard
          title={"VIP"}
          desc={
            "The vision of Panthart is to becoming the number one NFT company in Africa. This comes with extra benefits starting with our community members."
          }
        />

        <BenefitCard
          title={"Stake Holders"}
          desc={
            "As the official web 3 community for Panthart, community members grows with Panthart from scratch. On a timely basis, Panthart will share part of revenue/income accross Comrade holders. "
          }
        />

        <BenefitCard
          title={"Exclusive"}
          desc={
            "Our Discord is very exclusive, non community members have no need to be in our discord server because they will not have access to any information. Our Discord is meant for holders only."
          }
        />

        <BenefitCard
          title={"Assistance"}
          desc={
            "All Comrade holders can seek for assistance or collaboration. For example you want to start your own project, Panthart will be of assistance or partnership."
          }
        />
      </div>
    </section>
  );
}
