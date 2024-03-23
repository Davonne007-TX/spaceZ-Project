import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MobileNav({ navItems, capitalizeLetters }) {
  const [isNavOpen, setNavOpen] = useState(false);

  function test() {
    console.log("this is a test");
  }

  return (
    <section className="ml-20 flex flex-row font-orbitron mt-2 text-white cursor-pointer">
      <Link to="/shop" className="mr-4 hover:underline">
        Shop
      </Link>

      <div onClick={test}>
        <FaBars />
      </div>
    </section>
  );
}
