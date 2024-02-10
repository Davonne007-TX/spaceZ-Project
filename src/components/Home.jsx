import React from "react";
import Header from "./Header";
import Missions from "./Missions";

export default function Home() {
  return (
    <>
      <main className="🚀">
        <section
          className="h-screen bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('images/launch.jpg')" }}
        >
          <Header />
          <Missions
            launch="Upcoming Launch"
            name="USSA-76 MISSION"
            watch="Live 2/16/24"
          />
        </section>
        <section className="relative">
          <img
            src="images/space.jpg"
            className="w-full h-screen absolute"
            alt="Space, Layer between Earths Atmosphere and Space"
          />
          <div className="absolute">
            <Missions
              launch="What's New"
              name="To The Stars Mission"
              watch="Learn More"
            />
          </div>
        </section>

        {/* <section className="relative ">
          <img
            src="images/sunset.jpg"
            className="w-full h-screen absolute"
            alt="Rocket"
          />
          <div className="absolute">
            <Missions
              launch="What's New"
              name="To The Stars Mission"
              watch="Learn More"
            />
          </div>
        </section> */}
      </main>
    </>
  );
}
