import React from "react";
import Installation from "../../installation.jpeg";
import Maintenance from "../../maintenance.jpeg";
import Support from "../../support.jpeg";
import Warranty from "../../warranty.jpeg";
export default function Services(props) {
  return (
    <section className="mb-48" id="services">
      <h1 className="text-[#f2f2f2] md:text-5xl text-4xl text-center mb-20">
        Our Services
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 place-items-center px-2 gap-5 pb-30">
        <div className="flex">
          {" "}
          <img
            className="md:w-36 md:h-36 w-32 h-32 rounded-full place-self-center"
            alt="service img"
            src={Installation}
          />
          <div className="flex-col pl-2 pb-10 ">
            <h1 className="text-indigo-900 text-bold text-3xl  pb-2">
              Installation
            </h1>
            <p className="text-[#f2f2f2] text-left">
              {" "}
              Team of well trained technicians and expert engineers to install
              and program your system
            </p>
          </div>
        </div>
        <div className="flex">
          {" "}
          <img
            className="md:w-36 md:h-36 w-32 h-32 rounded-full place-self-center"
            alt="service img"
            src={Maintenance}
          />
          <div className="flex-col pl-2 ">
            <h1 className="text-indigo-900 pb-2 text-bold text-3xl">
              Maintenance
            </h1>
            <p className="text-[#f2f2f2] text-left">
              {" "}
              Ensure the performance of your system, check the components and
              follow up all the parts of the system communication.
            </p>
          </div>
        </div>

        <div className="flex">
          {" "}
          <img
            className="md:w-36 md:h-36 w-32 h-32 rounded-full place-self-center"
            alt="service img"
            src={Support}
          />
          <div className="flex-col pl-2 ">
            <h1 className="text-indigo-900 pb-2 text-bold text-3xl">Support</h1>
            <p className="text-[#f2f2f2] text-left">
              {" "}
              We will follow you with our technical support to serve all your
              requirements and solve any problem that will face you.
            </p>
          </div>
        </div>

        <div className="flex">
          {" "}
          <img
            className=" md:w-36 md:h-36 w-32 h-32 rounded-full place-self-center"
            alt="service img"
            src={Warranty}
          />
          <div className="flex-col pl-2 pb-10">
            <h1 className="text-indigo-900 pb-2 text-bold text-3xl">
              Warranty
            </h1>
            <p className="text-[#f2f2f2] text-left ">
              {" "}
              We support after sell services by providing you with one year
              warranty of any device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
