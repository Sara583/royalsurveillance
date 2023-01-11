import React from "react";
import img1 from "../technology-background2.png";
import img2 from "../technology-background3.png";
import {NavLink} from "react-router-dom";
export default function Hero(props) {
  return (
    <main>
      <section
        className=" h-96 flex justify-between align-middle bg-[#0f0f0f5e] "
        id="coverdiv"
      >
        <img src={img2} alt="i" className="md:w-1/3 w-2/5 " />
        <h1 className="text-center text-white text-xl md:text-5xl text-bold flex justify-center py-40 ">
          {props.title}
        </h1>
        <img src={img1} alt="i" className="md:w-1/3 w-2/5" />
      </section>
      <section className="p-5 m-5  flex justify-between text-white md:text-xl text-sm bg-[#4d4d4d6b]">
        <div className="flex justify-start ">
          <NavLink className="md:pl-5 pl-1" to={props.mainnav}>
            All
          </NavLink>
          <NavLink className="md:pl-5 pl-1" to={props.nav}>
            {props.navTitle}
          </NavLink>
          <NavLink className="md:pl-5 pl-1" to={props.secnav}>
            {props.secnavTitle}
          </NavLink>
          <NavLink className="md:pl-5 pl-1" to={props.thirdnav}>
            {props.thirdnavTitle}
          </NavLink>
          <NavLink className="md:pl-5 pl-1" to={props.fourthnav}>
            {props.fourthnavTitle}
          </NavLink>
        </div>
      </section>
    </main>
  );
}
