import React from "react";

export default function Missions({ launch, name, watch }) {
  return (
    <section className="text-white launch ml-40 font-serifs flex flex-col">
      <div className=" flex flex-col mb-20 ">
        <h2 className="text-2xl underline">{launch}</h2>
        <p className="text-5xl mt-2">{name}</p>
        <button className="border-2 border-white mt-5 p-4 w-32 hover:bg-white hover:text-black">
          {watch}
        </button>
      </div>
    </section>
  );
}
