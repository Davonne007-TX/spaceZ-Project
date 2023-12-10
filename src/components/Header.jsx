import { Link } from "react-router-dom";

export default function Header() {
  const capitalizeLetters = (word) => {
    return word.toUpperCase();
  };

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
    <>
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
    </>
  );
}
