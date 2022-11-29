import React from "react";
import BenefitCard from "./BenefitCard";

export default function Benefits() {
  return (
    <section className="w-full my-20 px-20">
      <h1 className="text-[2rem] text-mainPink font-bold italic">
        Some Benefits You Get As A Member
      </h1>

      <div className="my-10 grid w-full grid-cols-3 gap-10">
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
