import React from "react";
import {useState, useEffect} from "react";
import sanityClient from "../client";
import Hero from "./hero";

export default function Finger() {
  const [fingerData, setfinger] = useState(null);

  const [query, setQuery] = useState("");
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type in["convoyfp","zkteco"] ]{
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
        setfinger(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <Hero
        title="Time Attendance"
        nav="/fingerprints/convoy"
        navTitle="Convoy"
        secnav="/fingerprints/zk"
        secnavTitle="Zkteco"
        mainnav="/fingerprints"
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
            {fingerData &&
              fingerData
                .filter(item => item.title.toLowerCase().includes(query))
                .map((finger, index) => (
                  <div className="w-80 h-72 flex-col  ">
                    <img
                      src={finger.image.asset.url}
                      alt="m"
                      className="w-fit h-60 p-5"
                    />
                    <div className=" flex justify-between border-spacing-2">
                      <h1 className="text-xl text-white pl-2">
                        {finger.title}
                      </h1>
                      <button
                        className="w-30 h-7 mt-2 rounded-md bg-blue-500 text-center text-slate-300 mr-2 px-2"
                        data-user={index}
                        onClick={e => {
                          const mainDiv = document.getElementById("mainDiv");
                          const btn = document.getElementById("brandBtn");
                          btn.classList.toggle("hidden");
                          mainDiv.innerHTML = `<div class="flex justify-center align-middle p-5 m-5 bg-[#504f4f51]">
                 
                      <div class="px-10"><img key=${index} src=${
                            finger.image.asset.url
                          } class="w-fit h-56"/></div>
                      <div class="flex-col justify-center align-middle py-15">
                        <h1 key=${index} class="text-white text-3xl">${
                            finger.title
                          }</h1>
                        <ul key=${index} class="text-slate-300 text-xl">
                        ${finger.feature1 ? `<li>${finger.feature1}</li>` : ""}
                      
                      ${finger.feature2 ? `<li>${finger.feature2}</li>` : ""}
                      ${finger.feature3 ? `<li>${finger.feature3}</li> ` : ""}
                      ${finger.feature4 ? `<li>${finger.feature4}</li>` : ""}
                      ${finger.feature5 ? `<li>${finger.feature5}</li>` : ""}
                      ${finger.feature6 ? `<li>${finger.feature6}</li>` : ""}
                      ${finger.feature7 ? `<li>${finger.feature7}</li>` : ""}
                      ${finger.feature8 ? `<li>${finger.feature8}</li>` : ""}
                      ${finger.feature9 ? `<li>${finger.feature9}</li>` : ""}
                      ${finger.feature10 ? `<li>${finger.feature10}</li>` : ""} 
                      ${finger.feature11 ? `<li>${finger.feature11}</li>` : ""} 
                      ${finger.feature12 ? `<li>${finger.feature12}</li>` : ""} 
                      ${finger.feature13 ? `<li>${finger.feature13}</li>` : ""} 
                      ${finger.feature14 ? `<li>${finger.feature14}</li>` : ""} 
                      ${finger.feature15 ? `<li>${finger.feature15}</li>` : ""} 
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
