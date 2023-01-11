import React from "react";
import {useState, useEffect} from "react";
import sanityClient from "../client";
import Hero from "./hero";

export default function Cctv() {
  const [cctvData, setcctv] = useState(null);

  const [query, setQuery] = useState("");
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type in["hikvision","eurovision","hst"] ]{
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
        setcctv(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <Hero
        title="CCTV"
        nav="/cameras/convoy"
        navTitle="Convoy"
        secnav="/cameras/eurovision"
        secnavTitle="Eurovision"
        thirdnav="/cameras/hikvision"
        thirdnavTitle="Hikvision"
        fourthnav="/cameras/hst"
        fourthnavTitle="HST"
        mainnav="/cameras"
      />
      <section>
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
        <div id="mainDiv">
          <input
            className="search flex justify-start bg-slate-300 p-2 m-5 border-violet-300 rounded-lg md:w-1/5"
            placeholder="search..."
            type="text"
            onChange={e => setQuery(e.target.value)}
          />
          <div className="grid md:grid-cols-2  container place-items-center mx-auto p-5 gap-5 ">
            {cctvData &&
              cctvData
                .filter(item => item.title.toLowerCase().includes(query))
                .map((cctv, index) => (
                  <div className="w-80 h-72 flex-col  ">
                    <img
                      src={cctv.image.asset.url}
                      alt="m"
                      className="w-fit h-60 p-5"
                    />
                    <div className=" flex justify-between border-spacing-2">
                      <h1 className="text-xl text-white pl-2">{cctv.title}</h1>
                      <button
                        className="w-30 h-7 mt-2 rounded-md bg-blue-500 text-center text-slate-300 mr-2 px-2"
                        data-user={index}
                        onClick={e => {
                          const mainDiv = document.getElementById("mainDiv");
                          const btn = document.getElementById("brandBtn");
                          btn.classList.toggle("hidden");
                          mainDiv.innerHTML = `<div class="flex justify-center align-middle p-5 m-5 bg-[#504f4f51]">
                 
                      <div class="px-10"><img key=${index} src=${
                            cctv.image.asset.url
                          } class="w-fit h-56"/></div>
                      <div class="flex-col justify-center align-middle py-15">
                        <h1 key=${index} class="text-white text-3xl">${
                            cctv.title
                          }</h1>
                        <ul key=${index} class="text-slate-300 text-xl">
                        ${cctv.feature1 ? `<li>${cctv.feature1}</li>` : ""}
                      
                      ${cctv.feature2 ? `<li>${cctv.feature2}</li>` : ""}
                      ${cctv.feature3 ? `<li>${cctv.feature3}</li> ` : ""}
                      ${cctv.feature4 ? `<li>${cctv.feature4}</li>` : ""}
                      ${cctv.feature5 ? `<li>${cctv.feature5}</li>` : ""}
                      ${cctv.feature6 ? `<li>${cctv.feature6}</li>` : ""}
                      ${cctv.feature7 ? `<li>${cctv.feature7}</li>` : ""}
                      ${cctv.feature8 ? `<li>${cctv.feature8}</li>` : ""}
                      ${cctv.feature9 ? `<li>${cctv.feature9}</li>` : ""}
                      ${cctv.feature10 ? `<li>${cctv.feature10}</li>` : ""} 
                      ${cctv.feature11 ? `<li>${cctv.feature11}</li>` : ""} 
                      ${cctv.feature12 ? `<li>${cctv.feature12}</li>` : ""} 
                      ${cctv.feature13 ? `<li>${cctv.feature13}</li>` : ""} 
                      ${cctv.feature14 ? `<li>${cctv.feature14}</li>` : ""} 
                      ${cctv.feature15 ? `<li>${cctv.feature15}</li>` : ""} 
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
        </div>
      </section>
    </main>
  );
}
