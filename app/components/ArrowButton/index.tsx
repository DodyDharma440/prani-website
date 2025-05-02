import React from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";

type ArrowButtonProps = {
  label: string;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({ label }) => {
  return (
    <button className="flex items-center gap-2 group text-primary font-semibold">
      <span>{label}</span>
      <HiMiniArrowLongRight
        className="transform transition-transform duration-500 group-hover:translate-x-4"
        size={24}
      />
    </button>
  );
};

export default ArrowButton;
