import React from "react";
import Hero from "../hero";
import {NavLink} from "react-router-dom";
import {useState, useEffect} from "react";
import sanityClient from "../../client";
export default function Hstip() {
  const [query, setQuery] = useState("");
  const [hstipData, sethstip] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "hst" &&feature8=="IP"]{
        title,
        feature1,
        feature2,
        feature3,
        feature4,
        feature5,
        feature6,
        feature7,
        feature8,
        feature9,
        feature10,
        feature11,
        feature12,
        feature13,
        feature14,
        feature15,
       image{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then(data => {
        sethstip(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <section>
        <Hero
          title="HST"
          mainnav="/cameras"
          nav="/cameras/convoy"
          navTitle="Convoy"
          secnav="/cameras/eurovision"
          secnavTitle="Eurovision"
          thirdnav="/cameras/hikvision"
          thirdnavTitle="Hikvision"
          fourthnav="/cameras/hst"
          fourthnavTitle="HST"
          type1="#ip"
          type2="#ip"
        />
        <div className="  px-5 ">
          <button
            className="hidden border-none  text-lg text-white"
            id="brandBtn"
            onClick={() => window.location.reload()}
          >
            {" "}
            Back To Brand page{" "}
          </button>
        </div>
      </section>
      <section id="mainDiv">
        <input
          className="search flex justify-start bg-slate-300 p-2 m-5 border-violet-300 rounded-lg md:w-1/5"
          placeholder="Search..."
          type="text"
          onChange={e => setQuery(e.target.value)}
        />
        <div className="flex justify-center">
          <NavLink to="/cameras/hst/ip">
            {" "}
            <h1 className="md:text-4xl text-2xl text-[#f2f2f2] p-5 text-center m-5 w-28 bg-[#4d4d4d6b]">
              IP
            </h1>
          </NavLink>
          <NavLink to="/cameras/hst/hd">
            {" "}
            <h1 className="md:text-4xl text-2xl text-[#f2f2f2] p-5 text-center m-5 w-28 bg-[#4d4d4d6b]">
              HD
            </h1>
          </NavLink>
        </div>
        <div className="grid lg:grid-cols-2  container mx-auto p-5 gap-5  place-items-center">
          {hstipData &&
            hstipData
              .filter(item => item.title.toLowerCase().includes(query))
              .map((hstip, index) => (
                <div className="w-96 h-72 flex-col ">
                  <img
                    src={hstip.image.asset.url}
                    alt="m"
                    className="w-fit h-60 md:p-5 px-24"
                  />
                  <div className=" flex justify-between border-spacing-2">
                    <h1 className="text-lg text-white pl-2">{hstip.title}</h1>
                    <button
                      className="w-30 h-7  rounded-md bg-blue-500 text-center text-slate-300 mr-2 px-2"
                      data-user={index}
                      onClick={e => {
                        const mainDiv = document.getElementById("mainDiv");
                        const btn = document.getElementById("brandBtn");
                        btn.classList.toggle("hidden");
                        mainDiv.innerHTML = `<div class="flex justify-center align-middle p-5 m-5 bg-[#504f4f51]">
                 
                      <div class="px-10"><img key=${index} src=${
                          hstip.image.asset.url
                        } class="w-fit h-56"/></div>
                      <div class="flex-col justify-center align-middle py-15">
                        <h1 key=${index} class="text-white text-3xl">${
                          hstip.title
                        }</h1>
                        <ul key=${index} class="text-slate-300 text-xl">
                        ${hstip.feature1 ? `<li>${hstip.feature1}</li>` : ""}
                      
                      ${hstip.feature2 ? `<li>${hstip.feature2}</li>` : ""}
                      ${hstip.feature3 ? `<li>${hstip.feature3}</li> ` : ""}
                      ${hstip.feature4 ? `<li>${hstip.feature4}</li>` : ""}
                      ${hstip.feature5 ? `<li>${hstip.feature5}</li>` : ""}
                      ${hstip.feature6 ? `<li>${hstip.feature6}</li>` : ""}
                      ${hstip.feature7 ? `<li>${hstip.feature7}</li>` : ""}
                      ${hstip.feature8 ? `<li>${hstip.feature8}</li>` : ""}
                      ${hstip.feature9 ? `<li>${hstip.feature9}</li>` : ""}
                      ${hstip.feature10 ? `<li>${hstip.feature10}</li>` : ""} 
                      ${hstip.feature11 ? `<li>${hstip.feature11}</li>` : ""} 
                      ${hstip.feature12 ? `<li>${hstip.feature12}</li>` : ""} 
                      ${hstip.feature13 ? `<li>${hstip.feature13}</li>` : ""} 
                      ${hstip.feature14 ? `<li>${hstip.feature14}</li>` : ""} 
                      ${hstip.feature15 ? `<li>${hstip.feature15}</li>` : ""} 
                      </ul>
                      </div>
                    </div>`;
                      }}
                    >
                      View More
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </main>
  );
}
