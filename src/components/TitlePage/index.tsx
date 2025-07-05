import { H3 } from "./styles";
import React from "react";

interface TitleProps {
  text?: string;
  size: "regular" | "medion" | "small";
  children?: React.ReactNode;
}

const TitlePage: React.FC<TitleProps> = ({ text, size }) => {
  return <H3 size={size}>{text}</H3>;
};

export default TitlePage;
