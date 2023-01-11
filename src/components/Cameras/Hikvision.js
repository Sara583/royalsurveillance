import React from "react";
import Hero from "../hero";

import {useState, useEffect} from "react";
import sanityClient from "../../client";
export default function Hikvision() {
  const [hikvisionData, sethikvision] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "hikvision" ]{
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
        sethikvision(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <section>
        <Hero
          title="Hikvision"
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
          type2="#hd"
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
        <div>
          <input
            className="search flex justify-start bg-slate-300 p-2 m-5 border-violet-300 rounded-lg md:w-1/5"
            placeholder="Search..."
            type="text"
            onChange={e => setQuery(e.target.value)}
          />
          <div className="grid md:grid-cols-2  container mx-auto p-5 gap-5 md:place-items-center place-content-center">
            {hikvisionData &&
              hikvisionData
                .filter(item => item.title.toLowerCase().includes(query))
                .map((hikvision, index) => (
                  <div className="w-80 h-72 flex-col ">
                    <img
                      src={hikvision.image.asset.url}
                      alt="m"
                      className="w-2/3 md:w-fit h-60 p-5 sm:pl-10 "
                    />
                    <div className=" flex justify-between border-spacing-2">
                      <h1 className="text-lg text-white pl-2">
                        {hikvision.title}
                      </h1>
                      <button
                        className="w-30 h-7  rounded-md bg-blue-500 text-center text-slate-300 mr-2 px-2"
                        data-user={index}
                        onClick={e => {
                          const mainDiv = document.getElementById("mainDiv");
                          const btn = document.getElementById("brandBtn");
                          btn.classList.toggle("hidden");
                          mainDiv.innerHTML = `<div class="flex justify-center align-middle p-5 m-5 bg-[#504f4f51]">
                 
                      <div class="px-10"><img key=${index} src=${
                            hikvision.image.asset.url
                          } class="w-fit h-56"/></div>
                      <div class="flex-col justify-center align-middle py-15">
                        <h1 key=${index} class="text-white text-3xl">${
                            hikvision.title
                          }</h1>
                        <ul key=${index} class="text-slate-300 text-xl">
                        ${
                          hikvision.feature1
                            ? `<li>${hikvision.feature1}</li>`
                            : ""
                        }
                      
                      ${
                        hikvision.feature2
                          ? `<li>${hikvision.feature2}</li>`
                          : ""
                      }
                      ${
                        hikvision.feature3
                          ? `<li>${hikvision.feature3}</li> `
                          : ""
                      }
                      ${
                        hikvision.feature4
                          ? `<li>${hikvision.feature4}</li>`
                          : ""
                      }
                      ${
                        hikvision.feature5
                          ? `<li>${hikvision.feature5}</li>`
                          : ""
                      }
                      ${
                        hikvision.feature6
                          ? `<li>${hikvision.feature6}</li>`
                          : ""
                      }
                      ${
                        hikvision.feature7
                          ? `<li>${hikvision.feature7}</li>`
                          : ""
                      }
                      ${
                        hikvision.feature8
                          ? `<li>${hikvision.feature8}</li>`
                          : ""
                      }
                      ${
                        hikvision.feature9
                          ? `<li>${hikvision.feature9}</li>`
                          : ""
                      }
                      ${
                        hikvision.feature10
                          ? `<li>${hikvision.feature10}</li>`
                          : ""
                      } 
                      ${
                        hikvision.feature11
                          ? `<li>${hikvision.feature11}</li>`
                          : ""
                      } 
                      ${
                        hikvision.feature12
                          ? `<li>${hikvision.feature12}</li>`
                          : ""
                      } 
                      ${
                        hikvision.feature13
                          ? `<li>${hikvision.feature13}</li>`
                          : ""
                      } 
                      ${
                        hikvision.feature14
                          ? `<li>${hikvision.feature14}</li>`
                          : ""
                      } 
                      ${
                        hikvision.feature15
                          ? `<li>${hikvision.feature15}</li>`
                          : ""
                      } 
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
