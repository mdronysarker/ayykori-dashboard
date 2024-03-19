import React from "react";
import { Progress } from "./Progress";

export default function Linebar({ number, color, text }) {
  return (
    <div className="flex items-center gap-3 mb-[34px]">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <h4 className=" font-medium text-[#060709] text-[12px] leading-4 ">
        {text}
      </h4>
      <Progress number={number} color={color} />
    </div>
  );
}
