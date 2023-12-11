"use client";
import { BsStars } from "react-icons/bs";
import EditFields from "../components/EditFields";
import { PiLinkSimpleBold } from "react-icons/pi";
import { GrCircleQuestion } from "react-icons/gr";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { PiFilePdfLight } from "react-icons/pi";
import ProgressBar from "../components/ProgressBar";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiTimerBold } from "react-icons/pi";
import Button2 from "../components/Button2";
import { useState } from "react";
import { IoTextOutline } from "react-icons/io5";
import { PiTextB } from "react-icons/pi";
import { PiSparkleFill } from "react-icons/pi";
import { CiTextAlignRight } from "react-icons/ci";
import ToggleSwitch from "../components/ToggleSwitch";
import LinkComponent from "../components/LinkComponent";
import SetUpField from "../components/SetUpField";
export default function page() {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const progress = 100;
  return (
    <main className="flex flex-col ml-60 mr-8 mt-3 mb-4 bg-white h-[45rem] p-8 rounded-[15px] overflow-hidden">
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

      <div className="flex w-full justify-around mt-8">
        <div className="flex w-[60%] rounded-lg">
          <ProgressBar progress={progress} />
          <div className="flex flex-col px-4 w-full">
            <div>
              <div className="flex justify-between mb-4">
                <h1 className="text-black font-medium">Basic Details</h1>
                <div className="flex items-center gap-x-1">
                  <FaRegCircleCheck size={20} color={"#0AAB07"} />
                  <p className="text-[12px]">Completed</p>
                </div>
              </div>
              <div className="flex justify-between">
                <h1 className="text-black font-medium mt-4 mb-2">
                  Job Descriptions
                </h1>
                <div className="flex items-center gap-x-1">
                  <FaRegCircleCheck size={20} color={"#0AAB07"} />
                  <p className="text-[12px]">Completed</p>
                </div>
              </div>
              <div className="flex justify-between">
                <h1 className="text-black font-medium mt-4 mb-2">
                  Set Application Form
                </h1>
                <div className="flex items-center gap-x-1">
                  <PiTimerBold size={20} color={"#F69A0F"} />
                  <p className="text-[12px]">In Progress</p>
                </div>
              </div>
              <div className="flex flex-col mt-6">
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
            {/* Job Description Screen
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-black font-medium">Basic Details</h1>
                <div className="flex items-center gap-x-1">
                  <FaRegCircleCheck size={20} color="#0AAB07" />
                  <p className="text-[12px]">Completed</p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <h1 className="text-[#2194FF] font-medium">Job Description</h1>

                <div className="flex items-center gap-x-1">
                  <PiTimerBold size={20} color="#F69A0F" />
                  <p className="text-[12px]">In Progress</p>
                </div>
              </div>

              <p className="text-[#8D9499] text-[12px] w-[340px]">
                Create a detailed description of what would be required of the
                candidate. Read our
                <a className="text-black mx-1 font-medium">
                  Top Tips on Writing a Job Description
                </a>
              </p>

              <div className="w-full h-[320px] mt-6 bg-[#F9FDFF] "></div>
              <div className="bg-white flex justify-between border-[#EFF4F7]">
                <div className="flex items-center gap-x-6  border-2 border-[#EFF4F7] p-2">
                  <IoTextOutline color="#8D9499" size={25} />
                  <PiTextB color="#8D9499" size={25} />
                  <CiTextAlignRight color="#8D9499" size={25} />
                </div>
                <div className="flex items-center gap-x-2 border-2 border-[#EFF4F7] p-2">
                  <PiSparkleFill color="#F845D0" size={25} />
                  <p className="text-black font-medium">Generate with AI</p>
                </div>
              </div>
              <h2 className="text-[#8D9499] mt-4 font-normal">
                Setup Application Forms{" "}
              </h2>
            </div> */}

            {/* Basic Details Screen
            <div>
              <h3 className="text-[#2194FF] font-medium">Basic Details</h3>
              <div>
                <div className="flex flex-col w-full my-2">
                  <label className="text-[#8D9499] text-[16px]">
                    Enter a Job Title
                  </label>
                  <input
                    type="text"
                    name="JobTitle"
                    className=" my-2  border-none outline-none text-[22px]"
                  ></input>
                </div>
                <div>
                  <label className="text-[#8D9499]">
                    Choose Employment Type
                  </label>
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
                    <input
                      type="text"
                      className="border-b outline-none font-medium"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
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
                <div className="mt-4 text-[#8D9499]">
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

                <div className="mt-4">
                  <p className="text-[#8D9499] mt-2">Job Descriptions </p>
                  <p className="text-[#8D9499] mt-4">Setup Application Form </p>
                </div>
              </div> </div>*/}
          </div>
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
