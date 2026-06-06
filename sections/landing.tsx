import React from "react";
import Header from "@/components/navigation/header/header";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import FancyButton from "@/components/Ui/fancy-button";
import { FaArrowRight } from "react-icons/fa";
import LiveClock from "@/components/Ui/live-clock";
import ScrollDown from "@/components/Ui/scroll-down";

export default function LandingSection() {
  return (
    <div id="home" className="relative h-screen overflow-hidden p-8 mx-4">
      <Header />

      {/* show magnetic fancy button on md screen and hide on small screen */}
      <div className="absolute bottom-[4.75rem] z-20 xs:hidden">
        <MagneticWrapper>
          <FancyButton text="Let's talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>

      {/* live clock */}
      <div className="absolute right-10 xs:bottom-8 md:bottom-10">
        <LiveClock timeZone="Asia/Kolkata" />
      </div>

      {/* slogan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[4.5rem] leading-[10vw] xs:leading-[9.5vw] md:leading-[8vw] lg:leading-[8vw] xl:leading-[7vw] 2xl:leading-[9rem] font-medium h-[22.5rem] md:h-[25rem] xl:h-[29rem] 2xl:h-[40rem] tracking-[-0.3rem] xl:tracking-[0rem] xs:tracking-[0rem]">
        <div className="flex flex-col justify-center items-center slogan text-primary-foreground text-[12vw] md:text-[10vw] xl:text-[9vw] 2xl:text-[12vw] uppercase">
          <div>
            <span>code</span>
          </div>
          <div>
            <span>crafting</span>
          </div>
          <div className="relative">
            <span>brilliance</span>
            <div className="text-[1rem] xs:text-[0.65rem] sm:text-[0.75rem] md:text-[0.85rem] leading-[1.2rem] xs:leading-[1rem] md:leading-[1.2rem] tracking-[-0.01rem] absolute top-[9vw] lg:top-[8vw] 2xl:top-[10rem] left-0 2xl:left-[50rem] w-[30rem] uppercase font-normal">
              <span>empowering innovation</span>
              <br />
              <span>through inspired design</span>
              <br />
              <span>where challenges spark creativity</span>
              <br />
              <span>and solutions redefine possibilities.</span>
            </div>
          </div>
        </div>
        <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 bottom-[5rem] sm:bottom-[2rem] md:bottom-5 lg:bottom-6 2xl:bottom-10 right-12">
          <ScrollDown />
        </MagneticWrapper>
      </div>
    </div>
  );
}
