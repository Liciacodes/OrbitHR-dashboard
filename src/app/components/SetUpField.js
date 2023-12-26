import React from "react";
import { PiDotsSixVerticalLight } from "react-icons/pi";
import { RxDragHandleDots2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoToggle } from "react-icons/io5";

const SetUpField = ({ icon, title, description }) => {
  return (
    <div className="flex items-center justify-between bg-[#EFF4F7] text-[#E7E7E7] w-full h-[80px] mt-2 mb-2 border-2 border-[#EFF4F7] rounded-md">
      <div className="flex mx-2 mt-2">
        <div className="mr-3">{icon}</div>
        <div className="flex flex-col text-[#000000]">
          <p>{title}</p>
          <p className="text-[12px] text-[#8D9499]">{description}</p>
          <div className="flex items-center gap-x-1 mt-2">
            <IoToggle size={30} color="#c9c2b4" />
            <p className="text-[#8D9499] text-[14px] ">Marked as Required</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <RiDeleteBin6Line size={20} color="#8D9499" className="font-bold " />
        <RxDragHandleDots2 size={30} color="#8D9499" className="font-bold" />
      </div>
    </div>
  );
};

export default SetUpField;
