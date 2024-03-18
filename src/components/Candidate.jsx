import React from "react";
import Arrow from "../svg/Arrow";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Candidate({ text, number, inc, percentage, color }) {
  return (
    <div className="px-5 mt-10 flex items-center gap-9">
      <div>
        <p className="font-medium text-[12px]">{text}</p>
        <h1 className="font-bold text-[#060709] text-[28px] leading-7 mt-[4px]">
          {number}
        </h1>
        <div className="mt-[10px] flex gap-2">
          <div className="bg-[#B9F2E5] w-[20px] h-[20px] rounded-full flex justify-center items-center">
            <Arrow fill={color} />
          </div>
          <p
            className={`font-medium text-[16px] leading-4  leading-4`}
            style={{ color: color }}
          >
            +{inc}% Inc
          </p>
        </div>
      </div>
      <CircularProgressbar
        className="w-[50px] h-[50px] font-bold"
        value={percentage}
        text={`+${percentage}%`}
        styles={buildStyles({
          pathColor: `${color}`,
          trailColor: "#E0EDEA",
          textSize: "16px",
          textColor: `${color}`,
          pathTransitionDuration: 0.5,
        })}
      />
    </div>
  );
}
