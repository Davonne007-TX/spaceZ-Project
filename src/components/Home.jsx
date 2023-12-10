import React from "react";
import { Link } from "react-router-dom";

const capitalizeLetters = (word) => {
  return word.toUpperCase();
};

export default function Home() {
  const navItems = [
    "Eagle7",
    "Eagle Light",
    "Phoenix10",
    "Mothership",
    "Spaceflight",
    "Mars Mission",
    "Beyond",
  ];

  return (
    <div
      className="h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('images/launch.jpg')" }}
    >
      <header className="flex flex-row w-full">
        <h1 className="text-3xl text-white font-bold font-orbitron p-4 ml-40">
          SpaceZ
        </h1>

        <nav className="flex mt-5 font-orbitron ml-10 gap-10 text-sm text-white list-none cursor-pointer">
          {navItems.map((item, index) => (
            <li key={index} className="hover:underline">
              <Link to={`/${item.toLowerCase()}`}>
                {capitalizeLetters(item)}
              </Link>
            </li>
          ))}
        </nav>
      </header>
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
