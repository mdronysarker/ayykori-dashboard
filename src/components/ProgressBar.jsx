import Calender from "../svg/Calender";
import DownArrow from "../svg/DownArrow";
import Linebar from "./Linebar";

function ProgressBar() {
  return (
    <div>
      <div className="flex justify-between mb-7">
        <h4 className="font-bold text-[12px] text-[#060709] leading-4 ">
          Acquisitions
        </h4>
        <div className="flex items-center gap-2">
          <div className="w-[20px] h-[20px] bg-[#B9F2E5] rounded-sm flex justify-center items-center">
            <Calender />
          </div>
          <h4 className="font-bold text-[12px] text-[#060709] leading-4 ">
            Month
          </h4>
          <DownArrow />
        </div>
      </div>

      <Linebar text={"Applications"} color={"#11998E"} number={80} />
      <Linebar text={"Shortlisted"} color={"#E7B860"} number={56} />
      <Linebar text={"Rejected"} color={"#FF6A49"} number={47} />
      <Linebar text={"On Hold"} color={"#7B7B7B"} number={35} />
      <Linebar text={"Finalized"} color={"#61E7D3"} number={24} />
    </div>
  );
}

export default ProgressBar;
