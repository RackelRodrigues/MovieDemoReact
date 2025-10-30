import { StyledInput } from "./styles";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  props?: ChildNode;
}

const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  onKeyDown,
  ...props
}: InputProps) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      type={type}
      {...props}
    />
  );
};

export default Input;
