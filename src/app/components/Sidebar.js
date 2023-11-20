"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {
  PiStackSimpleLight,
  PiChartBarHorizontalLight,
  PiFlagCheckeredLight,
} from "react-icons/pi";
import { RiMicLine } from "react-icons/ri";

export const Sidebar = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex">
      <div className="fixed h-screen py-12 px-4 border-r-1 flex flex-col justify-around">
        <div className="flex  flex-col flex-1">
          <Link href={"/overview"}>
            <div
              className={`${
                router.pathname === "/overview"
                  ? "text-black"
                  : "text-[#8D9499] p-3 rounded-lg flex  items-center gap-3 font-medium text-[16px]"
              }`}
            >
              <PiStackSimpleLight size={30} />
              <span>HR Overview</span>
            </div>
          </Link>
          <Link href={"/analytics"}>
            <div className="text-[#8D9499] p-3 rounded-lg flex  items-center gap-3 font-medium text-[16px]">
              <PiChartBarHorizontalLight size={30} />
              <span>Analytics</span>
            </div>
          </Link>
          <Link href={"/applications"}>
            <div className="text-[#8D9499] p-3 rounded-lg flex  items-center gap-3 font-medium text-[16px]">
              <PiFlagCheckeredLight size={30} />
              <span>Applications</span>
              <span className="rounded-full text-white bg-[#E21818] py-1 px-2 ">
                New
              </span>
            </div>
          </Link>

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
      <main className="w-full  ">{children}</main>
    </div>
  );
};
