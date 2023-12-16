import React from "react";
import Image from "next/image";

const Congratulations = () => {
  return (
    <div className="col-span-8  rounded-lg shadow-md bg-white  flex text-sm">
      <section className="  flex flex-col p-4 justify-around">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl text-[#7479d6]">Congratulation John! </h2>
          <p className=" ">&#127881;</p>
        </div>
        <div className="mt-4 text-[#8f9390]">
          <p>
            you have done 72%
            <span className="ml-1 mr-1">&#128525;</span>
            more sales today
          </p>
          <p>Check your new raising bagdge in your profile</p>
        </div>
        <button className=" mt-4 w-1/2 bg-[#efedff] text-[#7479d6] rounded-md px-2 py-1">
          VIEW BADGES
        </button>
      </section>
      <section>
        <Image
          alt="Mountains"
          src="/avator.jpg"
          width={200}
          height={200}
          style={{
            objectFit: "contain", // cover, contain, none
          }}
        />
      </section>
    </div>
  );
};

export default Congratulations;
