import { FC } from "react";
import SvgCurve from "../visualEffects/svg-curve";
import { HeadingAnimatedSvg } from "./heading-animated-svg";

interface HeadingProps {
  number: string;
  title_1: string;
  title_2: string;
}

const Heading: FC<HeadingProps> = ({ number, title_1, title_2 }) => {
  return (
    <div className="my-10 px-8 z-20 relative">
      <div className="outline-none flex flex-col justify-start shrink-0 opacity-15 transform -top-32 sm:-top-32 md:-top-32 2xl:-top-32 w-[71px] flex-none h-auto left-12 lg:-top-32 absolute whitespace-pre">
        <h2 className="font-aquire text-[9rem] lg:text-[11rem] text-center text-primary-foreground absolute">
          <span className="bottom_fade bg-clip-text text-transparent p-4">{number}</span>
        </h2>
      </div>
      {/* heading text wrapper */}
      <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-Oswald">
        <p className="text-[17vw] lg:text-[11vw] sm:text-[11vw] xs:text-[9vw] leading-[100%] text-primary-foreground mr-3 ">{title_1}</p>
        <HeadingAnimatedSvg text="LEARN MORE ABOUT OUR FEATURED PROJECT" />
        <p className="text-[17vw] lg:text-[11vw] sm:text-[11vw] xs:text-[9vw] leading-[100%] text-primary-foreground italic ">{title_2}</p>
      </div>
      {/* svg curve  */}
      <SvgCurve />
    </div>
  );
};

export default Heading;
