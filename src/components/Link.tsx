import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  to: string;
}

export const Link = ({ children, to }: LinkProps) => {
  return (
    <a href={to} className="text-pinky-purple">
      {children}
    </a>
  );
};
