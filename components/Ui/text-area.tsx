import { FC, ReactNode, TextareaHTMLAttributes } from "react";

interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name"> {
  icon?: ReactNode;
  placeholder: string;
  name: string;
}

const TextArea: FC<TextAreaProps> = ({
  icon,
  placeholder,
  name,
  className = "",
  ...props
}) => {
  return (
    <div className="relative w-full my-3">
      {/* icon  */}
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        {icon}
      </div>
      <textarea
        name={name}
        placeholder={placeholder}
        className={`bg-primary-background text-primary-foreground w-full rounded-md text-sm ps-10 p-2.5 pt-4 focus:outline-none ${className}`}
        {...props}
      ></textarea>
    </div>
  );
};

export default TextArea;
