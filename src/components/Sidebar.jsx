import React from "react";
import Logo from "../assets/images/logo.png";
import MenuLink from "./MenuLink";

export default function Sidebar() {
  return (
    <div>
      <div className="flex justify-center">
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <h5 className="font-bold text-[12px] leading-[16px] mt-[37px] ">
          Menu
        </h5>
        <MenuLink />
      </div>
    </div>
  );
}
