import React from "react";
import { PiDotsSixVerticalLight } from "react-icons/pi";

const EditFields = ({ icon, title, description }) => {
  return (
    <div className="flex items-center justify-between text-[#E7E7E7] w-full mt-4 mb-4 border-2 border-[#EFF4F7] rounded-md">
      <div className="flex mx-2">
        <div className="mr-2">{icon}</div>
        <div className="flex flex-col text-[#8D9499]">
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <PiDotsSixVerticalLight
          size={30}
          color="#E7E7E7"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default EditFields;
