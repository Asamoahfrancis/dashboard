import React from "react";
import Expensechart from "../Charts/Expenses chart/Expensechart";
import { FaArrowUp } from "react-icons/fa";

const Expenses = () => {
  return (
    <div className=" shadow-md bg-white  rounded-lg p-4 flex flex-col">
      <section className="flex justify-between text-sm text-[#8f9390] pb-4">
        <button className="bg-[#676dff] py-2 px-3 text-white rounded-md">
          INCOME
        </button>
        <button className="hover:bg-[#676dff] text-[#8f9390]  py-2 px-3 hover:text-white rounded-md">
          EXPENSES
        </button>
        <button className="hover:bg-[#676dff] text-[#8f9390]  py-2 px-3 hover:text-white rounded-md">
          PROFIT
        </button>
      </section>
      <section className="grid mt-6  place-items-center">
        <div className="">
          <p className="text-[#a3a6ae]">Total Income</p>
          <div className="flex items-center gap-2">
            <p className="text-[#8f9390] text-2xl">$459.1K</p>
            <p className="text-[#84d352]">
              {" "}
              <FaArrowUp />
            </p>
            <p className="text-[#84d352] text-sm">72.8%</p>
          </div>
        </div>
      </section>
      <div className=" min-h-[300px] mb-auto">
        <Expensechart />
      </div>

      <div className=" flex text-sm gap-2 mb-4">
        <div className="w-12 h-12  rounded-full bg-[#eeedff]"></div>
        <div className=" flex flex-col justify-between">
          <p className=" text-[#8f9390]">Income this week</p>
          <p className="text-md  text-[#a8b2ba] text-sm">
            $39k less than last week
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
