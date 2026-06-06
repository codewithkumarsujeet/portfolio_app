"use client";
import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import FooterSection from "@/components/navigation/footer/footer";
import dynamic from "next/dynamic";

const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/water-wave"),
  { ssr: false }
);

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropradious="1"
      perturbance="1"
      resolution="3840"
    >
      {() => (
        <div>
          <LandingSection />
          <FeaturedSection />
          <AboutSection />
          <ContactSection />
          <FooterSection />
        </div>
      )}
    </WaterWaveWrapper>
  );
}
