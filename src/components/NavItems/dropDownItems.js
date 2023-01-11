import React from "react";
import {NavLink} from "react-router-dom";
export default function dropdown() {
  return (
    <div class="group inline-block ">
      <button
        aria-haspopup="true"
        aria-controls="menu"
        class=" focus:outline-none  px-3  bg-transparent rounded-sm flex items-center min-w-32"
      >
        <a className="pr-1  flex-1" href="#products">
          {" "}
          Our Products
        </a>
        <span>
          <svg
            class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul
        id="menu"
        aria-hidden="true"
        class="bg-[#0f0f0ffe] border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
      >
        <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
          <button
            aria-haspopup="true"
            aria-controls="menu-lang"
            class="w-full text-left flex items-center outline-none focus:outline-none"
          >
            <NavLink to="/cameras" className="pr-1 flex-1">
              {" "}
              CCTV
            </NavLink>
            <span class="mr-auto">
              <svg
                class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            id="menu-lang"
            aria-hidden="true"
            class="bg-[#0f0f0ffe] border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
          >
            <NavLink to="/cameras/hst">
              <li class="px-3 py-1 hover:bg-gray-100">HST</li>
            </NavLink>
            <NavLink to="/cameras/eurovision">
              {" "}
              <li class="px-3 py-1 hover:bg-gray-100">Eurovision</li>
            </NavLink>
            <NavLink to="/cameras/convoy">
              <li class="px-3 py-1 hover:bg-gray-100">Convoy </li>
            </NavLink>
            <NavLink to="/cameras/hikvision">
              {" "}
              <li class="px-3 py-1 hover:bg-gray-100">Hikvision</li>
            </NavLink>
          </ul>
        </li>
        <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
          <button
            aria-haspopup="true"
            aria-controls="menu-lang"
            class="w-full text-left flex items-center outline-none focus:outline-none"
          >
            <NavLink to="/fingerprints">
              {" "}
              <span class="pr-1 flex-1">Time Attendance</span>
            </NavLink>
            <span class="mr-auto">
              <svg
                class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            id="menu-lang"
            aria-hidden="true"
            class="bg-[#0f0f0ffe] border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
          >
            <NavLink to={"/fingerprints/zk"}>
              <li class="px-3 py-1 hover:bg-gray-100">ZKTECO</li>
            </NavLink>
            <NavLink to="/fingerprints/convoy">
              {" "}
              <li class="px-3 py-1 hover:bg-gray-100">Convoy</li>
            </NavLink>
          </ul>
        </li>
        <NavLink to="/firesystems">
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Fire System</li>
        </NavLink>
        <NavLink to="/soundsystems">
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Sound System</li>
        </NavLink>
        <NavLink to="/weapondetectors">
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Security Gates</li>
        </NavLink>
        {/* <NavLink to="/timeattendace">
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            Time Attendance
          </li>
        </NavLink>
        <NavLink to="/surveillance">
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Surveillance</li>
        </NavLink>
        <NavLink to="/accesscontrol">
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Access Control</li>
        </NavLink>
        <NavLink to="/warningsystems">
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            Warning Systems
          </li>
        </NavLink>
        <NavLink to="/securitygates">
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Security Gates</li>
        </NavLink> */}
      </ul>
    </div>
  );
}
