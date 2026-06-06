import React from "react";
import Image from "next/image";
import Button from "./button";
import { FaFacebook } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import fbPageImg from "@/public/assets/images/fbpage/facebook-page.png";
import { FaHashnode } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => {
        return (
          <Button key={i} link={social.link} isIcon>
            <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
          </Button>
        )
      })}
    </div>
  );
};

const socials = [
  {
    name: "Facebook",
    icon: <FaFacebook className="w-4 h-4" />,
    link: "https://www.facebook.com/profile.php?id=100012650821556",
    username: "Sujeet",
  },
  {
    name: "Facebook Page",
    icon: <Image src={fbPageImg} alt="Facebook Page" width={16} height={16} />,
    link: "https://www.facebook.com/profile.php?id=61565666072813",
    username: "Hidden Fact",
  },

  {
    name: "Instagram",
    icon: <SiInstagram className="w-4 h-4" />,
    link: "https://www.instagram.com/fact_with_animation/",
    username: "Fact-with-animation",
  },
  {
    name:"Github",
    icon: <FaGithub className="w-4 h-4" />,
    link: "https://github.com/codewithkumarsujeet",
    username: "codewithkumarsujeet",
  },
  {
    name:"Linkedin",
    icon: <FaLinkedin className="w-4 h-4" />,
    link: "https://www.linkedin.com/in/sujeet-kumar-20ab51188",
    username: "Sujeet Kumar",
  },
  {
    name:"Hashnode",
    icon: <FaHashnode className="w-4 h-4" />,
    link: "https://hashnode.com/@sujeet-dev",
    username: "@sujeet-dev",
  },
  
];

export default Social;
