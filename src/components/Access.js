import React from "react";
// import pic from "../camera.png";

import {useState, useEffect} from "react";
import sanityClient from "../client";
export default function Access() {
  const [accessData, setaccess] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "access"]{
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
        setaccess(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <div>
        <div className="grid md:grid-cols-3  container place-items-center mx-auto p-5 gap-5 ">
          {accessData &&
            accessData.map((access, index) => (
              <div className="w-64 h-72 flex-col  ">
                <img
                  src={access.image.asset.url}
                  alt="m"
                  className="wn-full h-60 p-5"
                />
                <div className=" flex justify-between border-spacing-2">
                  <h1 className="text-xl text-white pl-2">{access.title}</h1>
                  <button
                    className="w-30 h-7 mt-2 rounded-md bg-blue-500 text-center text-slate-300 mr-2 px-2"
                    data-user={index}
                    onClick={e => {
                      const mainDiv = document.getElementById("mainDiv");
                      const btn = document.getElementById("brandBtn");
                      btn.classList.toggle("hidden");
                      mainDiv.innerHTML = `<div class="flex justify-center align-middle p-5 m-5 bg-[#504f4f51]">
                 
                      <div class="px-10"><img key=${index} src=${
                        access.image.asset.url
                      } class="w-fit h-56"/></div>
                      <div class="flex-col justify-center align-middle py-15">
                        <h1 key=${index} class="text-white text-3xl">${
                        access.title
                      }</h1>
                        <ul key=${index} class="text-slate-300 text-xl">
                        ${access.feature1 ? `<li>${access.feature1}</li>` : ""}
                      
                      ${access.feature2 ? `<li>${access.feature2}</li>` : ""}
                      ${access.feature3 ? `<li>${access.feature3}</li> ` : ""}
                      ${access.feature4 ? `<li>${access.feature4}</li>` : ""}
                      ${access.feature5 ? `<li>${access.feature5}</li>` : ""}
                      ${access.feature6 ? `<li>${access.feature6}</li>` : ""}
                      ${access.feature7 ? `<li>${access.feature7}</li>` : ""}
                      ${access.feature8 ? `<li>${access.feature8}</li>` : ""}
                      ${access.feature9 ? `<li>${access.feature9}</li>` : ""}
                      ${access.feature10 ? `<li>${access.feature10}</li>` : ""} 
                      ${access.feature11 ? `<li>${access.feature11}</li>` : ""} 
                      ${access.feature12 ? `<li>${access.feature12}</li>` : ""} 
                      ${access.feature13 ? `<li>${access.feature13}</li>` : ""} 
                      ${access.feature14 ? `<li>${access.feature14}</li>` : ""} 
                      ${access.feature15 ? `<li>${access.feature15}</li>` : ""} 
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
