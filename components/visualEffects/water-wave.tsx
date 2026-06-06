"use client";
import { ReactNode } from "react";
import { FC } from "react";
import WaterWave from "react-water-wave";

interface WaterWaveProps {
  imageUrl: string;
  dropradious: string;
  perturbance: string;
  resolution: string;
  children: () => ReactNode;
}

const WaterWaveWrapper: FC<WaterWaveProps> = ({
  imageUrl,
  dropradious,
  perturbance,
  resolution,
  children,
}) => {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropradious={dropradious}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children}
    </WaterWave>
  );
};

export default WaterWaveWrapper;
