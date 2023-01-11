import React from "react";

import {motion, AnimatePresence} from "framer-motion";

import Products from "./Home/products";
import Camera from "../image_adobe_express.png";
import Video from "../AdobeStock_325573214.mov";
import bulb from "../bulb.png";
import Slider from "./Slider";
import prod1 from "../prod1.png";
import prod2 from "../prod2.png";
import prod3 from "../prod3.png";
import prod4 from "../prod4.png";
import prod5 from "../prod5.png";
import prod6 from "../prod6.png";
import prod7 from "../prod7.png";
import prod8 from "../prod8.png";
import prod9 from "../prod9.png";
import Services from "./Home/Services";
import icon from "../icon.png";
export default function Home() {
  return (
    <AnimatePresence>
      <main>
        <section>
          <div className=" flex flex-col-reverse  md:flex-row  items-center p-4 pr-0 md:ml-8   space-y-0 ">
            <motion.div
              initial={{x: -100}}
              whileInView={{x: 0, duration: 1}}
              className="flex flex-col mb-30 space-y-12 md:w-1/2 text-left"
            >
              <h1 className="text-5xl text-[#f2f2f2]">
                Royal Surveillance Systems
              </h1>
              <p className="text-2xl text-gray-300">
                Your security is our priority
              </p>
              <p className="text-gray-200  text-lg max-w-md">
                Royal is a leading Co. in the field of surveillance and security
                systems, started from 2011 till now. we specialized in finger
                and face print time attendance machines, surveillance cameras
                with all types indoor and outdoor, warning fire systems and
                other protection systems, all with skilled and professional
                technicians who had great experience in the field.
              </p>
              <button className="py-3 px-7  w-fit h-14 flex justify-around  bg-[#f2f2f283] font-bold text-[#0f0f0f] text-lg rounded-lg hover:scale-110 hover:opacity-80">
                Learn more <img src={icon} alt="icon" />
              </button>
            </motion.div>
            <motion.div
              initial={{x: 100}}
              whileInView={{x: 0, duration: 1}}
              className="md:w-1/2 "
            >
              <img src={Camera} alt="camera" className="h-full" />
            </motion.div>
          </div>
        </section>
        <section className="my-40  pt-10  relative">
          <div className=" mt-10">
            <div class="custom-shape-divider-top-1670729557">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
            <h1 className="text-[#f2f2f2] text-4xl text-center text-bold md:text-5xl pb-10 ">
              {" "}
              Why to choose us ?
            </h1>
            <div className="container mx-auto my-10 grid grid-cols-1 lg:grid-cols-3 gap-10 ">
              <motion.div
                initial={{opacity: -1}}
                whileInView={{opacity: 2}}
                duration={2}
                className="flex flex-col align-items-center p-5  m-10 rounded-lg  bg-[#2b2d42] "
              >
                <img
                  src={bulb}
                  className="  flex justify-center w-20 mx-auto pb-5"
                  alt="bulb"
                />
                <h3 className="text-[#f2f2f2] text-2xl text-center font-bold pb-5 ">
                  Fast
                </h3>
                <p className="text-gray-300 text-center text-">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies diam augue, at facilisis nisi aliquet eget.
                  Nam malesuada iaculis lorem sit amet rhoncus. Nullam volutpat
                  gravida dapibus
                </p>
              </motion.div>

              <motion.div
                initial={{opacity: -1}}
                whileInView={{opacity: 2}}
                duration={2}
                className="flex flex-col align-items-center p-5 m-10 rounded-lg bg-[#2b2d42] lg:scale-110 "
              >
                <img
                  src={bulb}
                  className="  flex justify-center w-20 mx-auto pb-5"
                  alt="bulb"
                />
                <h3 className="text-[#f2f2f2] text-2xl text-center font-bold pb-5 ">
                  Fast
                </h3>
                <p className="text-gray-300 text-center text-">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies diam augue, at facilisis nisi aliquet eget.
                  Nam malesuada iaculis lorem sit amet rhoncus. Nullam volutpat
                  gravida dapibus
                </p>
              </motion.div>
              <motion.div
                initial={{opacity: -1}}
                whileInView={{opacity: 2}}
                duration={2}
                className="flex flex-col align-items-center p-5 m-10 rounded-lg bg-[#2b2d42] "
              >
                <img
                  src={bulb}
                  className="  flex justify-center w-20 mx-auto pb-5"
                  alt="bulb"
                />
                <h3 className="text-[#f2f2f2] text-2xl text-center font-bold pb-5 ">
                  Fast
                </h3>
                <p className="text-gray-300 text-center text-">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies diam augue, at facilisis nisi aliquet eget.
                  Nam malesuada iaculis lorem sit amet rhoncus. Nullam volutpat
                  gravida dapibus
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <Services />
        <section className="my-40">
          <video autoPlay="autoplay" loop>
            <source src={Video}></source>
          </video>
        </section>
        <section className="my-40" id="products">
          <h1 className="text-[#f2f2f2] text-center text-4xl md:text-5xl pb-20">
            Our Products
          </h1>
          <div className="grid grid-cols-3 md:grid-rows-3 md:gap-10 md:container mx-auto">
            <Products
              name="Convoy Cameras"
              src={prod1}
              alt="كاميرات مراقبة convoy royal"
              link="/cameras/convoy"
            />
            <Products
              name="Eurovision Cameras"
              src={prod2}
              alt="كاميرات مراقبة eurovison royal"
              link="/cameras/eurovision"
            />
            <Products
              name="Hikvision Cameras"
              src={prod3}
              alt="كاميرات مراقبة hikvison royal"
              link="/cameras/hikvision"
            />
            <Products
              name="HST Cameras"
              src={prod4}
              alt="كاميرات مراقبة HST royal"
              link="/cameras/hst"
            />
            <Products
              name="Convoy Finger Print"
              src={prod5}
              alt="اجهزة بصمة finger print royal"
              link="/fingerprints/convoy"
            />
            <Products
              name="ZKteco Finger Print"
              src={prod6}
              alt="اجهزة بصمة finger print royal"
              link="/fingerprints/zkteco"
            />
            <Products
              name="Fire Systems"
              src={prod7}
              alt="اجهزة حريق fire systems royal"
              link="/firesystems"
            />
            <Products
              name="Security Gates"
              src={prod8}
              alt="اجهزة حريق security gates royal"
              link="/weapondetectors"
            />
            <Products
              name="Sound Systems"
              src={prod9}
              alt="اجهزة صوتية Sound royal"
              link="/soundsystems"
            />
          </div>
        </section>

        <Slider />
        <section className="my-40 ">
          <h1 className="text-[#f2f2f2] text-center text-4xl md:text-5xl pb-10">
            Visit us
          </h1>
          <div className="w-full h-40 flex justify-center">
            <iframe
              title="map"
              width="1300"
              height="316"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=13%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%B3%D9%8A%D8%B2%D9%88%D8%B3%D8%AA%D8%B1%D9%8A%D8%B3%D8%8C%20%D9%85%D9%8A%D8%AF%D8%A7%D9%86%20%D9%85%D8%AD%D8%B7%D8%A9%20%D8%A7%D9%84%D8%B1%D9%85%D9%84&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </section>
      </main>
    </AnimatePresence>
  );
}
