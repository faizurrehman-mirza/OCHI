import React from "react";

function Marquee() {
  return (
    <div className="w-full  bg-[#004D43] py-18 rounded-t-4xl font-founder ">
      <div className="text border-t border-b uppercase  border-zinc-300 text-white flex items-center gap-10 overflow-hidden   ">
        <h1 className="text-[60vh] leading-[49vh] -mt-13  whitespace-nowrap tracking-tight ">
          we are ochi
        </h1>
        <h1 className="text-[60vh] leading-[49vh] -mt-13  whitespace-nowrap tracking-tight ">
          we are ochi
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
