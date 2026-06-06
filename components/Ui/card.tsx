import React, { ReactNode } from "react";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ title, children, className }) => {
  return (
    <div
      className={cn(
        "relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground overflow-hidden",
        className
      )}
    >
      <div className="flex flex-col gap-y-6"></div>
      {/* title  */}
      {title ? (
        <div className="font-aquire">
          <p className="uppercase text-lg">{title}</p>
        </div>
      ) : null}
      {/* children  */}
      {children}
    </div>
  );
};

export default Card;
