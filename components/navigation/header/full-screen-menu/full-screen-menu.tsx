import { motion } from "framer-motion";
import { menuSlide } from "./animation";
import Curve from "./curve";
import Profile from "@/components/Ui/profile";
import NavLink from "./nav-link";
import MenuCard from "./menu-card";
import FooterToggle from "../../footer/footer-toggle";

export default function FullScreenMenu() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 left-0 z-40 font-Oswald text-primary-foreground overflow-y-auto" // Added overflow-y-auto
    >
      {/* Profile */}
      <div className="relative w-full max-w-[95%] mx-auto">
        <div className="absolute top-4">
          <Profile />
        </div>
      </div>

      {/* Menu and Card */}
      <div className="relative mt-48 md:mt-28 lg:mt-20 w-[100%] md:mb-24 lg:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] md:gap-[11rem] gap-[3rem] relative">
          <div className="pl-8 md:pl-[10%] flex flex-col gap-y-[0.75rem] justify-end">
            {navItems.map((item, index) => (
              <NavLink key={index} data={{ ...item, index }} />
            ))}
          </div>
          {/* Menu about Card */}
          <MenuCard />
        </div>
      </div>

      {/* Footer links */}
      <div className="relative w-full mt-12">
        <FooterToggle />
      </div>

      {/* curve svg effect */}
      <Curve />
    </motion.div>
  );
}

const navItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Featured",
    href: "#projects",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
