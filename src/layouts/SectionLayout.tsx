import { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  id: string;
  title: string;
}

export const SectionLayout = ({ children, id, title }: SectionLayoutProps) => {
  return (
    <section
      id={id}
      className="flex flex-col text-lg text-white text-left pl-28 pb-8"
    >
      <h1 className="font-bold text-3xl mb-4">{title}</h1>

      {children}
    </section>
  );
};
