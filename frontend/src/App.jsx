import React from "react";
import Hero from "./ui/Hero";
import Navbar from "./ui/Navbar";
import HowItWorks from "./ui/HowItWorks";

export default function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#0B1220_0%,_#0F1B2D_35%,_#0A0F1A_100%)]">
      <Navbar />
      <Hero />
      <HowItWorks />
    </div>
  );
}
