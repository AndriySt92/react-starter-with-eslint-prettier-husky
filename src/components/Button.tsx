import { type ReactNode } from 'react';

interface Props {
  color: string;
  children: ReactNode;
}

const Button = ({ color, children }: Props) => {
  return <button style={{ color: `${color}` }}>{children}</button>;
};

export default Button;
