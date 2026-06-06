"use client";

import { FeaturedProject } from "@/data/featured";
import FeaturedCard from "../cards/featured/featured-card";

interface ExpandableFeaturedProps {
  projects: FeaturedProject[];
  startIndex?: number;
}

export default function ExpandableFeatured({
  projects,
  startIndex = 1,
}: ExpandableFeaturedProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
      {projects.map((project, i) => (
        <FeaturedCard
          key={project.title}
          index={startIndex + i}
          title={project.title}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
}
