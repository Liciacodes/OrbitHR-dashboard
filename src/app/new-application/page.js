import { BsStars } from "react-icons/bs";
export default function page() {
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
    </main>
  );
}
