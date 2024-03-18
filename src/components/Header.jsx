import SearchIcon from "../svg/SearchIcon";

function Header() {
  return (
    <div className="flex justify-between items-center px-5 ">
      <h4 className="font-semibold text-[#060709] text-[18px] leading-7 ">
        Good Morning
      </h4>
      <div className="relative">
        <input
          placeholder="Search"
          className="bg-[#B9F2E5] w-[284px]  rounded-md px-5 py-[12px] focus:outline-none"
          type="text"
        />
        <div className="bg-[#11998E] w-[47px] h-[47px] rounded-md flex items-center justify-center absolute top-0 right-0 ">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
