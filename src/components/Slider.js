import React from "react";

import {useState, useEffect} from "react";
import sanityClient from "../client";

export default function Slider() {
  const [clientData, setClient] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "client"]{
         
          image{
            asset->{
            _id,
            url
          }
        }
      }`
      )
      .then(data => {
        setClient(data);
      })
      .catch(console.error);
  }, []);
  return (
    <section>
      <h1 className="text-center text-[#f2f2f2] md:text-5xl text-4xl py-10">
        Our Parteners
      </h1>
      <div class="slider">
        <div class="slide-track-1">
          <div class="slide">
            {clientData &&
              clientData.map((client, index) => (
                <img
                  src={client.image.asset.url}
                  width="300"
                  height="500"
                  alt="Logo description"
                  loading="lazy"
                />
              ))}
          </div>{" "}
        </div>
      </div>
    </section>
  );
}
