import Header from "./Header";
import Missions from "./Missions";

export default function Home() {
  return (
    <>
      <main className="🚀">
        <section
          className="w-full flex bg-cover bg-center md:bg-contain"
          style={{
            backgroundImage: "url('/images/launch.jpg')",
          }}
        >
          <Header />
          <Missions
            launch="Upcoming Launch"
            name="USSA-76 MISSION"
            watch="Live 4/16/24"
          />
        </section>
        <section
          className="w-full flex mt-0 bg-cover bg-center md:bg-contain"
          style={{
            backgroundImage: "url('/images/rocket.jpg')",
          }}
        >
          <Missions
            launch="What's The Latest"
            name="To The Stars Mission"
            watch="Rewatch"
          />
        </section>

        <section
          className="w-full flex mt-0 bg-cover bg-center md:bg-contain"
          style={{
            backgroundImage: "url('/images/eclipse.jpg')",
          }}
        >
          <Missions
            launch="Upcoming News"
            name="April 8th Solar Eclipse in the US"
            watch="Learn More"
          />
        </section>

        <section
          className="w-full section-image bg-cover bg-center md:bg-contain"
          style={{
            backgroundImage: "url('/images/rocket2.jpg')",
          }}
        >
          <Missions
            launch="Looking into the future"
            name="Mission to Mars"
            watch="Learn More"
          />
        </section>
      </main>
    </>
  );
}
