import React from "react";
import {useState, useEffect} from "react";
import sanityClient from "../../client";
import Hero from "../hero";

export default function Zkfinger() {
  const [zkfingerData, setzkfinger] = useState(null);

  const [query, setQuery] = useState("");
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "zkteco"]{
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
        setzkfinger(data);
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
          <Hero
            title="Zkteco"
            nav="/fingerprints/convoy"
            navTitle="Convoy"
            secnav="/fingerprints/zk"
            secnavTitle="Zkteco"
            mainnav="/fingerprints"
          />
          <input
            className="search flex justify-start bg-slate-300 p-2 m-5 border-violet-300 rounded-lg md:w-1/5"
            placeholder="search..."
            type="text"
            onChange={e => setQuery(e.target.value)}
          />
          <div className="grid md:grid-cols-2  container place-items-center mx-auto p-5 gap-5 ">
            {zkfingerData &&
              zkfingerData
                .filter(item => item.title.toLowerCase().includes(query))
                .map((zkfinger, index) => (
                  <div className="w-80 h-72 flex-col  ">
                    <img
                      src={zkfinger.image.asset.url}
                      alt="m"
                      className="w-fit h-60 p-5"
                    />
                    <div className=" flex justify-between border-spacing-2">
                      <h1 className="text-xl text-white pl-2">
                        {zkfinger.title}
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
                            zkfinger.image.asset.url
                          } class="w-fit h-56"/></div>
                      <div class="flex-col justify-center align-middle py-15">
                        <h1 key=${index} class="text-white text-3xl">${
                            zkfinger.title
                          }</h1>
                        <ul key=${index} class="text-slate-300 text-xl">
                        ${
                          zkfinger.feature1
                            ? `<li>${zkfinger.feature1}</li>`
                            : ""
                        }
                      
                      ${
                        zkfinger.feature2 ? `<li>${zkfinger.feature2}</li>` : ""
                      }
                      ${
                        zkfinger.feature3
                          ? `<li>${zkfinger.feature3}</li> `
                          : ""
                      }
                      ${
                        zkfinger.feature4 ? `<li>${zkfinger.feature4}</li>` : ""
                      }
                      ${
                        zkfinger.feature5 ? `<li>${zkfinger.feature5}</li>` : ""
                      }
                      ${
                        zkfinger.feature6 ? `<li>${zkfinger.feature6}</li>` : ""
                      }
                      ${
                        zkfinger.feature7 ? `<li>${zkfinger.feature7}</li>` : ""
                      }
                      ${
                        zkfinger.feature8 ? `<li>${zkfinger.feature8}</li>` : ""
                      }
                      ${
                        zkfinger.feature9 ? `<li>${zkfinger.feature9}</li>` : ""
                      }
                      ${
                        zkfinger.feature10
                          ? `<li>${zkfinger.feature10}</li>`
                          : ""
                      } 
                      ${
                        zkfinger.feature11
                          ? `<li>${zkfinger.feature11}</li>`
                          : ""
                      } 
                      ${
                        zkfinger.feature12
                          ? `<li>${zkfinger.feature12}</li>`
                          : ""
                      } 
                      ${
                        zkfinger.feature13
                          ? `<li>${zkfinger.feature13}</li>`
                          : ""
                      } 
                      ${
                        zkfinger.feature14
                          ? `<li>${zkfinger.feature14}</li>`
                          : ""
                      } 
                      ${
                        zkfinger.feature15
                          ? `<li>${zkfinger.feature15}</li>`
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
