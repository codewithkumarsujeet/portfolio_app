import type { StaticImageData } from "next/image";
import studyNotion from "@/public/assets/images/project/study.png";
import nazara from "@/public/assets/images/project/nazara.png";
import blogApp from "@/public/assets/images/project/blog.png";
import mintlify from "@/public/assets/images/project/mintlify_ui.png";

export type FeaturedProject = {
  title: string;
  image: StaticImageData | string;
  link: string;
};

export const featuredData: FeaturedProject[] = [
  {
    title: "Study Notion",
    image: studyNotion,
    link: "https://github.com/codewithkumarsujeet/blog_app",
  },
  {
    title: "Nazara App",
    image: nazara,
    link: "https://github.com/codewithkumarsujeet/blog_app",
  },
  {
    title: "Blog App",
    image: blogApp,
    link: "https://github.com/codewithkumarsujeet/blog_app",
  },
  {
    title: "Mintlify Landing Page",
    image: mintlify,
    link: "https://github.com/codewithkumarsujeet/blog_app",
  },
];

export default featuredData;
