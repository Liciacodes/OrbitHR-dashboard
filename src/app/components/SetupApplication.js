import React from "react";
import SetUpField from "../components/SetUpField";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { PiLinkSimpleBold } from "react-icons/pi";
import Button2 from "../components/Button2";

const SetupApplication = () => {
  return (
    <div>
      <div>
        {/* <div className="flex justify-between mb-4"></div> */}
        {/* <div className="flex justify-between">
          <h1 className="text-black font-medium mt-4 mb-2">Job Descriptions</h1>
          <div className="flex items-center gap-x-1">
            <FaRegCircleCheck size={20} color={"#0AAB07"} />
            <p className="text-[12px]">Completed</p>
          </div>
        </div> */}
        {/* <div className="flex justify-between">
          <h1 className="text-black font-medium mt-4 mb-2">
            Set Application Form
          </h1>
          <div className="flex items-center gap-x-1">
            <PiTimerBold size={20} color={"#F69A0F"} />
            <p className="text-[12px]">In Progress</p>
          </div>
        </div> */}
        <div className="flex flex-col">
          <SetUpField
            icon={
              <RxLetterCaseCapitalize
                size={25}
                className="w-10 h-10 rounded-full bg-white text-[#8D9499] py-1 px-2"
              />
            }
            title={"First Name"}
            description={"Text Field"}
          />
          <SetUpField
            icon={
              <RxLetterCaseCapitalize
                size={25}
                className="w-10 h-10 rounded-full bg-white text-[#8D9499] py-1 px-2"
              />
            }
            title={"Email Address"}
            description={"Text Field"}
          />
          <SetUpField
            icon={
              <PiLinkSimpleBold
                size={25}
                className="w-10 h-10 rounded-full bg-white text-[#8D9499] py-1 px-2"
              />
            }
            title={"Link"}
            description={""}
          />
        </div>
      </div>
      <Button2 label={"Preview, the Publish"} className="bg-blue-700" />
    </div>
  );
};

export default SetupApplication;
