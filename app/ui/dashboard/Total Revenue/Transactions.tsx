import React from "react";

const Transactions = () => {
  return (
    <div className="flex">
      <section className="p-4 [&>*]:p-1.5">
        <p>Profit Report</p>
        <p className="text-xs rounded-lg  px-1 text-center bg-[#fff5e0] text-[#f0c583]">
          YEAR 2022
        </p>
        <div className="flex items-center gap-2">
          <p className="w-4 h-4 border"></p>
          <p className="text-[#84d352] text-sm">72.8%</p>
        </div>
        <h3 className="text-xl">$84,686K</h3>
      </section>
      <section></section>
    </div>
  );
};

export default Transactions;
