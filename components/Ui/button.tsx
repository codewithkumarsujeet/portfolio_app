import { FC, ReactNode, MouseEventHandler } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  link?: string;
  isIcon?: boolean;
  className?: string;
  mediaName?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;  // Keep onClick for div
}

const Button: FC<ButtonProps> = ({ children, link, isIcon, className, onClick }) => {
  return (
    <>
      {link ? (
        <Link href={link} target="_blank" className="w-10 h-10 cursor-pointer">
          <ButtonBody className={className} isIcon={isIcon}>
            {children}
          </ButtonBody>
        </Link>
      ) : (
        <div onClick={onClick}>  {/* Apply onClick to div */}
          <ButtonBody className={className} isIcon={isIcon}>
            {children}
          </ButtonBody>
        </div>
      )}
    </>
  );
};

interface ButtonBodyProps {
  children: ReactNode;
  isIcon?: boolean;
  className?: string;
}

const ButtonBody: FC<ButtonBodyProps> = ({ children, isIcon, className }) => {
  return (
    <div className="cursor-pointer w-auto h-full flex-none ">
      <div
        className={cn(
          "flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100",
          className,
          isIcon ? "h-10 w-10" : "h-full w-max px-3 py-2 "
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Button;
