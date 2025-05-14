import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button>Button</button>;
};

export default Button;
