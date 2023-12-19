import Orderstatistics from "../ui/dashboard/Finance/Orderstatistics";
import Expenses from "../ui/dashboard/Finance/Expenses";
import Transactions from "../ui/dashboard/Finance/Transactions";
import Companygrowth from "../ui/dashboard/Total Revenue/Companygrowth";
import Payments from "../ui/dashboard/Total Revenue/Payments";
import ProfitReport from "../ui/dashboard/Total Revenue/ProfitReport";
import Congratulations from "../ui/dashboard/congrats Section/congratulations";
import Profits from "../ui/dashboard/congrats Section/Profits";
import Sales from "../ui/dashboard/congrats Section/Sales";
import Search from "../ui/dashboard/Search Bar/Search";
import { RiWalletFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import Mobileheader from "../ui/mobile/Mobileheader/Mobileheader";
export default function Home() {
  return (
    <div className="md:p-4  bg-[#f5f4f9]">
      <Mobileheader />
      <Search />
      <section className="md:grid grid-cols-12 gap-4    mt-6">
        <Congratulations />
        <div className="col-span-2 shadow-md rounded-md bg-white text-sm ">
          <Profits />
        </div>
        <div className="col-span-2 shadow-md  rounded-md bg-white text-sm ">
          <Sales />
        </div>
      </section>
      <section className="md:grid grid-cols-12 grid-row-8 gap-4  mt-6">
        <Companygrowth />
        <div className="col-span-2  mb-4 md:m-0 rounded-md bg-white text-sm ">
          <Payments />
        </div>
        <div className="col-span-2 mb-4 md:m-0   shadow-md rounded-md bg-white text-sm ">
          <section className="p-4 [&>*]:p-1.5">
            <div className="flex items-center justify-between">
              <div className="bg-[#e7e7ff] text-[#7572d8]  p-2  rounded-md">
                <RiWalletFill size="2em" />
              </div>
              <BsThreeDotsVertical size="1.5em" />
            </div>
            <p className="text-[#a8b2ba]">Transactions</p>
            <h3 className="text-md text-[#8f9390]">$12,628 </h3>
            <div className="flex items-center text-[#84d352] gap-2">
              <FaArrowUp />
              <p className="text-[#84d352]">72.8%</p>
            </div>
          </section>
        </div>
        <div className="col-start-9 col-end-13  bg-white  row-start-2 row-end-3 shadow-md rounded-md">
          <ProfitReport />
        </div>
      </section>
      <section className="grid  grid-cols-1 md:grid-cols-3 gap-4  mt-6 ">
        <Orderstatistics />
        <Expenses />
        <Transactions />
      </section>
    </div>
  );
}
