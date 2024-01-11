import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiTimerBold } from "react-icons/pi";
import { IoTextOutline } from "react-icons/io5";
import { PiTextB } from "react-icons/pi";
import { CiTextAlignRight } from "react-icons/ci";
import { PiSparkleFill } from "react-icons/pi";
import { PiLinkSimpleBold } from "react-icons/pi";

const JobDescription = () => {
  return (
    <div className="mt-[-30px] w-[530px] h-[700px]">
      <div>
        {/* <div className="flex items-center justify-between">
          <h1 className="text-black font-medium">Basic Details</h1>
          <div className="flex items-center gap-x-1">
            <FaRegCircleCheck size={20} color="#0AAB07" />
            <p className="text-[12px]">Completed</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <h1 className="text-[#2194FF] font-medium">Job Description</h1>

          <div className="flex items-center gap-x-1">
            <PiTimerBold size={20} color="#F69A0F" />
            <p className="text-[12px]">In Progress</p>
          </div>
        </div> */}

        <p className="text-[#8D9499] text-[12px] w-[340px] mb-8">
          Create a detailed description of what would be required of the
          candidate. Read our
          <a className="text-black mx-1 font-medium">
            Top Tips on Writing a Job Description
          </a>
        </p>

        <div className="w-full h-[320px]  bg-[#F9FDFF] "></div>
        <div className="bg-white flex justify-between border-[#EFF4F7]">
          <div className="flex items-center gap-x-6  border-2 border-[#EFF4F7] p-2">
            <IoTextOutline color="#8D9499" size={25} />
            <PiTextB color="#8D9499" size={25} />
            <CiTextAlignRight color="#8D9499" size={25} />
          </div>
          <div className="flex items-center gap-x-2 border-2 border-[#EFF4F7] p-2">
            <PiSparkleFill color="#F845D0" size={25} />
            <p className="text-black font-medium">Generate with AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
