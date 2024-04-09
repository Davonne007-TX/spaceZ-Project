import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MobileNav({ navItems, capitalizeLetters }) {
  const [isNavOpen, setNavOpen] = useState(false);

  function test() {
    console.log("this is a test");
  }

  return (
    <section className="flex font-orbitron mt-2 mr-20 text-white cursor-pointer text-md">
      <Link to="/shop" className="hidden lg:block mr-4 hover:underline">
        Shop
      </Link>

      <div onClick={test} className="relative ">
        <FaBars className="mt-1" />
      </div>
    </section>
  );
}
