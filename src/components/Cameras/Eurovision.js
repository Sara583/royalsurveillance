import React from "react";
import Hero from "../hero";

import {useState, useEffect} from "react";
import sanityClient from "../../client";
export default function Eurovision() {
  const [query, setQuery] = useState("");
  const [eurovisionData, seteurovision] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "eurovision"]{
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
        seteurovision(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <Hero
        title="Eurovision"
        mainnav="/cameras"
        nav="/cameras/convoy"
        navTitle="Convoy"
        secnav="/cameras/eurovision"
        secnavTitle="Eurovision"
        thirdnav="/cameras/hikvision"
        thirdnavTitle="Hikvision"
        fourthnav="/cameras/hst"
        fourthnavTitle="HST"
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
            {eurovisionData &&
              eurovisionData
                .filter(item => item.title.toLowerCase().includes(query))
                .map((eurovision, index) => (
                  <div className="w-80 h-72 flex-col  ">
                    <img
                      src={eurovision.image.asset.url}
                      alt="m"
                      className="w-fit h-60 p-5"
                    />
                    <div className=" flex justify-between border-spacing-2">
                      <h1 className="text-xl text-white pl-2">
                        {eurovision.title}
                      </h1>
                      <button
                        className="w-35 h-7 mt-2 rounded-md bg-blue-500 text-center text-slate-300 mr-2 px-2"
                        data-user={index}
                        onClick={e => {
                          const mainDiv = document.getElementById("mainDiv");
                          const btn = document.getElementById("brandBtn");
                          btn.classList.toggle("hidden");
                          mainDiv.innerHTML = `<div class="flex justify-center align-middle p-5 m-5 bg-[#504f4f51]">
                 
                      <div class="px-10"><img key=${index} src=${
                            eurovision.image.asset.url
                          } class="w-fit h-56"/></div>
                      <div class="flex-col justify-center align-middle py-15">
                        <h1 key=${index} class="text-white text-3xl">${
                            eurovision.title
                          }</h1>
                        <ul key=${index} class="text-slate-300 text-xl">
                        ${
                          eurovision.feature1
                            ? `<li>${eurovision.feature1}</li>`
                            : ""
                        }
                      
                      ${
                        eurovision.feature2
                          ? `<li>${eurovision.feature2}</li>`
                          : ""
                      }
                      ${
                        eurovision.feature3
                          ? `<li>${eurovision.feature3}</li> `
                          : ""
                      }
                      ${
                        eurovision.feature4
                          ? `<li>${eurovision.feature4}</li>`
                          : ""
                      }
                      ${
                        eurovision.feature5
                          ? `<li>${eurovision.feature5}</li>`
                          : ""
                      }
                      ${
                        eurovision.feature6
                          ? `<li>${eurovision.feature6}</li>`
                          : ""
                      }
                      ${
                        eurovision.feature7
                          ? `<li>${eurovision.feature7}</li>`
                          : ""
                      }
                      ${
                        eurovision.feature8
                          ? `<li>${eurovision.feature8}</li>`
                          : ""
                      }
                      ${
                        eurovision.feature9
                          ? `<li>${eurovision.feature9}</li>`
                          : ""
                      }
                      ${
                        eurovision.feature10
                          ? `<li>${eurovision.feature10}</li>`
                          : ""
                      } 
                      ${
                        eurovision.feature11
                          ? `<li>${eurovision.feature11}</li>`
                          : ""
                      } 
                      ${
                        eurovision.feature12
                          ? `<li>${eurovision.feature12}</li>`
                          : ""
                      } 
                      ${
                        eurovision.feature13
                          ? `<li>${eurovision.feature13}</li>`
                          : ""
                      } 
                      ${
                        eurovision.feature14
                          ? `<li>${eurovision.feature14}</li>`
                          : ""
                      } 
                      ${
                        eurovision.feature15
                          ? `<li>${eurovision.feature15}</li>`
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
