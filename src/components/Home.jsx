import Header from "./Header";
import Missions from "./Missions";
import Footer from "./Footer";

const missionData = [
  {
    image: "/images/launch.jpg",
    launch: "Upcoming Launch",
    name: "USSA-76 MISSION",
    watch: "Live 4/16/24",
    alt: "Rocket launch image",
  },
  {
    image: "/images/rocket.jpg",
    launch: "What's The Latest",
    name: "To The Stars Mission",
    watch: "Rewatch",
    alt: "Rocket in sky",
  },
  {
    image: "/images/eclipse.jpg",
    launch: "Upcoming News",
    name: "April 8th Solar Eclipse in the US",
    watch: "Learn More",
    alt: "Solar eclipse",
  },
  {
    image: "/images/mars.jpg",
    launch: "Looking into the future",
    name: "Mission to Mars",
    watch: "Learn More",
    alt: "Mars surface image",
  },
];

export default function Home() {
  return (
    <main className="🚀">
      {missionData.map((mission, index) => (
        <section
          key={index}
          className="section-image bg-cover bg-center bg-no-repeat min-h-screen text-white flex flex-col justify-between"
          style={{
            backgroundImage: `url('${mission.image}')`,
          }}
          aria-label={mission.alt}
        >
          {index === 0 && <Header />}
          <Missions
            launch={mission.launch}
            name={mission.name}
            watch={mission.watch}
          />
        </section>
      ))}
      <Footer />
    </main>
  );
}
