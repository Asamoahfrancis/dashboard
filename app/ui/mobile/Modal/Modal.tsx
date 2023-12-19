import Link from "next/link";
import React from "react";

const Modal = ({ ishow }: { ishow: boolean }) => {
  return (
    <div className="w-full min-h-screen  fixed bg-white top-20 z-[100] left-0">
      <section className="    grid place-items-center   text-left">
        <div className="flex flex-col text-[#7572d8]   text-xl   w-full justify-center">
          <Link
            href="/dashboard"
            className="p-4 border-t-[1px] hover:bg-[#7572d8] hover:text-white "
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard"
            className="p-4 border-t-[1px] hover:bg-[#7572d8] hover:text-white "
          >
            Account Settings
          </Link>
          <Link
            href="/dashboard"
            className="p-4 border-t-[1px] hover:bg-[#7572d8] hover:text-white "
          >
            Login
          </Link>
          <Link
            href="/dashboard"
            className="p-4 border-y-[1px] hover:bg-[#7572d8] hover:text-white "
          >
            Register
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Modal;
