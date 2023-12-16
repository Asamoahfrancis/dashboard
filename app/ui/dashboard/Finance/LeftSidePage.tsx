import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { ImArrowUpRight } from "react-icons/im";
import { LuUserCog2 } from "react-icons/lu";
import { CiLogin } from "react-icons/ci";
import { LuUserPlus2 } from "react-icons/lu";
import Link from "next/link";
const LeftSidePage = () => {
  return (
    <div className=" ml-4 text-sm mt-4 text-[#8f9390] ">
      <section className="">
        <div className="flex items-center  gap-4 px-4 py-2  rounded-md text-[#7673d0] bg-[#e7e7ff] m-3">
          <ImArrowUpRight size="1.5em" />
          <h1 className="text-3xl">Sneat</h1>
        </div>
        <div className="flex  gap-4 p-4  items-center rounded-md hover:text-[#7673d0] hover:bg-[#e7e7ff] m-3">
          <IoHomeOutline size="1.5em" />
          <h1>Dashboard</h1>
        </div>
        <div className="flex gap-4 p-4 items-center rounded-md hover:text-[#7673d0] hover:bg-[#e7e7ff] m-3">
          <LuUserCog2 size="1.5em" />
          <h1>Account Settings</h1>
        </div>
        <div className="p-4">
          <p className="text-gray-300">Pages</p>
        </div>
        <Link
          href="/login"
          className="flex gap-4 p-4 items-center rounded-md hover:text-[#7673d0] hover:bg-[#e7e7ff] m-3"
        >
          <CiLogin size="1.5em" />
          <h1>Login</h1>
        </Link>
        <div className="flex gap-4 p-4 items-center rounded-md hover:text-[#7673d0] hover:bg-[#e7e7ff] m-3">
          <LuUserPlus2 size="1.5em" />
          <h1>Register</h1>
        </div>
      </section>
    </div>
  );
};

export default LeftSidePage;
