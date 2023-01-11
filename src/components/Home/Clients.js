import React from "react";
// import pics from "../../—Pngtree—google plus logo icon_3570309.png";
import {useState, useEffect} from "react";
import sanityClient from "../../client";
export default function Clients() {
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
    <>
      <section className="container mx-auto bg-[#f6f0f049]" id="clients">
        <h1 className="text-center text-[#f2f2f2]  md:text-5xl text-4xl pt-10">
          Our Clients
        </h1>
        <h1 className="text-center text-[#f2f2f2] md:text-4xl text-3xl py-2">
          <b>+3000</b>
        </h1>

        <div className="grid gap-y-5   grid-cols-6  py-10 place-items-center ">
          {clientData &&
            clientData.map((client, index) => (
              <img
                src={client.image.asset.url}
                alt="logo"
                className="w-1/2 h-20  "
              />
            ))}
        </div>
      </section>
    </>
  );
}
