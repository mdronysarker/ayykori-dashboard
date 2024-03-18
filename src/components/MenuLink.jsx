import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import DashboardIcon from "../svg/DashboardIcon";
import ApplicationIcon from "../svg/ApplicationIcon";
import ClenderIcon from "../svg/ClenderIcon";

export default function MenuLink() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const location = useLocation();
  return (
    <ul>
      <li>
        <NavLink
          className={`group flex gap-4 items-center rounded-md p-[14px] my-3 transition ease-in-out hover:bg-[#11998E] hover:text-white ${
            location.pathname === "/dashboard" ? `bg-[#11998E] text-white ` : ""
          }`}
          to={"/dashboard"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <DashboardIcon isHovered={isHovered} />
          <span className="font-medium text-[12px] leading-4 group-hover:text-white">
            Dashboard
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`group flex gap-4 items-center rounded-md p-[14px] my-3 transition ease-in-out hover:bg-[#11998E] hover:text-white ${
            location.pathname === "/application"
              ? `bg-[#11998E] text-white `
              : ""
          }`}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          to={"/application"}
        >
          <ApplicationIcon isHovered1={isHovered1} />
          <span className="font-medium text-[12px] leading-4 group-hover:text-white">
            Application
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="group flex gap-4 items-center rounded-md p-[14px] my-3 transition ease-in-out hover:bg-[#11998E] hover:text-white"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <ClenderIcon isHovered2={isHovered2} />
          <span className="font-medium text-[12px] leading-4 group-hover:text-white">
            Calendar
          </span>
        </NavLink>
      </li>
    </ul>
  );
}
