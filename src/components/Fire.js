import React from "react";
import {useState, useEffect} from "react";
import sanityClient from "../client";
import Hero from "./hero";

export default function Firesystem() {
  const [firesystemData, setfiresystem] = useState(null);

  const [query, setQuery] = useState("");
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "firesystem"]{
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
        setfiresystem(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
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
          <Hero title="Fire Systems" />
          <input
            className="search flex justify-start bg-slate-300 p-2 m-5 border-violet-300 rounded-lg md:w-1/5"
            placeholder="search..."
            type="text"
            onChange={e => setQuery(e.target.value)}
          />
          <div className="grid md:grid-cols-2  container place-items-center mx-auto p-5 gap-5 ">
            {firesystemData &&
              firesystemData
                .filter(item => item.title.toLowerCase().includes(query))
                .map((firesystem, index) => (
                  <div className="w-96 h-72 flex-col  ">
                    <img
                      src={firesystem.image.asset.url}
                      alt="m"
                      className="w-fit h-60 p-5"
                    />
                    <div className=" flex justify-between border-spacing-2">
                      <h1 className="text-lg text-white pl-2">
                        {firesystem.title}
                      </h1>
                      <button
                        className=" w-20 h-7 mt-2 rounded-md bg-blue-500 text-center text-slate-300 mr-2 px-2"
                        data-user={index}
                        onClick={e => {
                          const mainDiv = document.getElementById("mainDiv");
                          const btn = document.getElementById("brandBtn");
                          btn.classList.toggle("hidden");
                          mainDiv.innerHTML = `<div class="flex justify-center align-middle p-5 m-5 bg-[#504f4f51]">
                 
                      <div class="px-10"><img key=${index} src=${
                            firesystem.image.asset.url
                          } class="w-fit h-56"/></div>
                      <div class="flex-col justify-center align-middle py-15">
                        <h1 key=${index} class="text-white text-3xl">${
                            firesystem.title
                          }</h1>
                        <ul key=${index} class="text-slate-300 text-xl">
                        ${
                          firesystem.feature1
                            ? `<li>${firesystem.feature1}</li>`
                            : ""
                        }
                      
                      ${
                        firesystem.feature2
                          ? `<li>${firesystem.feature2}</li>`
                          : ""
                      }
                      ${
                        firesystem.feature3
                          ? `<li>${firesystem.feature3}</li> `
                          : ""
                      }
                      ${
                        firesystem.feature4
                          ? `<li>${firesystem.feature4}</li>`
                          : ""
                      }
                      ${
                        firesystem.feature5
                          ? `<li>${firesystem.feature5}</li>`
                          : ""
                      }
                      ${
                        firesystem.feature6
                          ? `<li>${firesystem.feature6}</li>`
                          : ""
                      }
                      ${
                        firesystem.feature7
                          ? `<li>${firesystem.feature7}</li>`
                          : ""
                      }
                      ${
                        firesystem.feature8
                          ? `<li>${firesystem.feature8}</li>`
                          : ""
                      }
                      ${
                        firesystem.feature9
                          ? `<li>${firesystem.feature9}</li>`
                          : ""
                      }
                      ${
                        firesystem.feature10
                          ? `<li>${firesystem.feature10}</li>`
                          : ""
                      } 
                      ${
                        firesystem.feature11
                          ? `<li>${firesystem.feature11}</li>`
                          : ""
                      } 
                      ${
                        firesystem.feature12
                          ? `<li>${firesystem.feature12}</li>`
                          : ""
                      } 
                      ${
                        firesystem.feature13
                          ? `<li>${firesystem.feature13}</li>`
                          : ""
                      } 
                      ${
                        firesystem.feature14
                          ? `<li>${firesystem.feature14}</li>`
                          : ""
                      } 
                      ${
                        firesystem.feature15
                          ? `<li>${firesystem.feature15}</li>`
                          : ""
                      } 
                      </ul>
                      </div>
                    </div>`;
                        }}
                      >
                        View
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
