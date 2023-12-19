"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuSun, LuUserCog2, LuUserPlus2 } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";

const Search = () => {
  const [showSetting, setshowSetting] = useState(false);
  return (
    <div className="hidden w-full  bg-white sticky top-0 z-50 md:flex justify-between px-3 py-1 rounded-lg shadow-md">
      {showSetting && (
        <section className="hidden md:block absolute top-14 bg-[#f0f0f5] h-[400px]  rounded-lg right-0 border w-40">
          <div
            className="grid place-items-end cursor-pointer text-[#8f9390] p-2"
            onClick={() => {
              setshowSetting(false);
            }}
          >
            <IoCloseCircleOutline size="1.5em" />
          </div>
          <div>
            <Link
              href="/signup"
              className="flex text-[#8f9390] gap-4 p-3 items-center rounded-md hover:text-[#7673d0] hover:bg-[#e7e7ff] "
            >
              <LuUserPlus2 size="1.5em" />
              <h1 className="text-sm">Your Profile</h1>
            </Link>
            <Link
              href="/account-settings"
              className="flex gap-4 p-3 text-[#8f9390] items-center rounded-md hover:text-[#7673d0] hover:bg-[#e7e7ff] "
            >
              <LuUserCog2 size="1.5em" />
              <h1 className="text-sm"> Settings</h1>
            </Link>
            <Link
              href="/signin"
              className="flex gap-4 text-[#8f9390] p-3 items-center rounded-md hover:text-[#7673d0] hover:bg-[#e7e7ff] "
            >
              <CiLogin size="1.5em" />
              <h1 className="text-sm">Signin</h1>
            </Link>
            <Link
              href="/signin"
              className="flex gap-4 text-[#8f9390] p-3 items-center rounded-md hover:text-[#7673d0] hover:bg-[#e7e7ff] "
            >
              <CiLogout size="1.5em" />
              <h1 className="text-sm">Sign out</h1>
            </Link>
          </div>
        </section>
      )}
      <div className=" items-center gap-4 p-2 flex">
        <HiOutlineSearch size="1.5em" />
        <p>Search</p>
        <p className="h-6 p-1 w-8 border rounded-md flex justify-center items-center">
          <span> &#8984;</span> <span>k</span>
        </p>
      </div>
      <div className=" items-center  p-2 gap-4 flex">
        <FaGithub size="1.5em" />
        <IoIosNotificationsOutline size="1.5em" />
        <LuSun size="1.5em" />
        <div
          onClick={() => {
            setshowSetting((prev) => !prev);
          }}
          className="cursor-pointer"
        >
          <Image
            src="/photo.jpg"
            alt="Picture of the author"
            width={40}
            height={40}
            className="rounded-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
