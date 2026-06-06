import React, { useRef } from "react";
import Heading from "@/components/heading/heading";
import MeCard from "@/components/cards/me";
import ResumeCard from "@/components/cards/resume";
import ExperienceCard from "@/components/cards/experience";
import { EducationCard } from "@/components/cards/education";
import Brain from "@/components/visualEffects/brain";
import SkillCard from "@/components/cards/skill";
import { useScroll } from "framer-motion";

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Use the scroll of the containerRef
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      id="about"
      className="relative pt-20 px-1 mx-1 sm:px-3 sm:mx-4 lg:px-8"
      ref={containerRef}
    >
      {/* Heading */}
      <Heading number="02" title_1="About" title_2="Me" />

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-between md:gap-x-40 lg:gap-x-60">
        {/* Left Section: Cards */}
        <div className="w-full md:w-[55%] gap-y-6 h-fit grid grid-cols-1">
          <MeCard />
          <ResumeCard />
          <SkillCard />
          <EducationCard />
          <ExperienceCard />
        </div>

        {/* Right Section: Sticky SVG */}
        <div className="hidden md:block w-[40%] mt-8 lg:mt-0 relative">
          <div className="sticky md:top-[-3rem] lg:top-0">
            <div className="h-[100vh] overflow-visible">
              <Brain scrollYProgress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
