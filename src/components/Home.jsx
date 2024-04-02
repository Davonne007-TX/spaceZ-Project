import Header from "./Header";
import Missions from "./Missions";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <main className="🚀">
        <section
          className="section-image"
          style={{
            backgroundImage: "url('/images/launch.jpg')",
            backgroundSize: "cover",
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
          className="section-image"
          style={{
            backgroundImage: "url('/images/rocket.jpg')",
            backgroundSize: "cover",
          }}
        >
          <Missions
            launch="What's The Latest"
            name="To The Stars Mission"
            watch="Rewatch"
          />
        </section>

        <section
          className="section-image"
          style={{
            backgroundImage: "url('/images/eclipse.jpg')",
            backgroundSize: "cover",
          }}
        >
          <Missions
            launch="Upcoming News"
            name="April 8th Solar Eclipse in the US"
            watch="Learn More"
          />
        </section>

        <section
          className="section-image"
          style={{
            backgroundImage: "url('/images/mars.jpg')",
            backgroundSize: "cover",
          }}
        >
          <Missions
            launch="Looking into the future"
            name="Mission to Mars"
            watch="Learn More"
          />
        </section>
        <Footer />
      </main>
    </>
  );
}
