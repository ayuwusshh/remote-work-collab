import React from "react";
import CardArray from "../data/Data";

const HowItWorks = () => {
  return (
    <section>
      {/* Top text block */}
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Everything Your Team Needs in One Place
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Our integrated platform combines the essential tools for remote work
          collaboration
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-16">
        {CardArray.map((card, index) => {
          const Icon = card.logo;
          return (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg bg-[#111827] text-white hover:shadow-xl transition ring-1 ring-[#2B3652]"
            >
              {/* icon container */}
              <div className="bg-[#2A3550] w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {Icon && <Icon className="h-6 w-6 text-purple-400" />}
              </div>

              {/* text */}
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-400 mb-6">{card.desc}</p>

              {/* imported button */}
              {card.but}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
