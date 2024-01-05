"use client";
import React from "react";
import { RiMicLine } from "react-icons/ri";
import { data } from "../data";
import LinkComponent from "./LinkComponent";

export const Sidebar = ({ children }) => {
  return (
    <div className="flex ">
      <div className="fixed h-screen py-12 px-4 border-r-1 lg:flex flex-col justify-around ">
        <div className="flex  flex-col flex-1">
          {data.map((data) => (
            <LinkComponent
              href={data.path}
              icon={data.icon}
              label={data.label}
              buttonTag={data.buttonTag}
              key={data.label}
            >
              {data.label === "Applications" ? (
                <span className="bg-red-500 py-1 px-2 rounded-lg text-white">
                  New
                </span>
              ) : (
                "hidden"
              )}
            </LinkComponent>
          ))}

          <div className=" flex items-center gap-3 p-3">
            <span className="bg-[#DEE5EA] w-6 h-6 rounded-full"></span>
            <span className=" bg-[#DEE5EA] w-24 h-4 rounded-md"></span>
          </div>
          <div className=" flex items-center gap-3 p-3">
            <span className="bg-[#DEE5EA] w-6 h-6 rounded-full"></span>
            <span className=" bg-[#DEE5EA] w-16 h-4 rounded-md"></span>
          </div>
        </div>
        <div className="flex flex-col text-[#8D9499] ">
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
      <main className="w-full">{children}</main>
    </div>
  );
};
