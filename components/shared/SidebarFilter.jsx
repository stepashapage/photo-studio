import React from "react";
import { Slider } from "@mui/material"; // Using Material-UI for slider
import { Checkbox } from "@mui/material"; // Using Material-UI for checkbox

const SidebarFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}) => {
  const handlePriceChange = (event, newValue) => {
    onPriceRangeChange(newValue);
  };

  const handleCheckboxChange = (category) => {
    onCategoryChange(category);
  };

  return (
    <aside className="w-[255px] flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[25px]">
        <h2 className="font-semibold text-[24px] tracking-[0.05em]">
          Фильтрация
        </h2>

        <div className="flex flex-col gap-[12px]">
          <div className="custom-checkbox">
            <input type="checkbox" id="remember" className="hidden peer" />
            <label
              htmlFor="remember"
              className="flex items-center gap-2 text-white cursor-pointer"
            >
              <span className="w-[24px] h-[24px] border-2 border-white bg-transparent rounded-[4px] inline-block peer-checked:bg-black"></span>
              Популярное
            </label>
          </div>
          <div className="custom-checkbox">
            <input type="checkbox" id="remember1" className="hidden peer" />
            <label
              htmlFor="remember1"
              className="flex items-center gap-2 text-white cursor-pointer"
            >
              <span className="w-[24px] h-[24px] border-2 border-white bg-transparent rounded-[4px] inline-block peer-checked:bg-black"></span>
              Новинки
            </label>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col gap-[20px] relative
       after:absolute after:bottom-[-25px] after:left-[-5%] after:w-[110%] after:h-[1px] after:bg-[#4F4F4F]
       before:absolute before:top-[-25px] before:left-[-5%] before:w-[110%] before:h-[1px] before:bg-[#4F4F4F]"
      >
        <h3 className="font-semibold text-[16px] tracking-[0.05em]">
          Цена от и до
        </h3>
        <div className="flex justify-between gap-[15px]">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) =>
              handlePriceChange(null, [Number(e.target.value), priceRange[1]])
            }
            className="bg-transparent border border-[#F3F4F6] border-opacity-[0.4] rounded-[16px] py-[9px] px-[16px] w-[120px]"
          />
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) =>
              handlePriceChange(null, [priceRange[0], Number(e.target.value)])
            }
            className="bg-transparent border border-[#F3F4F6] border-opacity-[0.4] rounded-[16px] py-[9px] px-[16px] w-[120px]"
          />
        </div>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={4000}
          size="small"
          style={{
            color: "#EDBC5A",
            height: "4px",
            borderRadius: "2px",
            width: "100%",
          }}
        />
      </div>

      <div className="flex flex-col gap-0">
        <h3 className="font-semibold text-[16px] mb-[20px] tracking-[0.05em]">
          Категории
        </h3>
        {categories.map((category, i) => (
          <label key={i} className="flex items-center gap-[5px]">
            <Checkbox
              sx={{
                color: "#EDBC5A",
                "&.Mui-checked": {
                  color: "#EDBC5A",
                },
              }}
              checked={selectedCategory === category}
              onChange={() => handleCheckboxChange(category)}
            />
            <span className="text-[#ADACAC] font-regular text-[16px]">
              {category}
            </span>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default SidebarFilter;
