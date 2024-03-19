import React from "react";
import Calender from "../svg/Calender";
import DownArrow from "../svg/DownArrow";

export default function Chart() {
  return (
    <div>
      <div className="flex justify-between">
        <h4 className="font-bold text-[12px] text-[#060709] leading-4 ">
          Statistics of Active Applications
        </h4>
        <div className="flex items-center gap-2">
          <div className="w-[20px] h-[20px] bg-[#B9F2E5] rounded-sm flex justify-center items-center">
            <Calender />
          </div>
          <h4 className="font-bold text-[12px] text-[#060709] leading-4 ">
            Week
          </h4>
          <DownArrow />
        </div>
      </div>
    </div>
  );
}
