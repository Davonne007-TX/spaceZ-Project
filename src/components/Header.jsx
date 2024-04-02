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
      <header className=" w-full">
        <div className="mt-8 flex justify-between items-center">
          <h1
            className="text-4xl text-white font-bold font-orbitron cursor-pointer ml-20"
            onClick={goHome}
          >
            SpaceZ
          </h1>
          <nav className="hidden lg:flex flex-col mt-2 md:flex-row lg:flex-row font-orbitron ml-10 gap-10 text-md text-white list-none cursor-pointer">
            {navItems.map((item, index) => (
              <li key={index} className="hover:underline">
                <Link to={`/${item.toLowerCase()}`}>
                  {capitalizeLetters(item)}
                </Link>
              </li>
            ))}
          </nav>
          <MobileNav
            navItems={navItems}
            capitalizeLetters={capitalizeLetters}
          />
        </div>
      </header>
    </>
  );
}
