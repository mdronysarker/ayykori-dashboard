import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import JobIcon from "../svg/JobIcon";
import MessageIcon from "../svg/MessageIcon";
import CarrerIcon from "../svg/CarrerIcon";
import Referrals from "../svg/Referrals";

export default function RecruitmentLink() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div>
      <NavLink
        className="group flex gap-4 items-center rounded-md p-[14px] my-3 transition ease-in-out hover:bg-[#11998E] hover:text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <JobIcon isHovered={isHovered} />
        <span className="font-medium text-[12px] leading-4 group-hover:text-white">
          Jobs
        </span>
      </NavLink>
      <NavLink
        className="group flex gap-4 items-center rounded-md p-[14px] my-3 transition ease-in-out hover:bg-[#11998E] hover:text-white"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <MessageIcon isHovered1={isHovered1} />
        <span className="font-medium text-[12px] leading-4 group-hover:text-white">
          Massage
        </span>
      </NavLink>
      <NavLink
        className="group flex gap-4 items-center rounded-md p-[14px] my-3 transition ease-in-out hover:bg-[#11998E] hover:text-white"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <CarrerIcon isHovered2={isHovered2} />
        <span className="font-medium text-[12px] leading-4 group-hover:text-white">
          Career site
        </span>
      </NavLink>
      <NavLink
        className="group flex gap-4 items-center rounded-md p-[14px] my-3 transition ease-in-out hover:bg-[#11998E] hover:text-white"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <Referrals isHovered3={isHovered3} />
        <span className="font-medium text-[12px] leading-4 group-hover:text-white">
          My Referrals
        </span>
      </NavLink>
    </div>
  );
}
