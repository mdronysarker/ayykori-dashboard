import React from "react";
import Logo from "../assets/images/logo.png";
import MenuLink from "./MenuLink";
import RecruitmentLink from "./RecruitmentLink";
import OrganizationLink from "./OrganizationLink";

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
      <div>
        <h5 className="font-bold text-[12px] leading-[16px] mt-[37px] ">
          Recruitment
        </h5>
        <RecruitmentLink />
      </div>
      <div>
        <h5 className="font-bold text-[12px] leading-[16px] mt-[37px] ">
          Organization
        </h5>
        <OrganizationLink />
      </div>
    </div>
  );
}
