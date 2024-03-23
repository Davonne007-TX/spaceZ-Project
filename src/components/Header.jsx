import { Link, useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function Header() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
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
      <header className="flex flex-row w-full">
        <div className="mt-8 ml-10 lg:ml-80  lg:mr-0 flex">
          <h1
            className="text-3xl text-white font-bold font-orbitron lg:ml-40 cursor-pointer"
            onClick={goHome}
          >
            SpaceZ
          </h1>
          <nav className="flex flex-col mt-2 md:flex-row lg:flex-row font-orbitron ml-10 gap-10 text-sm text-white list-none cursor-pointer">
            {navItems.map((item, index) => (
              <li key={index} className="hover:underline">
                <Link to={`/${item.toLowerCase()}`}>
                  {capitalizeLetters(item)}
                </Link>
              </li>
            ))}
          </nav>
          {/* <MobileNav
            navItems={navItems}
            capitalizeLetters={capitalizeLetters}
          /> */}
        </div>
      </header>
    </>
  );
}
