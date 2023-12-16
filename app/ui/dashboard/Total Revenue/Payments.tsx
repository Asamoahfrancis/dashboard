import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineLocalParking } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
const Payments = () => {
  return (
    <section className="p-4 shadow-md rounded-lg [&>*]:p-1.5">
      <div className="flex items-center justify-between">
        <div className="bg-[#ffdfdb] text-[#f34023]  p-2  rounded-md">
          <MdOutlineLocalParking size="2em" />
        </div>
        <BsThreeDotsVertical size="1.5em" />
      </div>
      <p className=" text-[#a8b2ba] ">Payments</p>
      <h3 className="text-lg   text-[#8f9390]">$12,628</h3>
      <div className="flex text-[#df5a44] items-center gap-2">
        <FaArrowDown />
        <p className="text-[#df5a44]">-14.82%</p>
      </div>
    </section>
  );
};

export default Payments;
