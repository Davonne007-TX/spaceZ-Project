import React from "react";
import Header from "./Header";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('images/launch.jpg')" }}
    >
      <Header />
      <section className="text-white launch ml-40 font-serif flex flex-col">
        <span className="text-2xl underline">Upcoming Launch</span>
        <span className="text-5xl mt-2">USSA-76 MISSION</span>

        <button className="border-2 border-white mt-5 p-4 w-32 hover:bg-white hover:text-black">
          Watch
        </button>
      </section>
    </div>
  );
}
