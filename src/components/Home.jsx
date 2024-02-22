import React from "react";
import Header from "./Header";
import Missions from "./Missions";

export default function Home() {
  return (
    <>
      <main className="🚀">
        <section
          className="w-full"
          style={{
            backgroundImage: "url('/images/launch.jpg')",
            backgroundSize: "cover",
          }}
        >
          <Header />
          <Missions
            launch="Upcoming Launch"
            name="USSA-76 MISSION"
            watch="Live 2/16/24"
          />
        </section>
        <section
          className="w-full"
          style={{
            backgroundImage: "url('/images/rocket.jpg')",
            backgroundSize: "cover",
          }}
        >
          <Missions
            launch="What's New"
            name="To The Stars Mission"
            watch="Learn More"
          />
        </section>
      </main>
    </>
  );
}
