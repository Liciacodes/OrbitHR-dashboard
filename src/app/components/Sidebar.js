"use client";
import React from "react";
import { RiMicLine } from "react-icons/ri";
import { data } from "../data";
import LinkComponent from "./LinkComponent";

export const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="hidden w-full p-8 md:p-0 md:w-[15%] md:flex flex-col justify-between">
        <div className="flex flex-col  mt-28">
          {data.map((data) => (
            <LinkComponent
              href={data.path}
              icon={data.icon}
              label={data.label}
              buttonTag={data.buttonTag}
              key={data.label}
            >
              {/* {data.label === "Applications" && (
                <span className="bg-red-500  rounded-lg text-white">New</span>
              )} */}
            </LinkComponent>
          ))}

          <div className=" flex items-center gap-x-2 px-5 py-1 mt-1">
            <span className="bg-[#DEE5EA] w-6 h-6 rounded-full"></span>
            <span className=" bg-[#DEE5EA] w-24 h-3 rounded-md"></span>
          </div>
          <div className=" flex items-center gap-x-2 px-5  py-1 mt-3">
            <span className="bg-[#DEE5EA] w-6 h-6 rounded-full"></span>
            <span className=" bg-[#DEE5EA] w-16 h-3 rounded-md"></span>
          </div>
        </div>
        <div className="flex flex-col text-[#8D9499] px-5 mb-3">
          <div className="flex items-center ">
            <RiMicLine size={25} />
            <span className="ml-1">Orbit HR</span>
          </div>
          <p className="text-[12px] mt-2">2023 Copyright</p>

          <div className="flex text-[12px] font-normal mt-1">
            <p className=" ">About</p>
            <div className="flex items-center">
              <span className="bg-[#999090] w-1 h-1 rounded-full font-bold mx-2"></span>
              <p>Career </p>
            </div>
            <div className="flex items-center">
              <span className="bg-[#999090] w-1 h-1 rounded-full mx-2"></span>
              <p>Media</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:w-[82%] w-full">{children}</div>
    </div>
  );
};
