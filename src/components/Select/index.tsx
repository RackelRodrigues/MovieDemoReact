import React, { useState } from "react";
import {
  ArrowDown,
  ArrowIcon,
  ArrowUp,
  Option,
  SelectWrapper,
  StyledSelect,
} from "./styles";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
};

const Select = ({ value, onChange, options, placeholder }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SelectWrapper>
      <StyledSelect
        value={value}
        onChange={(e) => {
          onChange?.(e);
          setIsOpen(false);
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </StyledSelect>
      <ArrowIcon>{isOpen ? <ArrowUp /> : <ArrowDown />}</ArrowIcon>
    </SelectWrapper>
  );
};

export default Select;
