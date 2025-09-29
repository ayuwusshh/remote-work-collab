import React from "react";
import Herro from "../photos/herro.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen pt-20 flex flex-row items-center px-10 gap-16 ">
      {/* Left: Text Content */}
      <div className="flex flex-col items-start justify-center flex-1 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight flex flex-col text-left">
          <span>
            <span className="text-gray-100">The Complete </span>
            <span className="text-indigo-500">Remote Work</span>
            <span className="text-gray-100"> Collaboration Suite</span>
          </span>
        </h1>
        <p className="font-medium mt-6 text-lg text-gray-300 text-left">
          Everything your distributed team needs to communicate, coordinate,
          and collaborate in real time all in one browser-based platform.
        </p>

        <div className="flex items-center mt-5 gap-3">
          <button className="rounded-lg border px-5 py-2 text-base font-medium bg-[#121A2B] text-white cursor-pointer transition-colors duration-200 hover:border-blue-500 flex items-center border-[#2B3652]">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="rounded-lg border border-[#2B3652] px-5 py-2 text-base font-medium bg-[#121A2B] text-white cursor-pointer transition-colors duration-200 hover:border-blue-500">
            Sign In
          </button>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex-1 flex justify-center items-center group overflow-hidden rounded-xl shadow-lg ring-1 ring-[#2B3652]">
        <img
          src={Herro}
          alt="Collaboration Suite dashboard"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Hero;
