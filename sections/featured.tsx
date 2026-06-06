import FeaturedCard from "@/components/cards/featured/featured-card";
import ExpandableFeatured from "@/components/expandables/expandable-featured";
import Heading from "@/components/heading/heading";
import featuredData from "@/data/featured";

export default function FeaturedSection() {
  const [mainFeatured, ...otherFeatured] = featuredData;

  if (!mainFeatured) return null;

  return (
    <section id="projects" className="relative pt-20 px-1 mx-1 lg:px-8">
      <Heading number="01" title_1="Featured" title_2="Work" />

      <div className="flex flex-col gap-10 lg:gap-14">
        <FeaturedCard
          featured
          index={0}
          title={mainFeatured.title}
          image={mainFeatured.image}
          link={mainFeatured.link}
        />

        {otherFeatured.length > 0 && (
          <ExpandableFeatured projects={otherFeatured} startIndex={1} />
        )}
      </div>
    </section>
  );
}
