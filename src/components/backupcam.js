import React from "react";
// import pic from "../camera.png";

import {useState, useEffect} from "react";
import sanityClient from "../client";

export default function Convoycamera() {
  const [convoycamData, setconvoycam] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="convoycam"]{
            "imageUrl": image.asset->url,
        
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
      
      
       
      
    }`
      )
      .then(data => {
        setconvoycam(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <div>
        <div className="grid md:grid-cols-3  container place-items-center mx-auto p-5 gap-5 ">
          {convoycamData &&
            convoycamData.map((convoycam, index) => (
              <div className="w-64 h-72 flex-col  ">
                <img src={convoycam.imageUrl} alt="l" />
                <div className=" flex justify-between border-spacing-2">
                  <h1 className="text-xl text-white pl-2">{convoycam.title}</h1>
                  <button
                    className="w-30 h-7 mt-2 rounded-md bg-blue-500 text-center text-slate-300 mr-2 px-2"
                    data-user={index}
                    onClick={e => {
                      const mainDiv = document.getElementById("mainDiv");
                      const btn = document.getElementById("brandBtn");
                      btn.classList.toggle("hidden");
                      mainDiv.innerHTML = `<div class="flex justify-center align-middle p-5 m-5 bg-[#504f4f51]">
                 
                      <div class="px-10"><img key=${index} src=${
                        convoycam.image.asset.url
                      } class="w-fit h-56"/></div>
                      <div class="flex-col justify-center align-middle py-15">
                        <h1 key=${index} class="text-white text-3xl">${
                        convoycam.title
                      }</h1>
                        <ul key=${index} class="text-slate-300 text-xl">
                        ${
                          convoycam.feature1
                            ? `<li>${convoycam.feature1}</li>`
                            : ""
                        }
                      
                      ${
                        convoycam.feature2
                          ? `<li>${convoycam.feature2}</li>`
                          : ""
                      }
                      ${
                        convoycam.feature3
                          ? `<li>${convoycam.feature3}</li> `
                          : ""
                      }
                      ${
                        convoycam.feature4
                          ? `<li>${convoycam.feature4}</li>`
                          : ""
                      }
                      ${
                        convoycam.feature5
                          ? `<li>${convoycam.feature5}</li>`
                          : ""
                      }
                      ${
                        convoycam.feature6
                          ? `<li>${convoycam.feature6}</li>`
                          : ""
                      }
                      ${
                        convoycam.feature7
                          ? `<li>${convoycam.feature7}</li>`
                          : ""
                      }
                      ${
                        convoycam.feature8
                          ? `<li>${convoycam.feature8}</li>`
                          : ""
                      }
                      ${
                        convoycam.feature9
                          ? `<li>${convoycam.feature9}</li>`
                          : ""
                      }
                      ${
                        convoycam.feature10
                          ? `<li>${convoycam.feature10}</li>`
                          : ""
                      } 
                      ${
                        convoycam.feature11
                          ? `<li>${convoycam.feature11}</li>`
                          : ""
                      } 
                      ${
                        convoycam.feature12
                          ? `<li>${convoycam.feature12}</li>`
                          : ""
                      } 
                      ${
                        convoycam.feature13
                          ? `<li>${convoycam.feature13}</li>`
                          : ""
                      } 
                      ${
                        convoycam.feature14
                          ? `<li>${convoycam.feature14}</li>`
                          : ""
                      } 
                      ${
                        convoycam.feature15
                          ? `<li>${convoycam.feature15}</li>`
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
