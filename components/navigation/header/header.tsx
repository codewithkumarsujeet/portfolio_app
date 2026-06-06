import React, { useState } from "react";
import Profile from "@/components/Ui/profile";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import FancyButton from "@/components/Ui/fancy-button";
import { FaArrowRight } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import ToggleButton from "./full-screen-menu/toggle-button";
import FullScreenMenu from "./full-screen-menu/full-screen-menu";
import { useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [showToggle, setShowToggle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowToggle(true);
      } else { 
        setShowToggle(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex  items-center sm:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <FancyButton text="Let's talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {/* toggle button  */}
      {showToggle && <ToggleButton open={open} setOpen={setOpen} />}
      {/* full screen menu  */}
      <AnimatePresence mode="wait"
      > {open && <FullScreenMenu />}</AnimatePresence>
    </div>
  );
}
