import React from "react";
import roadmap from "../roadmap";

export default function Roadmap() {
  return (
    <section className="w-full lg:px-20 px-5">
      <h1 className="text-mainPink text-[2rem] italic font-bold">
        RoadMap Activations
      </h1>

      <p className="my-5">
        Every journey begins with a step. In Our RoadMap, once we hit a target
        sell through percentage, we will begin to work on realizing the stated
        goal.
      </p>

      <div className="w-full my-10">
        {roadmap.map((road) => (
          <div key={road.id} className="w-full flex flex-row gap-20">
            <div className="w-[5%] text-mainGreen font-semibold my-5">
              <p>{road.percent}</p>
            </div>

            <div className="w-[95%] text-white font-light my-5">
              <p>{road.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
