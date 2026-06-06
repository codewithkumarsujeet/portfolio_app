import { FC, ReactNode } from "react";

interface InputProps {
  icon?: ReactNode;
  placeholder: string;
  type: "email" | "password" | "text";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ icon, placeholder, type, name, value, onChange }) => {
  return (
    <div className="relative w-full my-3">
      {/* icon  */}
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-primary-background text-primary-foreground w-full rounded-md text-sm ps-10 px-2.5 py-3 focus:outline-none"
      ></input>
    </div>
  );
};

export default Input;
