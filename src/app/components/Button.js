import React from "react";

const Button = ({ label, icon }) => {
  return (
    <button className="bg-[#2194FF] text-white py-[0.6875rem] px-[0.75rem] rounded-lg flex items-center justify-between gap-2">
      {icon} {label}
    </button>
  );
};

export default Button;
