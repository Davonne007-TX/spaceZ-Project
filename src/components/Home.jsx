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

        <nav className="flex mt-5 font-orbitron ml-10 gap-10 text-sm text-white list-none cursor-pointer">
          <li className="hover:underline">Eagle7</li>
          <li className="hover:underline">Eagle Light</li>
          <li className="hover:underline">Phoenix10</li>
          <li className="hover:underline">Mothership</li>
          <li className="hover:underline">Spaceflight</li>
          <li className="hover:underline">Mars Mission</li>
          <li className="hover:underline">Beyond</li>
        </nav>
      </header>
    </div>
  );
}
