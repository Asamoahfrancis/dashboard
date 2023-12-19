"use client";
import React from "react";
import { BiSolidWallet } from "react-icons/bi";
import { PiCurrencyDollarBold } from "react-icons/pi";
import PositivenNegative from "../Charts/Total Revenue chart/PositivenNegative";
import { BsThreeDotsVertical } from "react-icons/bs";
import Example from "../Charts/Company growth/Growth";
const Companygrowth = () => {
  return (
    <div className="col-start-1 col-end-9 row-start-1 shadow-md md:grid grid-cols-10 row-end-3 bg-white   rounded-lg">
      <section className="col-span-6  p-4">
        <section className="flex justify-between pb-4">
          <p className="text-lg text-[#8f9390]">Total Revenue</p>
          <BsThreeDotsVertical size="1.5em" />
        </section>
        <section className="h-[300px] ">
          <PositivenNegative />
        </section>
      </section>
      <section className="col-span-4 border-l-[1px] mt-4 mb-4 md:m-0 flex flex-col">
        <div className="grid place-items-center mt-4">
          <select className=" bg-[#f5f4f9] rounded-md px-6 py-2">
            <option value="">2023</option>
            <option value="">2023</option>
          </select>
        </div>
        <div className="mb-auto relative ">
          <section className="w-full h-[230px]  m-y-4 md:m-0 ">
            <Example />
          </section>
        </div>
        <div className="flex justify-between p-4">
          <div className=" flex text-sm gap-2">
            <div className="bg-[#eeedfd] text-[#6c71f0]  p-2  rounded-md">
              <PiCurrencyDollarBold size="2em" />
            </div>{" "}
            <div className=" flex flex-col justify-between">
              <p className=" text-[#a8b2ba]">2023</p>
              <p className="text-md  text-[#8f9390]">$32.5K</p>
            </div>
          </div>
          <div className=" flex text-sm gap-2">
            <div className="bg-[#e0f8fc] text-[#31c0d8]  p-2  rounded-md">
              <BiSolidWallet size="2em" />
            </div>{" "}
            <div className=" flex flex-col justify-between">
              <p className=" text-[#a8b2ba]">2023</p>
              <p className="text-md text-[#8f9390]">$32.5K</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companygrowth;
