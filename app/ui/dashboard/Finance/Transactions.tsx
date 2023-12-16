import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Transactions = () => {
  return (
    <div className=" shadow-md bg-white  rounded-lg p-4 ">
      <section className="flex justify-between pb-4">
        <p className="text-[#8f9390] text-lg ">Transactions</p>
        <BsThreeDotsVertical size="1.5em" />
      </section>
      <section className="flex justify-between  text-sm items-center my-6 ">
        <div className=" flex text-sm gap-2">
          <div className="w-12 h-12  rounded-md bg-[#ffe8e3]"></div>
          <div className=" flex flex-col justify-between">
            <p className=" text-[#a8b2ba]">Paypal</p>
            <p className="text-md text-[#8f9390]">Send Money</p>
          </div>
        </div>
        <div>
          <span className="text-[#8f9390]">+$82.6</span>{" "}
          <span className="text-[#a8b2ba]">USD</span>
        </div>
      </section>
      <section className="flex justify-between  text-sm items-center my-6">
        <div className=" flex text-sm gap-2">
          <div className="w-12 h-12  rounded-md bg-[#eeedff]"></div>
          <div className=" flex flex-col justify-between">
            <p className=" text-[#a8b2ba]">Wallet</p>
            <p className="text-md text-[#8f9390]">Mac&apos;D</p>
          </div>
        </div>
        <div>
          <span className="text-[#8f9390]">+$270.69</span>{" "}
          <span className="text-[#a8b2ba]">USD</span>
        </div>
      </section>
      <section className="flex justify-between  text-sm items-center my-6">
        <div className=" flex text-sm gap-2">
          <div className="w-12 h-12  rounded-md bg-[#e0f7fd]"></div>
          <div className=" flex flex-col justify-between">
            <p className=" text-[#a8b2ba]">Transfer</p>
            <p className="text-md text-[#8f9390]">Refund</p>
          </div>
        </div>
        <div>
          <span className="text-[#8f9390]"> +$637.91.69</span>{" "}
          <span className="text-[#a8b2ba]">USD</span>
        </div>
      </section>
      <section className="flex justify-between  text-sm items-center my-6">
        <div className=" flex text-sm gap-2">
          <div className="w-12 h-12  rounded-md bg-[#eefbe7]"></div>
          <div className=" flex flex-col justify-between">
            <p className=" text-[#a8b2ba]">Credit Card</p>
            <p className="text-md text-[#8f9390]">Ordered Food</p>
          </div>
        </div>
        <div>
          <span className="text-[#8f9390]"> +$838.71</span>{" "}
          <span className="text-[#a8b2ba]">USD</span>
        </div>
      </section>
      <section className="flex justify-between  text-sm items-center my-6">
        <div className=" flex text-sm gap-2">
          <div className="w-12 h-12  rounded-md bg-[#eeedff]"></div>
          <div className=" flex flex-col justify-between">
            <p className=" text-[#a8b2ba]">Wallet</p>
            <p className="text-md text-[#8f9390]">starbucks</p>
          </div>
        </div>
        <div>
          <span className="text-[#8f9390]">+$203.33 </span>
          <span className="text-[#a8b2ba]">USD</span>
        </div>
      </section>
      <section className="flex justify-between  text-sm items-center my-6">
        <div className=" flex text-sm gap-2">
          <div className="w-12 h-12  rounded-md bg-[#fff5e1]"></div>
          <div className=" flex flex-col justify-between">
            <p className=" text-[#a8b2ba]">Mastercard</p>
            <p className="text-md text-[#8f9390]">Ordered Food</p>
          </div>
        </div>
        <div>
          <span className="text-[#8f9390]">+$92.45</span>{" "}
          <span className="text-[#a8b2ba]">USD</span>
        </div>
      </section>
    </div>
  );
};

export default Transactions;
