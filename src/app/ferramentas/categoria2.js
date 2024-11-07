// components/CategoryFilter.js
"use client";
import { useState} from "react";

export default function CategoryFilter({ categories, setCategory }) {
  const [activeCategory, setActiveCategory] = useState('Populares');

  const handleClick = (categoryLabel) => {
    setActiveCategory(categoryLabel);
    setCategory(categoryLabel);
  };

  return (
    <div className="flex justify-center transition-colors gap-2 flex-wrap mt-14">
      {categories.map((category) => {
        const isActive = activeCategory === category.label;
        const activeClass = isActive ? "selectedCat" : "";
        const hoverClass = isActive ? "hover:bg-[#fbce07b5]" : "hover:bg-[#E8EAEC]";

        return (
          <div
            key={category.id}
            onClick={() => handleClick(category.label)}
            className={`bg-[#f1f2f4] flex items-center justify-center ${activeClass} h-[40px] py-[6px] px-[16px] text-[16px] font-normal text-[#222529] text-center whitespace-nowrap cursor-pointer rounded-lg ${hoverClass}`}
          >
            {category.label}
          </div>
        );
      })}
    </div>
  );
}
