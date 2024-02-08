"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkComponent = ({ href, icon, label, buttonTag }) => {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <div
        className={`${
          pathname === href
            ? "text-black border-r-2 border-[#2194FF] "
            : "text-[#8D9499]"
        }  flex items-center font-bold text-[16px] py-2 px-5`}
      >
        {icon && icon}
        <span className="mx-2 ">{label && label}</span>
        {(buttonTag && pathname === "/") || pathname === "/analytics" ? (
          <button className="text-white bg-[#E21818] px-2 mx-2 rounded-full font-thin">
            {buttonTag}
          </button>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
};

export default LinkComponent;
