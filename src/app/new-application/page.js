"use client";
import { BsStars } from "react-icons/bs";
import EditFields from "../components/EditFields";
import { GrCircleQuestion } from "react-icons/gr";
import { PiFilePdfLight } from "react-icons/pi";
import ProgressBar from "../components/Stepper";
import Button2 from "../components/Button2";
import { PiLinkSimpleBold } from "react-icons/pi";
import { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import LinkComponent from "../components/LinkComponent";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import Stepper2 from "../components/Stepper2";
import StepperComponent from "../components/Stepper";

export default function page() {
  // const handleToggle = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <main className="flex flex-col ml-60 mr-8 mt-3 mb-4 bg-white h-[45rem] p-8 rounded-[15px] overflow-hidden ">
      <div className="flex justify-between items-center text-[16px] leading-5">
        <div>
          <span className="text-[#FF3434] font-medium ">Cancel</span>
        </div>

        <div className="flex gap-x-4 text-[16px]">
          <span className="text-black font-medium border-r-2 border-[#EFF4F7] px-2">
            Preview Only{" "}
          </span>
          <span className="text-black font-medium border-r-2 border-[#EFF4F7] px-2">
            {" "}
            Save as Draft{" "}
          </span>
          <span className="text-[#8D9499] font-medium flex">
            <BsStars size={20} />
            Preview, then Publish
          </span>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-[20px] font-medium">Create a New Job.</p>
        <p className="text-[#8D9499]">Don't worry, your work autosaves!</p>
      </div>

      <div className="flex w-full justify-around mt-8 h-screen">
        <div className="flex w-[60%] rounded-lg h-screen">
          <StepperComponent />
        </div>
        <div className=" w-[40%] border-l-2 border-[#EFF4F7] mx-8">
          <div className="w-[377px] h-[153px] bg-[#EFF4F7] rounded-xl mx-auto flex justify-center items-center leading-[14.52px]">
            <p className="m-auto ">AD for the New Generate with AI Feature</p>
          </div>
          <div className="mx-10 mt-4">
            <h1 className="font-medium text-[20px] ">Form Editor Box</h1>
            <p className="text-[#8D9499]">
              Everything you need to setup an application form for your
              candidates.
            </p>
          </div>
          <div className="flex flex-col mx-10">
            <EditFields
              icon={
                <RxLetterCaseCapitalize
                  size={25}
                  className="w-10 h-10 rounded-full bg-[#EFF4F7] text-[#8D9499] py-1 px-2"
                />
              }
              title={"Text Field"}
              description={"Drag and drop to allow entries"}
            />
            <EditFields
              icon={
                <PiLinkSimpleBold
                  size={25}
                  className="w-10 h-10 rounded-full bg-[#EFF4F7] text-[#8D9499] py-1 px-2"
                />
              }
              title={"Link"}
              description={"Allow users paste a link"}
            />
            <EditFields
              icon={
                <PiFilePdfLight
                  size={25}
                  className="w-10 h-10 rounded-full bg-[#EFF4F7] text-[#8D9499] py-1 px-2"
                />
              }
              title={"Upload Document"}
              description={"Drag and drop to allow entries"}
            />
          </div>

          <div className="flex mx-8 items-center gap-x-2">
            <GrCircleQuestion
              color="blue"
              size={20}
              className="text-{#2194FF]"
            />
            <span>Request New Entries</span>
          </div>
        </div>
      </div>
    </main>
  );
}
