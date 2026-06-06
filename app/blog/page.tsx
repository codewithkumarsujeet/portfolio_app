import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import BlogCard from "@/components/blog/blog-card";
import FooterSection from "@/components/navigation/footer/footer";
import SvgCurve from "@/components/visualEffects/svg-curve";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog | Sujeet Singhaniya",
  description:
    "Articles on JavaScript, Linux, and web development — written and published on Hashnode.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-primary-foreground">
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 md:px-8 lg:px-10">
        <div className="mb-10 flex justify-end">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-secondary-foreground transition-colors duration-200 hover:text-primary-foreground"
          >
            <HiArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to home
          </Link>
        </div>

        <header className="relative mb-14 sm:mb-16">
          <div className="pointer-events-none absolute -left-2 -top-16 select-none opacity-[0.12] sm:-top-20">
            <span className="font-aquire text-[7rem] leading-none sm:text-[9rem] lg:text-[11rem]">
              04
            </span>
          </div>

          <div className="relative z-10 font-Oswald">
            <h1 className="text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.95]">
              My <span className="italic text-[#fdf825]">Blog</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary-foreground sm:text-lg">
              Deep dives into JavaScript, Linux, and the craft of building for
              the web — published on Hashnode.
            </p>
          </div>

          <div className="mt-8">
            <SvgCurve />
          </div>
        </header>

        <div className="mb-10 flex items-center justify-between gap-4 border-b border-border pb-4">
          <p className="font-aquire text-sm uppercase tracking-wider text-secondary-foreground">
            Explore all articles  →
          </p>
          <a
            href="https://hashnode.com/@sujeet-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-joust transition-colors hover:text-white"
          >
            View all on Hashnode →
          </a>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.link} post={post} index={index} />
          ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
