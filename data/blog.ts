export type BlogPost = {
  title: string;
  link: string;
  image: string;
  tag: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Exploring the Linux File System",
    link: "https://hashnode.com/@sujeet-dev/exploring-the-linux-file-system-like-a-system-investigator-beyond-basic-commands",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1767507954772/cf43ac19-f6e6-4f40-ad4f-b35f6aa4488b.png",
    tag: "Linux",
    excerpt:
      "Navigate directories, permissions, and hidden paths like a system investigator.",
  },
  {
    title: "The new Keyword in JavaScript",
    link: "https://hashnode.com/@sujeet-dev/the-new-keyword-in-javascript",
    image:
      "https://cdn.hashnode.com/uploads/covers/6959d0e8a1926bd2b4ec0120/3d859cde-e4bd-4c1a-9fec-12b6af39edc3.png",
    tag: "JavaScript",
    excerpt:
      "How `new` works under the hood and what it means for constructors.",
  },
  {
    title: "JavaScript Modules: Import and Export",
    link: "https://hashnode.com/@sujeet-dev/javascript-modules-import-and-export-explained",
    image:
      "https://cdn.hashnode.com/uploads/covers/6959d0e8a1926bd2b4ec0120/bf3e4adf-3514-440d-80d2-b406bc04682d.png",
    tag: "JavaScript",
    excerpt:
      "A practical guide to organizing code with ES modules.",
  },
  {
    title: "Control Flow in JavaScript",
    link: "https://hashnode.com/@sujeet-dev/control-flow-in-javascript-if-else-and-switch-explained",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1769744411569/384d6a36-a00d-4914-9dbd-cd88076ac891.png",
    tag: "JavaScript",
    excerpt:
      "If, else, and switch — explained with clear examples.",
  },
];
