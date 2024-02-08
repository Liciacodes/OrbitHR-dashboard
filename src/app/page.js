import Link from "next/link";
import Button from "./components/Button";
import { BsStars } from "react-icons/bs";
import { PiNumberCircleEightFill } from "react-icons/pi";
import { BsArrowsAngleExpand } from "react-icons/bs";
import profile from "../../public/profile.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col my-2 bg-white sm:h-[97vh] h-full w-full  p-4 rounded-[16px] sm:overflow-hidden overflow-scroll ">
      <div className="flex  justify-between w-full ">
        <div className="flex flex-col ">
          <span className=" bg-[#DEE5EA] w-56 h-8 rounded-full mb-2"></span>
          <span className=" bg-[#DEE5EA] w-40 h-3 rounded-lg mt-2"></span>

          <div className="flex mt-8 items-center gap-x-20 justify-between">
            <span className=" bg-[#DEE5EA] w-16 h-6 rounded-full"></span>
            <span className="bg-[#DEE5EA] w-6 h-6 rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end">
          <div className=" hidden lg:flex items-center gap-3">
            <p className="  text-[#8D9499]">See Drafts </p>
            <div>
              <PiNumberCircleEightFill
                size={20}
                className="text-white"
                color="#2194FF"
              />
            </div>
            <Link href={"/new-application"}>
              <Button
                label={"New Application"}
                icon={<BsStars size={25} />}
              ></Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 mt-4 gap-4 grid-rows-1 grids overflow-scroll sm:overflow-hidden max-h-full">
        {/* //First column */}
        <div className="col-span-1  w-full flex flex-col gap-y-2">
          <div className=" h-[85px] bg-[#EFF4F7] rounded-lg"></div>
          <div className=" h-[85px] bg-[#EFF4F7] rounded-lg"></div>
          <div className=" h-[85px] bg-[#EFF4F7] rounded-lg"></div>
          <div className=" h-[85px] bg-[#EFF4F7] rounded-lg"></div>
          <div className=" h-[85px] bg-[#EFF4F7] rounded-lg"></div>
          <div className=" h-[85px] bg-[#EFF4F7] rounded-lg"></div>
        </div>
        {/* //Second Column */}
        <div className="flex flex-col  w-full col-span-1 gap-y-4">
          <div className=" h-[360px] bg-[#EFF4F7] rounded-lg"></div>
          <div className=" h-[300px] bg-[#EFF4F7] rounded-lg"></div>
        </div>
        {/* */}
        <div className=" w-full flex flex-col ">
          <span className=" h-[120px] bg-[#EFF4F7] rounded-lg"></span>
          <div className="flex justify-between mt-8">
            <span className=" bg-[#DEE5EA] w-40 h-6 rounded-full mb-2"></span>
            <span className="bg-[#DEE5EA] w-6 h-6 rounded-full"></span>
          </div>
          <span className="h-4 w-60 bg-[#EFF4F7] rounded-lg"></span>
          {/* //Second Column */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-x-2 items-center">
              <span className="bg-[#DEE5EA] w-10 h-8 rounded-full mt-3"></span>
              <div className="w-full flex flex-col">
                <span className="bg-[#DEE5EA] w-16 h-3 rounded-full mb-2"></span>
                <span className="bg-[#DEE5EA] w-32 h-3 rounded-full"></span>
              </div>
            </div>

            <span className="bg-[#DEE5EA] w-16 h-6 rounded-full mt-3"></span>
          </div>
          {/* //Profile div */}
          <div className="flex items-center justify-between  mt-2">
            <div className="flex gap-x-2 items-center gap-2">
              <span className="w-8 h-8 rounded-full mt-3">
                <Image
                  src={profile}
                  width={60}
                  height={40}
                  layout="responsive"
                  className="rounded-full"
                ></Image>
              </span>
              <div className="w-full flex flex-col">
                <span className="text-black h-3  mb-2 font-bold">
                  Ekemini Mark
                </span>
                <span className="text-[#8D9499] mb-1 h-3 text-sm">
                  Applied for: Product Designer/Con...
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-2   h-6  mt-3 justify-center">
              <BsArrowsAngleExpand size={15} color="#2194FF" />
              <span className="text-black font-bold">View</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-x-2 items-center">
              <span className="bg-[#DEE5EA] w-10 h-8 rounded-full mt-3"></span>
              <div className="w-full flex flex-col">
                <span className="bg-[#DEE5EA] w-16 h-3 rounded-full mb-2"></span>
                <span className="bg-[#DEE5EA] w-32 h-3 rounded-full"></span>
              </div>
            </div>

            <span className="bg-[#DEE5EA] w-16 h-6 rounded-full mt-3 gap-y-6"></span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-x-2 items-center">
              <span className="bg-[#DEE5EA] w-10 h-8 rounded-full mt-3"></span>
              <div className="w-full flex flex-col">
                <span className="bg-[#DEE5EA] w-16 h-3 rounded-full mb-2"></span>
                <span className="bg-[#DEE5EA] w-32 h-3 rounded-full"></span>
              </div>
            </div>

            <span className="bg-[#DEE5EA] w-16 h-6 rounded-full mt-3"></span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-x-2 items-center">
              <span className="bg-[#DEE5EA] w-10 h-8 rounded-full mt-3"></span>
              <div className="w-full flex flex-col">
                <span className="bg-[#DEE5EA] w-16 h-3 rounded-full mb-2"></span>
                <span className="bg-[#DEE5EA] w-32 h-3 rounded-full"></span>
              </div>
            </div>

            <span className="bg-[#DEE5EA] w-16 h-6 rounded-full mt-3"></span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-x-2 items-center">
              <span className="bg-[#DEE5EA] w-10 h-8 rounded-full mt-3"></span>
              <div className="w-full flex flex-col">
                <span className="bg-[#DEE5EA] w-16 h-3 rounded-full mb-2"></span>
                <span className="bg-[#DEE5EA] w-32 h-3 rounded-full"></span>
              </div>
            </div>

            <span className="bg-[#DEE5EA] w-16 h-6 rounded-full mt-3"></span>
          </div>
        </div>
      </div>
    </main>
  );
}
