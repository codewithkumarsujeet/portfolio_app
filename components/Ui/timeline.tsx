import { FC, ReactNode } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
interface TimelineProps {
  children: ReactNode;
}

export const Timeline: FC<TimelineProps> = ({ children }) => {
  return <div className="flex flex-col gap-y-6">{children}</div>;
};

// Timline Item

interface TimelineItemProps {
  title: string;
  subTitle:string
  date: string;
  tag?: string;
  link?: string;
  isCourse?: boolean;
}

export const TimelineItem: FC<TimelineItemProps> = ({
  title,
  subTitle,
  date,
  tag,
  link,
  isCourse,
}) => {
  return (
    <div className="flex gap-12 min-h-min mt-5 justify-start relative">
      {/* date timeline  */}
      <div
        className="h-auto flex-none break-words whitespace-pre"
        style={{
          width: `${isCourse ? "0" : ""}`,
        }}
      >
        <p className="text-secondary-foreground">{date}</p>
      </div>
      {/* Right Side  */}
      <div
        className="flex gap-x-2"
        style={{ transform: `${isCourse ? "translate-x-[-45px]" : ""}` }}
      >
        <div className="flex flex-col gap-0.5 ">
          {/* title */}
          <div className="text-primary-foreground break-words whitespace-pre">
            <p className="leading-6 font-medium text-sm">{title}</p>
          </div>
          {/* subtitle  */}
          <div className="flex items-center gap-2 w-content">
            {link ? (
              <Link href={link} target="_blank">
                <Body link={link} tag={tag} subTitle={subTitle} />
              </Link>
            ) : (
              subTitle
            )}
          </div>
          {/* tag  */}
          <div className="flex items-center gap-2 w-content">
            {/* {tag ? (
              <Body tag={tag} />
            ) : null} */}
            <p>{tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Time line Item Body ..................................................................

interface BodyProps {
  subTitle: string;
  tag?: string;
  link?: string;
}

export const Body: FC<BodyProps> = ({ subTitle, tag, link }) => {
  return (
    <div className="text-secondary-foreground flex items-center">
      <p className="text-sm font-medium leading-6 mt-1 ">{subTitle}</p>
      {link ? <FiArrowUpRight /> : null}
      {tag ? (
        <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
          <p className="text-[10px] text-secondary-foreground font-normal">
            {tag}
          </p>
        </div>
      ) : null}
    </div>
  );
};
