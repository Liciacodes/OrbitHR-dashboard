import React from "react";
import { RxDragHandleDots2 } from "react-icons/rx";

const EditFields = ({ icon, title, description }) => {
  return (
    <div className="flex items-center justify-between text-[#E7E7E7] w-full mt-3 border-2 border-[#EFF4F7] rounded-md p-3">
      <div className="flex mx-2">
        <div className="mr-2 mt-1 text-black">{icon}</div>
        <div className="flex flex-col text-[#8D9499]">
          <p className="font-medium leading-[19.36px] text-[16px] text-black">
            {title}
          </p>
          <p className="font-medium leading-[14.52px] text-[14px] mt-1">
            {description}
          </p>
        </div>
      </div>
      <div>
        <RxDragHandleDots2 size={30} color="#E7E7E7" className="font-bold" />
      </div>
    </div>
  );
};

export default EditFields;
