import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMobileNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const toggleNavBar = () => {
    setIsNavOpen(!isMobileNavOpen);
  };

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
      <header className="w-full">
        <div className="mt-8 flex justify-between items-center px-4 lg:px-20">
          <h1
            className="text-4xl text-white font-bold font-orbitron cursor-pointer"
            onClick={goHome}
          >
            SpaceZ
          </h1>

          <button
            className="lg:hidden text-white text-3xl focus:outline-none"
            onClick={toggleNavBar}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <nav className="hidden lg:flex font-orbitron gap-10 text-md text-white list-none cursor-pointer">
            {navItems.map((item, index) => (
              <li key={index} className="hover:underline">
                <Link to={`/${item.toLowerCase()}`}>
                  {capitalizeLetters(item)}
                </Link>
              </li>
            ))}
          </nav>
        </div>

        {isMobileNavOpen && (
          <div className="lg:hidden mt-10 bg-black/10 text-white px-4 py-4 space-y-4 font-orbitron text-xl text-right">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="hover:underline"
                onClick={toggleNavBar}
              >
                <ul className="p-2">
                  <li>{capitalizeLetters(item)}</li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
