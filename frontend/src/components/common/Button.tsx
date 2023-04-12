import { FC, ReactNode } from 'react';
import "./styles/button.css";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default Button;