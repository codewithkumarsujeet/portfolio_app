"use client";

import React from "react";
import Image from "next/image";
import MyImage from "@/public/assets/images/me/me.png";
import { Typewriter } from "react-simple-typewriter";

function Profile() {
  return (
    <div className="flex items-center gap-x-2 xs:gap-x-4 sm:gap-x-2 md:gap-x-4 transition-colors duration-75 text-primary-foreground">
      {/* photo  */}
      <div className="relative w-[100px] h-[100px] rounded-full flex bg-gradient-to-r from-blue-joust to-green-benzol">
        <Image
          src={MyImage}
          alt="Sujeet Photo"
          className="w-[97px] h-[98px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
        />
        {/* Online */}
        <div className="w-3 h-3 rounded-full bg-green-benzol border-blue-cosmos absolute right-0 bottom-5"></div>
      </div>
      <div className=" xs:text-[1.30rem] xs:text-nowrap text-4xl sm:text-3xl font-medium">
        <Typewriter
          words={["Sujeet Singhaniya"]}
          loop={false} 
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={1500}
        />
      </div>
    </div>
  );
}

export default Profile;
