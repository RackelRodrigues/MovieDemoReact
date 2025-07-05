import { StyledInput } from "./styles";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
};

const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  onKeyDown,
}: InputProps) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
