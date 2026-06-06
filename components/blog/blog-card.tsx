"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import type { BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        <div
          className={cn(
            "relative flex h-full flex-col overflow-hidden rounded-2xl",
            "border border-border bg-primary-background",
            "transition-all duration-300 ease-out",
            "hover:border-white/15 hover:bg-white/[0.07]",
            "hover:shadow-[0_20px_60px_-20px_rgba(86,172,255,0.25)]"
          )}
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
            <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
              {post.tag}
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
            <h2 className="font-Oswald text-xl leading-snug text-primary-foreground transition-colors duration-300 group-hover:text-[#fdf825] sm:text-2xl">
              {post.title}
            </h2>
            <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-secondary-foreground">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-joust transition-colors duration-300 group-hover:text-white">
              Read on Hashnode
              <HiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
