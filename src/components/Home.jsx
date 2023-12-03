export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('images/launch.jpg')" }}
    >
      <header className="flex flex-row w-full">
        <h1 className="text-3xl text-white font-bold font-orbitron p-4 ml-40">
          SpaceZ
        </h1>

        <nav className="flex mt-5 font-orbitron ml-10 gap-10 text-sm text-white list-none">
          <li>Eagle7</li>
          <li>Eagle Light</li>
          <li>Phoenix10</li>
          <li>Mothership</li>
          <li>Spaceflight</li>
          <li>Mars Mission</li>
          <li>Beyond</li>
        </nav>
      </header>
    </div>
  );
}
