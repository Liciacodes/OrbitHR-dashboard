import React, { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiTimerBold } from "react-icons/pi";
import { IoTextOutline } from "react-icons/io5";
import { PiTextB } from "react-icons/pi";
import { CiTextAlignRight } from "react-icons/ci";
import { PiSparkleFill } from "react-icons/pi";
import { PiLinkSimpleBold } from "react-icons/pi";
import ClipboardCopiedModal from "./ClipboardCopiedModal";

const JobDescription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleBold = () => {
    document.getElementById("myInput").style.fontWeight = "bold";
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="mt-0 sm:mt-[-20px] sm:w-[530px] w-[80%] sm:h-[700px] h-full ">
      <div>
        <h1 className="text-[#2194FF] leading-[19.36px] font-semibold text-[1rem] mb-2">
          Job Description
        </h1>
        <p className="text-[#8D9499] text-[12px] w-[350px] mb-8 font-semibold leading-[1.5rem]">
          Create a detailed description of what would be required of the
          candidate. Read our
          <a className="text-black mx-1 font-medium mt-2">
            Top Tips on Writing a Job Description
          </a>
        </p>

        <div className="w-[530px] h-[330px] rounded-md border-2 border-[#EFF4F7] outline-none ">
          <section
            className="w-full h-[270px] outline-none bg-[#F9FDFF] text-lg p-4 "
            id="myInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            contentEditable="true"
          ></section>

          <div className="flex h-[60px] mt-[-6px]">
            <div className="flex items-center justify-start gap-x-6  border border-[#EFF4F7] px-2 w-[290px]">
              <IoTextOutline
                color="#8D9499"
                className="cursor-pointer"
                size={25}
              />
              <PiTextB
                color="#8D9499"
                className="cursor-pointer"
                size={25}
                onMouseDown={handleBold}
              />
              <CiTextAlignRight
                color="#8D9499"
                size={25}
                className="cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-center gap-x-2  px-2 w-[340px]  border border-[#EFF4F7] ">
              <PiSparkleFill
                color="#F845D0"
                className="cursor-pointer"
                size={25}
              />
              <p className="text-black font-semibold cursor-pointer">
                Generate with AI
              </p>
            </div>
          </div>
        </div>
      </div>

      <ClipboardCopiedModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default JobDescription;

// const handleBold = () => {
//   const selection = window.getSelection();
//   if (selection.rangeCount > 0) {
//     const range = selection.getRangeAt(0);
//     const span = document.createElement("span");
//     span.style.fontWeight = "bold";
//     range.surroundContents(span);
//   }
// };

// const handleBold = () => {
//   const selection = window.getSelection();
//   if (selection.rangeCount > 0) {
//     const range = selection.getRangeAt(0);
//     const selectedText = range.toString();
//     const span = document.createElement("span");
//     span.style.fontWeight = "bold";
//     span.appendChild(document.createTextNode(selectedText));
//     range.deleteContents();
//     range.insertNode(span);
//   }
// };
