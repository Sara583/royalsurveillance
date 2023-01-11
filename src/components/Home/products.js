import React from "react";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

export default function Products(props) {
  return (
    <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1, duration: 1}}
      className="flex flex-col p-3 mb-2 "
    >
      <NavLink
        className="md:text-3xl sm:text-sm text-center text-[#f2f2f2] "
        to={props.link}
      >
        <div className="h-12 pb-5">
          <h1>{props.name}</h1>
        </div>
        <img
          src={props.src}
          alt={props.alt}
          className="  border-t-4 border-[#c77dff] bg-[#f2f2f2c2] hover:opacity-50 h-64 p-5 w-full "
        />
      </NavLink>
    </motion.div>
  );
}
