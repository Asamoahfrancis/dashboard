import React from "react";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { TbHanger } from "react-icons/tb";
import { HiHome } from "react-icons/hi2";
import { IoFootball } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import Example from "../Charts/Orderstats/Orderstats";
const Orderstatistics = () => {
  return (
    <div className=" shadow-md bg-white flex flex-col  rounded-lg">
      <section className="flex justify-between p-4 pb-4">
        <p className="text-lg text-[#8f9390]">Order Statistics</p>
        <BsThreeDotsVertical size="1.5em" />
      </section>
      <p className=" text-[#a8b2ba] text-sm px-4 pb-4">42.82k Total Sales</p>
      <section className="px-4 pb-4 mb-auto flex justify-between items-center">
        <div className="mt-4">
          <p className="text-[#656a73] text-4xl">8,258</p>
          <p className="text-[#a3a6ae]">Total Orders</p>
        </div>
        <div className="w-full h-[200px]">
          <Example />
        </div>
      </section>
      <section className="px-4 pb-4">
        <section className="flex justify-between  text-sm items-center my-6">
          <div className=" flex text-sm gap-2">
            <div className="bg-[#eeedfd] text-[#6c71f0]  p-2  rounded-md">
              <MdOutlinePhoneIphone size="2em" />
            </div>{" "}
            <div className=" flex flex-col justify-between">
              <p className="text-[#8f9390] ">Electronics</p>
              <p className="text-md   text-[#a8b2ba]">Mobile Airbugs TV</p>
            </div>
          </div>
          <div>
            <span className="text-[#8f9390]">82.5K</span>{" "}
          </div>
        </section>
        <section className="flex justify-between  text-sm items-center my-6">
          <div className=" flex text-sm gap-2">
            <div className="bg-[#f2f9e9] text-[#7fd64c]  p-2  rounded-md">
              <TbHanger size="2em" />
            </div>{" "}
            <div className=" flex flex-col justify-between">
              <p className=" text-[#8f9390]">Fashion</p>
              <p className="text-md   text-[#a8b2ba]">Tshirt Jeans Shoes </p>
            </div>
          </div>
          <div>
            <span className="text-[#8f9390]">23.8K</span>{" "}
          </div>
        </section>
        <section className="flex justify-between  text-sm items-center my-6">
          <div className=" flex text-sm gap-2">
            <div className="bg-[#e0f8fc] text-[#3ab6cc]  p-2  rounded-md">
              <HiHome size="2em" />
            </div>{" "}
            <div className=" flex flex-col justify-between">
              <p className=" text-[#a8b2ba]">Decor</p>
              <p className="text-md text-[#8f9390]">Fine Art Dining </p>
            </div>
          </div>
          <div>
            <span className="  text-[#8f9390]">849</span>{" "}
          </div>
        </section>
        <section className="flex justify-between  text-sm items-center my-6">
          <div className=" flex text-sm gap-2">
            <div className="bg-[#f1f3f2] text-[#8d96a0]  p-2  rounded-md">
              <IoFootball size="2em" />
            </div>{" "}
            <div className=" flex flex-col justify-between">
              <p className=" text-[#8f9390]">Sports</p>
              <p className="text-md   text-[#a8b2ba]">Football, Cricket </p>
            </div>
          </div>
          <div>
            <span className="text-[#8f9390]">99</span>{" "}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Orderstatistics;
