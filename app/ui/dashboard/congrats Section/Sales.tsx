import React from "react";
import { BiSolidWallet } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
const Sales = () => {
  return (
    <section className="p-4 [&>*]:p-1.5">
      <div className="flex items-center justify-between">
        <div className="bg-[#d6f5fc] text-[#08c0ed]  p-2  rounded-md">
          <BiSolidWallet size="2em" />
        </div>
        <BsThreeDotsVertical size="1.5em" />
      </div>
      <p className="text-[#a8b2ba]">Sales</p>
      <h3 className="text-lg text-[#8f9390]">$4,679</h3>
      <div className="flex text-[#84d352] items-center gap-2">
        <FaArrowUp />
        <p className="text-[#84d352]">28.42%</p>
      </div>
    </section>
  );
};

export default Sales;
