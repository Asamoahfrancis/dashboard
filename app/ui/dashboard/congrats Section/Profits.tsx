import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SiCakephp } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";
const Profits = () => {
  return (
    <section className="p-4 [&>*]:p-1.5 md:m-0 m-4">
      <div className="flex items-center justify-between">
        <div className="bg-[#e9f9df] text-[#70db3d]  p-2  rounded-md">
          <SiCakephp size="2em" />
        </div>
        <BsThreeDotsVertical size="1.5em" />
      </div>
      <p className="text-[#a8b2ba]">Profit</p>
      <h3 className="text-lg text-[#8f9390]">$12,628</h3>
      <div className="flex text-[#84d352] items-center gap-2">
        <FaArrowUp />
        <p className="text-[#84d352]">72.8%</p>
      </div>
    </section>
  );
};

export default Profits;
