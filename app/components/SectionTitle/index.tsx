import React from "react";

type SectionTitleProps = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-5">
      <h3 className="text-lg font-semibold text-primary mb-4">{subtitle}</h3>
      <h2 className="text-[2.4rem] font-bold leading-snug">{title}</h2>
    </div>
  );
};

export default SectionTitle;
