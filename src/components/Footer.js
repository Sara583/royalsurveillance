import React from "react";
import Logo from "../logo.png";
import {FaFacebookF} from "react-icons/fa";
import {BsWhatsapp} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
export default function Footer() {
  return (
    <main>
      <section className="bg-[#0f0f0f] relative">
        <div class="custom-shape-divider-bottom-1670726672 ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col ">
          <div className=" flex justify-between mx-10">
            <div className="flex-col p-5">
              <div className="w-10">
                <img src={Logo} alt="test" />
              </div>
              <p className="text-white py-5 text-lg">Contact us</p>

              <div className="grid grid-cols-3 gap-4 w-fit">
                <FaFacebookF color="white" size="20px" />
                <BsWhatsapp color="white" size="20px" />
                <AiOutlineMail color="white" size="20px" />
              </div>
            </div>

            <div className="flex-col p-5 ">
              <h2 className="text-lg text-white">Services</h2>
              <ul>
                <li className="text-white">service</li>
                <li className="text-white">service</li>
                <li className="text-white">service</li>
                <li className="text-white">service</li>
                <li className="text-white">service</li>
              </ul>
            </div>
            <div className="flex-col p-5 ">
              <h2 className="text-lg text-white">About us</h2>
              <ul>
                <li className="text-white">info</li>
                <li className="text-white">info</li>
                <li className="text-white">info</li>
                <li className="text-white">info</li>
                <li className="text-white">info</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" border-t-2 border-[#222222] ">
          <p className="text-center text-white md:p-5 pb-10 pt-2 ">
            ©Royal Surveillance Systems 2023
          </p>
        </div>
      </section>
    </main>
  );
}
