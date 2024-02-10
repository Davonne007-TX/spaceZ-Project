import React from "react";
import Header from "./Header";
import Missions from "./Missions";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('images/launch.jpg')" }}
    >
      <Header />
      <Missions
        launch="Upcoming Launch"
        name="USSA-76 MISSION"
        watch="Live 2/16/24"
      />
    </div>
  );
}
