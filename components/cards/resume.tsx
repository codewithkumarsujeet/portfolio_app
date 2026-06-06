import React from "react";
import Image from "next/image";
import Button from "../Ui/button";
import Card from "../Ui/card";
import SigImage from "@/public/assets/images/signature/sig.png";
import { FaDownload } from "react-icons/fa";
import Social from "../Ui/social";

const ResumeCard = () => {
  return (
    <Card className="md:h-full lg:h-fit">
      <div className="text-sm tracking-wider leading-snug">
        Hi, my name is Sujeet Kumar. I am from a small village called{" "}
        <span className="font-normal text-[14px] font-aquire underline italic text-yellow-200">
          Nanda Mura
        </span>
        , located in the Siwan district of{" "}
        <span className="font-normal font-aquire text-[14px] underline italic text-yellow-200">
          Bihar
        </span>
        . I completed my primary education at the middle school in my village.
        <br />
        <br /> Afterward, I finished my 10th grade at{" "}
        <span className="font-normal font-aquire text-[14px] underline italic text-yellow-200">
          Chanpur High School
        </span>{" "}
        and my intermediate studies at{" "}
        <span className="font-normal font-aquire text-[14px] underline italic text-yellow-200">
          Jagdam College, Chhapra
        </span>
        . I earned my graduation degree from{" "}
        <span>Magadh University, Gaya</span>.<br />
        <br /> During this period, I was preparing for a government job in
        Patna. It was then that I developed an interest in web development and
        began learning through Skill Academy.
        <br />
        <br /> In addition to my studies, I have a{" "}
        <span className="font-normal font-aquire text-[14px] underline italic text-yellow-200">
          strong passion for reading, especially stories
        </span>
        . This hobby allows me to explore different worlds and perspectives,
        enriching my imagination and understanding. I also{" "}
        <span className="font-normal font-aquire text-[14px] underline italic text-yellow-200">
          enjoy watching movies
        </span>
        , which adds another layer to my appreciation of storytelling.
        <br />
        <br /> I continued my web development studies with various teachers, and
        among them, my favorite teacher is {""}
        <span className="font-normal font-aquire text-[14px] underline italic text-yellow-200">
          Love Babbar
        </span>
        .
      </div>
      {/* Signature  */}
      <div className="flex flex-row-reverse h-auto ">
        <Image src={SigImage} alt="Sujeet Singhaniya"></Image>
      </div>
      {/* social and resume btn  */}
      <div className="flex items-center justify-between md:absolute md:bottom-4 md:left-6 md:w-[calc(100%-48px)]">
        {/* socials */}
        <Social />
        <Button>
          <FaDownload />
        </Button>
      </div>
    </Card>
  );
};

export default ResumeCard;
