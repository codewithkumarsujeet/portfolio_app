import { FC } from "react";

interface SelectInputProps {
  id: string;
  text: string;
  type: "checkbox" | "radio";
  selectedOptions: string[];
  setSelectOptions: (newValue: string[]) => void;
  allowMultiple: boolean;
}

const SelectInput: FC<SelectInputProps> = ({
  id,
  text,
  type,
  selectedOptions,
  setSelectOptions,
  allowMultiple,
}) => {
  const handleOptionChange = (option: string) => {
    if (allowMultiple) {
        const currentIndex = selectedOptions.indexOf(option);
        const newSelectedOptions = [...selectedOptions];
        if(currentIndex === -1){
            newSelectedOptions.push(option);
        }else{
            newSelectedOptions.splice(currentIndex, 1);
        }
        setSelectOptions(newSelectedOptions);
    }else{
        const newSelectedOptions = [option]
        setSelectOptions(newSelectedOptions)
    }
  };
  return (
    <div className="flex items-center gap-x-2">
      <input
        type={type}
        checked={selectedOptions.includes(id)}
        onChange={() => handleOptionChange(id)}
        className="w-[15px] h-[15px] !rounded-xl !bg-transparent"
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default SelectInput;
