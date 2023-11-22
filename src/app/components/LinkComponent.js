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
            ? "text-black p-3  flex  items-center gap-3 text-[16px] font-bold border-r-2 border-[#2194FF]"
            : "text-[#8D9499] p-3 flex  items-center gap-3 font-medium text-[16px]"
        }`}
      >
        {icon}
        <span>{label}</span>
        {buttonTag && (
          <span className="text-white bg-[#E21818] py-1 px-2 rounded-full">
            {buttonTag}
          </span>
        )}
      </div>
    </Link>
  );
};

export default LinkComponent;
