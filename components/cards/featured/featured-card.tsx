"use client";

import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";

interface FeaturedCardProps {
  title: string;
  image: StaticImageData | string;
  link: string;
  featured?: boolean;
  index?: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const FeaturedCard: FC<FeaturedCardProps> = ({
  title,
  image,
  link,
  featured = false,
  index = 0,
}) => {
  const card = (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={cardVariants}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-primary-background",
        "transition-colors duration-300 ease-out",
        link && "cursor-pointer hover:border-white/10"
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          featured ? "h-[340px] sm:h-[420px] lg:h-[520px]" : "h-[260px] sm:h-[300px]"
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority={featured}
          quality={90}
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 90vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

        <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-pixel text-xs tracking-widest text-primary-foreground backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <h3
          className={cn(
            "font-Oswald leading-tight text-primary-foreground",
            featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
          )}
        >
          {title}
        </h3>

        {link ? (
          <span className="flex shrink-0 items-center gap-2 text-sm font-medium text-blue-joust transition-colors duration-300 group-hover:text-white">
            <FaGithub className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
            <HiArrowUpRight className="h-4 w-4" />
          </span>
        ) : null}
      </div>

    </motion.article>
  );

  if (!link) return card;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      {card}
    </a>
  );
};

export default FeaturedCard;
