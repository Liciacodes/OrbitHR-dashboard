import React, { useState } from "react";
import "./stepper.css";

const Stepper2 = () => {
  const steps = ["Basic Details", "Job Description", "Setup Applications"];

  return (
    <div className="flex items-stretch ">
      <div className="h-full relative ">
        <div className="bg-gradient-to-b from-[#2194FF] to-[#EFF4F7] w-[5px] h-full rounded-full"></div>
      </div>
    </div>
  );
};

export default Stepper2;
