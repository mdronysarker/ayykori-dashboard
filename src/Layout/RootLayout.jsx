import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="p-10 flex gap-7">
      <div className=" p-6 w-[20%]  ">
        <Sidebar />
      </div>
      <div className=" w-[75%]">
        <Outlet />
      </div>
    </div>
  );
}
