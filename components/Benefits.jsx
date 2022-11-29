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
          title={"Lorem Ipsium"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam"
          }
        />

        <BenefitCard
          title={"Lorem Ipsium"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam"
          }
        />

        <BenefitCard
          title={"Lorem Ipsium"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam"
          }
        />

        <BenefitCard
          title={"Lorem Ipsium"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam"
          }
        />

        <BenefitCard
          title={"Lorem Ipsium"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam"
          }
        />

        <BenefitCard
          title={"Lorem Ipsium"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam"
          }
        />
      </div>
    </section>
  );
}
