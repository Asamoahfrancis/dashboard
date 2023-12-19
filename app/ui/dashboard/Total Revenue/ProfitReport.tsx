import React from "react";
import Profitreport from "../Charts/Profit Report/Profitreport";
import { FaArrowUp } from "react-icons/fa";

const ProfitReport = () => {
  return (
    <div className="md:flex">
      <section className="p-4 [&>*]:p-1.5">
        <p className=" text-[#8f9390]">Profit Report</p>
        <p className="text-xs rounded-lg w-[100px]   px-1 text-center bg-[#fff5e0] text-[#f0c583]">
          YEAR 2022
        </p>
        <div className="flex items-center text-[#84d352] gap-2">
          <FaArrowUp />
          <p className="text-[#84d352] text-sm">72.8%</p>
        </div>
        <h3 className="text-xl  text-[#8f9390]">$84,686K</h3>
      </section>
      <section className="h-[200px] w-full ">
        <Profitreport />
      </section>
    </div>
  );
};

export default ProfitReport;
