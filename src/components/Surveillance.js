import React from "react";
// import pic from "../camera.png";

import {useState, useEffect} from "react";
import sanityClient from "../client";
export default function Surveillance() {
  const [surveillanceData, setsurveillance] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "surveillance"]{
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
        setsurveillance(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <div>
        <div className="grid md:grid-cols-3  container place-items-center mx-auto p-5 gap-5 ">
          {surveillanceData &&
            surveillanceData.map((surveillance, index) => (
              <div className="w-64 h-72 flex-col  ">
                <img
                  src={surveillance.image.asset.url}
                  alt="m"
                  className="wn-full h-60 p-5"
                />
                <div className=" flex justify-between border-spacing-2">
                  <h1 className="text-xl text-white pl-2">
                    {surveillance.title}
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
                        surveillance.image.asset.url
                      } class="w-fit h-56"/></div>
                      <div class="flex-col justify-center align-middle py-15">
                        <h1 key=${index} class="text-white text-3xl">${
                        surveillance.title
                      }</h1>
                        <ul key=${index} class="text-slate-300 text-xl">
                        ${
                          surveillance.feature1
                            ? `<li>${surveillance.feature1}</li>`
                            : ""
                        }
                      
                      ${
                        surveillance.feature2
                          ? `<li>${surveillance.feature2}</li>`
                          : ""
                      }
                      ${
                        surveillance.feature3
                          ? `<li>${surveillance.feature3}</li> `
                          : ""
                      }
                      ${
                        surveillance.feature4
                          ? `<li>${surveillance.feature4}</li>`
                          : ""
                      }
                      ${
                        surveillance.feature5
                          ? `<li>${surveillance.feature5}</li>`
                          : ""
                      }
                      ${
                        surveillance.feature6
                          ? `<li>${surveillance.feature6}</li>`
                          : ""
                      }
                      ${
                        surveillance.feature7
                          ? `<li>${surveillance.feature7}</li>`
                          : ""
                      }
                      ${
                        surveillance.feature8
                          ? `<li>${surveillance.feature8}</li>`
                          : ""
                      }
                      ${
                        surveillance.feature9
                          ? `<li>${surveillance.feature9}</li>`
                          : ""
                      }
                      ${
                        surveillance.feature10
                          ? `<li>${surveillance.feature10}</li>`
                          : ""
                      } 
                      ${
                        surveillance.feature11
                          ? `<li>${surveillance.feature11}</li>`
                          : ""
                      } 
                      ${
                        surveillance.feature12
                          ? `<li>${surveillance.feature12}</li>`
                          : ""
                      } 
                      ${
                        surveillance.feature13
                          ? `<li>${surveillance.feature13}</li>`
                          : ""
                      } 
                      ${
                        surveillance.feature14
                          ? `<li>${surveillance.feature14}</li>`
                          : ""
                      } 
                      ${
                        surveillance.feature15
                          ? `<li>${surveillance.feature15}</li>`
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
    </main>
  );
}
