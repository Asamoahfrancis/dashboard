import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuSun } from "react-icons/lu";
import Image from "next/image";

const Search = () => {
  return (
    <div className="w-full  bg-white  flex justify-between px-3 py-1 rounded-lg shadow-md">
      <div className=" items-center gap-4 p-2 flex">
        <HiOutlineSearch size="1.5em" />
        <p>Search</p>
        <p className="h-6 w-8 border rounded-md flex justify-center items-center">
          k k
        </p>
      </div>
      <div className=" items-center  p-2 gap-4 flex">
        <FaGithub size="1.5em" />
        <IoIosNotificationsOutline size="1.5em" />
        <LuSun size="1.5em" />
        <div>
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
