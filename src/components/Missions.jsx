import React from "react";

export default function Missions({ launch, name, watch }) {
  return (
    <section className="text-white launch ml-40 font-serif flex flex-col">
      <div className=" flex flex-col">
        <span className="text-2xl underline">{launch}</span>
        <span className="text-5xl mt-2">{name}</span>
        <button className="border-2 border-white mt-5 p-4 w-32 hover:bg-white hover:text-black">
          {watch}
        </button>
      </div>
    </section>
  );
}
