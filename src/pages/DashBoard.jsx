import React from "react";
import Header from "../components/Header";

export default function DashBoard() {
  return (
    <div className="flex gap-3">
      <div className="w-[80%]">
        <Header />
      </div>
      <div className="w-[15%]">hello</div>
    </div>
  );
}
