import React, { useState } from "react";
import Button2 from "./Button2";
import ToggleSwitch from "./ToggleSwitch";

const BasicDetails = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className=" w-full mt-[-30px]  h-[700px]">
      <h3 className="text-[#2194FF] font-medium">Basic Details</h3>
      <div className="flex flex-col w-full">
        <label className="text-[#8D9499] text-[14px] mt-4">
          Enter a Job Title
        </label>
        <input
          type="text"
          name="JobTitle"
          className="   border-none outline-none text-[22px]"
        ></input>
      </div>
      <div>
        <label className="text-[#8D9499] ">Choose Employment Type</label>
        <div className="flex w-full">
          <Button2 label={"Freelance"} />
          <Button2 label={"FullTime"} />
          <Button2 label={"Contract"} />
          <Button2 label={"Consultancy"} />
        </div>
      </div>
      <div className="flex w-full items-center justify-between mt-4">
        <div className="flex flex-col">
          <label className="text-[#8D9499] ">Country</label>
          <input
            type="text"
            name=""
            id=""
            className="border-b outline-none font-medium"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#8D9499]">City</label>
          <input type="text" className="border-b outline-none font-medium" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"100% Remote"}
          />
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"Partially Remote"}
          />
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"Hybrid"}
          />
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"Onsite"}
          />
        </div>
        <div>
          {" "}
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"Americian"}
          />
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"EMEA"}
          />
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggle}
            label={"All"}
          />
        </div>
      </div>
      <div className=" text-[#8D9499] mt-4">
        <span>Salary Range - USD</span>{" "}
        <span className=" ml-4 text-[14px] text-[#2194FF]">
          Change Currency
        </span>
        <input
          type="text"
          name="JobTitle"
          className="block my-2  border-none outline-none placeholder:text-[22px] placeholder:text-black"
          placeholder="175,000 - 185,000"
        ></input>
      </div>
    </div>
  );
};

export default BasicDetails;
