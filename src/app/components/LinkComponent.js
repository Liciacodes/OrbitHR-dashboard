"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkComponent = ({ href, icon: Icon, label, buttonTag, disabled }) => {
  const pathname = usePathname();

  if (disabled) {
    return (
      <span className="text-gray-400 cursor-not-allowed flex font-bold items-center py-2 px-5">
        <span> {Icon && React.cloneElement(Icon, { size: 30 })}</span>
        <span className="ml-2">{label}</span>
      </span>
    );
  }
  return (
    <Link href={href}>
      <div
        className={`${
          pathname === href
            ? "text-black border-r-2 border-[#2194FF] text-[17px] "
            : "text-[#8D9499]"
        }  flex items-center font-bold text-[17px] py-2 px-5`}
      >
        {Icon && React.cloneElement(Icon, { size: 30 })}
        <span className="mx-2 ">{label && label}</span>
        {(buttonTag && pathname === "/") || pathname === "/analytics" ? (
          <button className="text-white bg-[#E21818] w-14  mx-2 rounded-full font-bold">
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
