import React from "react";
import { IoToggle } from "react-icons/io5";
import ToggleSwitch from "./ToggleSwitch";

const SetUpField = ({
  icon,
  title,
  description,
  toggle,
  description2,
  required,
  bgcolor,
  icon1,
  icon2,
  spacing,
}) => {
  return (
    <div
      className={`bg-${bgcolor} flex items-center justify-between text-[#E7E7E7] w-full h-[100px] mt-2 mb-2 border-2 border-[#EFF4F7] rounded-md p-4`}
    >
      <div className="flex mx-2 mt-2">
        <div className="mr-3">{icon && icon}</div>
        <div className="flex flex-col text-[#000000]">
          <p>{title}</p>
          <p className="text-[12px] text-[#8D9499]">{description}</p>
          <div className="flex items-center">
            {toggle && toggle}
            <p className={`${spacing && spacing} text-[#8D9499] text-[14px]  `}>
              {required && required}
            </p>
            <p className="text-[#8D9499] text-[14px] ml-0 ">
              {description2 && description2}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        {icon1 && icon1}
        {icon2}
      </div>
    </div>
  );
};

export default SetUpField;
