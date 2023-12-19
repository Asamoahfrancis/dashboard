"use client";
import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { IoCloseCircleSharp } from "react-icons/io5";
import Modal from "../Modal/Modal";
const Mobileheader = () => {
  const [isShow, setShow] = useState(false);
  return (
    <div className="md:hidden w-full h-20 shadow-md z-50 sticky top-0">
      {isShow && <Modal ishow={isShow} />}
      <section className=" py-5 flex items-center bg-white text-[#7673d0] justify-between px-4">
        <h1 className="text-3xl font-bold">Sneat</h1>
        <p
          onClick={() => {
            setShow((prev) => !prev);
          }}
          className="cursor-pointer"
        >
          {isShow === false ? (
            <CgMenuGridR size="3em" />
          ) : (
            <IoCloseCircleSharp size="3em" />
          )}
        </p>
      </section>
    </div>
  );
};

export default Mobileheader;
