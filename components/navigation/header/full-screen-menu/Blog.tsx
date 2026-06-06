import Link from "next/link";

export default function Blog() {
  return (
    <Link
      href="/blog"
      className="text-[#fdf825] text-[40px] font-bold uppercase leading-[85%] transition-colors duration-75 hover:text-white"
    >
      Blog
    </Link>
  );
}
