import React from "react";

const Button2 = ({ label, onClick, selected }) => {
  return (
    <button
      className={`border mt-2 mx-1 py-[0.6rem] px-[0.75rem] text-[#8D9499] text-center border-[#EFF4F7] cursor-pointer ${
        selected ? "bg-[#EAF5FF] text-black" : "bg-transparent text-[#8D9499]"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button2;
