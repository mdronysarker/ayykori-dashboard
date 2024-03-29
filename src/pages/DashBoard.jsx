import React from "react";
import Header from "../components/Header";
import Candidate from "../components/Candidate";
import Chart from "../components/Chart";
import ProgressBar from "../components/ProgressBar";
import DahboardLeft from "../components/DahboardLeft";

export default function DashBoard() {
  return (
    <div className="flex gap-3">
      <div className="w-[80%]">
        <Header />
        <div className="flex justify-between">
          <Candidate
            text={"Total Candidates"}
            number={361}
            inc={26}
            percentage={74}
            color={`rgb(17, 153, 142, ${74 / 100})`}
          />
          <Candidate
            text={"Shortlisted Candidates"}
            number={201}
            inc={45}
            percentage={74}
            color={`rgb(231, 184, 96)`}
          />
          <Candidate
            text={"Rejected Candidates"}
            number={160}
            inc={"04"}
            percentage={74}
            color={`rgb(255, 106, 73)`}
          />
        </div>
        <div className="flex gap-[5%] px-5 mt-12">
          <div className="w-[70%]">
            <Chart />
          </div>
          <div className="w-[25%]">
            <ProgressBar />
          </div>
        </div>
      </div>
      <div className="w-[24%] border-l-4 border-[#11998E] h-screen">
        <DahboardLeft />
      </div>
    </div>
  );
}
