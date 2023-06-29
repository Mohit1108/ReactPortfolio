import React from "react";
import HeroSection from "../Components/Sections/HeroSection";
import About from "../Components/Sections/About";
import Projects from "../Components/Sections/Projects";
export default function Home() {
  return (
    <div className="MainBody">
      <HeroSection></HeroSection>
      <About></About>
      <Projects></Projects>
      
    </div>
  );
}
