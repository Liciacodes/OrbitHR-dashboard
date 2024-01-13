import React from "react";

const NewButton = ({ label, icon, className }) => {
  return (
    <button className={className}>
      {icon && icon} {label}
    </button>
  );
};

export default NewButton;

//"bg-[#2194FF] text-white py-[0.6875rem] px-[0.75rem] rounded-lg flex items-center justify-between gap-2"
