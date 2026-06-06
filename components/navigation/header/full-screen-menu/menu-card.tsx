import Link from "next/link";
import Image from "next/image";
import { HeadingAnimatedSvg } from "@/components/heading/heading-animated-svg";
import ShadeImage from "@/public/assets/images/background/card-shade.png";

export default function MenuCard() {
    return <div className="w-[100%] md:w-[95%] mt-[30px] h-auto 2xl:min-h-[427px] gap-[30px] bg-[#1e36ea] rounded-[10px] flex flex-col justify-between  relative overflow-hidden pt-8 px-[25px] pb-5 shadow-md">
        {/* .............Header...............  */}
        <div className="w-full flex justify-between relative items-center">
            <div className="uppercase font-bold text-2xl text-white">
                Who is SUJEET ?
            </div>
            <HeadingAnimatedSvg animated text="LEARN MORE ABOUT SUJEET KUMAR" />
        </div>
        {/* ............Menu................  */}
        <div className="z-40 flex flex-col gap-[8px] justify-center items-start relative">
            {myLinks.map((link, index) => (
                <Link key={index} href={link.link} className="text-[#fdf825]  text-[40px] font-bold uppercase leading-[85%] transition-colors duration-75 hover:text-white">
                    {link.title}
                </Link>
            ))}
        </div>
        {/* .................Image shade.........................   */}
        <Image src={ShadeImage} alt="ShadeImage" className="block w-full h-full mix-blend-overlay absolute top-0 right-0 left-0 bottom-0" />
    </div>
}

const myLinks = [
    {
        title: "About",
        link: "#about",
    },
    {
        title: "BLOG",
        link: "/blog",
    },
    {
        title: "EDUCATION",
        link: "#about",
    },
    {
        title: "SKILLS",
        link: "#about",
    },
   
];