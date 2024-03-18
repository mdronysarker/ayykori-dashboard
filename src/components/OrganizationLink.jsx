import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import EmployeeIcon from "../svg/EmployeeIcon";
import StructureIcon from "../svg/StructureIcon";
import ReportIcon from "../svg/ReportIcon";
import SettingsIcon from "../svg/SettingsIcon";
import LogoutIcon from "../svg/LogoutIcon";

export default function OrganizationLink() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  return (
    <div>
      <NavLink
        className="group flex gap-4 items-center rounded-md p-[14px] my-3 transition ease-in-out hover:bg-[#11998E] hover:text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <EmployeeIcon isHovered={isHovered} />
        <span className="font-medium text-[12px] leading-4 group-hover:text-white">
          Employee
        </span>
      </NavLink>
      <NavLink
        className="group flex gap-4 items-center rounded-md p-[14px] my-3 transition ease-in-out hover:bg-[#11998E] hover:text-white"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <StructureIcon isHovered1={isHovered1} />
        <span className="font-medium text-[12px] leading-4 group-hover:text-white">
          Structure
        </span>
      </NavLink>
      <NavLink
        className="group flex gap-4 items-center rounded-md p-[14px] my-3 transition ease-in-out hover:bg-[#11998E] hover:text-white"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <ReportIcon isHovered2={isHovered2} />
        <span className="font-medium text-[12px] leading-4 group-hover:text-white">
          Report
        </span>
      </NavLink>
      <NavLink
        className="group flex gap-4 items-center rounded-md p-[14px] my-3 transition ease-in-out hover:bg-[#11998E] hover:text-white"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <SettingsIcon isHovered3={isHovered3} />
        <span className="font-medium text-[12px] leading-4 group-hover:text-white">
          Settings
        </span>
      </NavLink>
      <NavLink
        className="group flex gap-4 items-center rounded-md p-[14px] my-3 transition ease-in-out hover:bg-[#11998E] hover:text-white"
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
      >
        <LogoutIcon isHovered4={isHovered4} />
        <span className="font-medium text-[12px] leading-4 group-hover:text-white">
          logout
        </span>
      </NavLink>
    </div>
  );
}
