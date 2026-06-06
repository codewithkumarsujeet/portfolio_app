import React from "react";
import Image from "next/image";
import Card from "../Ui/card";
import MyImg from "@/public/assets/images/gallery/image-1.jpg";
import { cn } from "@/lib/utils";

export default function MeCard() {
  return (
    <Card className="2xl:hidden">
      <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
        {/* background image  */}
        <Image
          src={MyImg}
          alt="Sujeet"
          className="absolute top-0 left-0 bottom-0 right-0 w-full object-fit"
        />
      </div>
      {/* Tags  */}
       <div className="absolute top-[65%] space-y-2">
        <Tag 
        text="Hello, universe 👋"
        className="rounded-full"
        />
         <Tag 
        text="I'am Sujeet Singhaniya"
        className="rounded-full"
        />
         <Tag 
        text="Full stack developer 💻"
        className="rounded-full"
        />
         <Tag 
        text="Freelancer 👨‍💻"
        className="rounded-full"
        />
      </div>
    </Card>
  );
}

const Tag = ({ text, className }: { text: string, className: string }) => {
  return (
    <div className={( className)}>
      <p className="font-medium leading-[110%] text-primary-foreground">
        {text}
      </p>
    </div>
  )
}
