import React from "react";
// import pic from "../camera.png";
import Hero from "../hero";
import {useState, useEffect} from "react";
import sanityClient from "../../client";
import {NavLink} from "react-router-dom";
export default function Convoycamera() {
  const [secconvoycamData, setsecconvoycam] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="convoycam"&&feature8=="HD"]{
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
        setsecconvoycam(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <section>
        <Hero
          title="Convoy"
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
        <input
          className="search flex justify-start bg-slate-300 p-2 m-5 border-violet-300 rounded-lg md:w-1/5"
          placeholder="Search..."
          type="text"
          onChange={e => setQuery(e.target.value)}
        />
        <div>
          <div className="flex justify-center">
            <NavLink to="/cameras/convoy/ip">
              {" "}
              <h1 className="md:text-4xl text-2xl text-[#f2f2f2] p-5 text-center m-5 w-28 bg-[#4d4d4d6b]">
                IP
              </h1>
            </NavLink>
            <NavLink to="/cameras/convoy/hd">
              {" "}
              <h1 className="md:text-4xl text-2xl text-[#f2f2f2] p-5 text-center m-5 w-28 bg-[#4d4d4d6b]">
                HD
              </h1>
            </NavLink>
          </div>
          <div className="grid lg:grid-cols-2  container mx-auto md:place-items-center place-content-center p-5 gap-5 ">
            {secconvoycamData &&
              secconvoycamData
                .filter(item => item.title.toLowerCase().includes(query))
                .map((secconvoycam, index) => (
                  <div className="w-80 h-72 flex-col  ">
                    <img
                      src={secconvoycam.imageUrl}
                      alt="l"
                      className="w-fit h-60 p-5"
                    />
                    <div className=" flex justify-between border-spacing-2">
                      <h1 className="text-xl text-white pl-2">
                        {secconvoycam.title}
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
                            secconvoycam.imageUrl
                          } class="w-fit h-56"/></div>
                      <div class="flex-col justify-center align-middle py-15">
                        <h1 key=${index} class="text-white text-3xl">${
                            secconvoycam.title
                          }</h1>
                        <ul key=${index} class="text-slate-300 text-xl">
                        ${
                          secconvoycam.feature1
                            ? `<li>${secconvoycam.feature1}</li>`
                            : ""
                        }
                      
                      ${
                        secconvoycam.feature2
                          ? `<li>${secconvoycam.feature2}</li>`
                          : ""
                      }
                      ${
                        secconvoycam.feature3
                          ? `<li>${secconvoycam.feature3}</li> `
                          : ""
                      }
                      ${
                        secconvoycam.feature4
                          ? `<li>${secconvoycam.feature4}</li>`
                          : ""
                      }
                      ${
                        secconvoycam.feature5
                          ? `<li>${secconvoycam.feature5}</li>`
                          : ""
                      }
                      ${
                        secconvoycam.feature6
                          ? `<li>${secconvoycam.feature6}</li>`
                          : ""
                      }
                      ${
                        secconvoycam.feature7
                          ? `<li>${secconvoycam.feature7}</li>`
                          : ""
                      }
                      ${
                        secconvoycam.feature8
                          ? `<li>${secconvoycam.feature8}</li>`
                          : ""
                      }
                      ${
                        secconvoycam.feature9
                          ? `<li>${secconvoycam.feature9}</li>`
                          : ""
                      }
                      ${
                        secconvoycam.feature10
                          ? `<li>${secconvoycam.feature10}</li>`
                          : ""
                      } 
                      ${
                        secconvoycam.feature11
                          ? `<li>${secconvoycam.feature11}</li>`
                          : ""
                      } 
                      ${
                        secconvoycam.feature12
                          ? `<li>${secconvoycam.feature12}</li>`
                          : ""
                      } 
                      ${
                        secconvoycam.feature13
                          ? `<li>${secconvoycam.feature13}</li>`
                          : ""
                      } 
                      ${
                        secconvoycam.feature14
                          ? `<li>${secconvoycam.feature14}</li>`
                          : ""
                      } 
                      ${
                        secconvoycam.feature15
                          ? `<li>${secconvoycam.feature15}</li>`
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
