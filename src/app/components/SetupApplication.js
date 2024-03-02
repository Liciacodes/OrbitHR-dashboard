import React from "react";
import SetUpField from "../components/SetUpField";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { PiLinkSimpleBold } from "react-icons/pi";
import Button2 from "../components/Button2";
import "./stepper.css";
import Button from "./Button";
import NewButton from "./NewButton";
import ToggleSwitch from "./ToggleSwitch";

const SetupApplication = () => {
  return (
    <div className="sm:mt-[-30px] mt-0  sm:w-[600px] w-full">
      <div>
        <h1 className="text-black  font-semibold leading-[19.36px] text-[1rem] ">
          Set Application Form
        </h1>
        <div className="flex flex-col mt-2 w-full">
          <SetUpField
            icon={
              <RxLetterCaseCapitalize
                size={25}
                className="w-10 h-10 rounded-full bg-white text-[#8D9499] py-1 px-2 mt-2"
              />
            }
            toggle={<ToggleSwitch className="text-[#c9c2b4]" />}
            title={"First Name"}
            description={"Text Field"}
            required={"Marked as Required"}
            bgcolor={"[#EFF4F7]"}
          />
          <SetUpField
            icon={
              <RxLetterCaseCapitalize
                size={25}
                className="w-10 h-10 rounded-full bg-white text-[#8D9499] py-1 px-2 mt-2"
              />
            }
            toggle={<ToggleSwitch className="text-[#c9c2b4]" />}
            title={"Email Address"}
            description={"Text Field"}
            required={"Marked as Required"}
            bgcolor={"[#EFF4F7]"}
          />
          <SetUpField
            icon={
              <PiLinkSimpleBold
                size={25}
                className="w-10 h-10 rounded-full bg-[#EFF4F7]  text-[#000000] py-1 px-2 mt-2"
              />
            }
            title={"Link"}
            description={""}
            description2={"Allow users paste a link"}
            bgcolor={"[#000000]"}
          />
        </div>
      </div>

      <NewButton
        label={"Preview, the Publish"}
        className={
          "w-full mt-8 mb-12 text-white bg-[#2194FF] h-[55px] leading-[19.36px] font-medium py-[0.6875rem] px-[0.75rem] rounded-2xl flex items-center justify-center gap-2"
        }
      />
    </div>
  );
};

export default SetupApplication;

{
  /* <div className="flex justify-between mb-4"></div> */
}
{
  /* <div className="flex justify-between">
          <h1 className="text-black font-medium mt-4 mb-2">Job Descriptions</h1>
          <div className="flex items-center gap-x-1">
            <FaRegCircleCheck size={20} color={"#0AAB07"} />
            <p className="text-[12px]">Completed</p>
          </div>
        </div> */
}
{
  /* <div className="flex justify-between">
          <h1 className="text-black font-medium mt-4 mb-2">
            Set Application Form
          </h1>
          <div className="flex items-center gap-x-1">
            <PiTimerBold size={20} color={"#F69A0F"} />
            <p className="text-[12px]">In Progress</p>
          </div>
        </div> */
}
