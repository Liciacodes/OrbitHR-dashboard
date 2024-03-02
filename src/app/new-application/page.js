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
import StepperComponent from "../components/Stepper";

export default function page() {
  return (
    <main className="flex sm:flex-col  my-2  bg-white sm:h-[97vh] h-full w-full  p-4 rounded-[16px] sm:overflow-hidden overflow-scroll">
      <div className="hidden md:flex justify-between items-center text-[16px] leading-5">
        <div>
          <span className="text-[#FF3434] font-semibold leading-[19.36px]">
            Cancel
          </span>
        </div>

        <div className="flex gap-x-4 text-[16px] px-12">
          <span className="text-black font-semibold border-r-2 border-[#EFF4F7] px-2">
            Preview Only
          </span>
          <span className="text-black font-semibold border-r-2 border-[#EFF4F7] px-2">
            Save as Draft
          </span>
          <span className="text-[#8D9499] font-semibold flex">
            <BsStars size={20} />
            Preview, then Publish
          </span>
        </div>
      </div>
      <div className="mt-6 hidden md:block">
        <p className="text-[20px] font-semibold leading-6">Create a New Job.</p>
        <p className="text-[#8D9499] leading-4 font-normal mt-2">
          Don't worry, your work autosaves!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row w-full justify-around mt-8 h-screen">
        <div className="flex w-full sm:w-[60%] rounded-lg h-screen">
          <StepperComponent />
        </div>
        <div className="w-full sm:w-[40%] border-l-2 border-[#EFF4F7] overflow-scroll sm:overflow-hidden ">
          <div className="w-[440px] h-[153px] bg-[#EFF4F7] rounded-xl mx-8 flex justify-center items-center leading-[14.52px]">
            <p className="opacity-[40%] text-[0.9rem] leading-[14.52px]  text-center ">
              AD for the New Generate <br />
              with AI Feature
            </p>
          </div>
          <div className="mx-8 mt-6 ">
            <h1 className="font-semibold text-[16px] leading-[19.36px]">
              Form Editor Box
            </h1>
            <p className="text-[#8D9499] text-[14px] leading-[20px] mt-2 font-medium">
              Everything you need to setup an application form for your
              candidates.
            </p>
          </div>
          <div className="flex flex-col mx-8 mt-4">
            <EditFields
              icon={
                <RxLetterCaseCapitalize
                  size={25}
                  className="w-10 h-10 rounded-full bg-[#EFF4F7] text-[#000000] py-1 px-2"
                />
              }
              title={"Text Field"}
              description={"Drag and drop to allow entries"}
            />
            <EditFields
              icon={
                <PiLinkSimpleBold
                  size={25}
                  color="black"
                  className="w-10 h-10 rounded-full bg-[#EFF4F7]  text-[#000000] py-1 px-2"
                />
              }
              title={"Link"}
              description={"Allow users paste a link"}
            />
            <EditFields
              icon={
                <PiFilePdfLight
                  size={30}
                  className="w-10 h-10 rounded-full bg-[#EFF4F7] text-[#000000] py-1 px-2"
                />
              }
              title={"Upload Document"}
              description={"Drag and drop to allow entries"}
            />
          </div>

          <div className="flex mx-8 items-center gap-x-2 mt-5">
            <GrCircleQuestion
              color="blue"
              size={20}
              className="text-{#2194FF]"
            />
            <span className="font-semibold text-[12px] ">
              Request New Entries
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
