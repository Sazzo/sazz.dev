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
      className="flex flex-col text-center prose-invert prose-p:mb-4 text-white pb-8 lg:text-left lg:pl-28"
    >
      <h1 className="font-bold text-3xl mb-4">{title}</h1>

      {children}
    </section>
  );
};
