import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../logo.png";
import DropDown from "./NavItems/dropDownItems";
// function langToggle() {
//   const AR = document.getElementById("ar");
//   const EN = document.getElementById("en");
//   AR.classList.toggle("bg-slate-500");
//   EN.classList.toggle("bg-slate-500");
// }
export default function Navbar() {
  return (
    <navbar className="relative container mx-auto shadow-lg">
      <div className="flex justify-between  p-5">
        <div className="pt-2 p-4">
          <img className="h-28 w-full" src={Logo} alt="royal" />
        </div>
        <div className="hidden md:flex space-x-6 p-4 md:justify-center md:items-center ">
          <NavLink
            className="text-white text-2xl hover:text-[#c77dff]"
            to={"/"}
          >
            Home
          </NavLink>

          <a
            className="text-white text-2xl hover:text-[#c77dff]"
            href="#services"
          >
            Services
          </a>
          <NavLink
            className="text-white text-2xl hover:text-[#c77dff]"
            to={"/"}
          >
            <DropDown />
          </NavLink>
          <a
            className="text-white text-2xl hover:text-[#c77dff]"
            href="#clients"
          >
            Our Clients
          </a>
          <NavLink
            className="text-white text-2xl hover:text-[#c77dff]"
            to={"/"}
          >
            About us
          </NavLink>

          {/* <div className="flex">
            <button
              className="text-white p-1 bg-slate-500"
              id="en"
              onClick={langToggle}
            >
              EN
            </button>
            <button className="text-white p-1" id="ar" onClick={langToggle}>
              AR
            </button>
          </div>

          <select id="lang">
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select> */}
        </div>
      </div>
    </navbar>
  );
}
