import React from "react";
import menuIcon from "../../assets/icons8-menu-64.png";
import worldIcon from "../../assets/icons8-globe-100 1.png";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="flex relative top-0 justify-between bg-[#1B152D]/85 pl-[58px] pr-[58px] w-full h-[100px] text-white p-4">
      <div className="h-full flex justify-start items-center">
        <Link to="/" className="text-[42px] cursor-pointer font-bold">
          <span className="text-[#1702FF]">Mobile</span> Abed
        </Link>
      </div>
      <div className="h-full gap-11 flex justify-start items-center">
        <div className=" p-2 w-[135px] h-12 border-[3px] cursor-pointer flex items-center justify-between border-white rounded-lg">
            <span className="text-xl"> FA | EN </span>
            <img src={worldIcon} alt="World" className="w-8 h-8 object-contain" />
        </div>
        <img src={menuIcon} alt="Menu" className="w-12 h-12 cursor-pointer" />
      </div>
    </div>
  );
}
